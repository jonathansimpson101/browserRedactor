replaceText(document.body)

function replaceText(element) {
  if (element.hasChildNodes()){
    element.childNodes.forEach(replaceText)
  } else if(element.nodeType === Text.TEXT_NODE){
    // On the line below, replace {WORD TO REDACT} with the word you want to redact
    element.textContent = element.textContent.replace(/{WORD TO REDACT}/gi,  '████');
  }
}
