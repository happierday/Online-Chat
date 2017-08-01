function displayMessage(array){
    let user = array[0].slice(25,array[0].length);
    let message = document.createElement("div");
    message.appendChild(document.createTextNode(user + " :  " +array[1]));
    if(user.toUpperCase() === localStorage.getItem(0).toUpperCase()){
        message.setAttribute("style","width:50%;border-radius: 10px;padding:10px;margin:5px;background:#1ddced;color:black;float:right");
    }else{
        message.setAttribute("style","width:50%;border-radius: 10px;padding:10px;margin:5px;background:#7FFFD4;color:black;float:left");
    }
    displayText.appendChild(message);
    displayText.appendChild(document.createElement('br'));
}