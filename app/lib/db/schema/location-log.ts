import { real } from "drizzle-orm/gel-core";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { location } from "./location";

export const locationLog = sqliteTable(" locationLog", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  userId: int().notNull().references(() => user.id),
  locationId: int().notNull().references(() => location.id),
  createdAt: int({ mode: "timestamp" }).notNull().$default(() => new Date()),
  updatedAt: int({ mode: "timestamp" }).notNull().$default(() => new Date()).$onUpdate(() => new Date()),
});
