const cells = [
    {id: 1, name: "(child noises in the background!)", active: false},
    {id: 2, name: "hello, hello?", active: false},
    {id: 3, name: "i need to jump in another call", active: false},
    {id: 4, name: "can everyone go on mute", active: false},
    {id: 5, name: "could you please get closer to the mic", active: false},
    {id: 6, name: "(load painful echo / feedback)", active: false},
    {id: 7, name: "next slide, please", active: false},
    {id: 8, name: "can we take this offline?", active: false},
    {id: 9, name: "is __ on the call?", active: false},
    {id: 10, name: "Could you share these slides afterwards?", active: false},
    {id: 11, name: "can someone grant presenter rights?", active: false},
    {id: 12, name: "can you email that to everyone?", active: false},
    {id: 13, name: `CONF CALL ${String.fromCodePoint(9917)}`, active: true},
    {id: 14, name: "sorry, i had problems logging in", active: false},
    {id: 15, name: "(animal noises in the background)", active: false},
    {id: 16, name: "sorry, i didn't find the conference id", active: false},
    {id: 17, name: "i was having connection issues", active: false},
    {id: 18, name: "i will have to get back to you", active: false},
    {id: 19, name: " who just joined?", active: false},
    {id: 20, name: "sorry, something ___ with my calendar", active: false},
    {id: 21, name: "do you see my screen?", active: false},
    {id: 22, name: "let's wait for ___", active: false},
    {id: 23, name: "You will send the minutes?", active: false},
    {id: 24, name: "sorry i was on mute", active: false},
    {id: 25, name: "can you repeat please?", active: false},



]

export function getCells (){

    return cells.filter(cell => cell)
}