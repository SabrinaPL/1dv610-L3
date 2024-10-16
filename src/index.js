import { PhotoAssistant } from 'photo-assistant'

const photoAssistant = new PhotoAssistant()

document.addEventListener ('click', (event) => {
  const images = document.querySelectorAll('img')

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', (event) => {
      photoAssistant.addImage(images[i])
    })
  }
})

