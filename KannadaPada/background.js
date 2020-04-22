window.word = '';
const receiver = (request,sender,senderResponse)=>{
    window.word = request.text;
    console.log(request.text);
};
chrome.runtime.onMessage.addListener(receiver);