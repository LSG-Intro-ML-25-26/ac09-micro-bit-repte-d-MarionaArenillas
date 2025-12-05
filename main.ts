let temp = 0
basic.forever(function () {
    temp = input.temperature()
    if (temp > 22) {
        basic.showString("CALOR")
    } else {
        basic.showString("FRED")
    }
})
