# readme

A small website with the purpose of linking to my other projects.

Currently hosted on github pages using sveltekit.

...I never know what to put in here.

## Process of running on GHP

From following [this guide](https://florinasutanto.com/blog/2026/deploy-sveltekit-to-gh-pages).

todo: undo all this when moving from GHP

- `npm i -D gh-pages`
- `npm i -D mdsvex`
- `npx sv add sveltekit-adapter`
- Change the contents of `svelte.config.js`
- Add file `layout.ts` and export `prerender = true` from it
- Add a `.nojekyll` file in `/src/static`
- Add `"deploy": "npm run build && gh-pages -d build -t"` under package.json/scripts
- Since I use my own domain, I also had to add `/src/static/CNAME` in order to not
  overwrite it when deploying

(this seems to have also created a gh-pages branch which I may want to delete)
