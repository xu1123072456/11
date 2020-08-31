var yx = document.getElementsByClassName("zhu")[0].getElementsByClassName("gamecenter")[0];
var game = document.getElementsByClassName("game")[0];
yx.onmouseover = function() {
    game.style.display = "block"
}
yx.onmouseout = function() {
    game.style.display = "none"
}
/*游戏中心大框*/ 
var lie = document.getElementsByClassName("lie")[0].getElementsByTagName("a");
var san = document.getElementsByClassName("san")[0].getElementsByTagName("img");
for(var i = 0; i < lie.length; i++) {
    lie[i].setAttribute("sub", i); 
    lie[i].onmouseover = function() {
        var dian = +this.getAttribute("sub");
        san[dian].style.opacity = "1";
        lie[dian].style.backgroundColor = "#e5e9ef";
        lie[dian].style.color = "#00a1d6";
    }
    lie[i].onmouseout = function() {
        var dian = +this.getAttribute("sub");
        san[dian].style.opacity = "0";
        lie[dian].style.backgroundColor = "#fff";
        lie[dian].style.color = "#222";
    }
}
/*游戏中心列表图片*/
var wz = document.getElementsByClassName("wz")[0].getElementsByTagName("a");
for(var ba = 0; ba < wz.length; ba++) {
    wz[ba].setAttribute("back", ba);
    wz[ba].onmouseover = function() {
        var ck = +this.getAttribute("back");
        wz[ck].style.backgroundColor = "#eaeaea";
    }
    wz[ba].onmouseout = function() {
        var ck = +this.getAttribute("back");
        wz[ck].style.backgroundColor = "#fff";
    }
}
/*直播热门活动背景色*/

var live = document.getElementsByClassName("zhu")[0].getElementsByClassName("livemover")[0];
var zb = document.getElementsByClassName("zb")[0];
live.onmouseover = function() {
    zb.style.display = "block";
}
live.onmouseout = function() {
    zb.style.display = "none";
}
/*直播div*/
var ca = document.getElementsByClassName("cartoonleft")[0].getElementsByTagName("a");
for(var gray = 0; gray < ca.length; gray++) {
    ca[gray].setAttribute("too", gray);
    ca[gray].onmouseover = function() {
        var man = +this.getAttribute("too")
        ca[man].style.backgroundColor = "#f4f4f4"
    }
    ca[gray].onmouseout = function() {
        var man = +this.getAttribute("too");
        ca[man].style.backgroundColor = "#fff"
    }
}
/*漫画四格背景色*/
var list = document.getElementsByClassName("list")[0].getElementsByTagName("a");
var bank = document.getElementsByClassName("cartoon_bank")[0].getElementsByTagName("img");
for (aa = 0; aa < list.length; aa++) {
    list[aa].setAttribute("set", aa);
    list[aa].onmouseover = function() {
        var yi = +this.getAttribute("set");
        bank[yi].style.display = "block";
        list[yi].style.backgroundColor = "#f4f4f4"
    }
    list[aa].onmouseout = function() {
        var yi = +this.getAttribute("set");
        bank[yi].style.display = "none";
        list[yi].style.backgroundColor = "#fff"
    }
}
/*漫画列表图片*/
var cart = document.getElementsByClassName("cart")[0];
var cartdiv = document.getElementsByClassName("cartoon")[0];
cart.onmouseover = function() {
    cartdiv.style.display = "block";
}
cart.onmouseout = function() {
    cartdiv.style.display = "none";
}
/*漫画div*/
var plan = document.getElementsByClassName("planar")[0];
var app = document.getElementsByClassName("app")[0];
plan.onmouseover = function() {
    app.style.display = "block";
}
plan.onmouseout = function() {
    app.style.display = "none";
}
/*二维码div*/
var font = document.getElementsByClassName("ziti")[0].getElementsByTagName("p")[0];
var lan = document.getElementsByClassName("lan")[0];
font.onmouseover = function() {
    lan.style.display = "block";
    font.style.backgroundColor = "#eaeaea"
}
font.onmouseout = function() {
    lan.style.display = "none";
    font.style.backgroundColor = "#fff"
}
lan.onmouseover = function() {
    lan.style.display = "block"
}
lan.onmouseout = function() {
    lan.style.display = "none"
}
var yuyan = document.getElementsByClassName("lan")[0].getElementsByTagName("a");
var psp = font.getElementsByTagName("span")[0];
var i3 = document.getElementsByClassName("i3");
for(var pp = 0; pp <yuyan.length; pp++) {
    yuyan[pp].setAttribute("dj", pp);
    yuyan[pp].onclick = function() {
        var xuan = +this.getAttribute("dj");
        var sp = yuyan[xuan].getElementsByTagName("span")[0];
        if(sp.innerText !== psp.innerText) {
            psp.innerText = sp.innerText;     
        }
        for(var i = 0; i < yuyan.length; i++) {
            yuyan[i].style.color = "#222";
            console.log(yuyan[i])
            i3[i].style.display = "none";
        }
        yuyan[xuan].style.color = "#1890ff";
        i3[xuan].style.display = "inline-block";
    }
    yuyan[pp].onmouseover = function() {
        var xuan = +this.getAttribute("dj");
        yuyan[xuan].style.backgroundColor = "#eaeaea";
    }
    yuyan[pp].onmouseout = function() {
        var xuan = +this.getAttribute("dj");
        yuyan[xuan].style.backgroundColor = "#fff";
    }
}
/*登录语言 */
var rbox = document.getElementsByClassName("dll")[0];
var dan = document.getElementsByClassName("danmu")[0];
rbox.onmouseover = function() {
    dan.style.display = "block";
}
rbox.onmouseout = function() {
    dan.style.display = "none";
}
/*登录div */
var zl = document.getElementsByClassName("send")[0].getElementsByTagName("a");
for(var s = 0; s < zl.length; s++) {
    zl[s].setAttribute("to", s); 
    zl[s].onmouseover = function() {
        var gao = +this.getAttribute("to");
        zl[gao].style.backgroundColor = "#eaeaea";
    }
    zl[s].onmouseout = function() {
        var gao = +this.getAttribute("to");
        zl[gao].style.backgroundColor = "#fff";
    }
}
var tg = document.getElementsByClassName("tg")[0];
var send = document.getElementsByClassName("send")[0];
tg.onmouseover = function() {
    send.style.display = "block";
}
tg.onmouseout = function() {
    send.style.display = "none";
}
/*投稿 */