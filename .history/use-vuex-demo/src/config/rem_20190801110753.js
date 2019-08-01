/**
 * 将全局变量传入，函数内部可以访问到window、document的局部变量，每次访问在函数内部可以直接找到 
 * */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (client / 320) + 'px';
        };
    可以添加监听的情况下，一旦用户操作横屏，或者调整了屏幕尺寸，调用 recalc    
    if(!doc.addEventLister) return;
    win.addEventLister(resizeEvt,recalc,false);
    doc.addEventLister('DOMContentLoaded',recalc,false);
})