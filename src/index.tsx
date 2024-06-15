/** @jsx jsx */
/** @jsxImportSource hono/jsx */
import { Database } from "bun:sqlite";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { Page } from "./home-page";
import type { FC } from "hono/jsx";
import { html } from "hono/html";

const db = new Database("db.sqlite");

db.exec("PRAGMA journal_mode = WAL;");
db.query(
  "CREATE TABLE IF NOT EXISTS rsvps (name text, createdAt text, email text);",
).run();

type RSVP = {
  name: string;
  createdAt: string;
  email: string;
};

const insertRsvp = db.prepare<
  RSVP,
  { $name: RSVP["name"]; $createdAt: RSVP["name"]; $email: RSVP["email"] }
>(
  "INSERT INTO rsvps (name, createdAt, email) values ($name, $createdAt, $email);",
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const query = db.prepare<RSVP, any[]>("select * from rsvps;");

const app = new Hono();

type RsvpSubmission = {
  name: string;
  email?: string;
};

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
        ${props.children}
      </body>
    </html>`;

app.get("/ping", (c) => c.text("pong"));

const time = new Date().toISOString();
app.get("/healthcheck", (c) => c.text(time));

app.get("/", (c) =>
  c.html(
    <Layout>
      <Page />
    </Layout>,
  ),
);
app.get("/rsvp-details", (c) => c.html(<Layout>Hey how are you?</Layout>));

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

app.post("/api/rsvp", async (c) => {
  const time = new Date().toISOString();

  const submission = await c.req.json<RsvpSubmission>();

  insertRsvp.run({
    $name: submission.name,
    $createdAt: time,
    $email: submission.email || "",
  });

  return c.json({ time });
});

app.get("/api/rsvps", async (c) => {
  const rsvps = await query.all();
  return c.json(rsvps);
});

export default {
  fetch: app.fetch,
  port: 2500,
};
