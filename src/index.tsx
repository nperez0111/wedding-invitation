// @ts-expect-error - TS doesn't know about the bun:sqlite import
import dbInstance from "./db/db.sqlite" with { type: "sqlite" };
import type { Database } from "bun:sqlite";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import type { FC } from "hono/jsx";
import { html } from "hono/html";

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

export const Layout: FC = (props) =>
  html`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/public/icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nick & Bensu's Wedding</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="/public/output.css" rel="stylesheet" />
        <style>
          /* fallback */
          @font-face {
            font-family: "Playwrite AU TAS";
            font-style: normal;
            font-weight: 100 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/playwriteautas/v4/Gfte7u9QuxsdI_QuuctXue3ElxxmahjVfMW1.woff2)
              format("woff2");
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

const time = new Date().toISOString();
app.get("/healthcheck", (c) => c.text(time));

app.get("/", (c) =>
  c.html(
    <Layout>
      <HomePage />
    </Layout>,
  ),
);

app.use(
  "/public/*",
  serveStatic({
    root: "./",
    rewriteRequestPath: (path) => path.replace(/^\/static/, "./public"),
    mimes: {
      css: "text/css",
    },
  }),
);

app.post("/rsvp", async (c) => {
  const time = new Date().toISOString();
  const name = (await c.req.formData()).get("name");

  const names = Array.isArray(name) ? name : [name];

  names.forEach((name) => {
    insertRsvp.run({
      $name: name,
      $createdAt: time,
    });
  });

  return c.html(<Layout>Thank you for RSVPing {names.join(" ")}!</Layout>);
});

app.get("/api/rsvps", async (c) => {
  const rsvps = await query.all();
  return c.json(rsvps);
});

console.log("Server starting on port 2500");
export default {
  fetch: app.fetch,
  port: 2500,
};
