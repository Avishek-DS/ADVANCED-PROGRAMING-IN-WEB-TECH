import { DataSource } from "typeorm";
import { dataSourceOptions } from "../config/database.config";

// TypeORM CLI (migration:generate) এই DataSource ব্যবহার করে
// entity গুলো দেখে database-এর সাথে তুলনা করে migration ফাইল বানায়
export default new DataSource(dataSourceOptions);
