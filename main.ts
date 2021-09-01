scene.setBackgroundColor(9)
let Mabel = sprites.create(img`
    . . 1 e e . . . . e e 1 . . . . 
    . 1 f f f e . . e f f f 1 . . . 
    e f f f f 1 e e 1 f f f f e . . 
    e f f e e 1 1 1 1 e e f f e . . 
    e f e e f f f f f f e e f e . . 
    . e e f f f f f f f f e e . . . 
    . . e f d f f f f d f e . . . . 
    . . f f f f 3 3 f f f f . . e e 
    . . f e e e f f e e e f . f 1 e 
    . . . f e e e e e e f f f f f f 
    . . . f f 1 1 1 f f f 1 1 f f . 
    . . . f e f 1 f e 1 f e f f . . 
    . . . f e f f f e f f e f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
Mabel.setPosition(18, 14)
Mabel.say("Hi, I'm Mabel")
let neighborCat = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
neighborCat.setPosition(115, 60)
let friendlyCat = sprites.create(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 b f f d f 
    . f 2 2 2 2 2 2 d b b d b f 
    . f d d d d d d d f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
friendlyCat.setPosition(54, 96)
pause(2000)
neighborCat.say("I don't care")
pause(2000)
friendlyCat.say("Hi, I'm Hazel")
pause(1000)
Mabel.say("You want to play?")
pause(2000)
neighborCat.say("Absolutely not!")
pause(2000)
friendlyCat.say("Of course!")
pause(2000)
neighborCat.x += 161
Mabel.say("I'm glad you stayed")
pause(2000)
friendlyCat.say("I'm glad she left")
