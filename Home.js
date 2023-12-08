let opn = document.getElementById("HF-open");
let opc = 1;
let opened = document.getElementById("HF-opened");
let logo = document.getElementById("HF-logo");
let hed1 = document.getElementById("HF-hed1");

opn.addEventListener("click", function(){
    if(opc == 1){
        opened.style.transition = "top 0.3s"
        opened.style.top = "15vh"
        opc = 0;
    }
    else{
        opc = 1;
        opened.style.top = "102vh"
    }
})

//  This is searchbar 

let span = document.getElementById("searchik");
let butc = 1;
let input1 = document.getElementById("searchbar");
let but = document.getElementById("but");
but.addEventListener("click", function(){
    if(butc == 1){
        input1.style.transition = "width 0.3s, left 0.3s"
        input1.style.width = "100%"
        input1.style.left = "0%"
        input1.style.zIndex = "5"
        but.style.zIndex = "7"
        but.style.transition = "border-bottom 0.3s, left 0.3s"
        but.style.left = "0"
        but.style.borderBottom = "1px solid black"
        butc = 0;
    } else {
        butc = 1;
        span.style.transition = "top 0.3s"
        input1.style.transition = "width 0.3s, left 0.3s"
        input1.style.width = "0%"
        input1.style.left = "79%"
        input1.style.zIndex = "5"
        but.style.zIndex = "7"
        but.style.transition = "border-bottom 0.3s, left 0.3s"
        but.style.left = "85.4%"
        but.style.borderBottom = "0px solid black"
        span.style.top = "-35vh"
        mug.style.background = "transparent"
        mug.style.zIndex = "-5"
        seri.style.display = "none"
        opened.style.display = "flex"
    }
})

let mug = document.getElementById("mug")

inpc = 1;
input1.addEventListener("click", function(){
    if(inpc == 1){
        span.style.top = "15vh"
        mug.style.background = "black"
        mug.style.zIndex = "14"
        opened.style.display = "none"
    }
})

let seri = document.getElementById("serchi");
function searchh() {

    input1 = document.getElementById("searchbar");
    filter = input1.value.toUpperCase();
    ul = document.getElementById("searchik");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            seri.style.color = "transparent"
            seri.style.zIndex = "0"
            seri.style.display = "none"

        } else {
            li[i].style.display = "none";
            seri.style.color = "black"
            seri.style.zIndex = "10"
            seri.style.display = "block"
        }
    }
}
function her(){
    butc = 1;
    input1.style.transition = "width 0.3s, left 0.3s"
    input1.style.width = "0%"
    input1.style.left = "79%"
    input1.style.zIndex = "5"
    but.style.zIndex = "7"
    but.style.transition = "border-bottom 0.3s, left 0.3s"
    but.style.left = "85.4%"
    but.style.borderBottom = "0px solid black"
    span.style.top = "-35vh"
    mug.style.background = "transparent"
    mug.style.zIndex = "-5"
    seri.style.display = "none"
    opened.style.display = "flex"

}

let hd = document.getElementById("hd");
let ser = document.getElementById("search_result");
function seres(){
    ser.style.top = "15vh";
    hd.innerHTML = input1.value
}



let all2 = document.getElementById("all2")
let all1 = document.getElementById("all-1")
function disp(){
    all2.style.display = "block"
    all1.style.display = "none"
    text1.style.display = "none"
    text2.style.display = "none"
}

let spul = document.getElementById("span")

spul.addEventListener("clcik", function(){
    inpc = 0;
    butc = 1
    span.style.transition = "top 0.3s"
    input1.style.transition = "width 0.3s, left 0.3s"
    input1.style.width = "0%"
    input1.style.left = "79%"
    input1.style.zIndex = "5"
    but.style.zIndex = "7"
    but.style.transition = "border-bottom 0.3s, left 0.3s"
    but.style.left = "85.4%"
    but.style.borderBottom = "0px solid black"
    span.style.top = "-35vh"
    mug.style.background = "transparent"
    mug.style.zIndex = "-5"
    seri.style.display = "none"
    opened.style.display = "flex"
})