import { LoadContext, PluginOptions, Plugin } from "@docusaurus/types";

export default async function pluginCustomTags(
  context: LoadContext,
  options: PluginOptions
): Promise<Plugin<LoadContext>> {
  return {
    name: "docusaurus-plugin-test",

    injectHtmlTags() {
      return {};
    },
  };
}

