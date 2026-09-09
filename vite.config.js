import {defineConfig} from 'vite';

export default defineConfig({
  // GitHub Pages serves project sites from /<repository>/ rather than the
  // domain root. Relative asset URLs keep the build working in either place.
  base: './',
});
