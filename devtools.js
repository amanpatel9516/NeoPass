var sc = document.createElement('script');



function isExamPage() {
    return window.location.href.includes('/mycourses') || 
           window.location.href.includes('/test');
  }
  
   
  if (isExamPage()) {
    sc.src = chrome.runtime.getURL("data/inject/f41e2811.js");
    var it = document.head || document.documentElement;
    
    it.appendChild(sc)
    sc.remove();
  } else {
    
  }
