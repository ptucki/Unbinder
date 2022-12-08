"use strict";

{
  //Selectors
  const codeBlock = document.querySelectorAll(".article__code-block");
  
  //Events
  
  //Functions
  function init() {
    console.log(codeBlock);
    [...codeBlock].forEach(elem => {
      NumerateCodeLines(elem);
    });
    
  }
  
  /*
    Adds line numbers to pre element according on how much new lines it found.
  */
  function NumerateCodeLines(codeBlockElement) {
    const codeNumbering = document.createElement('code');
    const lineNumbers = document.createTextNode('');
    
    let temp = '';
    
    codeNumbering.appendChild(lineNumbers);
    codeNumbering.classList.add('code-block__line-numbers');
    codeBlockElement.appendChild(codeNumbering);
    
    let newLineCounter = 0;
    
    // Iterate every character in code block
    for(let i = 0; i < codeBlockElement.innerText.length; i++)
    {
      //Append new line number if new line
      if(codeBlockElement.innerText.charAt(i) == '\n')
      {
        newLineCounter += 1;
        temp += newLineCounter + "\n";
      }
    }
    temp += ++newLineCounter
    lineNumbers.textContent = temp;
  }
  
  init();
}

//<code class="code-block__line-numbers">12345</code>