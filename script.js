const gym = document.getElementById("powerlifting")
const gameDesign = document.getElementById("gameDesign")
const music = document.getElementById("music")
const about = document.getElementById("foot")

//REMEMBER GETELEMENTS RETURNS ARRAY
console.log(about)

document.getElementById("gym").addEventListener("click",(event)=> {
    gym.scrollIntoView({behavior: "smooth"})
})
document.getElementById("code").addEventListener("click",(event)=> {
    gameDesign.scrollIntoView({behavior: "smooth"})
})
document.getElementById("mus").addEventListener("click",(event)=> {
    music.scrollIntoView({behavior: "smooth"})
})
document.getElementById("contact").addEventListener("click",(event)=> {
    about.scrollIntoView({behavior: "smooth"})
})