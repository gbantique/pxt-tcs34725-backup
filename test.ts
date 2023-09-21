// tests go here; this will not be compiled when this package is used as an extension.
// https://github.com/gbantique/pxt-tcs34725

input.onButtonPressed(Button.A, function () {
    POLL2 = false
    basic.showIcon(IconNames.No)
    Red2 = -1
    Green2 = -1
    Blue2 = -1
})
input.onButtonPressed(Button.B, function () {
    POLL2 = true
    basic.showIcon(IconNames.Yes)
})
let Blue2 = 0
let Green2 = 0
let Red2 = 0
let POLL2 = false
// let Blue = 0
// let Green = 0
// let Red = 0
// let POLL = false
POLL2 = false
Red2 = -1
Green2 = -1
Blue2 = -1
basic.forever(function () {
    while (POLL) {
        basic.showIcon(IconNames.Heart)
        Red2 = envirobit.getRed()
        Green2 = envirobit.getGreen()
        Blue2 = envirobit.getBlue()
        serial.writeLine("Red: " + Red)
        serial.writeLine("Blue: " + Blue)
        serial.writeLine("Green: " + Green)
        Red2 = 0
        Green2 = 0
        Blue2 = 0
        basic.pause(1000)
    }
})

