const info = (a,b,c,) => {
    let div = document.createElement("div")
    div.className ="info"
    div.innerHTML = `<h1>${a}</h1>
                    <p>${b}</p>     
                    <a href="#sectionTwo"><button>${c}</button></a>
    
    `
    return div
}

export{info}