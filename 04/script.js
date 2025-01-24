/*
剪刀石头布 🚀🔥
作品包含的知识点：
👉 循环
👉 DOM 操作
👉 变量
👉 条件语句 (if else if)
👉 模板字符串
👉 事件监听器
👉 随机函数 (Math.random())
*/

const pssChoices = ['Stone', 'Scissors', 'Paper']

// ** getComputerChoice 函数随机从 stone paper scissors 选择一个字符串 **
// getComputerChoice() 👉 '石头'
// getComputerChoice() 👉 '剪刀'
function getComputerChoice() {
  var computerChoice = pssChoices[Math.floor(Math.random() * pssChoices.length)]
  return computerChoice
}
// ** getResult 函数对比 playerChoice 和 computerChoice 返回对应得分 **
// 玩家贏 - getResult('石头', '剪刀') 👉 1
// 玩家输 - getResult('剪刀', '石头') 👉 -1
// 平手 - getResult('石头', '石头') 👉 0
function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 0
  } else if (
    (playerChoice === 'Stone' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Stone')
  ) {
    return 1
  } else {
    return -1
  }
}

// showResult 函数根据得分 DOM 上更新为 你贏了 或 你输了 或 平手！，
// 同时显示玩家和计算机的选择。

function showResult(score, playerChoice, computerChoice) {
// 提示：在得分为 -1 的情况下，
// 应该将 result.innerText 设置为 'You Lose!'
// 不要忘记提取 id 为 'result' 的 div！
  let result = document.getElementById('result')
  switch(score) {
    case 1:
      result.innerText = `You Win!\nComputer chose ${computerChoice}!\nPlayer chose ${playerChoice}!`
      break
    case -1:
      result.innerText = `You Lose!\nComputer chose ${computerChoice}!\nPlayer chose ${playerChoice}!`
      break
    case 0:
      result.innerText = `Draw!\nComputer chose ${computerChoice}!\nPlayer chose ${playerChoice}!`
      break
  }
}
// ** 计算输赢并显示 **
function onClickPSS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)
}

// ** 是按钮 actively 监听点击事件，一旦检查出点击立即执行动作 **
function playGame() {
  // 使用 querySelector 选择所有按钮
  // * 为每个剪刀石头布按钮添加点击事件监听器，每次点击，它都会使用上次单击的 PSS 按钮调用 onClickPSS 函数 *
  let pssButtons = document.querySelectorAll('.pssButton')


  // 1. 使用 forEach 循环遍历所有剪刀石头布按鈕
  // 2. 为每个按钮添加 'click' 事件监听器
  // 3. 每当有人单击时调用 onClickPSS 函数
  // 4. 確保將当前选择的剪刀石头布按钮作为数据传递
  pssButtons.forEach(button => {
    button.addEventListener('click', () => {
      onClickPSS(button.value)
    })
  })
  



  // 添加 click 事件监听器到结束游戏按钮，单击时运行 endGame() 函数

  let endGameBtn = document.getElementById('endGameButton')
  endGameBtn.addEventListener('click', () =>{
    endGame()
  })
  
}



// ** endGame 函数清除 DOM 上的所有文本 **
function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')

  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()
