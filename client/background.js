chrome.runtime.onInstalled.addListener(()=>{
    chrome.contextMenus.create({
      "title": 'Save tweet to photos',
      "contexts": ["all"],
      "id": "croppedOption",
      "documentUrlPatterns":['*://*.twitter.com/*']

    })
})

chrome.contextMenus.onClicked.addListener(async(info,tab)=>{
  const url=await getCurrentTabUrl()


  chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
    chrome.tabs.sendMessage(tabs[0].id,{url:url},(res)=>{
      console.log(res.message);
    })
  })
})



async function getCurrentTabUrl() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let tab = await chrome.tabs.query(queryOptions);
  return tab[0].url;

}









// chrome.scripting.executeScript({
//   target:{tabId:tab.id},
//   func:mii
// })


// const value='valll'
// chrome.storage.local.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });
// chrome.storage.local.get(['key'], function(result) {
//   console.log('Value currently is ' + result.key);
// });

// chrome.tabs.getSelected(null, function(tab) {
//   chrome.tabs.sendMessage(tab.id, { message: "TEST" });
// });

// chrome.runtime.sendMessage({text: "hey"}, function(response) {
//     console.log("Response: ", response);
// });



// chrome.tabs.getSelected(null, function(tab) {
//   chrome.tabs.sendMessage(tab.id, { message: "TEST" });
// });




// chrome.windows.create({
//   focused:true,
//   // url:'https://www.lambdatest.com/blog/automation-testing-with-selenium-javascript/',
//   url:"https://photos.google.com/?pli=1",
//   // width:100,
//   // height:100,
//   setSelfAsOpener:false,
//   // state:'maximized'
// })


// chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
//   let amm=[]
//   Object.keys(tabs[0]).forEach((item, i) => {
//     amm.push(item)
//   });
//   amm.push(3)
//
//   chrome.tabs.sendMessage(tabs[0].id,{tab:tabs[0]},(res)=>{
//     console.log(res.farewell);
//   })
// })
