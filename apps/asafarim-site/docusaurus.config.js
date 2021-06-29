module.exports = {
  title: 'ASAFARIM',
  tagline: 'Scientific Applications',
  url: 'https://asafarim.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ASAFARIM-IT', // Usually your GitHub org/user name.
  projectName: 'asafarim-site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ASAFARIM',
      logo: {
        alt: 'ASAFARIM Logo',
        src: 'img/logoT.svg',
      },
      items: [
        {
          to: 'docs/index', 
          activeBasePath: 'docs',
          label: 'Topics',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/AliSafari-IT/asafarim-site',
          label: 'GitHub 📚',
          position: 'right',
        },
        {
          to: '/eula', position: 'right', label: "EULA"
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'All Topics',
              to: 'docs/index',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow 👷',
              href: 'https://stackoverflow.com/users/10703628',
            },
            {
              label: 'Discord 💥',
              href: 'https://discord.com/invite/d5RzKjfwbe',
            },
            {
              label: 'Twitter ✨',
              href: 'https://twitter.com/asafarim',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog 💡',
              to: 'blog',
            },
            {
              label: 'GitHub 📚',
              href: 'https://github.com/AliSafari-IT/asafarim-site',
            },
            {
              label: 'Buy me a coffee ',
              href: 'https://github.com/AliSafari-IT/asafarim-site',
            },
          ],
        },
      ],
      copyright: `Copyright © 2020-${new Date().getFullYear()} ASAFARIM, Inc.<br/>
      Learning is an experience, everything else is just information. (Albert Einstein)`,
    },
    googleAnalytics: {
        trackingID: 'G-5C5QXFF5ZX',
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/AliSafari-IT/asafarim-site/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/AliSafari-IT/asafarim-site/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
      'https://fonts.googleapis.com/css?family=Sen|Source+Code+Pro',
      'https://at-ui.github.io/feather-font/css/iconfont.css'
  ],
};
