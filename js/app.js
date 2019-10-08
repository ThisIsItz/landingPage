/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// build the nav

const navBarUL = document.getElementById('navbar__list')
const allSections = document.getElementsByTagName('section');

function createList (){
    for (let i = 0; i < allSections.length; i++){
        const listItems = document.createElement('li');
        const anchorItems = document.createElement('a');
            anchorItems.textContent = " " + allSections[i].getAttribute('data-nav');
            anchorItems.href = "#" + allSections[i].getAttribute('id');
            anchorItems.setAttribute('target','_self');
            anchorItems.className = "menu__link";
        navBarUL.appendChild(listItems);
        listItems.appendChild(anchorItems);
    }
    
}

createList();


// Add class 'active' to section when near top of viewport


function elementFromTop(elem, classToAdd, distanceFromTop, unit) {
    var winY = window.innerHeight || document.documentElement.clientHeight,
    elemLength = elem.length, distTop, distPercent, distPixels, distUnit, i;
    for (i = 0; i < elemLength; ++i) {
        distTop = elem[i].getBoundingClientRect().top;
        distPercent = Math.round((distTop / winY) * 100);
        distPixels = Math.round(distTop);
        distUnit = unit == 'percent' ? distPercent : distPixels;
        if (distUnit <= distanceFromTop) {
           if (!hasClass(elem[i], classToAdd)) { addClass(elem[i], classToAdd); }
           } else {
           delClass(elem[i], classToAdd);
           }
        }
}
// params: element id, class to add, distance from top, unit ('percent' or 'pixels')

elementFromTop('allSections', 'your-active-class', '20', 'px');


// Scroll to anchor ID

const allAnchors = document.querySelectorAll('a');
const list = document.querySelectorAll('li');


for (let i = 0; i < list.length; i++){
    allAnchors[i].addEventListener('click', function(element){
        element.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
};



/**
 * End Main Functions
 * Begin Events
 * 
*/



//let hideButton = document.querySelectorAll('.active');
//let inputButton = document.querySelectorAll('input');
//
//
//    
//    for (let i = 0; i < hideButton.length; i++){
//        let content = document.querySelector('.text' + i);
//        content.style.display = "block";
//            if (content.style.display=="block"){
//                console.log('block');
//            }else{
//                console.log('block');
//            }
//        
//        
//        
//            hideButton[i].addEventListener('click', function(){
//                console.log("desactivar");
//                content.style.display = "none"
//                hideButton[i].className = "unactive";
//                hideButton[i].value = "Show";
//            });
//    }
//
//    



//hideButton.addEventListener('click', function(){
//   console.log('button');
//    contentText.style
//    
//});

// Build menu 

// Scroll to section on link click

// Set sections as active

