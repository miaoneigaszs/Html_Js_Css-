var banner = document.getElementsByClassName('banner')[0];
window.onload = function() {
    banner.style.width = '20%';
    banner.style.opacity = 1;
}
// 获取所有的输入字段和提交按钮
const inputFields = document.querySelectorAll('.fflag');
const submitButtons = document.querySelectorAll('.submit');

// 为每个提交按钮添加点击事件监听器
submitButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    const inputValue = inputFields[index].value;
    const correctAnswer = 'flag{hello}';

    if (inputValue === correctAnswer) {
      alert('恭喜你回答正确');
      // 清空输入标签的值
      inputFields[index].value = '';
      // 或者重置整个表单
      // inputFields[index].form.reset();
    } else {
      alert('回答错误，请重新输入');
      // 清空输入标签的值
      inputFields[index].value = '';
      // 或者重置整个表单
      // inputFields[index].form.reset();
    }
  });
});
var ggroll = {
    piaochuang : document.getElementsByClassName('piaochuang')[0],
    speed : 20, 
    statusx : 1,
    statusy : 1,
    x : 100,
    y : 200,
    tox:1,
    toy:1,
    width:document.documentElement.clientWidth - document.getElementsByClassName("piaochuang")[0].offsetWidth,
    height:document.documentElement.clientHeight-document.getElementsByClassName("piaochuang")[0].offsetHeight,
    Go: function () {
    
        this.piaochuang.style.left = this.x + 'px';
        this.piaochuang.style.top = this.y + 'px';
        if (this.x+this.statusx<this.width&&(this.tox == 1)) {
            this.x+=this.statusx;
        }
        else {
            this.tox = 0;
            this.x -= this.statusx;
        }
        if (this.x-this.statusx>0&&this.tox == 0)
            this.x-=this.statusx;
        else {
            this.tox = 1;
            this.x+= this.statusx;
        }
        if (this.y+this.statusy<this.height&&(this.toy == 1)) {
            this.y+=this.statusy;
        }
        else {
            this.toy = 0;
            this.y -= this.statusy;
        }
        if (this.y-this.statusy>0&&this.toy == 0)
            this.y-=this.statusy;
        else {
            this.toy = 1;
            this.y+= this.statusy;
        }
    }
}
var interval = setInterval("ggroll.Go()", ggroll.speed);
ggroll.piaochuang.onmouseover=function(){clearInterval(interval)};
ggroll.piaochuang.onmouseout=function(){interval=setInterval("ggroll.Go()",ggroll.speed)};