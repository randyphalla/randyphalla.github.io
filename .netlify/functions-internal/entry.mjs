import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fa15d72f.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_8c593a1b.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_42b17690.mjs');
const _page1  = () => import('./chunks/index_1bb349b2.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
