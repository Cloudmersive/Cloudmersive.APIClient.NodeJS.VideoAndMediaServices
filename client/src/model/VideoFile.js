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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveVideoApiClient) {
      root.CloudmersiveVideoApiClient = {};
    }
    root.CloudmersiveVideoApiClient.VideoFile = factory(root.CloudmersiveVideoApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VideoFile model module.
   * @module model/VideoFile
   * @version 2.0.5
   */

  /**
   * Constructs a new <code>VideoFile</code>.
   * A video file
   * @alias module:model/VideoFile
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>VideoFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoFile} obj Optional instance to populate.
   * @return {module:model/VideoFile} The populated <code>VideoFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('VideoNumber')) {
        obj['VideoNumber'] = ApiClient.convertToType(data['VideoNumber'], 'Number');
      }
      if (data.hasOwnProperty('Content')) {
        obj['Content'] = ApiClient.convertToType(data['Content'], 'Blob');
      }
    }
    return obj;
  }

  /**
   * Sequence number of the video
   * @member {Number} VideoNumber
   */
  exports.prototype['VideoNumber'] = undefined;
  /**
   * The video file as a byte array
   * @member {Blob} Content
   */
  exports.prototype['Content'] = undefined;



  return exports;
}));


