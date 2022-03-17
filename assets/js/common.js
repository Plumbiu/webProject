window.onload=function() {
    function getDate(){
        var date=new Date();
        var month=date.getMonth()+1;
        var dates=date.getDate();
        var day=date.getDay();
        var arr=[' 星期日',' 星期一',' 星期二',' 星期三',' 星期四',' 星期五',' 星期六'];
        return month+'月'+dates+'日'+arr[day]
    }
    var dates=document.getElementById('date');
    console.log(dates);
    dates.innerHTML=getDate();
    function getTimer(){
        var time=new Date();
        var h=time.getHours();
        h=h<10?'0'+h:h;
        var m=time.getMinutes();
        m=m<10?'0'+m:m;
        var s=time.getSeconds();
        s=s<10?'0'+s:s;
        var timer= h+':'+m+':'+s;
        document.getElementById('hours_min').innerHTML=timer;
    }
    getTimer();
    setInterval(getTimer,1000);   
    var rotateVal = 0
        var InterVal // 定时器
        window.onload = function () {
            rotate()
            document.getElementById('img').onmousemove = function () {
                clearInterval(InterVal)
            }
            document.getElementById('img').onmouseleave = function () {
                rotate()
            }
        }
        function rotate () {
            InterVal = setInterval(function () {
                var img = document.getElementById('img')
                rotateVal += 3
                img.style.transform = 'rotate(' + rotateVal + 'deg)'
                img.style.transition = '0.1s linear'
            }, 100)
        } 
}