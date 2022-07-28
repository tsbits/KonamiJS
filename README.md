# KonamiJS
🤖 A simple class to detect Konami code.

🔼🔼🔽🔽◀▶◀▶🅱🅰

## How it works
### Step 1 : Import
Import [Konami.js](Konami.js) into your project.

### Step 2 : Instanciate
Create A Konami instance like this :
```javascript
let k = new Konami();
```

### Step 3 : Listen
Now you instanciated KonamiJS, it listen automatically to all keypress and will trigger an event if the Konami sequence is detected. You can listen to the 'konami-detected' event on your instance. 
```javascript
k.addEventListener('konami-detected', (e) => {
  console.log(`Konami Code has been triggered ${e.detail.times} times.`);
});
```
The event passed to your callback will contains a e.detail.times number.
This killer feature gives you the power to double or even triple suprise that Konami adventurer.

You can reset the count using the "reset" method exposed by your instance.
```javascript
k.reset();
```

Have fun.
