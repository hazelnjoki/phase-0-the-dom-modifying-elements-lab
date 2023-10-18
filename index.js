// Write your code here!
const mainElement = document.getElementById('main');
mainElement.parentNode.removeChild(mainElement);

const oldHeader = document.getElementById('oldHeader');
const newHeader = document.createElement('h1');
const name = "Hazel Njoki"; // Replace this with your actual name
newHeader.textContent = name + ' is the champion!';
newHeader.id = 'victory';
oldHeader.parentNode.replaceChild(newHeader, oldHeader);