
const icon2 = document.getElementById('icon2')
const nav = document.getElementById('nav')
const li = Array.from(document.querySelectorAll('#nav li'));    
const colors = Array.from(document.querySelectorAll('#nav a'));

icon2.addEventListener('mouseover', function(){
    nav.classList.add('transition');
});

document.addEventListener('keyup', function(e){
    if(e.key<=5){
        hideMenu();
        removeClassNameForBorder();
        let colorNumber = e.key-1;
        colors[colorNumber].parentElement.classList.add('getBorder');
        document.body.style.background = colors[colorNumber].className;   
        document.querySelector('main').innerHTML = "You have pressed the key " + e.key  + " which changes the background color to " + colors[colorNumber].innerHTML + ". You can also use the hamburger menu to change the color of the background.";   
    }
})


for (let i=0;i<colors.length; i++){
    colors[i].addEventListener('click', function(e){
        hideMenu();
        removeClassNameForBorder();
        document.body.style.background = e.target.className;
        this.parentElement.classList.add('getBorder');
        document.querySelector('main').innerHTML = "You have used the Hamburger menu. The color you have pick is: " + e.target.innerHTML + ". Try using a keyboard key from 1 to 5";
    })
};

const hideMenu = function(){
    nav.classList.remove('transition');
}

const removeClassNameForBorder = function(){
    for (let j=0; j<li.length; j++){
        li[j].classList.remove('getBorder');
    };
};

