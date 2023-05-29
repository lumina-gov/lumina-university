In HTML, elements can have attributes, which provide additional information about the element or adjust their behavior in some way. When dealing with video elements in HTML, there are several attributes that we can use to control the video's behavior.

## HTML Video Element

The HTML `<video>` element is used to embed video content in a web page. The video content can be any video file format supported by the browser, like MP4, WebM, or OGG.

Here's a simple example of a video element:

```html
<video src="movie.mp4"></video>
```

In this example, `src` is an attribute that specifies the source file for the video.

## Attributes of the Video Element

There are several attributes that you can use with the `<video>` element. Below is a table that includes some of the most commonly used attributes.

| Attribute | Value | Description |
| --- | --- | --- |
| src | URL | Specifies the source file for the video. |
| controls | No Value | This is a boolean attribute. If present, it displays the default video controls (Play/Pause, Mute, Volume control, Fullscreen, etc). |
| autoplay | No Value | Another boolean attribute. If present, the video will start playing as soon as it's ready. |
| loop | No Value | If this boolean attribute is present, the video will start over again every time it finishes. |
| muted | No Value | If this boolean attribute is present, the audio output of the video will be muted. |
| poster | URL | Specifies an image to be shown while the video is downloading, or until the user hits the play button. |
| width | Pixels | Specifies the width of the video player on the web page. |
| height | Pixels | Specifies the height of the video player on the web page. |
| preload | auto, metadata, none | Specifies how the browser should load the video when the page loads. auto tells the browser to load the entire video when the page loads, metadata tells it to load only metadata, and none prevents the video from loading when the page loads. |

:::note
Remember, Boolean attributes like `controls`, `autoplay`, `loop`, `muted` are either present or not. They do not require a value.
:::

Here's an example of a video element using some of these attributes:


```html
<video src="movie.mp4" controls width="320" height="240" poster="poster.jpg"></video>
```

In this example, the `controls` attribute adds default video controls, and the `width` and `height` attributes resize the video player on the page. The `poster` attribute sets an image to display before the video is played.

:::warning
Always consider user experience when deciding which attributes to use. For example, `autoplay` can be irritating for some users, especially if the video plays sound immediately upon loading the page - some browsers block this by default.
:::

:::warning
You will generally not use values such as `width` and `height` as its preferred to set styles in the form of CSS for greater flexibility
:::