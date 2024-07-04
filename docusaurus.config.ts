import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NerdyNot Docs',
  tagline: "NerdyNot's documentation site",
  favicon: 'img/favicon.ico',

  url: 'https://nerdynot.github.io',
  baseUrl: '/',

  organizationName: 'nerdynot',
  projectName: 'nerdynot.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/NerdyNot/NerdyNot.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/NerdyNot/NerdyNot.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'NerdyNot Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/nerdynot-circle.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'NerdyOpsSidebar',
          position: 'left',
          label: 'NerdyOps',
        },
        {
          type: 'docSidebar',
          sidebarId: 'WikiSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {
          href: 'https://github.com/NerdyNot/nerdynot.github.io',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NerdyNot/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NerdyNot.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
