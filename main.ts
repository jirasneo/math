input.onButtonPressed(Button.A, function () {
    guess += 1
    if (guess > 100) {
        guess += -100
    }
    basic.showNumber(guess)
    check_answer()
})
input.onButtonPressed(Button.AB, function () {
    guess = 1
})
input.onButtonPressed(Button.B, function () {
    guess += 10
    if (guess > 100) {
        guess += -100
    }
    basic.showNumber(guess)
    check_answer()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(answer)
    answer = randint(1, 100)
    basic.pause(3000)
    basic.clearScreen()
})
function check_answer () {
    if (guess == answer) {
        basic.showLeds(`
            . . . . #
            . . . # #
            # . # # .
            # # # . .
            . # . . .
            `)
    }
    if (guess > answer) {
        basic.showString("too high")
    }
    if (guess < answer) {
        basic.showString("too low")
    }
    basic.pause(3000)
    basic.clearScreen()
}
let guess = 0
let answer = 0
answer = randint(1, 100)
guess = 0
