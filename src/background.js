// Create context menu items

browser.contextMenus.create({
    id: "image-search-tineye",
    title: "Image Search via TinEye",
    contexts: ["image"]
});

browser.contextMenus.create({
    id: "image-search-google",
    title: "Image Search via Google",
    contexts: ["image"]
});


// Handle clicks on context menu items

browser.contextMenus.onClicked.addListener((info, tab) => {
    // detect one of our image search items clicked
    switch(info.menuItemId) {
        case "image-search-tineye":
            console.log("TODO: search via tineye");
            break;

        case "image-search-google":
            console.log("TODO: search via google");
            break;
    }
});