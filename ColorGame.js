    var noofsquare=6;
    var color = generateRandomcolor(noofsquare);
    var square = document.querySelectorAll(".square");
    var pickedcolor= pickcolor();
    var colordisplay =document.getElementById("colordisplay");
    var messagedisplay=document.getElementById("messagedisplay");
    var h1=document.querySelector("h1");
    var resetbut=document.querySelector("#reset");
    var mode=document.querySelectorAll(".mode");
  

   initialize();
   function initialize(){
        for(var i=0;i<mode.length;i++)
        {
            mode[i].addEventListener("click",function(){
                mode[0].classList.remove("selected");
                mode[1].classList.remove("selected");
                this.classList.add("selected");
                this.textContent === "Easy" ? noofsquare=3 : noofsquare=6;
                reset();
            });
        }

        for(var i=0;i<square.length;i++)
                {
                     //add click listeners to squares
                    square[i].addEventListener("click",function(){
                        //grab color of clicked square
                        var clickedcolor = this.style.background;
                        //compare to picked color
                        console.log(clickedcolor, pickedcolor);
                        if(clickedcolor === pickedcolor){
                        messagedisplay.textContent = "Yay! You are Correct";
                        changecolor(clickedcolor);
                        h1.style.background = clickedcolor;
                        resetbut.textContent="PLAY AGAIN?"
                        
                        }
                        else{ 
                        this.style.background="#232323";
                        messagedisplay.textContent="Try Again";
                        }
                    });
                }
                reset();
   }
    

    function reset(){
         //generate all new colors
         color=generateRandomcolor(noofsquare);
         //pick a new random color
         pickedcolor=pickcolor();
         //change colors of colordisplay to  match picked color
         colordisplay.textContent= pickedcolor;
         //chnage colors of square
         for(var i=0;i<square.length;i++)
         {
             if(color[i]){square[i].style.display="block"; square[i].style.background = color[i];}
             else{square[i].style.display="none";}
            
         }
         messagedisplay.textContent="";
         h1.style.background="steelblue";
         resetbut.textContent="New Colors";
    }
    
    resetbut.addEventListener("click",function(){
      reset();
    });

    colordisplay.textContent=pickedcolor;
    

    function changecolor(color){
        for(var j=0;j<square.length;j++)
           { //make same color of all the squares
           square[j].style.background=color;
           }
    }

    function pickcolor(){
     var random= Math.floor(Math.random() * color.length);
     return color[random];
    }

    function generateRandomcolor(num){
        //make array
        var arr = [];

        for(var i = 0 ; i < num ; i++)//get random color & push into arr
        {
        arr.push(randomcolor())
        }
        return arr;
    }

    function randomcolor(){
        //Pick a color for red
            var r=Math.floor(Math.random() *256);
        // Pick a color for blue
            var b=Math.floor(Math.random() *256);
        //Pick a color for green
            var g=Math.floor(Math.random() *256);

            return "rgb(" + r + ", " + b + ", " + g + ")";
    }
    