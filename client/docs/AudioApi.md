# CloudmersiveVideoApiClient.AudioApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**audioConvertToAac**](AudioApi.md#audioConvertToAac) | **POST** /audio/convert/to/aac | Convert Audio File to AAC format.
[**audioConvertToM4a**](AudioApi.md#audioConvertToM4a) | **POST** /audio/convert/to/m4a | Convert Audio File to M4A format.
[**audioConvertToMp3**](AudioApi.md#audioConvertToMp3) | **POST** /audio/convert/to/mp3 | Convert Audio File to MP3 format.
[**audioConvertToWav**](AudioApi.md#audioConvertToWav) | **POST** /audio/convert/to/wav | Convert Audio File to WAV format.


<a name="audioConvertToAac"></a>
# **audioConvertToAac**
> &#39;Blob&#39; audioConvertToAac(opts)

Convert Audio File to AAC format.

Automatically detect audio file format and convert it to AAC format. Supports many input audio formats, including AAC, FLAC, M4A, MP2, MP3, OGG, WMA, and WAV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.AudioApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of an audio file being used for conversion. Use this option for files larger than 2GB.
  'bitRate': null // Object | Optional; Specify the desired bitrate of the converted audio file in kilobytes per second (kB/s). Value may be between 48 and 1,411. By default, the optimal bitrate will be chosen automatically.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.audioConvertToAac(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of an audio file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **bitRate** | [**Object**](.md)| Optional; Specify the desired bitrate of the converted audio file in kilobytes per second (kB/s). Value may be between 48 and 1,411. By default, the optimal bitrate will be chosen automatically. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="audioConvertToM4a"></a>
# **audioConvertToM4a**
> &#39;Blob&#39; audioConvertToM4a(opts)

Convert Audio File to M4A format.

Automatically detect audio file format and convert it to M4A format. Supports many input audio formats, including AAC, FLAC, M4A, MP2, MP3, OGG, WMA, and WAV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.AudioApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of an audio file being used for conversion. Use this option for files larger than 2GB.
  'bitRate': null // Object | Optional; Specify the desired bitrate of the converted audio file in kilobytes per second (kB/s). Value may be between 48 and 1,411. By default, the optimal bitrate will be chosen automatically.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.audioConvertToM4a(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of an audio file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **bitRate** | [**Object**](.md)| Optional; Specify the desired bitrate of the converted audio file in kilobytes per second (kB/s). Value may be between 48 and 1,411. By default, the optimal bitrate will be chosen automatically. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="audioConvertToMp3"></a>
# **audioConvertToMp3**
> &#39;Blob&#39; audioConvertToMp3(opts)

Convert Audio File to MP3 format.

Automatically detect audio file format and convert it to MP3 format. Supports many input audio formats, including AAC, FLAC, M4A, MP2, MP3, OGG, WMA, and WAV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.AudioApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of an audio file being used for conversion. Use this option for files larger than 2GB.
  'bitRate': null // Object | Optional; Specify the desired bitrate of the converted audio file in kilobytes per second (kB/s). Value may be between 48 and 1,411. By default, the optimal bitrate will be chosen automatically.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.audioConvertToMp3(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of an audio file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **bitRate** | [**Object**](.md)| Optional; Specify the desired bitrate of the converted audio file in kilobytes per second (kB/s). Value may be between 48 and 1,411. By default, the optimal bitrate will be chosen automatically. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="audioConvertToWav"></a>
# **audioConvertToWav**
> &#39;Blob&#39; audioConvertToWav(opts)

Convert Audio File to WAV format.

Automatically detect audio file format and convert it to WAV format. Supports many input audio formats, including AAC, FLAC, M4A, MP2, MP3, OGG, WMA, and WAV. Uses 1 API call per 10 MB of file size. Also uses 1 API call per additional minute of processing time over 5 minutes, up to a maximum of 25 minutes total processing time. Maximum output file size is 50GB.

### Example
```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');
var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveVideoApiClient.AudioApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // String | Optional; URL of an audio file being used for conversion. Use this option for files larger than 2GB.
  'sampleRate': null // Object | Optional; Specify the desired sample rate of the converted audio file in kHz. Value may be between 8 and 96. Standard for audio CDs is 44.1, while DVD audio standard is 48. By default, the optimal sample rate will be chosen automatically.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.audioConvertToWav(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | [optional] 
 **fileUrl** | **String**| Optional; URL of an audio file being used for conversion. Use this option for files larger than 2GB. | [optional] 
 **sampleRate** | [**Object**](.md)| Optional; Specify the desired sample rate of the converted audio file in kHz. Value may be between 8 and 96. Standard for audio CDs is 44.1, while DVD audio standard is 48. By default, the optimal sample rate will be chosen automatically. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

