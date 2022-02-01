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


// global variable menu
const menu=document.getElementById('navbar__list');
//make an array of sections 
const sections=Array.from(document.querySelectorAll('section'));


// build the nav


//loop over sections
function createNavbarList(){
    for(const section of sections){
        // get section name
        sectionName= section.getAttribute('data-nav');
        //store section id in sectionlink 
        sectionLink=section.getAttribute('id');
        //make list of li
        listItem=document.createElement('li');

        //insert list items in html by using innerHTML
        listItem.innerHTML=`<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`;
        //collect all li's under the menu 
        menu.appendChild(listItem);
        

    }
}
//call the function 
createNavbarList()


// Add class 'active' to section when near top of viewport
function viewport(sec){
   //console.log(math.floor(sec.getBoundingClientRect().top));
    return Math.floor(sec.getBoundingClientRect().top);
}

function active(){
    for( const section of sections){
        const elem=viewport(section);

        //if section in viewport 
        if (elem>=-150 && elem<=150){
           //add active class 
        section.classList.add('your-active-class');
    }
    else{
        //remove active class
        section.classList.remove('your-active-class');
    };
        };

};
window.addEventListener('scroll',active)
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


