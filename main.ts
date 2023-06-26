let tid = 0
radio.setGroup(12)
basic.showIcon(IconNames.Yes)
basic.forever(function on_forever() {
    
    tid = 5
    while (tid > 0 && input.buttonIsPressed(Button.AB)) {
        //  #while tid < 0 :
        basic.showNumber(tid)
        tid = tid - 1
        basic.pause(100)
    }
    if (tid == 0) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.clearScreen()
    }
    
})
