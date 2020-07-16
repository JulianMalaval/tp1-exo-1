let posX = 0
input.onButtonPressed(Button.A, function () {
    if (posX >= 0) {
        led.plot(posX, 0)
        led.unplot(posX, 0)
        posX += -1
        led.plot(posX, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (posX <= 4) {
        led.plot(posX, 0)
        led.unplot(posX, 0)
        posX += 1
        led.plot(posX, 0)
    }
})
basic.forever(function () {
    led.plot(posX, 0)
    basic.pause(1000)
    led.unplot(posX, 0)
    posX += 1
    if (posX == 4) {
        while (posX != 0) {
            led.plot(posX, 0)
            basic.pause(1000)
            led.unplot(posX, 0)
            posX += -1
        }
    }
})
