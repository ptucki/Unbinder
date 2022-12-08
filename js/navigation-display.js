"use strict";

import
{
  getCssVariable,
  forEachIconButton
} from './lib/utils.js';

//https://www.youtube.com/watch?v=sZQEa13r22I

{  
//Selectors
  //Media
  const mediaDesktop =
    matchMedia('(min-width: ' + getCssVariable("--media-desktop"));

  const mediaTablet =
    matchMedia('(min-width: ' + getCssVariable("--media-tablet"));
  
  //HTML elements
  const navigation = document.querySelector('.main-nav');
  const toolbox = document.querySelector('.toolbox');
  const notepad = document.querySelector('.notepad');


//Event Listeners

  mediaTablet.addEventListener('change', ChangeBehavior);
  mediaDesktop.addEventListener('change', ChangeBehavior);
  
  forEachIconButton('icon-menu', function(icon) {
    icon.addEventListener("click", OpenHideNavigation);
  });
  
  
//Functions

  //flags
  let isOpen_f = false;

  
  /*
    Changes navigation behavior according to the the media query 
    #1
  */
  function ChangeBehavior() {
    ResetNavigationStyle();
  }

  /*
    Resets navigation style to the initial
    #1
  */
  function ResetNavigationStyle() {
    navigation.style.transitionDuration = "0.2s";

    if(mediaDesktop.matches)
    {
      OpenNavigation();
    }
    else if(mediaTablet.matches)
    {
      HideNavigation();
    }
    else
    {
      navigation.style.transitionDuration = "0s";

      HideNavigation();
    }
  }

  /*
    Opens or hides navigation depending on navigation state
    #2
  */
  function OpenHideNavigation() {
    navigation.style.transitionDuration = "0.2s";

    if(isOpen_f == true)
    {

      HideNavigation();
    }
    else
    {
      OpenNavigation();
    }
  }

  /*
    Opens navigation if hidden, and changes action depending on media
    #3
  */
  function OpenNavigation() {
    
    forEachIconButton("icon-menu", icon => {
      icon.classList.add('toolbox__button--active');
    });
    
    if(mediaDesktop.matches)
    {
      notepad.style.marginLeft = navigation.offsetWidth + "px";
    }
    else if(mediaTablet.matches)
    {
      notepad.style.marginLeft = toolbox.offsetWidth + "px";
    }
    else
    {
      notepad.style.marginLeft = 0 + "px";
    }

    navigation.style.left = 0;
    isOpen_f = true;
  }

  /*
    Hides navigation if opened, and changes action depending on media
    #3
  */
  function HideNavigation() {
    
    forEachIconButton("icon-menu", icon => {
      icon.classList.remove('toolbox__button--active');
    });

    if(mediaDesktop.matches)
    {
      notepad.style.marginLeft = "0px";
  
      navigation.style.left = (
        -(navigation.offsetWidth - toolbox.offsetWidth) + "px"
      );
    }
    else if(mediaTablet.matches)
    {
      notepad.style.marginLeft = toolbox.offsetWidth + "px";

      navigation.style.left = (
        -(navigation.offsetWidth - toolbox.offsetWidth) + "px"
      );
    }
    else
    {
      notepad.style.marginLeft = 0 + "px";
      let leftValue = getCssVariable("--media-tablet");
      navigation.style.left = "-" + parseInt(leftValue) + "px";
    }
  
    isOpen_f = false;
  }

/* --- IMPORTS -------------------------------------------------------------- */

/* --- RUN ON LOAD ---------------------------------------------------------- */
  /*
    Function to be called at the page loading.
  */
  function init() {
    //Main nav
    ResetNavigationStyle();
    ChangeBehavior();
  }
  
  init();
}