let tid = 0
radio.setGroup(12)
basic.showIcon(IconNames.Yes)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
basic.showString("Sender")
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    tid = 5
    while (tid > 0 && input.buttonIsPressed(Button.AB)) {
        // while tid < 0:
        basic.showNumber(tid)
        tid = tid - 1
        basic.pause(100)
        music.play(music.tonePlayable(3000, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (tid == 0) {
        music.play(music.tonePlayable(3000, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        radio.sendNumber(1)
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.clearScreen()
    }
})
