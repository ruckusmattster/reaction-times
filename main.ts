input.onButtonPressed(Button.A, function () {
    start = 5
    basic.showString("when the screen")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(300)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("press B")
    end = 0
})
input.onButtonPressed(Button.B, function () {
    end = 1
})
let end = 0
let start = 0
start = 0
end = 0
while (start == 0) {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # . .
        . # # . .
        . . # . .
        `)
    basic.clearScreen()
    basic.pause(500)
}
basic.forever(function () {
	
})
