// You can add your event handlers here! 

let giftList = document.getElementsByClassName("gift-list")


document.addEventListener("DOMContentLoaded", function(){
if (gifts.length != 0) {
        for (element of gifts) {
            let li = document.createElement("li")
            let img = document.createElement("img")
            img.src = element.image
            img.className = "gift-images"
            let label = document.createElement('label')
            label.innerText = element.name
            img.appendChild(label)
            li.appendChild(img)
            giftList[0].appendChild(li)
        }
} else {
    let li = document.createElement("li")
    li.innerText = "No gifts yet :("
    giftList[0].appendChild(li)
}
})
