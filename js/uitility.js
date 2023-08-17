function getInputFieldById(inputElement)
{
    const getElementById = document.getElementById(inputElement);
    const elementFieldString = getElementById.value;
    const value = parseFloat(elementFieldString);
    getElementById.value = '';
    return value;
}
function getTextFieldById(textElement)
{
    const getTextFieldById = document.getElementById(textElement);
    const textFieldString = getTextFieldById.innerText;
    const value = parseFloat(textFieldString);
   
    return value;
}
function setInnerText(elementId, newValue)
{
    const getTextFieldById = document.getElementById(elementId);

    getTextFieldById.innerText = newValue;
}