const right = (x) => {
    let div = document.createElement("div")
    div.className = "right"

    div.innerHTML = `<img src="./img/${x}">`

    return div
}

export {right}