import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_BLXL0crY.mjs';

var cookie = {};

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredCookie;

function requireCookie () {
	if (hasRequiredCookie) return cookie;
	hasRequiredCookie = 1;

	/**
	 * Module exports.
	 * @public
	 */

	cookie.parse = parse;
	cookie.serialize = serialize;

	/**
	 * Module variables.
	 * @private
	 */

	var __toString = Object.prototype.toString;
	var __hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
	 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
	 * which has been replaced by the token definition in RFC 7230 appendix B.
	 *
	 * cookie-name       = token
	 * token             = 1*tchar
	 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
	 *                     "*" / "+" / "-" / "." / "^" / "_" /
	 *                     "`" / "|" / "~" / DIGIT / ALPHA
	 */

	var cookieNameRegExp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;

	/**
	 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
	 *
	 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
	 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
	 *                     ; US-ASCII characters excluding CTLs,
	 *                     ; whitespace DQUOTE, comma, semicolon,
	 *                     ; and backslash
	 */

	var cookieValueRegExp = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/;

	/**
	 * RegExp to match domain-value in RFC 6265 sec 4.1.1
	 *
	 * domain-value      = <subdomain>
	 *                     ; defined in [RFC1034], Section 3.5, as
	 *                     ; enhanced by [RFC1123], Section 2.1
	 * <subdomain>       = <label> | <subdomain> "." <label>
	 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
	 *                     Labels must be 63 characters or less.
	 *                     'let-dig' not 'letter' in the first char, per RFC1123
	 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
	 * <let-dig-hyp>     = <let-dig> | "-"
	 * <let-dig>         = <letter> | <digit>
	 * <letter>          = any one of the 52 alphabetic characters A through Z in
	 *                     upper case and a through z in lower case
	 * <digit>           = any one of the ten digits 0 through 9
	 *
	 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
	 *
	 * > (Note that a leading %x2E ("."), if present, is ignored even though that
	 * character is not permitted, but a trailing %x2E ("."), if present, will
	 * cause the user agent to ignore the attribute.)
	 */

	var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;

	/**
	 * RegExp to match path-value in RFC 6265 sec 4.1.1
	 *
	 * path-value        = <any CHAR except CTLs or ";">
	 * CHAR              = %x01-7F
	 *                     ; defined in RFC 5234 appendix B.1
	 */

	var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;

	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [opt]
	 * @return {object}
	 * @public
	 */

	function parse(str, opt) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }

	  var obj = {};
	  var len = str.length;
	  // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
	  if (len < 2) return obj;

	  var dec = (opt && opt.decode) || decode;
	  var index = 0;
	  var eqIdx = 0;
	  var endIdx = 0;

	  do {
	    eqIdx = str.indexOf('=', index);
	    if (eqIdx === -1) break; // No more cookie pairs.

	    endIdx = str.indexOf(';', index);

	    if (endIdx === -1) {
	      endIdx = len;
	    } else if (eqIdx > endIdx) {
	      // backtrack on prior semicolon
	      index = str.lastIndexOf(';', eqIdx - 1) + 1;
	      continue;
	    }

	    var keyStartIdx = startIndex(str, index, eqIdx);
	    var keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
	    var key = str.slice(keyStartIdx, keyEndIdx);

	    // only assign once
	    if (!__hasOwnProperty.call(obj, key)) {
	      var valStartIdx = startIndex(str, eqIdx + 1, endIdx);
	      var valEndIdx = endIndex(str, endIdx, valStartIdx);

	      if (str.charCodeAt(valStartIdx) === 0x22 /* " */ && str.charCodeAt(valEndIdx - 1) === 0x22 /* " */) {
	        valStartIdx++;
	        valEndIdx--;
	      }

	      var val = str.slice(valStartIdx, valEndIdx);
	      obj[key] = tryDecode(val, dec);
	    }

	    index = endIdx + 1;
	  } while (index < len);

	  return obj;
	}

	function startIndex(str, index, max) {
	  do {
	    var code = str.charCodeAt(index);
	    if (code !== 0x20 /*   */ && code !== 0x09 /* \t */) return index;
	  } while (++index < max);
	  return max;
	}

	function endIndex(str, index, min) {
	  while (index > min) {
	    var code = str.charCodeAt(--index);
	    if (code !== 0x20 /*   */ && code !== 0x09 /* \t */) return index + 1;
	  }
	  return min;
	}

	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize a name value pair into a cookie string suitable for
	 * http headers. An optional options object specifies cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [opt]
	 * @return {string}
	 * @public
	 */

	function serialize(name, val, opt) {
	  var enc = (opt && opt.encode) || encodeURIComponent;

	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }

	  if (!cookieNameRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }

	  var value = enc(val);

	  if (!cookieValueRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }

	  var str = name + '=' + value;
	  if (!opt) return str;

	  if (null != opt.maxAge) {
	    var maxAge = Math.floor(opt.maxAge);

	    if (!isFinite(maxAge)) {
	      throw new TypeError('option maxAge is invalid')
	    }

	    str += '; Max-Age=' + maxAge;
	  }

	  if (opt.domain) {
	    if (!domainValueRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }

	    str += '; Domain=' + opt.domain;
	  }

	  if (opt.path) {
	    if (!pathValueRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }

	    str += '; Path=' + opt.path;
	  }

	  if (opt.expires) {
	    var expires = opt.expires;

	    if (!isDate(expires) || isNaN(expires.valueOf())) {
	      throw new TypeError('option expires is invalid');
	    }

	    str += '; Expires=' + expires.toUTCString();
	  }

	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }

	  if (opt.secure) {
	    str += '; Secure';
	  }

	  if (opt.partitioned) {
	    str += '; Partitioned';
	  }

	  if (opt.priority) {
	    var priority = typeof opt.priority === 'string'
	      ? opt.priority.toLowerCase() : opt.priority;

	    switch (priority) {
	      case 'low':
	        str += '; Priority=Low';
	        break
	      case 'medium':
	        str += '; Priority=Medium';
	        break
	      case 'high':
	        str += '; Priority=High';
	        break
	      default:
	        throw new TypeError('option priority is invalid')
	    }
	  }

	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string'
	      ? opt.sameSite.toLowerCase() : opt.sameSite;

	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      case 'none':
	        str += '; SameSite=None';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }

	  return str;
	}

	/**
	 * URL-decode string value. Optimized to skip native call when no %.
	 *
	 * @param {string} str
	 * @returns {string}
	 */

	function decode (str) {
	  return str.indexOf('%') !== -1
	    ? decodeURIComponent(str)
	    : str
	}

	/**
	 * Determine if value is a Date.
	 *
	 * @param {*} val
	 * @private
	 */

	function isDate (val) {
	  return __toString.call(val) === '[object Date]';
	}

	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */

	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}
	return cookie;
}

requireCookie();

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

/* es-module-lexer 1.6.0 */
var ImportType;!function(A){A[A.Static=1]="Static",A[A.Dynamic=2]="Dynamic",A[A.ImportMeta=3]="ImportMeta",A[A.StaticSourcePhase=4]="StaticSourcePhase",A[A.DynamicSourcePhase=5]="DynamicSourcePhase";}(ImportType||(ImportType={}));1===new Uint8Array(new Uint16Array([1]).buffer)[0];const E=()=>{return A="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","undefined"!=typeof Buffer?Buffer.from(A,"base64"):Uint8Array.from(atob(A),(A=>A.charCodeAt(0)));var A;};WebAssembly.compile(E()).then(WebAssembly.instantiate).then((({exports:A})=>{}));

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/randyphalla/Documents/GitHub/portfolio-v2/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../../.yarn/berry/cache/astro-npm-5.1.8-421714eab6-10c0.zip/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.1fLA5XhV.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://randyphalla.github.io/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/randyphalla/Documents/GitHub/portfolio-v2/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/randyphalla/Documents/GitHub/portfolio-v2/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:../../../.yarn/berry/cache/astro-npm-5.1.8-421714eab6-10c0.zip/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BIdBwZce.mjs","/Users/randyphalla/.yarn/berry/cache/astro-npm-5.1.8-421714eab6-10c0.zip/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cfue52rL.mjs","@components/Portfolio":"_astro/Portfolio.CUao43SL.js","@components/Header":"_astro/Header.Q6_N3_Uq.js","@astrojs/react/client.js":"_astro/client.Dt00UYW4.js","/Users/randyphalla/.yarn/berry/cache/astro-npm-5.1.8-421714eab6-10c0.zip/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.1fLA5XhV.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/me.jpeg","/randyphalla-icon.png","/site.webmanifest","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/_astro/Header.Q6_N3_Uq.js","/_astro/Portfolio.CUao43SL.js","/_astro/client.Dt00UYW4.js","/_astro/index.5OZdte5Y.js","/_astro/index.BMvm3eox.css","/_astro/index.DrR3Llh1.js","/_astro/jsx-runtime.CLpGMVip.js","/portfolio/annex_thumbnail.png","/portfolio/gmlive_thumbnail.png","/portfolio/marvel_thumbnail.png","/portfolio/musicbook_thumbnail.png","/portfolio/pokemon_thumbnail.png","/portfolio/starwars_thumbnail.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"LLLa5NUTcWc4l3M0kaSB0A9L9T58HNTJYAA0VWaCZmk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
