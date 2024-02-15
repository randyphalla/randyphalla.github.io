export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_DQPox26A.mjs').then(n => n.g);

export { page };
