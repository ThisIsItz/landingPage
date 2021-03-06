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


function activateSection (){
  
    const testDiv = document.querySelectorAll(".section-position");

    for(let i = 0; i < testDiv.length; i++){
        if(testDiv[i].offsetTop + testDiv[i].offsetHeight > window.pageYOffset && testDiv[i].offsetTop < window.pageYOffset){
            testDiv[i].classList.add('your-active-class');
            allAnchors[i].style.color = "white";
            allAnchors[i].style.backgroundColor = "black";
            allAnchors[i].classList.add('active-anchor');
        }else{
            testDiv[i].classList.remove('your-active-class');
            allAnchors[i].style.color = "black";
            allAnchors[i].style.backgroundColor = "white";
            allAnchors[i].classList.remove('active-anchor');
        }
    }

    console.log(window.pageYOffset);
}


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




// Build menu 

// Scroll to section on link click

// Set sections as active

