/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  web3apiSidebar: [
    {
      type: "autogenerated",
      dirName: "01-web3-data-api",
    },
  ],
  streamsSidebar: [
    {
      type: "autogenerated",
      dirName: "02-streams-api",
    },
  ],
  authenticationSidebar: [
    {
      type: "autogenerated",
      dirName: "03-authentication-api",
    },
  ],
  exampledappsSidebar: [
    {
      type: "autogenerated",
      dirName: "04-example-dapps",
    },
  ],
  apiSidebar: [
    {
      type: "category",
      label: "Introduction",
      link: { type: "doc", id: "introduction" },
      items: [
        {
          type: "autogenerated",
          dirName: "reference/01-introduction",
        },
      ],
    },
    {
      type: "html",
      value: "<b>WEB3 DATA API</b>", // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "autogenerated",
      dirName: "reference/02-web3-data-api",
    },
    {
      type: "html",
      value: "<b>STREAMS API</b>", // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    // {
    //   type: "autogenerated",
    //   dirName: "reference/03-streams-api",
    // },
    {
      type: "html",
      value: "<b>AUTHENTICATION API</b>", // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    // {
    //   type: "autogenerated",
    //   dirName: "reference/04-authentication-api",
    // },
  ],
};

module.exports = sidebars;
