namespace SpriteKind {
    export const Builder = SpriteKind.create()
}
function Create_player () {
    mySprite = sprites.create(img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 2 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . e 2 . . . . . . . 
        . . . . . . e e 4 e . . . . . . 
        . . . . . . e 2 4 e . . . . . . 
        . . . . . c c c e e e . . . . . 
        . . . . e e 2 2 2 4 e e . . . . 
        . . c f f f c c e e f f e e . . 
        . c c c c e e 2 2 2 2 4 2 e e . 
        c c c c c c e e 2 2 2 4 2 2 e e 
        c c c c c c e e 2 2 2 2 4 2 e e 
        `, SpriteKind.Player)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Menu()
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
function Menu () {
    blockMenu.setControlsEnabled(true)
    textSprite = textsprite.create("SPACE", 15, 12)
    textSprite2 = textsprite.create("SHOOTER", 15, 7)
    textSprite3 = textsprite.create("2", 15, 12)
    textSprite.setPosition(41, 9)
    textSprite2.setPosition(87, 9)
    textSprite3.setPosition(123, 7)
    textSprite.setMaxFontHeight(5)
    textSprite2.setMaxFontHeight(5)
    textSprite2.setMaxFontHeight(5)
    blockMenu.showMenu([
    "Play",
    "PvP",
    "Shop",
    "Endless Play",
    "Quit"
    ], MenuStyle.Grid, MenuLocation.BottomHalf)
    blockMenu.setColors(7, 15)
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "Endless Play") {
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        Create_player()
    }
})
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let mySprite: Sprite = null
Menu()
