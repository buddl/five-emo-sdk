# five-emo-sdk
The SDK to use 5 Emotions

# Embed 5 Emotions into your website

With a few lines of code, you can embed 5 Emotions.

## Embed a small frame 
```js
<div id="fiveemo_id"></div>
<script type='text/javascript' src='https://www.5emotions.de/api/js?callback=initFiveEmo' async defer></script>
<script type='text/javascript'>function initFiveEmo() {
    var fiveemo = new FiveEmo({ objectid: '[OBJECTID]', mode: 'iframe', width: '200px', height: '50px' });
}</script>
```

## Embed a big frame in Kiosk mode 
```js
<div id="fiveemo_id"></div>
<script type='text/javascript' src='https://www.5emotions.de/api/js?callback=initFiveEmo' async defer></script>
<script type='text/javascript'>function initFiveEmo() {
    var fiveemo = new FiveEmo({ objectid: '[OBJECTID]', mode: 'kiosk', width: '100%', height: '600px' });
}</script>
```

## Embed a small icon to open a popup window 
```js
<div id="fiveemo_id"></div>
<script type='text/javascript' src='https://www.5emotions.de/api/js?callback=initFiveEmo' async defer></script>
<script type='text/javascript'>function initFiveEmo() {
    var fiveemo = new FiveEmo({ objectid: '[OBJECTID]', mode: 'popup' });
}</script>
```
