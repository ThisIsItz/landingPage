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
  
    // for (let i = 0; i < allSections.length; i++){
    //
    //     console.log("Section " + allSections[i].id + " is " + elementInViewport(allSections[i]));
    //     if (elementInViewport(allSections[i]) == true){
    //         let element = document.getElementById('section'+i);
    //             for (let i = 0; i < element.length; i++){
    //
    //             }

    // var y = elmnt.scrollTop;
    var testDiv = document.querySelectorAll(".section-position");
    console.log(testDiv[0].offsetTop + testDiv[0].offsetHeight - 5);
    for(var x=0;x<testDiv.length;x++){
        if(testDiv[x].offsetTop + testDiv[x].offsetHeight - 5  > window.pageYOffset && testDiv[x].offsetTop < window.pageYOffset){
            testDiv[x].classList.add('your-active-class');
        }else{
            testDiv[x].classList.remove('your-active-class');
        }
    }



    console.log(window.pageYOffset);


    //     }
    //
    // }
}

  function elementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
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





//let hideButton = document.querySelectorAll('input');
//
//    
//    for (let i = 0; i < hideButton.length; i++){
//        let content = document.querySelector('.text' + i);
//        if (hideButton[i].className == "active"){
//            hideButton[i].addEventListener('click', function(){
//                content.style.display = "none";
//                hideButton[i].classList.remove("active");
//                hideButton[i].value = "Show";
//                console.log(hideButton);
//            });
//        }else{
//            console.log('otro');
//        }
//    }



// Build menu 

// Scroll to section on link click

// Set sections as active

