var diqiu = document.getElementsByClassName('diqiu')[0];
var ziluolan = document.getElementsByClassName('ziluolan')[0];
var fis = document.getElementsByClassName('fis')[0];
var sec = document.getElementsByClassName('sec')[0];
var top_words = document.getElementsByClassName('top_words')[0];
var top_words1 = document.getElementsByClassName('top_words1')[0];
var zuo = document.getElementsByClassName('zuo')[0];
var you = document.getElementsByClassName('you')[0];
sec.onclick = function() {
    diqiu.style.opacity = 0;
    ziluolan.style.opacity = 1;
    top_words.style.opacity = 0;
    top_words1.style.opacity = 1;
    diqiu.pause();
    diqiu.style.display = 'none';
    ziluolan.style.display = 'block';
    sec.style.background = 'skyblue';
    sec.style.color = 'white';
    fis.style.background = 'white';
    fis.style.color = 'black';
}
fis.onclick = function() {
    diqiu.style.opacity = 1;
    ziluolan.style.opacity = 0;
    top_words1.style.opacity = 0;
    top_words.style.opacity = 1;
    ziluolan.pause();
    ziluolan.style.display = 'none';
    diqiu.style.display = 'block';
    fis.style.background = 'skyblue';
    fis.style.color = 'white';
    sec.style.background = 'white';
    sec.style.color = 'black';
}
you.onclick = function() {
    diqiu.style.opacity = 0;
    ziluolan.style.opacity = 1;
    top_words.style.opacity = 0;
    top_words1.style.opacity = 1;
    diqiu.pause();
    diqiu.style.display = 'none';
    ziluolan.style.display = 'block';
    sec.style.background = 'skyblue';
    sec.style.color = 'white';
    fis.style.background = 'white';
    fis.style.color = 'black';
}
zuo.onclick = function() {
    diqiu.style.opacity = 1;
    ziluolan.style.opacity = 0;
    top_words1.style.opacity = 0;
    top_words.style.opacity = 1;
    ziluolan.pause();
    ziluolan.style.display = 'none';
    diqiu.style.display = 'block';
    fis.style.background = 'skyblue';
    fis.style.color = 'white';
    sec.style.background = 'white';
    sec.style.color = 'black';
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