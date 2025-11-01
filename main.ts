let hand = 0
input.onButtonPressed(Button.A, function () {
    hand = randint(1, 3)
    music.play(music.stringPlayable("C - C - C E E E ", 200), music.PlaybackMode.UntilDone)
    if (hand == 1) {
        basic.showIcon(IconNames.Diamond)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
