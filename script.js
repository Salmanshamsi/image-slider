//                                                       Data veriables
var img1 =  "file:///E:/image-slider/imgs/1img.jpg"
var img2 =  "file:///E:/image-slider/imgs/2img.png"
var img3 =  "file:///E:/image-slider/imgs/3img.jpg"
var img4 =  "file:///E:/image-slider/imgs/4img.jpg"
var img5 =  "file:///E:/image-slider/imgs/5img.jpg"
var a = document.getElementById("a"); 
var b = document.getElementById("b"); 
var c = document.getElementById("c"); 
var d = document.getElementById("d");
var e = document.getElementById("e");
var mainimg = document.getElementById("imge");



//                                                          Auto runner;
setInterval(onright,3500);




//                                                         keyboard press
document.addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        onleft();
    } else if(e.keyCode === 39){
        onright();
    }
});



//                                               swapping images num buttons
function bt1(){
    mainimg.src = img1;
            var a1 = a.style.background = "gray"
            var a2 = b.style.background = "white"
            var a3 = c.style.background = "white"
            var a4 = d.style.background = "white"
            var a5 = e.style.background = "white"
}function bt2 (){
    mainimg.src = img2;
            var a1 = a.style.background = "white"
            var a2 = b.style.background = "gray"
            var a3 = c.style.background = "white"
            var a4 = d.style.background = "white"
            var a5 = e.style.background = "white"
}function bt3 (){
    mainimg.src = img3;
            var a1 = a.style.background = "white"
            var a2 = b.style.background = "white"
            var a3 = c.style.background = "gray"
            var a4 = d.style.background = "white"
            var a5 = e.style.background = "white"
}function bt4 (){
    mainimg.src = img4;
            var a1 = a.style.background = "white"
            var a2 = b.style.background = "white"
            var a3 = c.style.background = "white"
            var a4 = d.style.background = "gray"
            var a5 = e.style.background = "white"
}function bt5 (){
    mainimg.src = img5;
            var a1 = a.style.background = "white"
            var a2 = b.style.background = "white"
            var a3 = c.style.background = "white"
            var a4 = d.style.background = "white"
            var a5 = e.style.background = "gray"
}




//                                            Right  button;


function onright(){
 if (mainimg.src === img1 ){
    mainimg.src = img2;
    var a1 = a.style.background = "white"
    var a2 = b.style.background = "gray"
    var a3 = c.style.background = "white"
    var a4 = d.style.background = "white"
    var a5 = e.style.background = "white"
    
 }else if (mainimg.src === img2){
    mainimg.src = img3;
    var a1 = a.style.background = "white"
    var a2 = b.style.background = "white"
    var a3 = c.style.background = "gray"
    var a4 = d.style.background = "white"
    var a5 = e.style.background = "white"
 }else if (mainimg.src === img3 ){
    mainimg.src = img4;
    var a1 = a.style.background = "white"
    var a2 = b.style.background = "white"
    var a3 = c.style.background = "white"
    var a4 = d.style.background = "gray"
    var a5 = e.style.background = "white"
}else if (mainimg.src === img4 ){
    mainimg.src = img5;
    var a1 = a.style.background = "white"
    var a2 = b.style.background = "white"
    var a3 = c.style.background = "white"
    var a4 = d.style.background = "white"
    var a5 = e.style.background = "gray"
}else if (mainimg.src === img5 ){
    mainimg.src = img1;
    var a1 = a.style.background = "gray"
    var a2 = b.style.background = "white"
    var a3 = c.style.background = "white"
    var a4 = d.style.background = "white"
    var a5 = e.style.background = "white"
}
}


//                                                    Left button;


function onleft(){
    if (mainimg.src === img1 ){
       mainimg.src = img5;
       var a1 = a.style.background = "white"
       var a2 = b.style.background = "white"
       var a3 = c.style.background = "white"
       var a4 = d.style.background = "white"
       var a5 = e.style.background = "gray"
       
    }else if (mainimg.src === img2){
       mainimg.src = img1;
       var a1 = a.style.background = "gray"
       var a2 = b.style.background = "white"
       var a3 = c.style.background = "white"
       var a4 = d.style.background = "white"
       var a5 = e.style.background = "white"
    }else if (mainimg.src === img3 ){
       mainimg.src = img2;
       var a1 = a.style.background = "white"
       var a2 = b.style.background = "gray"
       var a3 = c.style.background = "white"
       var a4 = d.style.background = "white"
       var a5 = e.style.background = "white"
   }else if (mainimg.src === img4 ){
       mainimg.src = img3;
       var a1 = a.style.background = "white"
       var a2 = b.style.background = "white"
       var a3 = c.style.background = "gray"
       var a4 = d.style.background = "white"
       var a5 = e.style.background = "white"
   }else if (mainimg.src === img5 ){
       mainimg.src = img4;
       var a1 = a.style.background = "white"
       var a2 = b.style.background = "white"
       var a3 = c.style.background = "white"
       var a4 = d.style.background = "gray"
       var a5 = e.style.background = "white"
   }
   }











