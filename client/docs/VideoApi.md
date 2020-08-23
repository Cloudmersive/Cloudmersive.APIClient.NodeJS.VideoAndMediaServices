# CloudmersiveVideoApiClient.VideoApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**videoConvertToGif**](VideoApi.md#videoConvertToGif) | **POST** /video/convert/to/gif | Convert Video to Animated GIF format.
[**videoConvertToMov**](VideoApi.md#videoConvertToMov) | **POST** /video/convert/to/mov | Convert Video to MOV format.
[**videoConvertToMp4**](VideoApi.md#videoConvertToMp4) | **POST** /video/convert/to/mp4 | Convert Video to MP4 format.
[**videoConvertToStillFrames**](VideoApi.md#videoConvertToStillFrames) | **POST** /video/convert/to/still-frames | Convert Video to PNG Still Frames.
[**videoConvertToWebm**](VideoApi.md#videoConvertToWebm) | **POST** /video/convert/to/webm | Convert Video to WEBM format.
[**videoCutVideo**](VideoApi.md#videoCutVideo) | **POST** /video/cut | Cut a Video to a Shorter Length
[**videoGetInfo**](VideoApi.md#videoGetInfo) | **POST** /video/convert/get-info | Get detailed information about a video or audio file
[**videoResizeVideo**](VideoApi.md#videoResizeVideo) | **POST** /video/resize/preserveAspectRatio | Resizes a Video Preserving the Original Aspect Ratio.
[**videoResizeVideoSimple**](VideoApi.md#videoResizeVideoSimple) | **POST** /video/resize/target | Resizes a Video without Preserving Aspect Ratio.
[**videoScanForNsfw**](VideoApi.md#videoScanForNsfw) | **POST** /video/scan/nsfw | Scan a Video for NSFW content.
[**videoSplitVideo**](VideoApi.md#videoSplitVideo) | **POST** /video/split | Split a Video into Two Shorter Videos


<a name="videoConvertToGif"></a>
# **videoConvertToGif**
> &#39;Blob&#39; videoConvertToGif(opts)

Convert Video to Animated GIF format.

Automatically detect video file format and convert it to animated GIF format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB. Default height is 250 pixels, while preserving the video&#39;s aspect ratio.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.VideoApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // Number | Optional; Maximum width of the output video, up to the original video width. Defaults to 250 pixels, maximum is 500 pixels.
  'maxHeight': 56, // Number | Optional; Maximum height of the output video, up to the original video width. Defaults to 250 pixels, maximum is 500 pixels.
  'preserveAspectRatio': true, // Boolean | Optional; If false, the original video's aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
  'frameRate': 56, // Number | Optional; Specify the frame rate of the output video. Defaults to 24 frames per second.
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional; Specify the desired starting time of the GIF video in TimeSpan format.
  'timeSpan': new Date("2013-10-20T19:20:30+01:00") // Date | Optional; Specify the desired length of the GIF video in TimeSpan format. Limit is 30 seconds. Default is 10 seconds.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoConvertToGif(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **maxWidth** | **Number**| Optional; Maximum width of the output video, up to the original video width. Defaults to 250 pixels, maximum is 500 pixels. | [optional] 
 **maxHeight** | **Number**| Optional; Maximum height of the output video, up to the original video width. Defaults to 250 pixels, maximum is 500 pixels. | [optional] 
 **preserveAspectRatio** | **Boolean**| Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true. | [optional] 
 **frameRate** | **Number**| Optional; Specify the frame rate of the output video. Defaults to 24 frames per second. | [optional] 
 **startTime** | **Date**| Optional; Specify the desired starting time of the GIF video in TimeSpan format. | [optional] 
 **timeSpan** | **Date**| Optional; Specify the desired length of the GIF video in TimeSpan format. Limit is 30 seconds. Default is 10 seconds. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="videoConvertToMov"></a>
# **videoConvertToMov**
> &#39;Blob&#39; videoConvertToMov(opts)

Convert Video to MOV format.

Automatically detect video file format and convert it to MOV format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.VideoApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // Number | Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
  'maxHeight': 56, // Number | Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
  'preserveAspectRatio': true, // Boolean | Optional; If false, the original video's aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
  'frameRate': 56, // Number | Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
  'quality': 56 // Number | Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoConvertToMov(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **maxWidth** | **Number**| Optional; Maximum width of the output video, up to the original video width. Defaults to original video width. | [optional] 
 **maxHeight** | **Number**| Optional; Maximum height of the output video, up to the original video width. Defaults to original video height. | [optional] 
 **preserveAspectRatio** | **Boolean**| Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true. | [optional] 
 **frameRate** | **Number**| Optional; Specify the frame rate of the output video. Defaults to original video frame rate. | [optional] 
 **quality** | **Number**| Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="videoConvertToMp4"></a>
# **videoConvertToMp4**
> &#39;Blob&#39; videoConvertToMp4(opts)

Convert Video to MP4 format.

Automatically detect video file format and convert it to MP4 format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.VideoApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // Number | Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
  'maxHeight': 56, // Number | Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
  'preserveAspectRatio': true, // Boolean | Optional; If false, the original video's aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
  'frameRate': 56, // Number | Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
  'quality': 56 // Number | Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoConvertToMp4(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **maxWidth** | **Number**| Optional; Maximum width of the output video, up to the original video width. Defaults to original video width. | [optional] 
 **maxHeight** | **Number**| Optional; Maximum height of the output video, up to the original video width. Defaults to original video height. | [optional] 
 **preserveAspectRatio** | **Boolean**| Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true. | [optional] 
 **frameRate** | **Number**| Optional; Specify the frame rate of the output video. Defaults to original video frame rate. | [optional] 
 **quality** | **Number**| Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="videoConvertToStillFrames"></a>
# **videoConvertToStillFrames**
> StillFramesResult videoConvertToStillFrames(opts)

Convert Video to PNG Still Frames.

Automatically detect video file format and convert it to an array of still frame PNG images. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.VideoApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // Number | Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
  'maxHeight': 56, // Number | Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
  'framesPerSecond': 8.14 // Number | Optional; How many video frames per second to be returned as PNG images. Minimum value is 0.1, maximum is 60. Default is 1 frame per second. Maximum of 2000 total frames.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoConvertToStillFrames(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **maxWidth** | **Number**| Optional; Maximum width of the output video, up to the original video width. Defaults to original video width. | [optional] 
 **maxHeight** | **Number**| Optional; Maximum height of the output video, up to the original video width. Defaults to original video height. | [optional] 
 **framesPerSecond** | **Number**| Optional; How many video frames per second to be returned as PNG images. Minimum value is 0.1, maximum is 60. Default is 1 frame per second. Maximum of 2000 total frames. | [optional] 

### Return type

[**StillFramesResult**](StillFramesResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="videoConvertToWebm"></a>
# **videoConvertToWebm**
> &#39;Blob&#39; videoConvertToWebm(opts)

Convert Video to WEBM format.

Automatically detect video file format and convert it to WEBM format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.VideoApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // Number | Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
  'maxHeight': 56, // Number | Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
  'preserveAspectRatio': true, // Boolean | Optional; If false, the original video's aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
  'frameRate': 56, // Number | Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
  'quality': 56 // Number | Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoConvertToWebm(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **maxWidth** | **Number**| Optional; Maximum width of the output video, up to the original video width. Defaults to original video width. | [optional] 
 **maxHeight** | **Number**| Optional; Maximum height of the output video, up to the original video width. Defaults to original video height. | [optional] 
 **preserveAspectRatio** | **Boolean**| Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true. | [optional] 
 **frameRate** | **Number**| Optional; Specify the frame rate of the output video. Defaults to original video frame rate. | [optional] 
 **quality** | **Number**| Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="videoCutVideo"></a>
# **videoCutVideo**
> &#39;Blob&#39; videoCutVideo(opts)

Cut a Video to a Shorter Length

Cuts a video to the specified start and end times. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.VideoApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional; Specify the desired starting time of the cut video in TimeSpan format.
  'timeSpan': new Date("2013-10-20T19:20:30+01:00") // Date | Optional; Specify the desired length of the cut video in TimeSpan format. Leave blank to include the rest of the video. Maximum time is 4 hours.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoCutVideo(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **startTime** | **Date**| Optional; Specify the desired starting time of the cut video in TimeSpan format. | [optional] 
 **timeSpan** | **Date**| Optional; Specify the desired length of the cut video in TimeSpan format. Leave blank to include the rest of the video. Maximum time is 4 hours. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="videoGetInfo"></a>
# **videoGetInfo**
> MediaInformation videoGetInfo(opts)

Get detailed information about a video or audio file

Retrieve detailed information about a video or audio file, including format, dimensions, file size, bit rate, duration and start time. Compatible with many formats, including: AVI, ASF, FLV, GIF, MP4, MPEG/MPG, Matroska/WEBM, MOV, AIFF, ASF, CAF, MP3, MP2, MP1, Ogg, OMG/OMA, and WAV. Uses 1 API call per 10 MB of file size.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.VideoApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example" // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoGetInfo(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 

### Return type

[**MediaInformation**](MediaInformation.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="videoResizeVideo"></a>
# **videoResizeVideo**
> &#39;Blob&#39; videoResizeVideo(opts)

Resizes a Video Preserving the Original Aspect Ratio.

Resizes a video, while maintaining the original aspect ratio and encoding. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.VideoApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // Number | Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
  'maxHeight': 56, // Number | Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
  'frameRate': 56, // Number | Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
  'quality': 56, // Number | Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
  'extension': "extension_example" // String | Optional; Specify the file extension of the input video. This is recommended when inputting a file directly, without a file name. If no file name is available and no extension is provided, the extension will be inferred from the file data, which may cause a different extension to be used in the output.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoResizeVideo(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **maxWidth** | **Number**| Optional; Maximum width of the output video, up to the original video width. Defaults to original video width. | [optional] 
 **maxHeight** | **Number**| Optional; Maximum height of the output video, up to the original video width. Defaults to original video height. | [optional] 
 **frameRate** | **Number**| Optional; Specify the frame rate of the output video. Defaults to original video frame rate. | [optional] 
 **quality** | **Number**| Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50. | [optional] 
 **extension** | **String**| Optional; Specify the file extension of the input video. This is recommended when inputting a file directly, without a file name. If no file name is available and no extension is provided, the extension will be inferred from the file data, which may cause a different extension to be used in the output. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="videoResizeVideoSimple"></a>
# **videoResizeVideoSimple**
> &#39;Blob&#39; videoResizeVideoSimple(opts)

Resizes a Video without Preserving Aspect Ratio.

Resizes a video without maintaining original aspect ratio, allowing fully customizable dimensions. May cause image skewing. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.VideoApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // Number | Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
  'maxHeight': 56, // Number | Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
  'frameRate': 56, // Number | Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
  'quality': 56, // Number | Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
  'extension': "extension_example" // String | Optional; Specify the file extension of the input video. This is recommended when inputting a file directly, without a file name. If no file name is available and no extension is provided, the extension will be inferred from the file data, which may cause a different extension to be used in the output.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoResizeVideoSimple(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **maxWidth** | **Number**| Optional; Maximum width of the output video, up to the original video width. Defaults to original video width. | [optional] 
 **maxHeight** | **Number**| Optional; Maximum height of the output video, up to the original video width. Defaults to original video height. | [optional] 
 **frameRate** | **Number**| Optional; Specify the frame rate of the output video. Defaults to original video frame rate. | [optional] 
 **quality** | **Number**| Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50. | [optional] 
 **extension** | **String**| Optional; Specify the file extension of the input video. This is recommended when inputting a file directly, without a file name. If no file name is available and no extension is provided, the extension will be inferred from the file data, which may cause a different extension to be used in the output. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="videoScanForNsfw"></a>
# **videoScanForNsfw**
> NsfwResult videoScanForNsfw(opts)

Scan a Video for NSFW content.

Automatically detect video file format and scan it for Not Safe For Work (NSFW)/Porn/Racy content. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per frame scanned.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.VideoApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being scanned. Use this option for files larger than 2GB.
  'framesPerSecond': 8.14 // Number | Optional; How many video frames per second to be scanned. Minimum value is 0.05 (1 frame per 20 seconds), maximum is 1. Default is 0.33 frame per second (1 frame scanned every 3 seconds). Maximum of 1000 total frames can be scanned, potentially adjusting the framerate for longer videos.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoScanForNsfw(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of a video file being scanned. Use this option for files larger than 2GB. | [optional] 
 **framesPerSecond** | **Number**| Optional; How many video frames per second to be scanned. Minimum value is 0.05 (1 frame per 20 seconds), maximum is 1. Default is 0.33 frame per second (1 frame scanned every 3 seconds). Maximum of 1000 total frames can be scanned, potentially adjusting the framerate for longer videos. | [optional] 

### Return type

[**NsfwResult**](NsfwResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="videoSplitVideo"></a>
# **videoSplitVideo**
> SplitVideoResult videoSplitVideo(splitTime, opts)

Split a Video into Two Shorter Videos

Cuts a video into two videos based on the specified start time. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.VideoApi();

var splitTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Specify the desired time at which to split the video in TimeSpan format.

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'timeSpan': new Date("2013-10-20T19:20:30+01:00") // Date | Optional; Specify the desired length of the second video in TimeSpan format. Leave blank to include the rest of the video. Maximum time is 4 hours.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoSplitVideo(splitTime, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **splitTime** | **Date**| Specify the desired time at which to split the video in TimeSpan format. | 
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **timeSpan** | **Date**| Optional; Specify the desired length of the second video in TimeSpan format. Leave blank to include the rest of the video. Maximum time is 4 hours. | [optional] 

### Return type

[**SplitVideoResult**](SplitVideoResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

