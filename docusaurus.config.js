const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'SheetAble',
  tagline: 'Self-hosted sheet organizing software',
  url: 'http://sheetable.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/SheetAble.png',
  organizationName: 'SheetAble', // Usually your GitHub org/user name.
  projectName: 'SheetAble-Documentations', // Usually your repo name.
  customFields: {
    image: 'img/blog/SheetAbleRelease.jpg',
    keywords: [],
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SheetAble/SheetAble-Documentations/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      gtag: {
        trackingID: 'G-NEX841864J',
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },
      algolia: {
      apiKey: 'c127d68215e6acb7a3eb889027262432',
      indexName: 'sheetable',

      // Optional: see doc section below
      contextualSearch: true,
    },
      navbar: {
        title: 'SheetAble Docs',
        logo: {
          alt: 'SheetAble Logo',
          src: 'img/SheetAble.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Introduction',
            position: 'left',
            label: 'Docs',  
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right'
          },
          {
            href: 'https://discord.gg/QnFbxyPbRj',
            label: 'Discord',
            position: 'right',
          },
          {
          href: 'https://github.com/SheetAble',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'Github repository',
        },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs',
              },
              {
                label: 'Installation',
                to: '/docs/Installation/installation',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              }, 
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/QnFbxyPbRj',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/sheet_able',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SheetAble',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SheetAble`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
