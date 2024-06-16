// @bun
// src/initialize.ts
import {Database} from "bun:sqlite";
var db = new Database("db/db.sqlite", { create: true });
db.exec("PRAGMA journal_mode = WAL;");
db.query("CREATE TABLE IF NOT EXISTS rsvps (name text, createdAt text);").run();
