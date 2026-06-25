// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/project-structure',
        'configuration',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/screens-overview',
        'features/home-screen',
        'features/authentication',
        'features/product-catalog',
        'features/cart-checkout',
        'features/hana-ai',
        'features/orders-tracking',
        'features/settings',
        'features/wishlist',
        'features/notifications',
      ],
    },
    {
      type: 'category',
      label: 'Customization',
      collapsed: false,
      items: [
        'customization/colors-theme',
        'customization/typography',
        'customization/localization',
        'customization/assets-images',
        'customization/mock-data',
        'database-and-catalog',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'architecture/tech-stack',
        'architecture/state-management',
        'architecture/navigation',
        'architecture/models',
        'architecture/services',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/screens-and-code',
        'reference/faq',
        'reference/changelog',
        'reference/support',
        'troubleshooting',
      ],
    },
  ],
};

export default sidebars;
