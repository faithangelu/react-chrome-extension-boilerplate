// TODO: background script
// chrome.storage.local.get(["isPopupOpen"], (res) => {
//   console.log(res)
//   
// })


chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.set({
    // isPopupOpen: "isPopupOpen" in res ? res.isPopupOpen : false,
    isClicked: true,
    isPopupOpen: true,
    isPopupRight: true
  })

  chrome.storage.local.get(["isClicked", "isPopupOpen"], (res) => {
    // isPopupOpen: true
    console.log(res)
    if (res.isClicked && res.isPopupOpen) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['contentScript.js']
      });
      console.log(tab)
    }
  })
});


// 1. Will the popup open when not in FB profile page of friend? 
