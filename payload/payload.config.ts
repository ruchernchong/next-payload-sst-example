import path from "path";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export default buildConfig({
  collections: [
    // Your collections here
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI as string,
    connectOptions: {
      dbName: "main",
    },
  }),
  editor: lexicalEditor({}),
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});