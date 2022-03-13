var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
var import_index_1e54ea6c = require("../../chunks/index-1e54ea6c.js");
var AboutMe_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".about.svelte-1ptxqvz.svelte-1ptxqvz{margin-bottom:40px}.about.svelte-1ptxqvz a.svelte-1ptxqvz{color:#333}.about.svelte-1ptxqvz a.svelte-1ptxqvz:hover{color:#00d0ff}.about.svelte-1ptxqvz p.svelte-1ptxqvz{margin-bottom:20px;font-size:16px;line-height:28px}.about.svelte-1ptxqvz p.svelte-1ptxqvz:last-of-type{margin-bottom:0}@media(min-width: 720px){.about.svelte-1ptxqvz p.svelte-1ptxqvz{font-size:17px;line-height:30px}}",
  map: null
};
const AboutMe = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section class="${"about svelte-1ptxqvz"}" role="${"main"}"><p class="${"svelte-1ptxqvz"}">I&#39;m a Senior Front-End Engineer in London, building fast, easy-to-use, and accessible websites and apps for mobile
		and desktop.
	</p>
	<p class="${"svelte-1ptxqvz"}">In the past decade I&#39;ve worked on everything from building web and native mobile apps at <a href="${"https://www.lendable.co.uk"}" class="${"svelte-1ptxqvz"}">Lendable</a>, to software that sold tickets for
		<a href="${"http://goo.gl/FpF3on"}" class="${"svelte-1ptxqvz"}">record-breaking concerts</a> at <a href="${"http://www.songkick.com"}" class="${"svelte-1ptxqvz"}">Songkick</a>,
		designing and building campaigns for some of the world&#39;s biggest artists at
		<a href="${"http://goo.gl/SJu6Tm"}" class="${"svelte-1ptxqvz"}">CrowdSurge</a>, and rebuilding leading casual gaming website
		<a href="${"http://www.miniclip.com"}" class="${"svelte-1ptxqvz"}">Miniclip</a>.
	</p>
	<p class="${"svelte-1ptxqvz"}">I&#39;ve also released a few things onto <a href="${"https://github.com/benhodgson87"}" class="${"svelte-1ptxqvz"}">Github</a>, organised London
		<a href="${"https://blog.codepen.io/meetups/"}" class="${"svelte-1ptxqvz"}">Codepen meetups</a>, and once built a really useful tool to tell you when
		it&#39;s <a href="${"https://beeroclock.in"}" class="${"svelte-1ptxqvz"}">Beer O&#39;Clock</a>.
	</p>
	<p class="${"svelte-1ptxqvz"}">To get in touch, <a href="${"mailto:work@benhodgson.net"}" class="${"svelte-1ptxqvz"}">email me</a> or use any of the networks below.</p>
</section>`;
});
var Alert_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".alert.svelte-24e7pn{font-size:12px;line-height:21px;background-color:#fff8e9;color:#999;padding:10px}",
  map: null
};
const Alert = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"alert svelte-24e7pn"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".section-header.svelte-q9tga7{display:inline-block;padding:6px 12px;background-color:#00d0ff;color:#fff;font-family:'Assistant', sans-serif;font-display:fallback;font-weight:bold;text-transform:uppercase;text-decoration:none}.section-header--logo.svelte-q9tga7{font-size:24px;margin-bottom:20px}@media(min-width: 720px){.section-header--logo.svelte-q9tga7{font-size:38px}}",
  map: null
};
const Header = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<header><h1><a class="${"section-header section-header--logo svelte-q9tga7"}" href="${"http://benhodgson.net"}">Ben Hodgson</a></h1>
</header>`;
});
var Layout_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".flex.svelte-2kqpy6{display:flex;height:100vh}@media(min-width: 720px){.flex__positioner.svelte-2kqpy6{display:flex;align-items:center;box-pack:center;flex:1;overflow-y:scroll;width:75%}}.flex__content.svelte-2kqpy6{margin:auto;padding:20px;max-width:980px}@media(min-width: 720px){.flex__content.svelte-2kqpy6{width:75%}}",
  map: null
};
const Layout = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"flex svelte-2kqpy6"}"><div class="${"flex__positioner svelte-2kqpy6"}"><div class="${"flex__content svelte-2kqpy6"}">${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
var SocialButton_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".social-button.svelte-1lh1syq.svelte-1lh1syq{flex:0 0 50%}@media(min-width: 920px){.social-button.svelte-1lh1syq.svelte-1lh1syq{flex:0 0 25%}}.social-button.svelte-1lh1syq>.social-button__inner.svelte-1lh1syq{display:block;margin:5px;padding:10px 10px 10px 25%;background-color:#fff;background-size:10%;background-repeat:no-repeat;background-position:10% center;color:#fff;font-family:'Assistant', sans-serif;font-display:fallback;font-size:13px;font-weight:bold;text-transform:uppercase;text-decoration:none}.social-button.svelte-1lh1syq>.social-button__inner.svelte-1lh1syq:hover{color:#fff;opacity:0.8}@media(max-width: 719px){.social-button.svelte-1lh1syq:nth-child(2n + 1)>.social-button__inner.svelte-1lh1syq{margin-left:0}.social-button.svelte-1lh1syq:nth-child(2n)>.social-button__inner.svelte-1lh1syq{margin-right:0}}@media(min-width: 920px){.social-button.svelte-1lh1syq:nth-child(4n + 1)>.social-button__inner.svelte-1lh1syq{margin-left:0}.social-button.svelte-1lh1syq:nth-child(4n)>.social-button__inner.svelte-1lh1syq{margin-right:0}}.social-button--twitter.svelte-1lh1syq .social-button__inner.svelte-1lh1syq{background-color:#1da1f2;background-image:url('img/social/twitter.svg')}.social-button--linkedin.svelte-1lh1syq .social-button__inner.svelte-1lh1syq{background-color:#0077b5;background-image:url('img/social/linkedin.svg')}.social-button--instagram.svelte-1lh1syq .social-button__inner.svelte-1lh1syq{background-color:#405de6;background-image:url('img/social/instagram.svg')}.social-button--spotify.svelte-1lh1syq .social-button__inner.svelte-1lh1syq{background-color:#1db954;background-image:url('img/social/spotify.svg')}.social-button--soundcloud.svelte-1lh1syq .social-button__inner.svelte-1lh1syq{background-color:#f30;background-image:url('img/social/soundcloud.svg')}.social-button--songkick.svelte-1lh1syq .social-button__inner.svelte-1lh1syq{background-color:#f80046;background-image:url('img/social/songkick.svg')}.social-button--github.svelte-1lh1syq .social-button__inner.svelte-1lh1syq{background-color:#4078c0;background-image:url('img/social/github.svg')}.social-button--codepen.svelte-1lh1syq .social-button__inner.svelte-1lh1syq{background-color:#1e1e1e;background-image:url('img/social/codepen.svg')}",
  map: null
};
const SocialButton = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  let { service } = $$props;
  let { href } = $$props;
  if ($$props.service === void 0 && $$bindings.service && service !== void 0)
    $$bindings.service(service);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$1);
  return `<li class="${"social-button social-button--" + (0, import_index_1e54ea6c.e)(service) + " svelte-1lh1syq"}"><a class="${"social-button__inner svelte-1lh1syq"}"${(0, import_index_1e54ea6c.a)("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>
</li>`;
});
var SocialButtons_svelte_svelte_type_style_lang = "";
const css = {
  code: ".social-buttons.svelte-3fz34z{display:flex;flex-wrap:wrap;list-style:none;margin-bottom:40px}",
  map: null
};
const SocialButtons = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section><ul class="${"social-buttons svelte-3fz34z"}">${(0, import_index_1e54ea6c.v)(SocialButton, "SocialButton").$$render($$result, {
    service: "github",
    href: "https://github.com/benhodgson87"
  }, {}, {
    default: () => {
      return `Github`;
    }
  })}
		${(0, import_index_1e54ea6c.v)(SocialButton, "SocialButton").$$render($$result, {
    service: "codepen",
    href: "https://codepen.io/bh"
  }, {}, {
    default: () => {
      return `Codepen`;
    }
  })}
		${(0, import_index_1e54ea6c.v)(SocialButton, "SocialButton").$$render($$result, {
    service: "linkedin",
    href: "https://uk.linkedin.com/in/bhodgson"
  }, {}, {
    default: () => {
      return `LinkedIn`;
    }
  })}
		${(0, import_index_1e54ea6c.v)(SocialButton, "SocialButton").$$render($$result, {
    service: "twitter",
    href: "https://twitter.com/benhodgson"
  }, {}, {
    default: () => {
      return `Twitter`;
    }
  })}
		${(0, import_index_1e54ea6c.v)(SocialButton, "SocialButton").$$render($$result, {
    service: "instagram",
    href: "https://instagram.com/ben_hodgson"
  }, {}, {
    default: () => {
      return `Instagram`;
    }
  })}
		${(0, import_index_1e54ea6c.v)(SocialButton, "SocialButton").$$render($$result, {
    service: "songkick",
    href: "https://www.songkick.com/users/benhodgson"
  }, {}, {
    default: () => {
      return `Songkick`;
    }
  })}
		${(0, import_index_1e54ea6c.v)(SocialButton, "SocialButton").$$render($$result, {
    service: "spotify",
    href: "https://open.spotify.com/user/ben.hodgson"
  }, {}, {
    default: () => {
      return `Spotify`;
    }
  })}
		${(0, import_index_1e54ea6c.v)(SocialButton, "SocialButton").$$render($$result, {
    service: "soundcloud",
    href: "https://soundcloud.com/benhodgson/likes"
  }, {}, {
    default: () => {
      return `Soundcloud`;
    }
  })}</ul>
</section>`;
});
const Routes = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_1e54ea6c.v)(Layout, "Layout").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_1e54ea6c.v)(Header, "Header").$$render($$result, {}, {}, {})}
	${(0, import_index_1e54ea6c.v)(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}
	${(0, import_index_1e54ea6c.v)(SocialButtons, "SocialButtons").$$render($$result, {}, {}, {})}
	${(0, import_index_1e54ea6c.v)(Alert, "Alert").$$render($$result, {}, {}, {
        default: () => {
          return `<p><strong>Recruiters:</strong> I will not respond to unsolicited emails, voicemails, or texts, unless I have personally
			given you my contact details. Please send any opportunities via LinkedIn and I&#39;ll be in touch if interested.
		</p>`;
        }
      })}`;
    }
  })}`;
});
module.exports = __toCommonJS(stdin_exports);
