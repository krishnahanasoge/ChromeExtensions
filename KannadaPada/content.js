const wordSelect = ()=>{
    let selectedText = window.getSelection().toString();
    if(selectedText.length > 0){
        let message = {
            text: selectedText
        };
        chrome.runtime.sendMessage(message);
    }
};
window.addEventListener('mouseup',wordSelect);