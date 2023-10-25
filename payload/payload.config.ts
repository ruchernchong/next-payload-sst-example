import path from "path";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { RichTextAdapter } from "payload/types";

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
  editor: lexicalEditor({}) as RichTextAdapter,
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
