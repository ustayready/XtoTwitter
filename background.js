chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url === "https://abs.twimg.com/favicons/twitter.3.ico") {
      return {
        redirectUrl: "https://abs.twimg.com/favicons/twitter.2.ico"
      };
    }
    else if (details.url === "https://abs.twimg.com/favicons/twitter-pip.3.ico") {
      return {
        redirectUrl: "https://abs.twimg.com/favicons/twitter-pip.2.ico"
      };
    }
  },
  { urls: ["https://abs.twimg.com/favicons/twitter.3.ico", "https://abs.twimg.com/favicons/twitter-pip.3.ico"] },
  ["blocking"]
);
