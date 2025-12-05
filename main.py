temperatura = 0
llum = 0

def on_forever():
    global temperatura
    temperatura = input.temperature()
    if temperatura > 22:
        basic.show_string("CALOR")
    else:
        basic.show_string("FRED")
basic.forever(on_forever)

def on_forever2():
    global llum
    llum = input.light_level()
    llum = 0
    if llum > 200:
        music.begin_melody(music.built_in_melody(Melodies.ENTERTAINER),
                                   MelodyOptions.ONCE)
        pass
    elif llum < 50:
        pass
    else:
        pass
basic.forever(on_forever2)
