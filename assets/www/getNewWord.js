function getnewword(){
    document.getElementById("letterList").innerHTML = "";
    document.getElementById("answerPosition").innerHTML = "";
answerLetters = [];
var str;
var arrStr;
var allLength = 0;
var selected;
var n;
positions = [];
answerString = [];
$.getJSON("words.json", function(json) { 
    n=Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    localStorage.n = n;
    shuffled = json.sort(function(){return .5 - Math.random()});
    localStorage.shuffled = shuffled;
    function randomsort(a, b) { 
        return Math.random()>.5 ? -1 : 1;
    }
    selected=shuffled.slice(0,n);
    for(var q= 0; q< selected.length; q++){
        allLength += selected[q].length;
    }
    for(var i=0; i< allLength; i++){
            answerString.push(selected[i]);
         var randomStr = selected[i].split('').sort(randomsort);
            str = randomStr.join("");
            
            for(var k = 0; k < str.length; k++){
    var color = '#'+Math.random().toString(16).substr(-6);
    var colorR = '#'+Math.random().toString(16).substr(-6);
    document.getElementById("letterList").innerHTML += "<text class='let' onclick='letterPlace(this.id, this);' id='"+i+""+k+"' style='color: color"+k+"'>"+str[k]+"</text>";
    document.getElementById("answerPosition").innerHTML += "<text class='ans' id='ans"+i+k+"' onclick='fix(this.id, this);'>&nbsp;</text>"; 
    var element = document.getElementById(i+""+k);
    var elementT = document.getElementById("ans"+i+""+k);
 element.style.background = color;
 elementT.style.background = colorR;
 positions.push("ans"+i+""+k);
   }
   document.getElementById("letterList").innerHTML += "</br>";
   document.getElementById("answerPosition").innerHTML += "</br>";
    }
});
score();
}