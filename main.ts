basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(500)
})
