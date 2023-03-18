# super-easy-jquery-ajax

Super Easy Ajax is a simple way to make a HTTP or HTTPS request on the web.

## Install
```
npm i super-easy-jquery-ajax
```

## Usage
```JavaScript
import "super-easy-jquery-ajax";

ajax("https://example.com/", null, "GET", "html").then(data => {

  console.log(data)

});
```

The `ajax` function has 4 args that are url for the url to fetch the data from, data to send with the request, type the type of the request like GET and POST, dataType the data type returned by the request this can be xml, json, script, or html.
