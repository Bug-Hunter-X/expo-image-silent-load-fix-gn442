This bug occurs when using Expo's `Image` component with a remote URI that is very large or complex.  The image fails to load and no error is thrown.  The console remains silent, making debugging difficult.  This is often due to network issues, but sometimes occurs even when the network is stable and the image URI is correct.  This makes it hard to distinguish between actual network problems and Expo's image handling limits.

```javascript
<Image source={{ uri: 'https://verylong.image.uri.that/might/cause/problems.jpg' }} style={{ width: 300, height: 200 }} />
```