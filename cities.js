function change_value(city,id) {
    img = document.getElementById(city)
    txt = document.getElementById(id)
    console.log(img,img.style.visibility )
    if (img.style.visibility != "visible") {
        console.log(img.style.visibility)

        img.style.visibility = "visible"
        txt.innerText = "Hide image"
    } else {
        img.style.visibility = "hidden"
        txt.innerText = "Click to see " + city
    }
    
}

