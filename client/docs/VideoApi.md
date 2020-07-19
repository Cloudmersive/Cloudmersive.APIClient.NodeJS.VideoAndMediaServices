# CloudmersiveVideoApiClient.VideoApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**videoConvertToGif**](VideoApi.md#videoConvertToGif) | **POST** /video/convert/to/gif | Convert Video to Animated GIF format.
[**videoConvertToMov**](VideoApi.md#videoConvertToMov) | **POST** /video/convert/to/mov | Convert Video to MOV format.
[**videoConvertToMp4**](VideoApi.md#videoConvertToMp4) | **POST** /video/convert/to/mp4 | Convert Video to MP4 format.
[**videoConvertToWebm**](VideoApi.md#videoConvertToWebm) | **POST** /video/convert/to/webm | Convert Video to WEBM format.
[**videoGetInfo**](VideoApi.md#videoGetInfo) | **POST** /video/convert/get-info | Get detailed information about a video or audio file


<a name="videoConvertToGif"></a>
# **videoConvertToGif**
> &#39;Blob&#39; videoConvertToGif(inputFile, opts)

Convert Video to Animated GIF format.

Automatically detect video file format and convert it to animated GIF format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Maximum output file size is 50GB. Default height is 250 pixels, while preserving the video&#39;s aspect ratio.

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

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.

var opts = { 
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // Number | Optional; Maximum width of the output video, up to the original video width. Defaults to 250 pixels.
  'maxHeight': 56, // Number | Optional; Maximum height of the output video, up to the original video width. Defaults to 250 pixels.
  'preserveAspectRatio': true, // Boolean | Optional; If false, the original video's aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
  'frameRate': 56, // Number | Optional; Specify the frame rate of the output video. Defaults to 24 frames per second.
  'extendProcessingTime': true, // Boolean | Optional; If true, will allow additional processing time for the video file conversion, using one API call per additional minute over the 5 minute default processing time, up to a maximum of 25 total minutes. This is generally necessary for files larger than 500 MB or longer than 30 minutes.
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Optional; Specify the desired starting time of the GIF video in TimeSpan format.
  'timeSpan': new Date("2013-10-20T19:20:30+01:00") // Date | Optional; Specify the desired length of the GIF video in TimeSpan format. Limit is 30 minutes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoConvertToGif(inputFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **maxWidth** | **Number**| Optional; Maximum width of the output video, up to the original video width. Defaults to 250 pixels. | [optional] 
 **maxHeight** | **Number**| Optional; Maximum height of the output video, up to the original video width. Defaults to 250 pixels. | [optional] 
 **preserveAspectRatio** | **Boolean**| Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true. | [optional] 
 **frameRate** | **Number**| Optional; Specify the frame rate of the output video. Defaults to 24 frames per second. | [optional] 
 **extendProcessingTime** | **Boolean**| Optional; If true, will allow additional processing time for the video file conversion, using one API call per additional minute over the 5 minute default processing time, up to a maximum of 25 total minutes. This is generally necessary for files larger than 500 MB or longer than 30 minutes. | [optional] 
 **startTime** | **Date**| Optional; Specify the desired starting time of the GIF video in TimeSpan format. | [optional] 
 **timeSpan** | **Date**| Optional; Specify the desired length of the GIF video in TimeSpan format. Limit is 30 minutes. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="videoConvertToMov"></a>
# **videoConvertToMov**
> &#39;Blob&#39; videoConvertToMov(inputFile, opts)

Convert Video to MOV format.

Automatically detect video file format and convert it to MOV format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Maximum output file size is 50GB.

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

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.

var opts = { 
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // Number | Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
  'maxHeight': 56, // Number | Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
  'preserveAspectRatio': true, // Boolean | Optional; If false, the original video's aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
  'frameRate': 56, // Number | Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
  'quality': 56, // Number | Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
  'extendProcessingTime': true // Boolean | Optional; If true, will allow additional processing time for the video file conversion, using one API call per additional minute over the 5 minute default processing time, up to a maximum of 25 total minutes. This is generally necessary for files larger than 500 MB or longer than 30 minutes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoConvertToMov(inputFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **maxWidth** | **Number**| Optional; Maximum width of the output video, up to the original video width. Defaults to original video width. | [optional] 
 **maxHeight** | **Number**| Optional; Maximum height of the output video, up to the original video width. Defaults to original video height. | [optional] 
 **preserveAspectRatio** | **Boolean**| Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true. | [optional] 
 **frameRate** | **Number**| Optional; Specify the frame rate of the output video. Defaults to original video frame rate. | [optional] 
 **quality** | **Number**| Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50. | [optional] 
 **extendProcessingTime** | **Boolean**| Optional; If true, will allow additional processing time for the video file conversion, using one API call per additional minute over the 5 minute default processing time, up to a maximum of 25 total minutes. This is generally necessary for files larger than 500 MB or longer than 30 minutes. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="videoConvertToMp4"></a>
# **videoConvertToMp4**
> &#39;Blob&#39; videoConvertToMp4(inputFile, opts)

Convert Video to MP4 format.

Automatically detect video file format and convert it to MP4 format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Maximum output file size is 50GB.

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

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.

var opts = { 
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // Number | Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
  'maxHeight': 56, // Number | Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
  'preserveAspectRatio': true, // Boolean | Optional; If false, the original video's aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
  'frameRate': 56, // Number | Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
  'quality': 56, // Number | Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
  'extendProcessingTime': true // Boolean | Optional; If true, will allow additional processing time for the video file conversion, using one API call per additional minute over the 5 minute default processing time, up to a maximum of 25 total minutes. This is generally necessary for files larger than 500 MB or longer than 30 minutes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoConvertToMp4(inputFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **maxWidth** | **Number**| Optional; Maximum width of the output video, up to the original video width. Defaults to original video width. | [optional] 
 **maxHeight** | **Number**| Optional; Maximum height of the output video, up to the original video width. Defaults to original video height. | [optional] 
 **preserveAspectRatio** | **Boolean**| Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true. | [optional] 
 **frameRate** | **Number**| Optional; Specify the frame rate of the output video. Defaults to original video frame rate. | [optional] 
 **quality** | **Number**| Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50. | [optional] 
 **extendProcessingTime** | **Boolean**| Optional; If true, will allow additional processing time for the video file conversion, using one API call per additional minute over the 5 minute default processing time, up to a maximum of 25 total minutes. This is generally necessary for files larger than 500 MB or longer than 30 minutes. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="videoConvertToWebm"></a>
# **videoConvertToWebm**
> &#39;Blob&#39; videoConvertToWebm(inputFile, opts)

Convert Video to WEBM format.

Automatically detect video file format and convert it to WEBM format. Supports many input video formats, including AVI, ASF, FLV, MP4, MPEG/MPG, Matroska/WEBM, 3G2, OGV, MKV, M4V and MOV. Uses 1 API call per 10 MB of file size. Maximum output file size is 50GB.

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

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.

var opts = { 
  'fileUrl': "fileUrl_example", // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // Number | Optional; Maximum width of the output video, up to the original video width. Defaults to original video width.
  'maxHeight': 56, // Number | Optional; Maximum height of the output video, up to the original video width. Defaults to original video height.
  'preserveAspectRatio': true, // Boolean | Optional; If false, the original video's aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
  'frameRate': 56, // Number | Optional; Specify the frame rate of the output video. Defaults to original video frame rate.
  'quality': 56, // Number | Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50.
  'extendProcessingTime': true // Boolean | Optional; If true, will allow additional processing time for the video file conversion, using one API call per additional minute over the 5 minute default processing time, up to a maximum of 25 total minutes. This is generally necessary for files larger than 500 MB or longer than 30 minutes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoConvertToWebm(inputFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **maxWidth** | **Number**| Optional; Maximum width of the output video, up to the original video width. Defaults to original video width. | [optional] 
 **maxHeight** | **Number**| Optional; Maximum height of the output video, up to the original video width. Defaults to original video height. | [optional] 
 **preserveAspectRatio** | **Boolean**| Optional; If false, the original video&#39;s aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true. | [optional] 
 **frameRate** | **Number**| Optional; Specify the frame rate of the output video. Defaults to original video frame rate. | [optional] 
 **quality** | **Number**| Optional; Specify the quality of the output video, where 100 is lossless and 1 is the lowest possible quality with highest compression. Default is 50. | [optional] 
 **extendProcessingTime** | **Boolean**| Optional; If true, will allow additional processing time for the video file conversion, using one API call per additional minute over the 5 minute default processing time, up to a maximum of 25 total minutes. This is generally necessary for files larger than 500 MB or longer than 30 minutes. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="videoGetInfo"></a>
# **videoGetInfo**
> &#39;Blob&#39; videoGetInfo(inputFile, opts)

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

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.

var opts = { 
  'fileUrl': "fileUrl_example" // String | Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.videoGetInfo(inputFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 
 **fileUrl** | **String**| Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

