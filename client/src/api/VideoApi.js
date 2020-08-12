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
    define(['ApiClient', 'model/MediaInformation', 'model/NsfwResult', 'model/SplitVideoResult', 'model/StillFramesResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MediaInformation'), require('../model/NsfwResult'), require('../model/SplitVideoResult'), require('../model/StillFramesResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveVideoApiClient) {
      root.CloudmersiveVideoApiClient = {};
    }
    root.CloudmersiveVideoApiClient.VideoApi = factory(root.CloudmersiveVideoApiClient.ApiClient, root.CloudmersiveVideoApiClient.MediaInformation, root.CloudmersiveVideoApiClient.NsfwResult, root.CloudmersiveVideoApiClient.SplitVideoResult, root.CloudmersiveVideoApiClient.StillFramesResult);
  }
}(this, function(ApiClient, MediaInformation, NsfwResult, SplitVideoResult, StillFramesResult) {
  'use strict';

  /**
   * Video service.
   * @module api/VideoApi
   * @version 2.0.3
   */

  /**
   * Constructs a new VideoApi. 
   * @alias module:api/VideoApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the videoConvertToGif operation.
     * @callback module:api/VideoApi~videoConvertToGifCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Video to Animated GIF format.
     * Automatically detect video file format and convert it to animated GIF format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB. Default height is 250 pixels, while preserving the video&#39;s aspect ratio.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Input file to perform the operation on.
     * @param {String} opts.fileUrl Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
     * @param {Number} opts.maxWidth Optional; Maximum width of the output video, up to the original video width. Defaults to 250 pixels, maximum is 500 pixels.
     * @param {Number} opts.maxHeight Optional; Maximum height of the output video, up to the original video width. Defaults to 250 pixels, maximum is 500 pixels.
     * @param {Boolean} opts.preserveAspectRatio Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
     * @param {Number} opts.frameRate Optional; Specify the frame rate of the output video. Defaults to 24 frames per second.
     * @param {Date} opts.startTime Optional; Specify the desired starting time of the GIF video in TimeSpan format.
     * @param {Date} opts.timeSpan Optional; Specify the desired length of the GIF video in TimeSpan format. Limit is 30 seconds. Default is 10 seconds.
     * @param {module:api/VideoApi~videoConvertToGifCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.videoConvertToGif = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'fileUrl': opts['fileUrl'],
        'maxWidth': opts['maxWidth'],
        'maxHeight': opts['maxHeight'],
        'preserveAspectRatio': opts['preserveAspectRatio'],
        'frameRate': opts['frameRate'],
        'startTime': opts['startTime'],
        'timeSpan': opts['timeSpan']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/video/convert/to/gif', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the videoConvertToMov operation.
     * @callback module:api/VideoApi~videoConvertToMovCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Video to MOV format.
     * Automatically detect video file format and convert it to MOV format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Input file to perform the operation on.
     * @param {String} opts.fileUrl Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
     * @param {Number} opts.maxWidth Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
     * @param {Number} opts.maxHeight Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
     * @param {Boolean} opts.preserveAspectRatio Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
     * @param {Number} opts.frameRate Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
     * @param {Number} opts.quality Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
     * @param {module:api/VideoApi~videoConvertToMovCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.videoConvertToMov = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'fileUrl': opts['fileUrl'],
        'maxWidth': opts['maxWidth'],
        'maxHeight': opts['maxHeight'],
        'preserveAspectRatio': opts['preserveAspectRatio'],
        'frameRate': opts['frameRate'],
        'quality': opts['quality']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/video/convert/to/mov', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the videoConvertToMp4 operation.
     * @callback module:api/VideoApi~videoConvertToMp4Callback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Video to MP4 format.
     * Automatically detect video file format and convert it to MP4 format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Input file to perform the operation on.
     * @param {String} opts.fileUrl Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
     * @param {Number} opts.maxWidth Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
     * @param {Number} opts.maxHeight Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
     * @param {Boolean} opts.preserveAspectRatio Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
     * @param {Number} opts.frameRate Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
     * @param {Number} opts.quality Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
     * @param {module:api/VideoApi~videoConvertToMp4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.videoConvertToMp4 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'fileUrl': opts['fileUrl'],
        'maxWidth': opts['maxWidth'],
        'maxHeight': opts['maxHeight'],
        'preserveAspectRatio': opts['preserveAspectRatio'],
        'frameRate': opts['frameRate'],
        'quality': opts['quality']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/video/convert/to/mp4', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the videoConvertToStillFrames operation.
     * @callback module:api/VideoApi~videoConvertToStillFramesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StillFramesResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Video to PNG Still Frames.
     * Automatically detect video file format and convert it to an array of still frame PNG images. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Input file to perform the operation on.
     * @param {String} opts.fileUrl Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
     * @param {Number} opts.maxWidth Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
     * @param {Number} opts.maxHeight Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
     * @param {Object} opts.framesPerSecond Optional; How many video frames per second to be returned as PNG images. Minimum value is 0.1, maximum is 60. Default is 1 frame per second. Maximum of 2000 total frames.
     * @param {module:api/VideoApi~videoConvertToStillFramesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StillFramesResult}
     */
    this.videoConvertToStillFrames = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'fileUrl': opts['fileUrl'],
        'maxWidth': opts['maxWidth'],
        'maxHeight': opts['maxHeight'],
        'framesPerSecond': opts['framesPerSecond']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = StillFramesResult;

      return this.apiClient.callApi(
        '/video/convert/to/still-frames', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the videoConvertToWebm operation.
     * @callback module:api/VideoApi~videoConvertToWebmCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Video to WEBM format.
     * Automatically detect video file format and convert it to WEBM format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Input file to perform the operation on.
     * @param {String} opts.fileUrl Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
     * @param {Number} opts.maxWidth Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
     * @param {Number} opts.maxHeight Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
     * @param {Boolean} opts.preserveAspectRatio Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
     * @param {Number} opts.frameRate Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
     * @param {Number} opts.quality Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
     * @param {module:api/VideoApi~videoConvertToWebmCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.videoConvertToWebm = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'fileUrl': opts['fileUrl'],
        'maxWidth': opts['maxWidth'],
        'maxHeight': opts['maxHeight'],
        'preserveAspectRatio': opts['preserveAspectRatio'],
        'frameRate': opts['frameRate'],
        'quality': opts['quality']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/video/convert/to/webm', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the videoCutVideo operation.
     * @callback module:api/VideoApi~videoCutVideoCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cut a Video to a Shorter Length
     * Cuts a video to the specified start and end times. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Input file to perform the operation on.
     * @param {String} opts.fileUrl Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
     * @param {Date} opts.startTime Optional; Specify the desired starting time of the cut video in TimeSpan format.
     * @param {Date} opts.timeSpan Optional; Specify the desired length of the cut video in TimeSpan format. Leave blank to include the rest of the video. Maximum time is 4 hours.
     * @param {module:api/VideoApi~videoCutVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.videoCutVideo = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'fileUrl': opts['fileUrl'],
        'startTime': opts['startTime'],
        'timeSpan': opts['timeSpan']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/video/cut', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the videoGetInfo operation.
     * @callback module:api/VideoApi~videoGetInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MediaInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get detailed information about a video or audio file
     * Retrieve detailed information about a video or audio file, including format, dimensions, file size, bit rate, duration and start time. Compatible with many formats, including: AVI, ASF, FLV, GIF, MP4, MPEG/MPG, Matroska/WEBM, MOV, AIFF, ASF, CAF, MP3, MP2, MP1, Ogg, OMG/OMA, and WAV. Uses 1 API call per 10 MB of file size.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Input file to perform the operation on.
     * @param {String} opts.fileUrl Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
     * @param {module:api/VideoApi~videoGetInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MediaInformation}
     */
    this.videoGetInfo = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'fileUrl': opts['fileUrl']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = MediaInformation;

      return this.apiClient.callApi(
        '/video/convert/get-info', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the videoResizeVideo operation.
     * @callback module:api/VideoApi~videoResizeVideoCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resizes a Video Preserving the Original Aspect Ratio.
     * Resizes a video, while maintaining the original aspect ratio and encoding. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Input file to perform the operation on.
     * @param {String} opts.fileUrl Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
     * @param {Number} opts.maxWidth Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
     * @param {Number} opts.maxHeight Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
     * @param {Number} opts.frameRate Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
     * @param {Number} opts.quality Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
     * @param {String} opts.extension Optional; Specify the file extension of the input video. This is recommended when inputting a file directly, without a file name. If no file name is available and no extension is provided, the extension will be inferred from the file data, which may cause a different extension to be used in the output.
     * @param {module:api/VideoApi~videoResizeVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.videoResizeVideo = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'fileUrl': opts['fileUrl'],
        'maxWidth': opts['maxWidth'],
        'maxHeight': opts['maxHeight'],
        'frameRate': opts['frameRate'],
        'quality': opts['quality'],
        'extension': opts['extension']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/video/resize/preserveAspectRatio', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the videoResizeVideoSimple operation.
     * @callback module:api/VideoApi~videoResizeVideoSimpleCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resizes a Video without Preserving Aspect Ratio.
     * Resizes a video without maintaining original aspect ratio, allowing fully customizable dimensions. May cause image skewing. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Input file to perform the operation on.
     * @param {String} opts.fileUrl Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
     * @param {Number} opts.maxWidth Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
     * @param {Number} opts.maxHeight Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
     * @param {Number} opts.frameRate Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
     * @param {Number} opts.quality Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
     * @param {String} opts.extension Optional; Specify the file extension of the input video. This is recommended when inputting a file directly, without a file name. If no file name is available and no extension is provided, the extension will be inferred from the file data, which may cause a different extension to be used in the output.
     * @param {module:api/VideoApi~videoResizeVideoSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.videoResizeVideoSimple = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'fileUrl': opts['fileUrl'],
        'maxWidth': opts['maxWidth'],
        'maxHeight': opts['maxHeight'],
        'frameRate': opts['frameRate'],
        'quality': opts['quality'],
        'extension': opts['extension']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/video/resize/target', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the videoScanForNsfw operation.
     * @callback module:api/VideoApi~videoScanForNsfwCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NsfwResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Scan a Video for NSFW content.
     * Automatically detect video file format and scan it for Not Safe For Work (NSFW)/Porn/Racy content. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per frame scanned.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Input file to perform the operation on.
     * @param {String} opts.fileUrl Optional; URL of a video file being scanned. Use this option for files larger than 2GB.
     * @param {Object} opts.framesPerSecond Optional; How many video frames per second to be scanned. Minimum value is 0.05 (1 frame per 20 seconds), maximum is 1. Default is 0.33 frame per second (1 frame scanned every 3 seconds). Maximum of 1000 total frames can be scanned, potentially adjusting the framerate for longer videos.
     * @param {module:api/VideoApi~videoScanForNsfwCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NsfwResult}
     */
    this.videoScanForNsfw = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'fileUrl': opts['fileUrl'],
        'framesPerSecond': opts['framesPerSecond']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = NsfwResult;

      return this.apiClient.callApi(
        '/video/scan/nsfw', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the videoSplitVideo operation.
     * @callback module:api/VideoApi~videoSplitVideoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SplitVideoResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Split a Video into Two Shorter Videos
     * Cuts a video into two videos based on the specified start time. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.
     * @param {Date} splitTime Specify the desired time at which to split the video in TimeSpan format.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Input file to perform the operation on.
     * @param {String} opts.fileUrl Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
     * @param {Date} opts.timeSpan Optional; Specify the desired length of the second video in TimeSpan format. Leave blank to include the rest of the video. Maximum time is 4 hours.
     * @param {module:api/VideoApi~videoSplitVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SplitVideoResult}
     */
    this.videoSplitVideo = function(splitTime, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'splitTime' is set
      if (splitTime === undefined || splitTime === null) {
        throw new Error("Missing the required parameter 'splitTime' when calling videoSplitVideo");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'fileUrl': opts['fileUrl'],
        'splitTime': splitTime,
        'timeSpan': opts['timeSpan']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = SplitVideoResult;

      return this.apiClient.callApi(
        '/video/split', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
