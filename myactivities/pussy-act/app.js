import{left} from "./info.js"
import {right} from "./img.js";

let container = document.getElementById("container")

const myObj = {
    title1 : "Pussy Lover",
    title2 : "Cat Forever",
    para1 : "The cat, commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC.",
    para2 : "As of 2017, the domestic cat was the second most popular pet in the United States, with 95.6 million cats owned and around 42 million households owning at least one cat. In the United Kingdom.",
    btn1 : "About cats",
    btn2 : "About Breeds",
    btn3 : "About Facts",
    btn4 : "Contact Us",
    image : "catcat.jpg"
}

const {title1,title2,para1,para2,btn1,btn2,btn3,btn4,image} = myObj;

container.append(left(title1,title2,para1,para2,btn1,btn2,btn3,btn4))
container.append(right(image))