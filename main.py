tid = 0
radio.set_group(12)
basic.show_icon(IconNames.YES)

def on_forever():
    global tid
    tid = 5
    while tid > 0 and input.button_is_pressed(Button.AB):
        # #while tid < 0 :
        basic.show_number(tid)
        tid = tid - 1
        basic.pause(100)
    if tid == 0:
        radio.send_number(1)
        basic.show_icon(IconNames.HAPPY)
        basic.pause(2000)
        basic.clear_screen()
basic.forever(on_forever)
