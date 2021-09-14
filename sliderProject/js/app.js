const images = [
    'img/img1 (1).jpg',
    'img/img1 (2).jpg',
    'img/img1 (3).jpg',
    'img/img1 (4).jpg',
    'img/img1 (5).jpg',
    'img/img1 (6).jpg'
]
let singleImgIndex = 0;
const slider = document.getElementById('slider')
setInterval(()=>{
    if(singleImgIndex >=images.length){
        singleImgIndex  = 0;
    }
    const imgUrl = images[singleImgIndex]
    slider.setAttribute('src',imgUrl)
    singleImgIndex ++;
},1000)