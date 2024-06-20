import { Actor, Animation, CollisionType, Color, Engine, SpriteSheet, Vector } from "excalibur"
import { Resources } from "../resources"

export class Npc extends Actor {
    constructor(posicao: Vector, nome: string) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            collisionType: CollisionType.Fixed
        })


    }

    onInitialize(engine: Engine<any>): void {
        const npcASpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.npcASpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0
                }
            }
        })

        const duracaoframeanimacao = 70


        if(){
            
        }


        const DownIdlea = new Animation({
            frames: [
                { graphic: npcASpriteSheet.getSprite(18, 1) },
                { graphic: npcASpriteSheet.getSprite(19, 1) },
                { graphic: npcASpriteSheet.getSprite(20, 1) },
                { graphic: npcASpriteSheet.getSprite(21, 1) },
                { graphic: npcASpriteSheet.getSprite(22, 1) },
                { graphic: npcASpriteSheet.getSprite(23, 1) },
            ],
            frameDuration: duracaoframeanimacao
        })
        this.graphics.use(DownIdlea)


    }
}