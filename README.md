Feed Reader Testing Project
===========================

Front end Nanodegree Project 4
------------------------------
https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001

This project relied heavily on Chrome Dev Tools to look for jank, and runtime inefficiency.
For a live preview of this project, [click here](https://FlyingNarwhal.github.io/FENDoptimization).



######Student Optimizations Briefly######

* for detailed explanation see files:
*
* /dist/index.html        --changed script loading to async, and inlined css
*														SEE LINES 11, 14, 19, 24, 121
* /dist/js/perfmatters.js --pushed google analytics for async purposes
* /dist/views/main.js     --refactored code to allow for 60fps, and faster
*														render times *SEE LINES 426 && 506*
* /gulpfile.js        		--added minification and image compression to build
*														process
*	/README.md
