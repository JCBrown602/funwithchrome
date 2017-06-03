// content.js

//var firstHref = $("a[href^='http']").eq(0).attr("href");
//var secondHref = $("a[href^='http']").eq(1).attr("href");
//console.log(firstHref);
//console.log(secondHref);

//alert("Go away, print! Go AWAY!");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(2).attr("href");

      console.log(firstHref);
    }
  }
);