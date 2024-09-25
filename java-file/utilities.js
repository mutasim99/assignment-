function getInputfeildValue(id){
   const inputValuenumber = parseFloat(document.getElementById(id).value);
   return inputValuenumber;
}

function getTextValue(id){
    const InputText = parseFloat(document.getElementById(id).innerText);
    return InputText;
}

function getId(id){
    const btnId = document.getElementById(id);
    return btnId;
}