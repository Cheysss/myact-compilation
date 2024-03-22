import {image} from "./img.js"
import {info} from "./info.js"
import {cards} from "./card.js"

const myObj1 = {
    title : "My portfolio",
    disc : "Hi, My name is Marc Kenji A. Sual. I lived in Jadol Mendoza BRGY 12 Gingoog City, Misamis Oriental. So I'm a BSIT Student Second Year College",
    btn : "My Projects",
    myimg : "mypfp.PNG"
}

const myObj2 = {
    comp : "Project Completed",

    img1 : "project1.PNG",
    dis1 : "This Project is a miniature of our school GCC last school year, and we used recycled materials to build it and also arduino for the lights.",
    btn1 : "Learn More",

    img2 : "project2.PNG",
    dis2 : "This cute robot is WALL-E BAYOLA, it is automated robot that can sense obstacles, and will automatically change direction if theres a obstacles",
    btn2 : "Learn More",

    img3 : "project3.PNG",
    dis3 : "This is just a UI about POS System",
    btn3 : "Learn More"
}

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

const {title,disc,btn,myimg} = myObj1;

const {comp,img1,dis1,btn1,img2,dis2,btn2,img3,dis3,btn3} = myObj2;

sectionOne.append(info(title,disc,btn))
sectionOne.append(image(myimg))  

sectionTwo.append(cards(comp,img1,dis1,btn1,img2,dis2,btn2,img3,dis3,btn3))



