# reveal.js-symbol-per-slide-progress

A progress plugin for [Reveal.js](https://github.com/hakimel/reveal.js) which shows every slide as single symbol and the symbol of the current slide in a different color.
[Check out the live demo](https://naamor.github.io/reveal.js-symbol-per-slide-progress/).

## Installation

### npm

Download and install the package in your project:

```npm install --save reveal.js-symbol-per-slide-progress```

Add the plugin to the dependencies in your presentation:

```javascript
Reveal.initialize({
    // ...

    dependencies: [
        // ...

        { src: 'node_modules/reveal.js-symbol-per-slide-progress/symbol-per-slide-progress.js', async: true }
    ]
});
```

### Manual

Copy this repository into the plugins folder of your reveal.js presentation, i.e. ```plugins/symbol-per-slide-progress```.

Add the plugin to the dependencies in your presentation:

```javascript
Reveal.initialize({
    // ...

    dependencies: [
        // ...

        { src: 'plugin/symbol-per-slide-progress/symbol-per-slide-progress.js', async: true }
    ]
});
```

## Configuration

You can configure the alternative progress plugin for your presentation by providing a ```symbolperslideprogress``` option in the reveal.js initialization options. Note that all configuration values are optional and will default to the values specified below.

```javascript
Reveal.initialize({
    // ...

    symbolperslideprogress: {
        // Specifies if the symbols should be on the left
        // or the right side in the presentation.
        position: "left", // left/right

        // Specifies if the symbols should be horizontally
        // or vertically arranged.
        align: "vertical", // vertical/horizontal

        // Specifies the color for the symbols.
        // Default is the font color of your selected theme
        // Color names like red, Hex codes like #ff0000 and RGB values like rgb(255, 0, 0) are working
        symbolColor: "", // Colors like red/#ff0000/rgb(255, 0, 0)

        // Specifies the color for the symbol of the current active slide.
        // Default is the link color of your selected theme
        // Color names like red, Hex codes like #ff0000 and RGB values like rgb(255, 0, 0) are working
        symbolActiveColor: "",
    },
});
```

## License

[MIT licensed](https://en.wikipedia.org/wiki/MIT_License)

Copyright (C) 2018 Roman Stocker
