document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");  //search through all images

    for(const image of images){  //loop through all images
        fetch("https://dog.ceo/api/breeds/image/random")  //find random pic using this website
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })
    }

})