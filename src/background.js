// Create context menu items

browser.contextMenus.create({
    id: "image-search-tineye",
    title: "Image Search via TinEye",
    contexts: ["image"],
    icons: {
        "16": "images/tineye-16.png",
        "32": "images/tineye-32.png"
      }
});

browser.contextMenus.create({
    id: "image-search-google",
    title: "Image Search via Google",
    contexts: ["image"],
    icons: {
        "16": "images/google-16.png",
        "32": "images/google-32.png"
      }
});


// Handle clicks on context menu items

browser.contextMenus.onClicked.addListener((info, tab) => {
    // Set the base of the search URL based on which context menu item was clicked
    let baseUrl = "";
    switch(info.menuItemId) {
        case "image-search-tineye":
            console.log("Search via tineye for " + info.srcUrl);
            baseUrl = "https://tineye.com/search?url=";
            break;

        case "image-search-google":
            console.log("Search via google for " + info.srcUrl);
            baseUrl = "https://www.google.com/searchbyimage?site=search&sa=X&image_url=";
            break;
    }

    // If one of our image search context menu items was clicked...
    if (baseUrl !== "") {
        // ...open a new tab to display the search results
        browser.tabs.create({
            url: baseUrl + info.srcUrl
        });
    }
});