basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
        basic.pause(1000)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
        basic.pause(1000)
    }
})
