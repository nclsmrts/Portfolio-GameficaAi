import { Actor, CollisionType, Color, Engine, Keys, vec } from "excalibur";

export class Player extends Actor {
    // Propriedade do player
    private velocidade: number = 180

    //Configuração do Player
    constructor() {
        super({
            pos: vec(500, 500),
            width: 32,
            height: 32,
            name: "Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active
        })

    }

    onInitialize(engine: Engine<any>): void {
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