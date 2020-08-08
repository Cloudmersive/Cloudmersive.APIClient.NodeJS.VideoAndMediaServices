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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/StillFrame'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StillFrame'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveVideoApiClient) {
      root.CloudmersiveVideoApiClient = {};
    }
    root.CloudmersiveVideoApiClient.StillFramesResult = factory(root.CloudmersiveVideoApiClient.ApiClient, root.CloudmersiveVideoApiClient.StillFrame);
  }
}(this, function(ApiClient, StillFrame) {
  'use strict';




  /**
   * The StillFramesResult model module.
   * @module model/StillFramesResult
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>StillFramesResult</code>.
   * The result of converting a video into still frames
   * @alias module:model/StillFramesResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>StillFramesResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StillFramesResult} obj Optional instance to populate.
   * @return {module:model/StillFramesResult} The populated <code>StillFramesResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('TotalFrames')) {
        obj['TotalFrames'] = ApiClient.convertToType(data['TotalFrames'], 'Number');
      }
      if (data.hasOwnProperty('StillFrames')) {
        obj['StillFrames'] = ApiClient.convertToType(data['StillFrames'], [StillFrame]);
      }
    }
    return obj;
  }

  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * The total number of frames converted
   * @member {Number} TotalFrames
   */
  exports.prototype['TotalFrames'] = undefined;
  /**
   * Individual still frames from the conversion operation
   * @member {Array.<module:model/StillFrame>} StillFrames
   */
  exports.prototype['StillFrames'] = undefined;



  return exports;
}));

