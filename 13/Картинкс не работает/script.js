const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid') [0];

window.addEventListener('load', dayNigthMode)
input.addEventListener('keydown', function(event){
    if (event.key === 'Enter')
    loadImg();
})

function loadImg(){
    removeImages();


    // API не смог создать, нет России
    const url = 'https://api.unplash.com/search/photos/?query='+input.value+'&per_page=9&client_id='

}

fetch(url)

.then(response =>{
    if(response.ok)
    return response.json();
    else
    alert(response.status)
})

.then(data =>{
    const imageNodes = [];
    for(let i = 0; i < data.results.length;i++){
        imageNodes[i] = document.createElement('div');
        imageNodes[i].className = 'img';
        imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
        imageNodes[i].addEventListener('dblclick',
        function(){
            window.open(data.results[i].links.downoload,'_blank');
        })
        grid.appendChild(imageNodes[i]);
    }
})

function removeImages(){
    grid.innerHTML = '';
}

function dayNigthMode(){
    const date = new Date();
    const hour = date.getHours();

    if(hour >= 7 && hour <= 19){
        document.body.style.backgroundColor = 
        'whitesmoke';
        document.body.style.color = 'black';
    }
    else{
        document.body.style.backgroundColor = 'black';
        document.body.style.backgroundColor = 'white';
    }
}