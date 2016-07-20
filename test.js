const test = require('tape')
const objectify = require('.')

const fakeGeoPosition = {
  timestamp: new Date(),
  coords: {
    accuracy: 26,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 38.792024999999995,
    longitude: -104.8483681,
    speed: null
  }
}

const obj = objectify(fakeGeoPosition)

test('objectify', function (t) {
  t.deepEqual(fakeGeoPosition, obj)
  t.end()
})
