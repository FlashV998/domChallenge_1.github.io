console.log('WELCoME');



Star("#Star", 5, getStar)


function getStar(e) {
    value = e.target.dataset.ratingVal;
    document.querySelector("#NoStar").innerHTML = value
}
function Star(el, count, callBack) {
    let activeValue = -1
    const element = document.querySelector(el);
    const fragment = document.createDocumentFragment();
    console.log("cb reached");
    const para = document.createElement("i");
    for (let i = 1; i <= count; i++) {
        const para = document.createElement("i");
        para.classList.add("fa");
        para.classList.add("fa-star-o");
        para.dataset.ratingVal = i
        fragment.appendChild(para)
    }
    element.appendChild(fragment)
    element.addEventListener("mouseover", onMouseOver)
    element.addEventListener("click", onClick);
    element.addEventListener("mouseleave", onMouseLeave)

    function onMouseOver(e) {
        let value = e.target.dataset.ratingVal;
        fill(value)
    }

    function fill(value) {
        for (let i = 0; i < count; i++) {
            if (i < value) {
                element.children[i].classList.remove("fa-star-o")
                element.children[i].classList.add("fa-star")
            }
            else {
                element.children[i].classList.remove("fa-star")
                element.children[i].classList.add("fa-star-o")
            }

            // element.children[i].classList.add("fa-star")

        }
    }

    function onClick(e) {
        activeValue = e.target.dataset.ratingVal;
        fill(activeValue)
        callBack(e)
    }

    function onMouseLeave(e) {
        // let value=e.target.dataset.ratingVal;
        // activeValue=-1
        fill(activeValue)

    }
}
