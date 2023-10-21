import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "next-payload-sst-example",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName: "next-payload-sst-example.ruchern.xyz",
          hostedZone: "ruchern.xyz",
        },
      });

      app.setDefaultFunctionProps({
        environment: {
          DATABASE_URI: process.env.DATABASE_URI as string,
          PAYLOAD_SECRET: process.env.PAYLOAD_SECRET as string,
          PAYLOAD_CONFIG_PATH: process.env.PAYLOAD_SECRET as string,
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
