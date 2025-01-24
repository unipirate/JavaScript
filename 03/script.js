let seconds = 0
let m_seconds = 0
const displayMSeconds = document.getElementById('m_seconds')
const displaySeconds = document.getElementById('seconds')
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')
let interval
let started = false

// 绑定 buttonStart 按鈕的触发事件
buttonStart.onclick = () => {
  if (!started) {
    interval = setInterval(timer, 10)
    started = true
  }
}

// 绑定 buttonStop 按钮的触发事件
buttonStop.onclick = () => {
  clearInterval(interval)
  started = false
}

// 绑定 buttonReset 按钮的触发事件
buttonReset.onclick = () => {
  clearInterval(interval)
  started = false
  m_seconds = 0
  seconds = 0
  displayMSeconds.innerHTML = `00`
  displaySeconds.innerHTML = `00`
}

// 码表计时器
const timer = () => {
  m_seconds++
  if (m_seconds <= 9) {
    displayMSeconds.innerHTML = `0${m_seconds}`
  } else if (m_seconds <= 99) {
    displayMSeconds.innerHTML = `${m_seconds}`
  } else {
    seconds++
    m_seconds = 0
    if (seconds <= 9) {
      displaySeconds.innerHTML = `0${seconds}`
    } else if (seconds <= 59) {
      displaySeconds.innerHTML = `${seconds}`
    } else {
      seconds = 0
      displaySeconds.innerHTML = `00`
    }
  }
}
