"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function pluginCustomTags(context, options) {
    return {
        name: "docusaurus-plugin-test",
        injectHtmlTags() {
            return {};
        },
    };
}
exports.default = pluginCustomTags;
