joystickbit.initJoystickBit()
radio.setGroup(1)
basic.showString("R-1")
music.play(music.tonePlayable(466, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.clearScreen()
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(139, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . . . .
            . . # # #
            . . # . .
            . . # # .
            . . # . .
            `)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendNumber(4)
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # . . . .
            `)
    } else {
        radio.sendNumber(0)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
