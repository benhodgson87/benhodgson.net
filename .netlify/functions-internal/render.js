const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","img/social/angellist.svg","img/social/codepen.svg","img/social/flickr.svg","img/social/github.svg","img/social/instagram.svg","img/social/linkedin.svg","img/social/songkick.svg","img/social/soundcloud.svg","img/social/spotify.svg","img/social/twitter.svg","wishlist/index.html"]),
	_: {
		mime: {".png":"image/png",".svg":"image/svg+xml",".html":"text/html"},
		entry: {"file":"start-38d245ec.js","js":["start-38d245ec.js","chunks/vendor-f0095a1c.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
});
