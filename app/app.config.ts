export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'CRTL Prototype Studio Docs'
  },
  header: {
    logo: {
      alt: '/studio_light.png',
      light: '/studio_light.png',
      dark: '/studio_dark.png'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/crtl-prototype-studios/docs',
      'target': '_blank',
      'aria-label': 'Source Code on GitHub'
    }]
  },
  footer: {
    credits: 'Copyright CRTL Prototype Studios© 2022-2025',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/crtl-prototype-studios/docs',
      'target': '_blank',
      'aria-label': 'Source Code on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/crtl-prototype-studios/docs',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Studio Main Site',
        to: 'https://crtl-prototype-studios.cn',
        target: '_blank'
      }]
    }
  }
})
