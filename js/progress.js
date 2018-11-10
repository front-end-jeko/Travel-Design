var pageStatus = null;
var progress = null;
var animationInterval = 33;

window.document.addEventListener("readystatechange", function(){
    if(document.readyState == "complete"){
        pageStatus = "complete";
    }
}, false);


function updateProgress(){
    if(pageStatus == "complete"){
        document.getElementById("pageLoader").innerHTML = 100;
        setTimeout(function(){
            document.getElementById("pageLoader").style.display = "none";    
        }, 700);
    }
    else{            
        if(progress == null){
            progress = 1;
        }
        
        progress = progress + 1;
        if(progress >= 0 && progress <= 30){
            animationInterval += 1;
            document.getElementById("pageLoader").innerHTML = progress;
        }
        else if(progress > 30 && progress <= 60){
            animationInterval += 2;
            document.getElementById("pageLoader").innerHTML = progress;
        }
        else if(progress > 60 && progress <= 80){
            animationInterval += 3;
            document.getElementById("pageLoader").innerHTML = progress;
        }
        else if(progress > 80 && progress <= 90){
            animationInterval += 4;
            document.getElementById("pageLoader").innerHTML = progress;
        }
        else if(progress > 90 && progress <= 95){
            animationInterval += 80;
            document.getElementById("pageLoader").innerHTML = progress;
        }
        else if(progress > 95 && progress <= 99){
            animationInterval += 150;
            document.getElementById("pageLoader").innerHTML = progress;
        }
        else if(progress >= 100){
            document.getElementById("pageLoader").innerHTML = 99; 
        }
        setTimeout(updateProgress, animationInterval);    
    }
}

var intervalObject_1 = setInterval(function(){
    var element = document.querySelector("body");
    
    if(element != undefined){
        clearInterval(intervalObject_1);
        element.innerHTML += "<span id='pageLoader'>0</span>";
        updateProgress();            
    }
}, 50);