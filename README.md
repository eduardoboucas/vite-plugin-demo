# Netlify Vite Plugin Demo

This is a demo site that showcases the new Netlify Vite plugin, which provides local development with Netlify platform features without requiring the Netlify CLI. The plugin offers seamless emulation of the Netlify platform right in your local development environment for any Vite-based frameworks.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eduardoboucas/vite-plugin-demo)

Click the button above to create a copy of this repo and deploy it to your Netlify account.

## Features

- Local development with Netlify platform features
- No Netlify CLI required
- Works with any Vite-based framework
- Seamless emulation of Netlify's platform features

## Stack

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) for Fast Refresh
- [@netlify/vite-plugin](https://github.com/netlify/primitives/tree/main/packages/vite-plugin)
  emulates the Netlify environment and platform primitives in local development

## Development

### Prerequisites

To get started, install dependencies:

```sh
npm install
```

### Local dev

To start the Vite dev server that watches for changes, run:

```sh
npm run dev
```
