TITLE_ENABLE="Khushkhat Enable",TITLE_DISABLE="Khushkhat Disable";const APPLICABLE_PROTOCOLS=["http:","https:"];function protocolIsApplicable(t){return document.createElement("a").href=t,!0}function initializePageAction(t){protocolIsApplicable(t.url)&&(setUIState(t,!1),browser.pageAction.show(t.id))}function setUIState(t,e){e?(browser.pageAction.setIcon({tabId:t.id,path:"../icons/on.svg"}),browser.pageAction.setTitle({tabId:t.id,title:TITLE_DISABLE})):(browser.pageAction.setIcon({tabId:t.id,path:"../icons/off.svg"}),browser.pageAction.setTitle({tabId:t.id,title:TITLE_ENABLE}))}var gettingAllTabs=browser.tabs.query({});gettingAllTabs.then(t=>{for(let e of t)initializePageAction(e)}),browser.tabs.onUpdated.addListener((t,e,i)=>{initializePageAction(i)});