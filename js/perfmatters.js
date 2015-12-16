// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function(event) {
  logCRP();
});

(function(w,g) {
	w['GoogleAnalyticsObject'] = g;
	w[g] = w[g] || function() {
		(w[g].q = w[g].q || []).push(arguments);
	};
	w[g].l = 1 * new Date();
	}
)

(window, 'ga');

// var WebFont = require('webfontloader');

// WebFont.load({
//   google: {
//     families: ['Open Sans:400,700']
//   }
// });

// (function(d) {
//   var wf = d.createElement('script'), s = d.scripts[0];
//   wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
//   s.parentNode.insertBefore(wf, s);
// })(document);