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
