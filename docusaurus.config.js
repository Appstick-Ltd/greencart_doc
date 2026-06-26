// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hana Go — Flutter Grocery App',
  tagline: 'Complete UI Template with AI Assistant, GetX Architecture & 26+ Screens',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://hanago-docs.netlify.app',
  baseUrl: '/',

  organizationName: 'AppstickLtd',
  projectName: 'hana-go',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Hana Go',
        logo: {
          alt: 'Hana Go Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Getting Started',
            items: [
              { label: 'Introduction', to: '/' },
              { label: 'Installation', to: '/getting-started/installation' },
              { label: 'Quick Start', to: '/getting-started/quick-start' },
              { label: 'Project Structure', to: '/getting-started/project-structure' },
            ],
          },
          {
            title: 'Features',
            items: [
              { label: 'Screens Overview', to: '/features/screens-overview' },
              { label: 'Hana AI Assistant', to: '/features/hana-ai' },
              { label: 'Cart & Checkout', to: '/features/cart-checkout' },
              { label: 'Authentication', to: '/features/authentication' },
            ],
          },
          {
            title: 'Support',
            items: [
              { label: 'FAQ', to: '/reference/faq' },
              { label: 'Get Support', to: '/reference/support' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hana Go — Flutter Grocery E-Commerce Template. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['dart', 'bash', 'json', 'yaml'],
      },
    }),
};

export default config;
