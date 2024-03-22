const left = (a1,a2,b1,b2,c1,c2,c3,c4) => {
    let div = document.createElement("div")
    div.className = "left"

    div.innerHTML = `<h1>${a1}</h1>
                    <h1>${a2}</h1>
                    <p>${b1}</p>
                    <p>${b2}</p>
                    <button>${c1}</button>
                    <button>${c2}</button>
                    <button>${c3}</button>
                    <button>${c4}</button>

    `
    return div
}

export {left}