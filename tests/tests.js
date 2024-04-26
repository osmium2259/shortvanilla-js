const assert = chai.assert

suite('Names', function () {
    setup(function () {
        this.el = document.createElement('div')

        for (let i = 0; i < 3; i++) {
            this.el.appendChild(document.createElement('div'))
        }

        this.nodeList = this.el.querySelectorAll('div')

        this.errMsg = function(alias, original) {
            return `${alias} is not an alias of ${original}`
        }
    })

    test('byId', function () {
        assert.strictEqual(document.byId, document.getElementById, this.errMsg('document.byId', 'document.getElementById'))
        assert.strictEqual(this.el.byId, this.el.getElementById, this.errMsg('<element>.byId', '<element>.getElementById'))
    })

    test('byClass', function () {
        assert.strictEqual(document.byClass, document.getElementsByClassName, this.errMsg('document.byClass', 'document.getElementsByClassName'))
        assert.strictEqual(this.el.byClass, this.el.getElementsByClassName, this.errMsg('<element>.byClass', '<element>.getElementsByClassName'))
    })

    test('byTag', function () {
        assert.strictEqual(document.byTag, document.getElementsByTagName, this.errMsg('document.byTag', 'document.getElementsByTagName'))
        assert.strictEqual(this.el.byTag, this.el.getElementsByTagName, this.errMsg('<element>.byTag', '<element>.getElementsByTagName'))
    })

    test('byName', function () {
        assert.strictEqual(document.byName, document.getElementsByName, this.errMsg('document.byName', 'document.getElementsByName'))
        assert.strictEqual(this.el.byName, this.el.getElementsByName, this.errMsg('<element>.byName', '<element>.getElementsNyName'))
    })

    test('qs', function() {
        assert.strictEqual(document.qs, document.querySelector, this.errMsg('document.qs', 'document.querySelector'))
        assert.strictEqual(this.el.qs, this.el.querySelector, this.errMsg('<element>.qs', '<element>.querySelector'))
    })

    test('qss', function() {
        assert.strictEqual(document.qss, document.querySelectorAll, this.errMsg('document.qss', 'document.querySelectorAll'))
        assert.strictEqual(this.el.qss, this.el.querySelectorAll, this.errMsg('<element>.qss', '<element>.querySelectorAll'))
    })

    test('on', function () {
        assert.strictEqual(window.on, window.addEventListener, this.errMsg('window.on', 'window.addEventListener'))
        assert.strictEqual(document.on, document.addEventListener, this.errMsg('document.on', 'document.addEventListener'))
        assert.strictEqual(this.el.on, this.el.addEventListener, this.errMsg('<element>.on', '<element>.addEventListener'))
    })

    test('off', function () {
        assert.strictEqual(window.off, window.removeEventListener, this.errMsg('window.off', 'window.removeEventListener'))
        assert.strictEqual(document.off, document.removeEventListener, this.errMsg('document.off', 'document.removeEventListener'))
        assert.strictEqual(this.el.off, this.el.removeEventListener, this.errMsg('<element>.off', '<element>.removeEventListener'))
    })

    test('putHTML', function () {
        assert.strictEqual(this.el.putHTML, this.el.insertAdjacentHTML, this.errMsg('<element>.putHTML', '<element>.insertAdjacentHTML'))
    })

    test('each', function () {
        assert.strictEqual(this.nodeList.each, this.nodeList.forEach, this.errMsg('<nodeList>.each', '<nodeList>.forEach'))
    })

    test('emit', function() {
        assert.strictEqual(window.emit, window.dispatchEvent, this.errMsg('window.emit', 'window.dispatchEvent'))
        assert.strictEqual(document.emit, document.dispatchEvent, this.errMsg('document.emit', 'document.dispatchEvent'))
        assert.strictEqual(this.el.emit, this.el.dispatchEvent, this.errMsg('<element>.emit', '<element>.dispatchEvent'))
    })

    test('doc', function () {
        assert.strictEqual(doc, document, this.errMsg('doc', 'document'))
    })

    test('win', function () {
        assert.strictEqual(win, window, this.errMsg('win', 'window'))
    })

    test('timer', function () {
        assert.strictEqual(timer, setTimeout, this.errMsg('timer', 'setTimeout'))
    })

    test('clrTimer', function () {
        assert.strictEqual(clrTimer, clearTimeout, this.errMsg('clrTimer', 'clearTimeout'))
    })

    test('repeat', function () {
        assert.strictEqual(repeat, setInterval, this.errMsg('repeat', 'setInterval'))
    })

    test('clrRepeat', function () {
        assert.strictEqual(clrRepeat, clearInterval, this.errMsg('clrRepeat', 'clearInterval'))
    })

    test('txt', function () {
        assert.strictEqual(document.txt, document.textContent, this.errMsg('document.txt', 'document.textContent'))
        assert.strictEqual(this.el.txt, this.el.textContent, this.errMsg('<element>.txt', '<element>.textContent'))
    })

    test('html', function () {
        assert.strictEqual(this.el.html, this.el.innerHTML, this.errMsg('<element>.html', '<element>.innerHTML'))
    })

    test('ohtml', function () {
        assert.strictEqual(this.el.ohtml, this.el.outerHTML, this.errMsg('<element>.ohtml', '<element>.outerHTML'))
    })
})
