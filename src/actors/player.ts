import { Actor, Animation, Collider, CollisionContact, CollisionType, Color, Engine, Keys, Side, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor {
    // Propriedade do player
    private velocidade: number = 180
    private objetoproximo: boolean = false
    private ultimocolisor?: Collider

    //Configuração do Player
    constructor(posicao: Vector) {
        super({
            pos: posicao,
            width: 35,
            height: 40,
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
                    y: 0
                }
            }
        })

        // criar as animações
        const duracaoframeanimacao = 140

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
            frameDuration: duracaoframeanimacao
        })
        this.graphics.add("left-idle", leftIdle)

        // idle direita
        const RightIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(0, 1) },
                { graphic: playerSpriteSheet.getSprite(1, 1) },
                { graphic: playerSpriteSheet.getSprite(2, 1) },
                { graphic: playerSpriteSheet.getSprite(3, 1) },
                { graphic: playerSpriteSheet.getSprite(4, 1) },
                { graphic: playerSpriteSheet.getSprite(5, 1) },
            ],
            frameDuration: duracaoframeanimacao
        })
        this.graphics.add("right-idle", RightIdle)

        // idle baixo 
        const DownIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(18, 1) },
                { graphic: playerSpriteSheet.getSprite(19, 1) },
                { graphic: playerSpriteSheet.getSprite(20, 1) },
                { graphic: playerSpriteSheet.getSprite(21, 1) },
                { graphic: playerSpriteSheet.getSprite(22, 1) },
                { graphic: playerSpriteSheet.getSprite(23, 1) },
            ],
            frameDuration: duracaoframeanimacao
        })
        this.graphics.add("down-idle", DownIdle)

        // Definir animação padrão 
        this.graphics.use("down-idle")

        // idle cima
        const UpIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(6, 1) },
                { graphic: playerSpriteSheet.getSprite(7, 1) },
                { graphic: playerSpriteSheet.getSprite(8, 1) },
                { graphic: playerSpriteSheet.getSprite(9, 1) },
                { graphic: playerSpriteSheet.getSprite(10, 1) },
                { graphic: playerSpriteSheet.getSprite(11, 1) },
            ],
            frameDuration: duracaoframeanimacao
        })
        this.graphics.add("Up-idle", UpIdle)

        // animação de andar
        // andar direita
        const rightwalk = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(0, 2) },
                { graphic: playerSpriteSheet.getSprite(1, 2) },
                { graphic: playerSpriteSheet.getSprite(2, 2) },
                { graphic: playerSpriteSheet.getSprite(3, 2) },
                { graphic: playerSpriteSheet.getSprite(4, 2) },
                { graphic: playerSpriteSheet.getSprite(5, 2) },
            ],
            frameDuration: duracaoframeanimacao
        })
        this.graphics.add("right-walk", rightwalk)

        // andar baixo
        const downwlak = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(6, 2) },
                { graphic: playerSpriteSheet.getSprite(7, 2) },
                { graphic: playerSpriteSheet.getSprite(8, 2) },
                { graphic: playerSpriteSheet.getSprite(9, 2) },
                { graphic: playerSpriteSheet.getSprite(10, 2) },
                { graphic: playerSpriteSheet.getSprite(11, 2) },
            ],
            frameDuration: duracaoframeanimacao
        })
        this.graphics.add("down-walk", downwlak)

        // andar esquerda
        const leftwalk = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(12, 2) },
                { graphic: playerSpriteSheet.getSprite(13, 2) },
                { graphic: playerSpriteSheet.getSprite(14, 2) },
                { graphic: playerSpriteSheet.getSprite(15, 2) },
                { graphic: playerSpriteSheet.getSprite(16, 2) },
                { graphic: playerSpriteSheet.getSprite(17, 2) },
            ],
            frameDuration: duracaoframeanimacao
        })
        this.graphics.add("left-walk", leftwalk)

        // andar baixo
        const upwalk = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(18, 2) },
                { graphic: playerSpriteSheet.getSprite(19, 2) },
                { graphic: playerSpriteSheet.getSprite(20, 2) },
                { graphic: playerSpriteSheet.getSprite(21, 2) },
                { graphic: playerSpriteSheet.getSprite(22, 2) },
                { graphic: playerSpriteSheet.getSprite(23, 2) },
            ],
            frameDuration: duracaoframeanimacao
        })
        this.graphics.add("up-walk", upwalk)

        // animção de ler 
        const ler = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(0, 7) },
                { graphic: playerSpriteSheet.getSprite(1, 7) },
                { graphic: playerSpriteSheet.getSprite(2, 7) },
                { graphic: playerSpriteSheet.getSprite(3, 7) },
                { graphic: playerSpriteSheet.getSprite(4, 7) },
                { graphic: playerSpriteSheet.getSprite(5, 7) },
                { graphic: playerSpriteSheet.getSprite(6, 7) },
                { graphic: playerSpriteSheet.getSprite(7, 7) },
                { graphic: playerSpriteSheet.getSprite(8, 7) },
                { graphic: playerSpriteSheet.getSprite(9, 7) },
                { graphic: playerSpriteSheet.getSprite(10, 7) },
                { graphic: playerSpriteSheet.getSprite(11, 7) },
            ]
        })
        this.graphics.add(ler)

        engine.input.keyboard.on("hold", (event) => {
            if (event.key == Keys.E) {
                this.graphics.use(ler)
            }
        })

        // Configurar player para monitorar evento "hold" -> segurar tecla
        engine.input.keyboard.on("hold", (event) => {
            // Detectar qual tecla está pressionada
            switch (event.key) {
                case Keys.A:
                case Keys.Left:
                    // mover para a esquerda
                    // Define a velocidade x para negativa, que significa movimentar o player para a esquerda
                    this.vel.x = -this.velocidade
                    this.graphics.use(leftwalk)
                    break;

                case Keys.D:
                case Keys.Right:
                    // mover para a diretia
                    // Define a velocidade x para negativa, que significa movimentar o player para a diretita
                    this.vel.x = this.velocidade
                    this.graphics.use(rightwalk)
                    break;

                case Keys.W:
                case Keys.Up:
                    // mover para a cima
                    // Define a velocidade x para negativa, que significa movimentar o player para a cima
                    this.vel.y = -this.velocidade
                    this.graphics.use(downwlak)
                    break;

                case Keys.S:
                case Keys.Down:
                    // mover para a baixo
                    // Define a velocidade x para negativa, que significa movimentar o player para a baixo
                    this.vel.y = this.velocidade
                    this.graphics.use(upwalk)
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

            switch (event.key) {
                case Keys.A:
                case Keys.Left:
                    this.graphics.use(leftIdle)
                    break;

                case Keys.D:
                case Keys.Right:
                    this.graphics.use(RightIdle)
                    break;

                case Keys.S:
                case Keys.Down:
                    this.graphics.use(DownIdle)
                    break;

                case Keys.W:
                case Keys.Up:
                    this.graphics.use(UpIdle)
                    break;

                default:
                    break;
            }

        })

        engine.input.keyboard.on("press", (event) => {
            // Se a telca pressionada for F e tiver objeto proximo
            if (event.key == Keys.F && this.objetoproximo) {
                // Identificar o alvo da interação
                if (this.ultimocolisor?.owner.name == "mesa_stand_a") {
                    console.log("Essa é a mesa A");

                    // Vai para a cena passando qual o objeto da interação
                    engine.goToScene("case", {
                        sceneActivationData: {
                            // Passa o nome do actor que interagiu com o Player
                            nomeDoActor: this.ultimocolisor?.owner.name
                        }
                    })
                }
                if (this.ultimocolisor?.owner.name == "mesa_stand_b") {
                    console.log("Essa é a mesa B");
                }
                if (this.ultimocolisor?.owner.name == "mesa_stand_c") {
                    console.log("Essa é a mesa C");
                }
            }
        })

    }

    onPreCollisionResolve(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
        console.log(other.owner.name);
        // indicar que tem objeto proximo
        this.objetoproximo = true

        // registrar o ultimo objeto colidido
        this.ultimocolisor = other
    }

    onPreUpdate(engine: Engine<any>, delta: number): void {
        // detectar se o player está distante do ultimo objeto
        if (this.ultimocolisor && this.pos.distance(this.ultimocolisor.worldPos) > 40) {
            // Marcar que o objeto não está proximo
            this.objetoproximo = false
            // console.log("Está longe");

        }
    }
}