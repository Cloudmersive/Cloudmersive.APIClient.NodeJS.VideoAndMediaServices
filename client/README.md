# cloudmersive-video-api-client

CloudmersiveVideoApiClient - JavaScript client for cloudmersive-video-api-client
The video APIs help you convert, encode, and transcode videos.
[Cloudmersive Video and Media Services API](https://github.com/Cloudmersive/Cloudmersive.APIClient.NodeJS.DocumentAndDataConvert.git) - Convert and encode video and media files and content between file formats. On-demand.

- API version: v1
- Package version: 2.0.4


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

var api = new CloudmersiveVideoApiClient.AudioApi()

var opts = { 
  'inputFile': "/path/to/file.txt", // {File} Input file to perform the operation on.
  'fileUrl': "fileUrl_example", // {String} Optional; URL of an audio file being used for conversion. Use this option for files larger than 2GB.
  'bitRate': 56 // {Number} Optional; Specify the desired bitrate of the converted audio file in kilobytes per second (kB/s). Value may be between 48 and 1,411. By default, the optimal bitrate will be chosen automatically.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.audioConvertToAac(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveVideoApiClient.AudioApi* | [**audioConvertToAac**](docs/AudioApi.md#audioConvertToAac) | **POST** /video/convert/to/aac | Convert Audio File to AAC format.
*CloudmersiveVideoApiClient.AudioApi* | [**audioConvertToM4a**](docs/AudioApi.md#audioConvertToM4a) | **POST** /video/convert/to/m4a | Convert Audio File to M4A format.
*CloudmersiveVideoApiClient.AudioApi* | [**audioConvertToMp3**](docs/AudioApi.md#audioConvertToMp3) | **POST** /video/convert/to/mp3 | Convert Audio File to MP3 format.
*CloudmersiveVideoApiClient.AudioApi* | [**audioConvertToWav**](docs/AudioApi.md#audioConvertToWav) | **POST** /video/convert/to/wav | Convert Audio File to WAV format.
*CloudmersiveVideoApiClient.VideoApi* | [**videoConvertToGif**](docs/VideoApi.md#videoConvertToGif) | **POST** /video/convert/to/gif | Convert Video to Animated GIF format.
*CloudmersiveVideoApiClient.VideoApi* | [**videoConvertToMov**](docs/VideoApi.md#videoConvertToMov) | **POST** /video/convert/to/mov | Convert Video to MOV format.
*CloudmersiveVideoApiClient.VideoApi* | [**videoConvertToMp4**](docs/VideoApi.md#videoConvertToMp4) | **POST** /video/convert/to/mp4 | Convert Video to MP4 format.
*CloudmersiveVideoApiClient.VideoApi* | [**videoConvertToStillFrames**](docs/VideoApi.md#videoConvertToStillFrames) | **POST** /video/convert/to/still-frames | Convert Video to PNG Still Frames.
*CloudmersiveVideoApiClient.VideoApi* | [**videoConvertToWebm**](docs/VideoApi.md#videoConvertToWebm) | **POST** /video/convert/to/webm | Convert Video to WEBM format.
*CloudmersiveVideoApiClient.VideoApi* | [**videoCutVideo**](docs/VideoApi.md#videoCutVideo) | **POST** /video/cut | Cut a Video to a Shorter Length
*CloudmersiveVideoApiClient.VideoApi* | [**videoGetInfo**](docs/VideoApi.md#videoGetInfo) | **POST** /video/convert/get-info | Get detailed information about a video or audio file
*CloudmersiveVideoApiClient.VideoApi* | [**videoResizeVideo**](docs/VideoApi.md#videoResizeVideo) | **POST** /video/resize/preserveAspectRatio | Resizes a Video Preserving the Original Aspect Ratio.
*CloudmersiveVideoApiClient.VideoApi* | [**videoResizeVideoSimple**](docs/VideoApi.md#videoResizeVideoSimple) | **POST** /video/resize/target | Resizes a Video without Preserving Aspect Ratio.
*CloudmersiveVideoApiClient.VideoApi* | [**videoScanForNsfw**](docs/VideoApi.md#videoScanForNsfw) | **POST** /video/scan/nsfw | Scan a Video for NSFW content.
*CloudmersiveVideoApiClient.VideoApi* | [**videoSplitVideo**](docs/VideoApi.md#videoSplitVideo) | **POST** /video/split | Split a Video into Two Shorter Videos


## Documentation for Models

 - [CloudmersiveVideoApiClient.MediaInformation](docs/MediaInformation.md)
 - [CloudmersiveVideoApiClient.NsfwResult](docs/NsfwResult.md)
 - [CloudmersiveVideoApiClient.NsfwScannedFrame](docs/NsfwScannedFrame.md)
 - [CloudmersiveVideoApiClient.SplitVideoResult](docs/SplitVideoResult.md)
 - [CloudmersiveVideoApiClient.StillFrame](docs/StillFrame.md)
 - [CloudmersiveVideoApiClient.StillFramesResult](docs/StillFramesResult.md)
 - [CloudmersiveVideoApiClient.VideoFile](docs/VideoFile.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

