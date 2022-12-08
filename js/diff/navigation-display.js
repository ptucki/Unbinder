"use strict";

//https://www.youtube.com/watch?v=sZQEa13r22I

{  
//Selectors
  //Media
  const mediaDesktop = matchMedia('(min-width: ' + getCssVariable("--media-desktop"));
  const mediaTablet = matchMedia('(min-width: ' + getCssVariable("--media-tablet"));
  
  //HTML elements
  const navigation = document.querySelector('.main-nav');
  const toolbox = document.querySelector('.toolbox');
  const notepad = document.querySelector('.notepad');


//Event Listeners

  mediaTablet.addEventListener('change', ChangeBehavior);
  mediaDesktop.addEventListener('change', ChangeBehavior);
  
  ForEachIconButton('icon-menu', function(icon) {
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
      console.log("ResetNavigationStyle - else");
      //navigation.style.left = "-" + getCssVariable("--media-tablet");  

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
    //navigationButton.classList.add('toolbox__button--active');

    ForEachIconButton("icon-menu", icon => {
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
    
    ForEachIconButton("icon-menu", icon => {
      icon.classList.remove('toolbox__button--active');
    });

    if(mediaDesktop.matches)
    {
      notepad.style.marginLeft = "0px";

      navigation.style.left = -(navigation.offsetWidth - toolbox.offsetWidth) + "px";
    }
    else if(mediaTablet.matches)
    {
      notepad.style.marginLeft = toolbox.offsetWidth + "px";
      navigation.style.left = -(navigation.offsetWidth - toolbox.offsetWidth) + "px";
    }
    else
    {
      console.log("HideNavigation - else");
      
      //console.log("--media-tablet: ", getCssVariable("--media-tablet"));
      
      notepad.style.marginLeft = 0 + "px";
      let leftValue = getCssVariable("--media-tablet");
      navigation.style.left = "-" + parseInt(leftValue) + "px";// + getCssVariable("--media-tablet");
      
      //console.log(navigation.style.left);
    }
  
    isOpen_f = false;
  }

/* --- IMPORTS -------------------------------------------------------------- */
  function getCssVariable(varName, element = document.documentElement) {
    return getComputedStyle(element).getPropertyValue(varName);
  }
  
  function ForEachIconButton(iconClassName, func) {
    let classSelector = "";
    
    //Make sure to drop dot if it appears in class name parameter
    if(iconClassName[0] == '.') 
    {
      classSelector = iconClassName.substring(1,iconClassName.length -1);
    }
    else
    {
      classSelector = iconClassName;
    }
    
    //Find all buttons with specified icon
    let buttons = [];
    
    [...document.querySelectorAll('button')].forEach(btn => {
      
      if(btn.querySelector('i').classList.contains(classSelector))
      {
        buttons.push(btn);
      }
      
    });
    
    //run a specified function with arguments on found icons
    buttons.forEach(btn => {
      func(btn);
    });
  }

/* --- RUN ON LOAD ---------------------------------------------------------- */
  
  function init() {
    //Main nav
    ResetNavigationStyle();
    ChangeBehavior();
  }
  
  //ForEachIconButton("iconName");
  init();
}