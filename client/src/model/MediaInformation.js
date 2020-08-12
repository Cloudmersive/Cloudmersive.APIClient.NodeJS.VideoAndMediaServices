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
    root.CloudmersiveVideoApiClient.MediaInformation = factory(root.CloudmersiveVideoApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediaInformation model module.
   * @module model/MediaInformation
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>MediaInformation</code>.
   * Result of retrieving information about a video or audio file
   * @alias module:model/MediaInformation
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>MediaInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaInformation} obj Optional instance to populate.
   * @return {module:model/MediaInformation} The populated <code>MediaInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('FileFormat')) {
        obj['FileFormat'] = ApiClient.convertToType(data['FileFormat'], 'String');
      }
      if (data.hasOwnProperty('FileFormatFull')) {
        obj['FileFormatFull'] = ApiClient.convertToType(data['FileFormatFull'], 'String');
      }
      if (data.hasOwnProperty('ValidFileFormats')) {
        obj['ValidFileFormats'] = ApiClient.convertToType(data['ValidFileFormats'], ['String']);
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'Number');
      }
      if (data.hasOwnProperty('Height')) {
        obj['Height'] = ApiClient.convertToType(data['Height'], 'Number');
      }
      if (data.hasOwnProperty('Size')) {
        obj['Size'] = ApiClient.convertToType(data['Size'], 'Number');
      }
      if (data.hasOwnProperty('BitRate')) {
        obj['BitRate'] = ApiClient.convertToType(data['BitRate'], 'Number');
      }
      if (data.hasOwnProperty('Duration')) {
        obj['Duration'] = ApiClient.convertToType(data['Duration'], 'Number');
      }
      if (data.hasOwnProperty('StartTime')) {
        obj['StartTime'] = ApiClient.convertToType(data['StartTime'], 'Number');
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
   * The file's short format name
   * @member {String} FileFormat
   */
  exports.prototype['FileFormat'] = undefined;
  /**
   * The file's full format name
   * @member {String} FileFormatFull
   */
  exports.prototype['FileFormatFull'] = undefined;
  /**
   * A list of the file's valid formats
   * @member {Array.<String>} ValidFileFormats
   */
  exports.prototype['ValidFileFormats'] = undefined;
  /**
   * The video's width, if file is a video
   * @member {Number} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * The video's height, if file is a video
   * @member {Number} Height
   */
  exports.prototype['Height'] = undefined;
  /**
   * The file's size in bytes
   * @member {Number} Size
   */
  exports.prototype['Size'] = undefined;
  /**
   * The file's bit rate
   * @member {Number} BitRate
   */
  exports.prototype['BitRate'] = undefined;
  /**
   * The file's duration in seconds
   * @member {Number} Duration
   */
  exports.prototype['Duration'] = undefined;
  /**
   * The file's media start time
   * @member {Number} StartTime
   */
  exports.prototype['StartTime'] = undefined;



  return exports;
}));


