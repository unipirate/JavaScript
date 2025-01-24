/* 
选择一个红绿灯色块？

本内容所接触的知识点有：
- DOM 操作
- 事件监听器
- 循环forEach 
- 变量
- 条件语句 (if else if)
- 模板字符串
*/


// 将标题转换，并修改颜色
function changeTitle() {
  let title = document.getElementById('title')
  title.innerText = '这是一个转换完毕了的新标题'
  title.style.color = 'blue'
}

// 绑定点击事件
document.getElementById('changeButton').onclick = () => changeTitle()

const squares = document.querySelectorAll('.colorSquare')
const output = document.getElementById('output')

// 绑定每一给元素的点击事件
squares.forEach(square => {
  square.onclick = () => {
    _id = square.getAttribute('id');
    output.innerHTML = `<div class = 'colorSquare' id=${_id}></div>`
    //模板字符串
  }
})
