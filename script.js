

const slides = document.querySelectorAll(".slide ")
var counter = 0;
console.log(slides)

slides.forEach(
  (slide,index) => {
    slide.style.left = `${index * 100}% `
  }
  )

  const goprev = () =>  {
    if(counter<=2)
    counter-- 
    slideimage()
 } 

  const gonext = () =>  {
    counter++
    slideimage()
 } 

  const slideimage = () => {
    slides.forEach(
      (slide) => {
         slide.style.transform =  `translateX(-${counter * 100}% )`
      }
    )
  }

 

  