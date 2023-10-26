let sliderContainer=document.getElementById('sliderContainer')
let slider=document.getElementById('slider')
let cards=slider.getElementsByTagName('li')
let elementsToShow=2
let sliderContainerWidth=72
let cardWidth=sliderContainerWidth/elementsToShow 
slider.style.width=cards.length*cardWidth
 for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width=cardWidth
 }