let mentrend = document.querySelector(".mentrend");
let womentrend = document.querySelector(".womentrend");
let boytrend = document.querySelector(".boytrend");
let girltrend = document.querySelector(".girltrend");
let mainblog1 = document.querySelector(".mainblog1");
let mainblog2 = document.querySelector(".mainblog2");
let contact = document.querySelector(".contact1");
let mainpage = document.querySelector(".pic");
let fullpage = document.querySelector(".fullpage");
let footer = document.querySelector(".footer");
let letter = document.querySelector(".letter");
let aboutsection = document.querySelector(".aboutsection");
function shop() {
    mainpage.style.display = "none";
    womentrend.style.display = "block";
    mentrend.style.display = "block";
    mainblog1.style.display = "none";
    mainblog2.style.display = "none";
    boytrend.style.display = "block";
    girltrend.style.display = "block";
    aboutsection.style.display = "none";
    contact.style.display = "none";
    fullpage.style.display = "none";
    footer.style.display = "flex";
    letter.style.display = "flex";
    document.getElementById("shops").style.color = "rgb(1, 152, 152)";
    document.getElementById("homes").style.color = "black";
    document.getElementById("blogs").style.color = "black";
    document.getElementById("contacts").style.color = "black";
    document.getElementById("abouts").style.color = "black";
}
function blog() {
    mainpage.style.display = "none";
    womentrend.style.display = "none";
    mentrend.style.display = "none";
    girltrend.style.display = "none";
    boytrend.style.display = "none";
    mainblog1.style.display = "block";
    mainblog2.style.display = "block";
    contact.style.display = "none";
    footer.style.display = "flex";
    letter.style.display = "flex";
    aboutsection.style.display = "none";
    fullpage.style.display = "none";
    document.getElementById("blogs").style.color = "rgb(1, 152, 152)";
    document.getElementById("homes").style.color = "black";
    document.getElementById("shops").style.color = "black";
    document.getElementById("contacts").style.color = "black";
    document.getElementById("abouts").style.color = "black";
}
function home2() {
    document.getElementById("homes").style.color = "rgb(1, 152, 152)";
    document.getElementById("blogs").style.color = "black";
    document.getElementById("shops").style.color = "black";
    document.getElementById("contacts").style.color = "black";
    document.getElementById("abouts").style.color = "black";
    mainpage.style.display = "block";
    contact.style.display = "none";
    womentrend.style.display = "none";
    mentrend.style.display = "none";
    girltrend.style.display = "none";
    boytrend.style.display = "none";
    mainblog1.style.display = "none";
    mainblog2.style.display = "none";
    aboutsection.style.display = "none";
    fullpage.style.display = "none";
    footer.style.display = "flex";
    letter.style.display = "flex";
}
function about2() {
    contact.style.display = "none";
    mainpage.style.display = "none";
    womentrend.style.display = "none";
    mentrend.style.display = "none";
    girltrend.style.display = "none";
    boytrend.style.display = "none";
    mainblog1.style.display = "none";
    mainblog2.style.display = "none";
    aboutsection.style.display = "block";
    fullpage.style.display = "none";
    footer.style.display = "flex";
    letter.style.display = "flex";
    document.getElementById("abouts").style.color = "rgb(1, 152, 152)";
    document.getElementById("homes").style.color = "black";
    document.getElementById("blogs").style.color = "black";
    document.getElementById("shops").style.color = "black";
    document.getElementById("contacts").style.color = "black";
}
function contact2() {
    contact.style.display = "block";
    mainpage.style.display = "none";
    womentrend.style.display = "none";
    mentrend.style.display = "none";
    girltrend.style.display = "none";
    boytrend.style.display = "none";
    mainblog1.style.display = "none";
    mainblog2.style.display = "none";
    aboutsection.style.display = "none";
    fullpage.style.display = "none";
    footer.style.display = "flex";
    letter.style.display = "flex";
    document.getElementById("abouts").style.color = "black";
    document.getElementById("homes").style.color = "black";
    document.getElementById("blogs").style.color = "black";
    document.getElementById("shops").style.color = "black";
    document.getElementById("contacts").style.color = "rgb(1, 152, 152)";
}
function show(img) {
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;
    console.log(img);
    fullpage1();
}
function fullpage1() {
    contact.style.display = "none";
    mainpage.style.display = "none";
    womentrend.style.display = "none";
    mentrend.style.display = "none";
    girltrend.style.display = "none";
    boytrend.style.display = "none";
    mainblog1.style.display = "none";
    mainblog2.style.display = "none";
    aboutsection.style.display = "none";
    footer.style.display = "none";
    letter.style.display = "none";
    fullpage.style.display = "inline-flex";
}
function addcard(){
    alert("Add to Cart successfully");
    location.reload();
}
function buynow(){
    var userResponse = confirm("Do you want to buy??");
    if (userResponse) {
        alert("Purchase done successfully");
    }
    shop();
}
function back(){
    shop();
}
