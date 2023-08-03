chrome.contextMenus.create({
    title: "Translate to Bangla",
    contexts: ["selection"],
    onclick: translateSelection
  });
  
  function translateSelection(info, tab) {
    const selectedText = info.selectionText;
    const translatedText = translateToBangla(selectedText);
    showTranslationPopup(translatedText);
  }
  
  function translateToBangla(text) {
    return text;
  }
  
  function showTranslationPopup(text) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png", 
      title: "Translation",
      message: text
    });
  }
  