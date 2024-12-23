chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.url) { // added changeInfo.url - to check when tab url changes and tab.                              url - to check if url is empty
    if (changeInfo.url.includes("bits-oasis.org")) notify("Oasis");
    if (changeInfo.url.includes("bits-apogee.org")) notify("Apogee");
    if (changeInfo.url.includes("bits-bosm.org")) notify("Bosm");
  }
});
function notify(url) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "image.png",
    title: `Welcome`,
    message: `Greetings from Department of Visual Media. Thanks for visiting our Bits ${url} website `,
  });
}
