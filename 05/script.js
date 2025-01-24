const dogImageDiv = document.getElementById('dogImage');
const dogBtn = document.getElementById('dogButton');

dogBtn.addEventListener('click', () => {
    getNewDog();
});

function getNewDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        dogImageDiv.innerHTML = `<img src="${data.message}" alt="dog" />`;
    });
}