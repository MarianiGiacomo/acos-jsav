# acos-jsav
Content type for acos-server that adds support for JavaScript Algorithm Visualization library. Provides the following files to be used by exercises implemented with the [JavaScript Algorithm Visualization library](https://github.com/vkaravir/JSAV) in [Acos-server](https://github.com/acos-server/acos-server):

Libraries:
- `jquery-ui.min.js`
- `jquery.transit.js`
- `raphael.js`
- `JSAV-min.js`

Stylesheets:
- `JSAV.css`

Other files:
- `gradeListener.js`: listens for `jsav-log-event` and when a `jsav-exercise-grade` is detected, it extracts the points and sends them to the Acos server.

Exercises can be implemented for example with the [acos-jsav-vas](https://github.com/MarianiGiacomo/acos-jsav-vas) Acos content package.
