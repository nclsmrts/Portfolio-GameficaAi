import { Actor, Animation, CollisionType, Color, Engine, Keys, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor {
    // Propriedade do player
    private velocidade: number = 180

    //Configuração do Player
    constructor(posicao: Vector) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: "Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active
        })

    }

    onInitialize(engine: Engine<any>): void {
        // Configurar sprite do player
        const playerSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.playerSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 4
                }
            }
        })

        // criar as animações
        const duracaoframeanimacao = 70
        
        // animações idle
        // idle esquerda
        const leftIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(12, 1) },
                { graphic: playerSpriteSheet.getSprite(13, 1) },
                { graphic: playerSpriteSheet.getSprite(14, 1) },
                { graphic: playerSpriteSheet.getSprite(15, 1) },
                { graphic: playerSpriteSheet.getSprite(16, 1) },
                { graphic: playerSpriteSheet.getSprite(17, 1) },
            ],
            frameDuration: 70
        })
        this.graphics.add("left-idle", leftIdle)
        this.graphics.use("left-idle")

        // Configurar player para monitorar evento "hold" -> segurar tecla
        engine.input.keyboard.on("hold", (event) => {
            // Detectar qual tecla está pressionada
            switch (event.key) {
                case Keys.A:
                case Keys.Left:
                    // mover para a esquerda
                    // Define a velocidade x para negativa, que significa movimentar o player para a esquerda
                    this.vel.x = -this.velocidade
                    break;

                case Keys.D:
                case Keys.Right:
                    // mover para a diretia
                    // Define a velocidade x para negativa, que significa movimentar o player para a diretita
                    this.vel.x = this.velocidade
                    break;

                case Keys.W:
                case Keys.Up:
                    // mover para a cima
                    // Define a velocidade x para negativa, que significa movimentar o player para a cima
                    this.vel.y = -this.velocidade
                    break;

                case Keys.S:
                case Keys.Down:
                    // mover para a baixo
                    // Define a velocidade x para negativa, que significa movimentar o player para a baixo
                    this.vel.y = this.velocidade
                    break;

                default:
                    // Zera a velocidade do player 
                    this.vel.x = 0
                    this.vel.y = 0
                    break;
            }
        })

        // configura o player para monitorar evento "release" -> soltar tecla, horizontal
        engine.input.keyboard.on("release", (event) => {
            // faxer o player parar ao soltar a tecla de movimentação
            if (
                event.key == Keys.A ||
                event.key == Keys.Left ||
                event.key == Keys.D ||
                event.key == Keys.Right
            ) {
                // zerar velocidade horizontal
                this.vel.x = 0
            }
        })

        // configura o player para monitorar evento "release" -> soltar tecla, vertical
        engine.input.keyboard.on("release", (event) => {
            // faxer o player parar ao soltar a tecla de movimentação
            if (
                event.key == Keys.W ||
                event.key == Keys.Up ||
                event.key == Keys.S ||
                event.key == Keys.Down
            ) {
                // zerar velocidade vertical
                this.vel.y = 0
            }
        })

    }

}