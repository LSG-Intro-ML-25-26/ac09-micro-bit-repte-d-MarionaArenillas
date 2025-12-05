let llum = 0
let temperatura = 0
basic.forever(function () {
    llum = input.lightLevel()
    if (llum > 200) {
        music.stopMelody(MelodyStopOptions.All)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
    } else if (llum < 50) {
        music.stopMelody(MelodyStopOptions.All)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
basic.forever(function () {
    temperatura = input.temperature()
    if (temperatura > 22) {
        basic.showString("CALOR")
        basic.pause(500)
    } else {
        basic.showString("FRED")
        basic.pause(500)
    }
})
