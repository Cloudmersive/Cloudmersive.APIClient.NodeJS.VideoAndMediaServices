/**
 * videoapi
 * The video APIs help you convert, encode, and transcode videos.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveVideoApiClient);
  }
}(this, function(expect, CloudmersiveVideoApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveVideoApiClient.AudioApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AudioApi', function() {
    describe('audioConvertToAac', function() {
      it('should call audioConvertToAac successfully', function(done) {
        //uncomment below and update the code to test audioConvertToAac
        //instance.audioConvertToAac(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('audioConvertToM4a', function() {
      it('should call audioConvertToM4a successfully', function(done) {
        //uncomment below and update the code to test audioConvertToM4a
        //instance.audioConvertToM4a(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('audioConvertToMp3', function() {
      it('should call audioConvertToMp3 successfully', function(done) {
        //uncomment below and update the code to test audioConvertToMp3
        //instance.audioConvertToMp3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('audioConvertToWav', function() {
      it('should call audioConvertToWav successfully', function(done) {
        //uncomment below and update the code to test audioConvertToWav
        //instance.audioConvertToWav(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
