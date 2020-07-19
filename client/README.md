# cloudmersive-video-api-client

CloudmersiveVideoApiClient - JavaScript client for cloudmersive-video-api-client
The video APIs help you convert, encode, and transcode videos.
[Cloudmersive Video and Media Services API](https://github.com/Cloudmersive/Cloudmersive.APIClient.NodeJS.DocumentAndDataConvert.git) - Convert and encode video and media files and content between file formats. On-demand.

- API version: v1
- Package version: 2.0.1


## Installation

### For the [Cloudmersive Video and Media Services API](https://cloudmersive.com/video-and-media-services-api)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-video-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-video-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-video-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveVideoApiClient = require('cloudmersive-video-api-client');

var defaultClient = CloudmersiveVideoApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveVideoApiClient.VideoApi()

var inputFile = "/path/to/file.txt"; // {File} Input file to perform the operation on.

var opts = { 
  'fileUrl': "fileUrl_example", // {String} Optional; URL of a video file being used for conversion. Use this option for files larger than 2GB.
  'maxWidth': 56, // {Number} Optional; Maximum width of the output video, up to the original video width. Defaults to 250 pixels.
  'maxHeight': 56, // {Number} Optional; Maximum height of the output video, up to the original video width. Defaults to 250 pixels.
  'preserveAspectRatio': true, // {Boolean} Optional; If false, the original video's aspect ratio will not be preserved, allowing customization of the aspect ratio using maxWidth and maxHeight, potentially skewing the video. Default is true.
  'frameRate': 56, // {Number} Optional; Specify the frame rate of the output video. Defaults to 24 frames per second.
  'extendProcessingTime': true, // {Boolean} Optional; If true, will allow additional processing time for the video file conversion, using one API call per additional minute over the 5 minute default processing time, up to a maximum of 25 total minutes. This is generally necessary for files larger than 500 MB or longer than 30 minutes.
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // {Date} Optional; Specify the desired starting time of the GIF video in TimeSpan format.
  'timeSpan': new Date("2013-10-20T19:20:30+01:00") // {Date} Optional; Specify the desired length of the GIF video in TimeSpan format. Limit is 30 minutes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.videoConvertToGif(inputFile, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveVideoApiClient.VideoApi* | [**videoConvertToGif**](docs/VideoApi.md#videoConvertToGif) | **POST** /video/convert/to/gif | Convert Video to Animated GIF format.
*CloudmersiveVideoApiClient.VideoApi* | [**videoConvertToMov**](docs/VideoApi.md#videoConvertToMov) | **POST** /video/convert/to/mov | Convert Video to MOV format.
*CloudmersiveVideoApiClient.VideoApi* | [**videoConvertToMp4**](docs/VideoApi.md#videoConvertToMp4) | **POST** /video/convert/to/mp4 | Convert Video to MP4 format.
*CloudmersiveVideoApiClient.VideoApi* | [**videoConvertToWebm**](docs/VideoApi.md#videoConvertToWebm) | **POST** /video/convert/to/webm | Convert Video to WEBM format.
*CloudmersiveVideoApiClient.VideoApi* | [**videoGetInfo**](docs/VideoApi.md#videoGetInfo) | **POST** /video/convert/get-info | Get detailed information about a video or audio file


## Documentation for Models

 - [CloudmersiveVideoApiClient.MediaInformation](docs/MediaInformation.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

