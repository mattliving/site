var places = require("./myplaces.json");
var https  = require("https");
var fs     = require("fs");
var when   = require("when");
var _      = require("lodash");

var api_key          = "AIzaSyDyGxk9jKWBWQvUoTZ3vsJduCLsVUitBM8",
    geocodingBaseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="; //https://developers.google.com/maps/documentation/geocoding

var places = formatPlacesDataForGlobe("./myplaces.json");
// var promises = createPromiseArray(500);
// when.all(promises).then(processResolvedPromises);

function formatPlacesDataForGlobe(filename) {
  try {
    var places = JSON.parse(fs.readFileSync(filename, { encoding: "utf8" }));
    var data = [];
    var seriesA = ["placesBeen"];

    seriesA.push(_.flatten(_.map(places, function(place) {
      return [place.coordinates.lat, place.coordinates.lng, 1];
    })));
    data.push(seriesA);
    writeToFileSync("./formattedplaces.json", data);
    return data;
  }
  catch (e) {
    console.error(e);
  }
}

function createPromiseArray(intervalBetweenCalls) {
  return _.map(places, function(place) {
    var deferred = when.defer();

    if ((place.coordinates.lat === "" || place.coordinates.lng === "")) {
      var url = geocodingBaseUrl + encodeURIComponent(place.place) + "&key=" + api_key;
      timeout(intervalBetweenCalls).then(function() {
        get(url).then(function(location) {
          if (location !== null && location !== undefined) {
            place.coordinates.lat = location.lat;
            place.coordinates.lng = location.lng;
            deferred.resolve(place);
          }
          else deferred.reject();
        });
      });
    }
    else deferred.reject();

    return deferred.promise;
  });
}

function processResolvedPromises(resolvedArray) {
  var json = [];
  _.each(resolvedArray, function(resolved) {
    json.push(resolved);
  });

  writeToFileSync("./myplaces.json", json);
}

function get(url) {

  var deferred = when.defer();

  https.get(url, function(res) {

    res.setEncoding("utf8");
    var data = "";
    res.on("data", function(d) {
      data += d;
    });

    res.on("end", function() {
      try {
        data = JSON.parse(data);
        var results = data.results[0];
        var location = results.geometry.location;
        deferred.resolve(location);
      }
      catch (e) {
        console.error(e);
        deferred.reject(e);
      }
    });

  }).on("error", function(e) {
    console.error(e);
    deferred.reject(e);
  });

  return deferred.promise;
}

function writeToFileSync(filename, data) {
  fs.writeFile(filename, JSON.stringify(data, null, 4), function(err) {
    if (err) console.error(err);
  });
}

function timeout(time) {
  var deferred = when.defer();
  setTimeout(function() {
    deferred.resolve();
  }, time);
  return deferred.promise;
}
