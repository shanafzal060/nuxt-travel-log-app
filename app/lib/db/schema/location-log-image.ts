import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { locationLog } from "./location-log";

export const locationLogImage = sqliteTable(" locationLogImage", {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  userId: int().notNull().references(() => user.id),
  locationLogId: int().notNull().references(() => locationLog.id),
  createdAt: int({ mode: "timestamp" }).notNull().$default(() => new Date()),
  updatedAt: int({ mode: "timestamp" }).notNull().$default(() => new Date()).$onUpdate(() => new Date()),
});
