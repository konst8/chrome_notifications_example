const options = {
  type: "basic",
  iconUrl: "./icon.png",
  title: "Popup.js",
  message: "Hello from popup.js!"
};

chrome.notifications.create(options);