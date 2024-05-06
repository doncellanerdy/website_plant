function myFunction() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function gallerySlide(direction) {
        const x = document.getElementById("galleryImages");
      const images = ['gallery1.png', 'gallery2.png', 'gallery3.png']
      let currentImage = x.src.split('/')

       if (direction === 'right' && images.indexOf(currentImage[currentImage.length-1]) === images.length - 1) {
          x.src = images[0]
        }else  if (direction !== 'right' && images.indexOf(currentImage[currentImage.length-1]) === 0) {
          x.src = images[images.length-1];
        }else {
          direction === 'right' ? x.src = images[images.indexOf(currentImage[currentImage.length-1])+1] :
          x.src = images[images.indexOf(currentImage[currentImage.length-1])-1];
        }
  }
