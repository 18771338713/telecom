
var index=0;
function banner(){
    $(".progress-background").find("#progress").eq(index).animate({"width":"100%"},10000);
    index++;
    if($("#progress").css("width","0rem")){
        $("#progress").css("width","100%");
    }
};
banner();
setInterval(banner,10000);


var num=0;
function number(){
    num++;
    if(num>=100){
      clearInterval(k);
        setTimeout(function(){
            window.open("index01.html","_self");
        },2000);     
    }  
    $("#namber").text(num+'%');       
};
k=setInterval(number,100);

$(".center-div2").on("click",function(){
    $(".center-div2").html("检查更新中...");
    $(".center-div2").css({"background":"#1987f7","borderColor":"#1987f7"});
    setTimeout(function(){
        $(".center-div2").html("数据包已是最新");
    }, 2000);
});
var lr=1;
$(".extend-div4").on("click",function(){  
    lr++;
    if(lr%2==0){
        $(".extend-div5").css({"left":"1.521739rem","top":"-0.217391rem"});
        $(".extend-div5").css("background","#26A5FF");
        $(".extend-div4").css("background","#92D2FF");
    }else{
        $(".extend-div5").css({"left":"0rem","top":"-0.217391rem"});
        $(".extend-div5").css("background","#F1F1F1");
        $(".extend-div4").css("background","#C6C5C5");
    }
   
})