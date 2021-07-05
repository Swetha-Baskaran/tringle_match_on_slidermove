let _ = (a) => {
    return document.querySelector(a)
}

let range = _(".range")
range.oninput = (() => {
    // line movement

    // linear
    _("#s1").style.bottom = 100 - (range.value / 1.32) + "px"
    _("#s2").style.left = (range.value * 0.46) + 6 + "px"
    _("#s3").style.right = 100 - (range.value * 0.001) + "px"

    //rotational
    _("#s2").style.transform = "rotateZ(" + [25 - [(range.value) / 8]] + "deg)"
    _("#s3").style.transform = "rotateZ(" + -[65 - [(range.value) * 0.35]] + "deg)"

    // lable movement
    _(".e").style.bottom = 100 - (range.value / 1.32) + "px"
    _(".f").style.bottom = 100 - (range.value / 1.32) + "px"

})
