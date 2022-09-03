input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index < 4; index++) {
        if (よこ < 4) {
            よこ += 1
        }
        basic.pause(200)
        if (!(input.isGesture(Gesture.TiltRight))) {
            break;
        }
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 4; index++) {
        if (よこ > 0) {
            よこ += -1
        }
        basic.pause(200)
        if (!(input.isGesture(Gesture.TiltLeft))) {
            break;
        }
    }
})
input.onGesture(Gesture.LogoUp, function () {
    for (let index = 0; index < 4; index++) {
        if (たて < 4) {
            たて += 1
        }
        basic.pause(200)
        if (!(input.isGesture(Gesture.LogoUp))) {
            break;
        }
    }
})
input.onGesture(Gesture.LogoDown, function () {
    for (let index = 0; index < 4; index++) {
        if (たて > 0) {
            たて += -1
        }
        basic.pause(200)
        if (!(input.isGesture(Gesture.LogoDown))) {
            break;
        }
    }
})
let よこ = 0
let たて = 0
たて = 2
よこ = 2
let まんなか = 0
basic.forever(function () {
    basic.clearScreen()
    led.plot(よこ, たて)
    if (たて == 2 && よこ == 2) {
        if (まんなか == 0) {
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
            まんなか = 1
        }
    } else {
        まんなか = 0
    }
})
