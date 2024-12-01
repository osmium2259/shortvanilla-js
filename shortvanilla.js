window.SHORTVANILLA_NAMES = [
    [this, 'document', 'doc'],
    [this, 'window', 'win'],
    [this, 'setTimeout', 'timer'],
    [this, 'clearTimeout', 'clrTimer'],
    [this, 'setInterval', 'repeat'],
    [this, 'clearInterval', 'clrRepeat'],
    [window, 'localStorage', 'local'],
    [window, 'sessionStorage', 'session'],
    [Window.prototype, 'addEventListener', 'on'],
    [Document.prototype, 'addEventListener', 'on'],
    [Element.prototype, 'addEventListener', 'on'],
    [Window.prototype, 'removeEventListener', 'off'],
    [Document.prototype, 'removeEventListener', 'off'],
    [Element.prototype, 'removeEventListener', 'off'],
    [Window.prototype, 'dispatchEvent', 'emit'],
    [Document.prototype, 'dispatchEvent', 'emit'],
    [Element.prototype, 'dispatchEvent', 'emit'],
    [Document.prototype, 'getElementById', 'byId'],
    [Element.prototype, 'getElementById', 'byId'],
    [Document.prototype, 'getElementsByTagName', 'byTag'],
    [Element.prototype, 'getElementsByTagName', 'byTag'],
    [Document.prototype, 'getElementsByClassName', 'byClass'],
    [Element.prototype, 'getElementsByClassName', 'byClass'],
    [Document.prototype, 'getElementsByName', 'byName'],
    [Document.prototype, 'querySelector', 'qs'],
    [Element.prototype, 'querySelector', 'qs'],
    [Document.prototype, 'querySelectorAll', 'qss'],
    [Element.prototype, 'querySelectorAll', 'qss'],
    [Element.prototype, 'insertAdjacentHTML', 'putHTML'],
    [Element.prototype, 'insertAdjacentElement', 'putEl'],
    [Element.prototype, 'innerHTML', 'html'],
    [Element.prototype, 'outerHTML', 'ohtml'],
    [NodeList.prototype, 'forEach', 'each'],
    [Node.prototype, 'textContent', 'txt'],
]

for (const name of SHORTVANILLA_NAMES) {
    try {
        name[0].__defineGetter__(name[2], name[0].__lookupGetter__(name[1]))
        name[0].__defineSetter__(name[2], name[0].__lookupSetter__(name[1]))

    } catch(e) {
        name[0][name[2]] = name[0][name[1]]
    }
}
