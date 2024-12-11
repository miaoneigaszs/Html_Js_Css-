 var num = document.getElementsByClassName('num');
 var imgs = document.getElementsByClassName('image');
 num[0].onclick = function() {
    imgs[0].className = 'active image';
    imgs[1].className = 'so image';
    imgs[2].className = 'so image';
    imgs[3].className = 'so image';
    color();
 }
 console.log(num);
 console.log(imgs);
 num[1].onclick = function() {
    imgs[1].className = 'active image';
    imgs[0].className = 'so image';
    imgs[2].className = 'so image';
    imgs[3].className = 'so image';
    color();
 }
 num[2].onclick = function() {
    imgs[2].className = 'active image';
    imgs[1].className = 'so image';
    imgs[0].className = 'so image';
    imgs[3].className = 'so image';
    color();
 }
 num[3].onclick = function() {
    imgs[3].className = 'active image';
    imgs[1].className = 'so image';
    imgs[2].className = 'so image';
    imgs[0].className = 'so image';
    color();
 }
 function color() {
    for (var i = 0; i < 4; i++) {
        if (imgs[i].className == 'active image')
            num[i].style.background = 'red';
        else num[i].style.background = 'white';       
    }
 }
 function audio() {
    var flag;
    for (var i = 0; i < 4; i++) { 
        if (imgs[i].className == 'active image') {
            flag = i;
            imgs[flag].className = 'so image';
            break;
        }
    }
    console.log(flag);
    if (flag == 3)
        flag = -1;
    flag++;
    imgs[flag].className = 'active image';
    color();
 }
 setInterval(function audio() {
    var flag;
    for (var i = 0; i < 4; i++) { 
        if (imgs[i].className == 'active image') {
            flag = i;
            imgs[flag].className = 'so image';
            break;
        }
    }
    if (flag == 3)
        flag = -1;
    flag++;
    imgs[flag].className = 'active image';
    color();
 }, 3000);
 var sub1 = document.getElementsByClassName("sub1");
 var sub2 = document.getElementsByClassName('sub2');
 var yaowen = document.getElementsByClassName('yaowen');
 var jiaodian = document.getElementsByClassName('jiaodian');
 sub1[0].onmouseover = function() {
    yaowen[0].style.display = 'block';
    jiaodian[0].style.display = 'none';
 }
 sub2[0].onmouseover = function() {
    yaowen[0].style.display = 'none';
    jiaodian[0].style.display = 'block';
 }
//  .sub1[0].onclick = function() {
//     yaowen[0].style.display = 'block';
//     jiaodian[0].style.display = 'none';
//  }
//  .sub2[0].onclick = function() {
//     yaowen[0].style.display = 'none';
//     jiaodian[0].style.display = 'block';
//  }
var con1 = document.getElementsByClassName("con1");
var con2 = document.getElementsByClassName('con2');
var form = document.getElementsByClassName('form');
var form1 = document.getElementsByClassName('form1');
con1[0].onclick = function() {
    form[0].style.display = 'block';
    form1[0].style.display = 'none';
 }
 con2[0].onclick = function() {
    form[0].style.display = 'none';
    form1[0].style.display = 'block';
 }

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