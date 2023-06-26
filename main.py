tid = 0
radio.set_group(12)
basic.show_icon(IconNames.YES)

def on_forever():
    global tid
    tid = 5
    while tid > 0 and input.button_is_pressed(Button.AB):
        # while tid < 0:
        basic.show_number(tid)
        tid = tid - 1
        basic.pause(100)
        music.play(music.tone_playable(3000, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
    if tid == 0:
        music.play(music.tone_playable(3000, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.IN_BACKGROUND)
        radio.send_number(1)
        basic.show_icon(IconNames.HAPPY)
        basic.pause(2000)
        basic.clear_screen()
basic.forever(on_forever)
