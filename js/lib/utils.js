"use strict";

export function getCssVariable(varName, element = document.documentElement) {
  return getComputedStyle(element).getPropertyValue(varName);
}

export function setCssVariable(varName, newValue, element = document.documentElement) {
  element.style
    .setProperty(varName, newValue);
}

export function forEachIconButton(iconClassName, func) {
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