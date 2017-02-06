 window.onload=function(){
  //公共全局变量
    var list = document.querySelectorAll('.banner_index li');
    var num= 1;
   /*
   *获取css样式
   */
   function getStyle(obj,style){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[style]//非ie
    }else{
        return obj.currentStyle[style];//ie
    }
   }
  /*
  *获取并修改对象的透明度；
  */
  function changeImg(num){
        var ban = document.querySelectorAll('.banner');

        for (var i = 0; i < ban.length; i++) {
          ban[i].style.opacity = 0;
          list[i].style.backgroundColor = "rgba(255,255,255,0.8)";
        };
        ban[num].style.opacity=1;
        list[num].style.backgroundColor ="rgb(255,255,255)";
      
  }
  //每隔一段时间 调用改变透明度函数；
  function timeToChange(){
    clearInterval(timer)
    var timer = setInterval(function(){
      changeImg(num);
      if (num<2) {
               num+=1;
      }else{
               num=0;
      }
    },5000)        
  }
  timeToChange();
  clickToChange();
  //鼠标点击触发图片滚动
  function clickToChange(){  
        for (var i = 0; i < list.length; i++) {
          (function(e){
            list[i].onclick=function(){
            changeImg(e);
          }
          })(i)
          }
  }
/**推荐人
*/  
   var cg = document.getElementById('changeTuiJian');
   var tuiJian = document.getElementById('tuiJian')
   cg.onclick=function(){
         change(tuiJian)
   }
     function change(obj){
           if(obj.className=="show"){
                obj.className="hide";
           }else if(obj.className=="hide"){
                 obj.className="show"
           }
     }
          

  /**监视滚动条事件；
  **/
    var topBack = document.getElementById("topBack");
    var nav = document.getElementById('navMain');
    var scrollObj = {
        "scrY" : function(){
            return document.documentElement.scrollTop||document.body.scrollTop;
       },
        "scrX" : function(){
            return document.documentElement.scrollLeft||document.body.scrollLeft;
       },
        "winX" : function(){
            return window.scrollX;
       },
        "winY" : function(){
            return window.scrollY;
       }
      }

    window.onscroll=function(){
               navChange(41);
    }
    topBack.onclick=function(){
              scrollMove();
             
          }

    //回到顶部；
    function scrollMove(){
     var x,y,timer=null;
       if(scrollObj.scrX()>scrollObj.winX()){
        x = scrollObj.scrX();
       }else{
        x = scrollObj.winX();
       }
       if(scrollObj.scrY()>scrollObj.winY()){
        y = scrollObj.scrY();
       }else{
        y = scrollObj.winY();
       }
       var speed = Math.ceil(y/10);
       if(y>0){
        window.scrollTo(x-speed,y-speed)
        console.log(y-speed)
        timer = window.setInterval(scrollMove(),1000);clearInterval(timer);
       }else{
         clearInterval(timer);
       }
    }
    
    //设置标题栏按pos距离显示与隐藏设置
  function navChange(pos){
          if (scrollObj.scrY()>pos) {
             document.getElementById('navMain').style.display="block";
          }else if(scrollObj.scrY()<pos){
             document.getElementById('navMain').style.display="none"
          }
      
        }
}
