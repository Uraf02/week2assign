const thumb = document.getElementById('thumbnails')

const images = [
    {
        src: './images/bonfire.png',
        alt: 'bonfire'
    },
    {
        src: './images/CastleMoon.jpg',
        alt: 'The moon over a castle'
    },
    {
        src: './images/Cathedral.jpg',
        alt: 'Cathedral'
    },
    {
        src: './images/Eclipse.jpg',
        alt: 'Eclipse'
    },
    {
        src: './images/inside.avif',
        alt: 'The inside of a building'
    },
    {
        src: './images/redmoon.jpg',
        alt: 'Red moon'
    },
    {
        src: './images/remains.jpg',
        alt: 'Ruins'
    }

    
]

function thumbnailsmaking () {

for(let i=0;i<images.length;i++) {
    const imagelement= document.createElement('img')
    imagelement.src= images[i].src
    imagelement.alt= images[i].alt

    imagelement.addEventListener('click', function() {
        console.log(image[1])
    })

    thumb.append(imagelement)
}
}

thumbnailsmaking()






