var uspsAPI = require('../lib/index');
var util = require('util');
var fs = require('fs');

var usps = new uspsAPI({
  debug: true,
  username: 'USERNAME',
  password: 'PASSWORD',
  imperial: true // set to false for metric
});

/**
 * RATES
 */
usps.rates({
  packages: [
    {
      Service: 'FIRST CLASS',
      FirstClassMailType: 'LETTER',
      ZipOrigination: '44106',
      ZipDestination: '28262',
      Pounds: 0,
      Ounces: 3.5,
      Container: null,
      Size: 'REGULAR',
      Machinable: 'true'
    }
  ]
}, function(err, res) {
  if(err) {
    return console.log(util.inspect(err, {depth: null}));
  }

  console.log(util.inspect(res, {depth: null}));
});

/**
 * INTERNATIONAL RATES
 */
usps.intlRates({
  packages: [
    {
      Pounds: 1,
      Ounces: 0.5,
      MailType: 'PACKAGE',
      ValueOfContents: null,
      Country: 'France',
      Container: null,
      Size: 'REGULAR',
      Width: null,
      Length: null,
      Height: null,
      Girth: null,
      OriginZip: '44106'
    }
  ]
}, function(err, res) {
  if(err) {
    return console.log(util.inspect(err, {depth: null}));
  }

  console.log(util.inspect(res, {depth: null}));
});

/**
 * TRACKING
 */
usps.track(['EJ123456780US', '12345'], function(err, res) {
  if(err) {
    return console.log(util.inspect(err, {depth: null}));
  }

  console.log(util.inspect(res, {depth: null}));
});

/**
 * VERIFY ADDRESS
 */
usps.verify({
  IncludeOptionalElements: true, //flag to return Delivery Point and other optional elements in the future
  ReturnCarrierRoute: true, //flag to return Carrier Route
  addresses: [
    {
      FirmName: '',
      Address1: '',
      Address2: '6406 Ivy Lane',
      City: 'Greenbelt',
      State: 'MD',
      Zip5: '20770',
      Zip4: ''
    }
  ]
}, function(err, res) {
  if(err) {
    return console.log(util.inspect(err, {depth: null}));
  }

  console.log(util.inspect(res, {depth: null}));
});

/**
 * ZIPCODE LOOKUP
 */
usps.zipCodeLookup({
  addresses: [
    {
      FirmName: '',
      Address1: '',
      Address2: '6406 Ivy Lane',
      City: 'Greenbelt',
      State: 'MD'
    }
  ]
}, function(err, res) {
  if(err) {
    return console.log(util.inspect(err, {depth: null}));
  }

  console.log(util.inspect(res, {depth: null}));
});

/**
 * CITY/STATE LOOKUP
 */
usps.cityStateLookup({
  zipCodes: [
    {Zip5: '20770'},
    {Zip5: '90210'}
  ]
}, function(err, res) {
  if(err) {
    return console.log(util.inspect(err, {depth: null}));
  }

  console.log(util.inspect(res, {depth: null}));
});