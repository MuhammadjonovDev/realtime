import { Client, Databases } from "appwrite";

const client = new Client();
const DB_ID = "67dc45570008ba156c08";
const COLLECTION_ID = "67dc457f0038fdfdfc26";

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67dc44d9002e5575e363");

export const databases = new Databases(client);

export { client, DB_ID, COLLECTION_ID };
