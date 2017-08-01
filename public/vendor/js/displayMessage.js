/*This function will be called inside history on value event
*/
function displayMessage(array){
    let user = array[0].slice(25,array[0].length);
    let message = document.createElement("div");
    //add user and message to the html element for future display
    message.appendChild(document.createTextNode(user + " :  " +array[1]));
    
    /*Every time when user send a message, the message will show on the right
    side when the message is sent by user, otherwise show on the left when someone
    else send the mesage. 
    */
    //each message will have rectangle container like all chat  message does
    if(user.toUpperCase() === localStorage.getItem(0).toUpperCase()){
        message.setAttribute("style","width:50%;border-radius: 10px;padding:10px;margin:5px;background:#1ddced;color:black;float:right");
    }else{
        message.setAttribute("style","width:50%;border-radius: 10px;padding:10px;margin:5px;background:#7FFFD4;color:black;float:left");
    }
    //append them  to displayText element to show on the web
    displayText.appendChild(message);
    displayText.appendChild(document.createElement('br'));
}