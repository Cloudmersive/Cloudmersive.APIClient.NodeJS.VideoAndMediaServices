# CloudmersiveVideoApiClient.NsfwResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successful** | **Boolean** | True if the operation was successful, false otherwise | [optional] 
**highestClassificationResult** | **String** | The highest NSFW classification of the video | [optional] 
**highestScore** | **Number** | The highest NSFW score out of all frames scanned | [optional] 
**totalRacyFrames** | **Number** | The total number of potentially \&quot;racy\&quot; frames. | [optional] 
**totalNsfwFrames** | **Number** | The total number of frames with high probability of NSFW. | [optional] 
**totalFrames** | **Number** | The total number of frames scanned | [optional] 
**nsfwScannedFrames** | [**[NsfwScannedFrame]**](NsfwScannedFrame.md) | The NSFW scanning results for each frame | [optional] 


