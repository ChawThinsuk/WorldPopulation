import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://chawbanthin:Chaw0882282083@cluster0.jrqix5y.mongodb.net/";

export const client = new MongoClient(connectionString);

export const db = client.db("population")