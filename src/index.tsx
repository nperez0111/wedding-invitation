/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-expect-error - TS doesn't know about the bun:sqlite import
import dbInstance from "./db/db.sqlite" with { type: "sqlite" };
import type { Database } from "bun:sqlite";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import type { FC } from "hono/jsx";
import { html, raw } from "hono/html";
import { prettyJSON } from "hono/pretty-json";

import { HomePage } from "./home-page";

const db: Database = dbInstance;

type RSVP = {
  name: string;
  createdAt: string;
};

const insertRsvp = db.prepare<
  RSVP,
  { $name: RSVP["name"]; $createdAt: RSVP["name"] }
>("INSERT INTO rsvps (name, createdAt) values ($name, $createdAt);");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const query = db.prepare<RSVP, any[]>("select * from rsvps;");

const app = new Hono();
app.use(prettyJSON());

const time = new Date().toISOString();
const cssFileContent = await Bun.file("./public/output.css").text();
export const Layout: FC<{ isTurkish: boolean; children: any }> = (props) =>
  html`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          property="og:url"
          content="https://betterreader.nickthesick.com"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Better Reader" />
        <meta
          property="og:description"
          content="Goodreads but better. Built on top of Blue Sky."
        />
        <meta property="og:image" content="/public/preview.jpg" />
        <meta name="twitter:card" content="/public/preview.jpg" />
        <meta
          property="twitter:domain"
          content="betterreader.nickthesick.com"
        />
        <meta
          property="twitter:url"
          content="https://betterreader.nickthesick.com"
        />
        <meta name="twitter:title" content="Better Reader" />
        <meta
          name="twitter:description"
          content="Goodreads but better. Built on top of Blue Sky."
        />
        <meta name="twitter:image" content="/public/preview.jpg" />
        <link rel="icon" type="image/svg+xml" href="/public/icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Better Reader</title>
        <style>
          // /* fallback */
          // @font-face {
          //   font-family: "Playwrite AU TAS";
          //   font-style: normal;
          //   font-weight: 100 400;
          //   font-display: swap;
          //   src: url(/public/font.woff2) format("woff2");
          // }
          ${
            // Inlining the CSS saves a network request
            raw(cssFileContent)
          }
        </style>
        ${process.env.NODE_ENV === "development"
          ? // This feels like a hack, but it's a good way to get the page to reload only in development
            html`<script type="text/javascript">
              // Hot-reload the page when the server restarts
              let lastTime = 0;
              function checkTime() {
                fetch("/healthcheck")
                  .then((res) => res.text())
                  .then((time) => {
                    if (lastTime === 0) {
                      lastTime = time;
                    }
                    if (lastTime !== time) {
                      location.reload();
                    }
                  });

                setTimeout(checkTime, 1000);
              }
              checkTime();
            </script>`
          : ""}
      </head>
      <body>
        ${props["children"]}
      </body>
    </html>`;

app.get("/ping", (c) => c.text("pong"));

app.get("/healthcheck", (c) => c.text(time));

const TurkishPage = (
  <Layout isTurkish={true}>
    <HomePage isTurkish={true} />
  </Layout>
);
const EnglishPage = (
  <Layout isTurkish={false}>
    <HomePage isTurkish={false} />
  </Layout>
);

const EnglishRegistry = (
  <Layout isTurkish={false}>
    <HomePage isTurkish={true}>
      <>
        <div class="absolute inset-0 bottom-10 left-10 right-10 top-10 z-0 rounded-2xl border-2 border-slate-800 bg-sky-50 drop-shadow-md"></div>
        <div class="relative z-10 min-h-80 p-12">
          <h1 class="mb-4 text-center text-3xl font-semibold text-slate-800">
            Registry
          </h1>
          <p class="text-lg text-slate-800">
            Your presence is enough of a present to us! <br /> <br />
            But for those of you who are stubborn, we've put together some ways
            that you can contribute to our wedding.
          </p>
          <img
            src="/public/preview.jpg"
            class="mx-auto my-10 block w-full max-w-96 rounded-md shadow-xl"
          ></img>

          <div class="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://venmo.com/u/nickthesick"
              class="inline-flex cursor-pointer items-center justify-center rounded-md border-2 border-slate-900 bg-sky-50 px-10 py-2 text-sm font-bold tracking-widest text-stone-900 shadow drop-shadow-md transition-colors hover:scale-105 hover:bg-sky-200/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
            >
              <img src="/public/venmo.ico" class="inline-block h-4 w-4"></img>
              &nbsp;Venmo
            </a>
            <div class="flex items-center gap-4">
              <img src="/public/zelle.ico" class="inline-block h-4 w-4"></img>
              <p class="">
                via Zelle @ <br />
                305 282 8358
              </p>
            </div>
            <a
              href="https://paypal.me/nickthesick"
              class="inline-flex cursor-pointer items-center justify-center rounded-md border-2 border-slate-900 bg-sky-50 px-10 py-2 text-sm font-bold tracking-widest text-stone-900 shadow drop-shadow-md transition-colors hover:scale-105 hover:bg-sky-200/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
            >
              <img src="/public/paypal.ico" class="inline-block h-4 w-4"></img>
              &nbsp;Paypal
            </a>
          </div>
        </div>
      </>
    </HomePage>
  </Layout>
);

app.get("/", (c) => {
  const acceptLanguage = c.req.header("Accept-Language");
  const turkishLang = c.req.query("lang") === "tr";
  const isTurkish =
    Boolean(acceptLanguage && acceptLanguage.includes("tr")) || turkishLang;

  return c.html(isTurkish ? TurkishPage : EnglishPage);
});

app.get("/registry", (c) => {
  return c.html(EnglishRegistry);
});

app.use(
  "/public/*",
  serveStatic({
    root: "./",
    rewriteRequestPath: (path) => path.replace(/^\/static/, "./public"),
    mimes: {
      css: "text/css",
      svg: "image/svg+xml",
      jpg: "image/jpeg",
      mp4: "video/mp4",
      woff2: "font/woff2",
    },
  }),
);

app.post("/rsvp", async (c) => {
  const time = new Date().toISOString();
  const names = (await c.req.formData()).getAll("name[]");

  const acceptLanguage = c.req.header("Accept-Language");
  const turkishLang = c.req.query("lang") === "tr";
  const isTurkish =
    Boolean(acceptLanguage && acceptLanguage.includes("tr")) || turkishLang;

  names.forEach((name) => {
    console.log(name);
    insertRsvp.run({
      $name: name.toString(),
      $createdAt: time,
    });
  });

  return c.html(
    <Layout isTurkish={isTurkish}>
      <video
        class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full"
        autoPlay
        loop
        muted
        playsinline
        style={{
          objectFit: "cover",
        }}
      >
        <source src="/public/bg-video.mp4" type="video/mp4" />
      </video>
      <div class="absolute bottom-0 mx-auto w-full p-1 py-4 sm:px-4 md:py-12">
        <div class="relative mx-auto max-w-[700px] animate-fade-up cursor-default rounded-3xl border-2 border-slate-300 bg-sky-50 shadow-lg animate-delay-300 animate-once animate-ease-in-out">
          <div class="relative z-10 p-4">
            <div class="rounded-2xl border-2 border-slate-400 p-4">
              <div class="my-1 text-center text-xl font-semibold text-slate-800 drop-shadow-md">
                {isTurkish
                  ? "Teşekkür ederiz! Düğünde görüşmek üzere!"
                  : `So, sorry to make you submit the form again, but we got it this time! Thank you for RSVPing ${names.join(", ")}`}
              </div>
            </div>
          </div>
          <div class="mb-2 text-center font-semibold text-slate-800">
            Made with ❤️ by Nick
          </div>
        </div>
      </div>
    </Layout>,
  );
});

app.get("/api/rsvps", async (c) => {
  const rsvps = await query.all();
  const json = c.req.query("json") === "true";

  if (json) {
    return c.json(rsvps);
  }

  return c.html(
    <Layout isTurkish={false}>
      <div class="text-center text-xl font-semibold text-slate-800">
        {rsvps.map((rsvp) => (
          <div title={rsvp.createdAt}>{rsvp.name}</div>
        ))}
      </div>
    </Layout>,
  );
});

console.log("Server starting on port 2500");

export default {
  fetch: app.fetch,
  port: 2500,
};
