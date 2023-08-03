function doGet(e) {
  if (!e.parameter.page) 
  {
    return HtmlService.createTemplateFromFile('welcome').evaluate();
    
     
  }
  else if(e.parameter['page'] == 'mem-log')
  {
    return HtmlService.createTemplateFromFile('mem-log').evaluate();
      }
  else if(e.parameter['page'] == 'Link 2')
  {
    return HtmlService.createTemplateFromFile('Link 2').evaluate();
  } 
  else if(e.parameter['page'] == 'welcome')
  {
    return HtmlService.createTemplateFromFile('welcome').evaluate();
  }   
}


function getUrl() {
 return ScriptApp.getService().getUrl();
 
}
