{"use strict";
    // put all of your code here
    var btnBiggerDecorations = document.getElementById("btnBiggerDecorations");
    btnBiggerDecorations.onclick= biggerDecorations;

    var btnIgpayAtinlay = document.getElementById("btnIgpayAtinlay");
    btnIgpayAtinlay.onclick= clickIgpayAtinlay;
    
    var btnMalkovitch = document.getElementById("btnMalkovitch");
    btnMalkovitch.onclick= clickMalkovitch

    var blingCehckBox = document.getElementById("bling");
    blingCehckBox.onchange = bling;

    var myText = document.getElementById("myText");

    function biggerDecorations() {

        var style = window.getComputedStyle(myText, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        myText.style.fontSize = (fontSize + 2) + 'pt';
    }

    function clickIgpayAtinlay() {
        var array = myText.value.split(" ");
        var  vowelArray = array.filter(x => isVowel(x.charAt(0)));
        var  ainlayArray = array.filter(x => !isVowel(x.charAt(0)));
        var res = vowelArray.concat(ainlayArray);

        myText.value = res.join(" ");
    }

    function isVowel(c) {
        let vowels = ['a', 'A', 'e', 'E', 'o', 'O', 'u', 'U'];
        let foundchar = vowels.find(x => x === c);
        let isVoewlchar = foundchar != null && foundchar != undefined ? true : false;
        return isVoewlchar;
    };

    function clickMalkovitch() {
        myText.value = myText.value
        .split(" ")
        .map(x => { 
            if(x.length >= 5) 
                return "Malkovitch";
            else 
                return x;
            }).join(" ");
    }

    setInterval(biggerDecorations, 9000);

    function bling() {

        if(blingCehckBox.checked) {
            myText.className = "bold";
        }              
        else {
            myText.className = "normal";
        }

        document.body.style.backgroundImage = "url('https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }
}
