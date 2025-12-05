def on_forever():
    temp = input.temperature()
    if temp > 22:
        basic.show_string("calor")
    else:
        basic.show_string("fred")
basic.forever(on_forever)