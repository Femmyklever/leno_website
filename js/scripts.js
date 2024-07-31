document.addEventListener('DOMContentLoaded', function(){
  // Mobile Menu
  const toggleBtn = document.querySelector('.navbar__mobile-menu-toggle')
  const menuItems = document.querySelector('.navbar__mobile-menu-items')

  toggleBtn.addEventListener('click', function(){
    menuItems.classList.toggle('active')
  })
  // Modal Video
  const modal = document.querySelector('#videoModal')
  const videoBtn = document.querySelector('.preview__video-play-button')
  const closeBtn = document.querySelector('.modal__close-button')
  const videoPlayer = document.getElementById('videoPlayer')
  // Open Modal when clicked
  videoBtn.addEventListener('click', function(){
    // show Modal
    modal.style.display = 'block'
    // Replace the src attribute with the video url
    videoPlayer.src = 'https://www.youtube.com/embed/oYCixvNW_nA'
    // Close modal on close button click
    closeBtn.addEventListener('click', function(){
      modal.style.display = 'none'
      videoPlayer.src = ''
    })

    // Close modal on outer click
    window.addEventListener('click', function(event){
      if(event.target == modal){
        modal.style.display = 'none'
        videoPlayer.src = ''
      }
    })
  })
})

// Navigation background on scrolll
window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar')
  console.log(navbar)
  if(window.scrollY > 0){
    navbar.classList.add('scroll-bg')
  }else {
    navbar.classList.remove('scroll-bg')
  }
})