input.onButtonPressed(Button.A, function () {
    cabeza_dinosaurio.change(LedSpriteProperty.Y, -1)
    pies_dinosaurio.change(LedSpriteProperty.Y, -1)
    basic.pause(100)
    cabeza_dinosaurio.change(LedSpriteProperty.Y, 1)
    pies_dinosaurio.change(LedSpriteProperty.Y, 1)
})
function piedrita () {
    piedra = game.createSprite(4, 4)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        piedra.change(LedSpriteProperty.X, -1)
        if (piedra.isTouching(pies_dinosaurio)) {
            basic.showIcon(IconNames.Sad)
            music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
            piedrita()
        }
    }
}
let piedra: game.LedSprite = null
let cabeza_dinosaurio: game.LedSprite = null
let pies_dinosaurio: game.LedSprite = null
pies_dinosaurio = game.createSprite(0, 4)
cabeza_dinosaurio = game.createSprite(0, 3)
piedrita()
basic.forever(function () {
    if (piedra.isTouchingEdge()) {
        basic.pause(1000)
        piedra.delete()
        piedrita()
    }
})
