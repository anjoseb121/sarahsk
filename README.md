# Sarah Stand Kandlar Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/c5ef211f-c32d-4ea6-86b6-3f7a600823b4/deploy-status)](https://app.netlify.com/sites/wonderful-mcnulty-6ec4d9/deploys)

https://sarahstand.me/

**Note:** This site uses [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/).

This personal website is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Features

- A landing page with blog functionality built with Netlify CMS
- Editabe Pages: Landing, Blog-Collection and Netlify Form support
- Create Blog posts from Netlify CMS
- Tags: Separate page for posts under each tag
- Basic directory organization
- Uses Bulma for styling, but size is reduced by `purge-css-plugin`
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

### Access Locally

Pulldown a local copy of the Github repository Netlify created for you, with the name you specified in the previous step
```
$ git clone https://github.com/anjoseb121/sarahsk.git
$ cd sarahsk
$ yarn
$ netlify dev # or ntl dev
```

This uses the new [Netlify Dev](https://www.netlify.com/products/dev/?utm_source=blog&utm_medium=netlifycms&utm_campaign=devex) CLI feature to serve any functions you have in the `lambda` folder.

To test the CMS locally, you'll need to run a production build of the site:

```
$ npm run build
$ netlify dev # or ntl dev
```

### Media Libraries (installed, but optional)

Media Libraries have been included in this starter as a default. If you are not planning to use `Uploadcare` or `Cloudinary` in your project, you **can** remove them from module import and registration in `src/cms/cms.js`. Here is an example of the lines to comment or remove them your project.

## Debugging

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).
