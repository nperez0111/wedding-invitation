/** @jsx jsx */
/** @jsxImportSource hono/jsx */
import { Database } from "bun:sqlite";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { Layout, Page } from "./page";

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

app.get("/", (c) =>
  c.html(
    <Layout>
      <Page />
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

  const submission = await c.req.json<RsvpSubmission>();

  insertRsvp.run({
    $name: submission.name,
    $createdAt: time,
    $email: submission.email || "",
  });

  return c.json({ time });
});

app.get("/rsvps", async (c) => {
  const rsvps = await query.all();
  return c.json(rsvps);
});

export default {
  fetch: app.fetch,
  port: 2500,
};
