# readme

A small website with the purpose of linking to my other projects.

Currently hosted on github pages using sveltekit.

...I never know what to put in here.

## Process of running on GHP

From following [this guide](https://florinasutanto.com/blog/2026/deploy-sveltekit-to-gh-pages).

todo: undo all this when moving from GHP

- Install gh-pages package with `npm i -D gh-pages`
- Install mdsvex with `npm i -D mdsvex`
- Add an adapter (sveltekit to ghp, I think) `npx sv add sveltekit-adapter`
- Change the contents of `svelte.config.js`, see website for exact changes
- Add file `layout.ts` and `export const prerender = true` from it
- Add a `.nojekyll` file in `/src/static` to stop Jekyll themes from messing stuff up
- Add `"deploy": "npm run build && gh-pages -d build -t"` under package.json/scripts, for a quick way to deploy by running `npm run deploy` in a terminal
- Since I use my own domain, I also had to add `/src/static/CNAME` in order to not overwrite it when deploying

(this seems to have also created a gh-pages branch which I may want to delete)
