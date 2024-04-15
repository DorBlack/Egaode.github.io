var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:11,
    center: [121.505302, 31.244601]
});


// 构造点标记
var marker = new AMap.Marker({
    icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
    position: [121.466825, 31.172331]
});


// 构造矢量圆形
var circle1 = new AMap.Circle({
    center: new AMap.LngLat("121.46", "31.17"), // 圆心位置
    radius: 3000,  //半径
    strokeColor: "#F33",  //线颜色
    strokeOpacity: 1,  //线透明度
    strokeWeight: 3,  //线粗细度
    fillColor: "#ee2200",  //填充颜色
    fillOpacity: 0.35 //填充透明度
});

// 构造矢量圆形
var circle2 = new AMap.Circle({
    center: new AMap.LngLat("121.42", "31.19"), // 圆心位置
    radius: 3000,  //半径
    strokeColor: "#F33",  //线颜色
    strokeOpacity: 1,  //线透明度
    strokeWeight: 3,  //线粗细度
    fillColor: "#ee2200",  //填充颜色
    fillOpacity: 0.35 //填充透明度
});


//事件绑定
document.querySelector("#add-marker").onclick = function() {
    map.add(marker);
    map.setFitView();
}
document.querySelector("#remove-marker").onclick = function() {
    map.remove(marker);
    map.setFitView();
}
document.querySelector("#add-circle").onclick = function() {
    map.add(circle1);
    map.add(circle2)
    map.setFitView();
}
document.querySelector("#remove-circle").onclick = function() {
    map.remove(circle1);
    map.remove(circle2);
    map.setFitView();
}

document.querySelector("#toggle-panel").onclick = function() {
    var controlPanel = document.getElementById('controler');
    if (controlPanel.style.display === 'none') {
        controlPanel.style.display = 'block';  // 显示控件
        var tg = document.getElementById('toggle-panel');
        tg.textContent = 'hide';
    } else {
        controlPanel.style.display = 'none';   // 隐藏控件
        var tg = document.getElementById('toggle-panel');
        tg.textContent = 'display';
    }
}

