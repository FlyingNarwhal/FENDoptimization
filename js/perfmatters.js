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


//moved the google analytics from being
//inlined JS, so that I could call this
//async'ly, to stop it from blocking the
//critical rendering path
(function(w,g) {
	w['GoogleAnalyticsObject'] = g;
	w[g] = w[g] || function() {
		(w[g].q = w[g].q || []).push(arguments);
	};
	w[g].l = 1 * new Date();
	}
)

(window, 'ga');