# shortvanilla.js

![GitHub file size in bytes](https://img.shields.io/github/size/osmium2259/shortvanilla-js/shortvanilla.min.js?style=flat-square&label=Minified) ![GitHub License](https://img.shields.io/github/license/osmium2259/shortvanilla-js?style=flat-square&label=License)

> [!WARNING]
> This is a work in progress! Bug reports are appreciated :)

_shortvanilla.js_ is just that—vanilla JavaScript but shorter to write. It makes your code shorter by renaming built-in objects, functions, methods, etc. with shorter, more concise, names. OK, using a third-party JS library, is by definition, not vanilla, but bear with me. This library doesn't add or subtract any functionality from vanilla JS. It merely renames existing functionality.

Here is one of my favorite examples of how this library improves DX is the renaming of the `addEventListener` method to `on`. A breath of fresh air; much easier to type.

## How It Works

How does this re-naming happen? Technically the built-in names still exist. The new names are just monkey-patched into the objects as aliases to the those original names. This means you can keep using the built-in names and adopt _shortvanilla.js_ to whatever degree you like. 

## Installation

_shortvanilla.js_ can be installed by cloning this repo into your project and including the [shortvanilla.js](shortvanilla.js) or [shortvanilla.min.js](shortvanilla.min.js) script in your HTML:

```html
<script src="path/to/shortvanilla.min.js"></script>
```

## Usage

Using _shortvanilla.js_ is as easy as it gets. Just substitute a [supported](#support) built-in name with the _shortvanilla.js_ equivalent. The following table lists the supported built-ins and replacements. Remember, the built-in names remain untouched, so you can replace them gradually or mix and match.
Example
Here's an example of _shortvanilla.js_ in action in a side-by-side comparison with good old vanilla JavaScript:

```javascript
const startBtn = doc.qs('.stopwatch .start-btn')
const stopBtn = doc.qs('.stopwatch .stop-btn')

let timer
let time = 0
let pause = false

function showTime() {
    doc.qs('.stopwatch .display').txt = (time / 100).toFixed(2)
}

startBtn.on('click', (e) => {
    if (!pause) {
        timer = repeat(() => showTime(time += 1), 10)
        pause = true
        
        startBtn.txt = 'Pause'
        stopBtn.disabled = false
    } else {            
        clrRepeat(timer)
        pause = false

        startBtn.txt = 'Start'
    }
})

stopBtn.on('click', (e) => {
    clrRepeat(timer)
    pause = false
    time = 0
    
    stopBtn.disabled = true
    showTime()
})
```
This example was taken from the [stopwatch.js](demos/stopwatch.js) demo.

Here _shortvanilla.js_ is being used in inline JavaScript 😱 to create a simple dropdown component.

```html
<div class="dropdown" onclick="
    this.classList.toggle('show'); 
    this.qs('.selected').html = event.target.html; 
    this.qs('input').value = event.target.txt;">

    <div class="dropdown-item selected">Item 1</div>
    <div class="dropdown-item">Item 1</div>
    <div class="dropdown-item">Item 2</div>
    <div class="dropdown-item">Item 3</div>
    
    <input type="hidden" value="Item 1" name="dropdown">
</div>
```
This example was taken from the [inline.html](demos/inline.html) demo.

### Support

Here is a complete list of current supported built-in replacements.

| Built-in                 | Replacement  |
| ------------------------ | ------------ |
| `document`               | `doc`        |
| `window`                 | `win`        |
| `setTimeout`             | `timer`      |
| `clearTimeout`           | `clrTimer`   |
| `setInterval`            | `repeat`     |
| `clearInterval`          | `clrRepeat`  |
| `localStorage`           | `local`      |
| `sessionStorage`         | `session`    |
| `addEventListener`       | `on`         |
| `removeEventListener`    | `off`        |
| `dispatchEvent`          | `emit`       |
| `getElementById`         | `byId`       |
| `getElementsByTagName`   | `byTag`      |
| `getElementsByClassName` | `byClass`    |
| `getElementsByName`      | `byName`     |
| `querySelector`          | `qs`         |
| `querySelectorAll`       | `qss`        |
| `insertAdjacentHTML`     | `putHTML`    |
| `insertAdjacentElement`  | `putEl`      |
| `innerHTML`              | `html`       |
| `outerHTML`              | `ohtml`      |
| `forEach`                | `each`       |
| `textContent`            | `txt`        |

## Contributing

If you have a bug to report or want to make a suggestion for improvements or additions, please [open an issue](https://github.com/osmium2259/shortvanilla-js/issues) or participate in the [discussion](https://github.com/osmium2259/shortvanilla-js/discussions) section. Thank you!