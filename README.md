weatherApp
=============
a simple weather app that uses Yahoo weather API
## running app
```
npm i --production
node server/app
```
exposes a web page at *localhost:5000*
## webservice
allows fetch data for zipcodes
```
http://localhost:5000/api/weather/99762;10001
```
## limitiations
This is a working solution not a complete project. It contains some shortcummings(couldn't spent more time on it):
- errror handling is minimal
- no unit / component tests
- it's a happy path code really
- no optimization
- might not work well on legacy browsers(tested on Chrome 56 / FF 51 / Safari 10.0.2 OS X)
Please be understanding ... :]