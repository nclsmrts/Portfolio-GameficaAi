import { Actor, Color, Engine, FadeInOut, Keys, Resource, Scene, SceneActivationContext, Sprite, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetointeração: any
    private textoDacena?: string
    private elementotexto?: HTMLElement
    private actorEmpresa?: Actor
    private listaImagens?: Sprite[]


    fadeOutElement(elemento: HTMLElement) {
        let opacidade = parseFloat(elemento.style.opacity)

        setInterval(() => {
            if (opacidade > 0) {
                opacidade -= 0.05
                elemento.style.opacity = opacidade.toString()
            }
        })
    }

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 250
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        // Adicionando o texto 
        this.elementotexto = document.createElement("div") as HTMLElement
        this.elementotexto.style.opacity = "1"
        let containergame = document.querySelector(".container-game") as HTMLElement
        containergame.appendChild(this.elementotexto)
        this.elementotexto.classList.add("case")

        // this.elementotexto.innerHTML = this.textoDacena!

        // Criar actor para receber img
        this.actorEmpresa = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight)
        })

        let imgmesaa = Resources.npc_mesaA.toSprite()
        let imgmesab = Resources.npc_mesaB.toSprite()
        let imgmesac

        this.listaImagens = [imgmesaa, imgmesab]

        // Sair da cena
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.F) {
                this.fadeOutElement(this.elementotexto!)
                this.engine.goToScene("exposicao")
            }
        })

    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada
        this.objetointeração = context.data

        // se for a mesa A
        if (this.objetointeração.nomeDoActor == "mesa_stand_a") {

            this.elementotexto!.innerHTML = "<p>salve, sfaefaffaf</p>"

            this.elementotexto!.style.opacity = "1"

            // inserir a imagem
            this.actorEmpresa?.graphics.add(this.listaImagens![0])

            // Mudar o zoom da img 
            this.actorEmpresa!.graphics.current!.scale = vec(1.5, 1.5)

        }

        // se for a B
        if (this.objetointeração.nomeDoActor == "mesa_stand_b") {

            // inserir texto
            this.elementotexto!.innerHTML = "<p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores.</p>"
            this.elementotexto!.style.opacity = "1"

            // inserir a img
            this.actorEmpresa?.graphics.add(this.listaImagens![1])

            // mudar o zoom da img
            this.actorEmpresa!.graphics.current!.scale = vec(1.7, 1.7)
        }

        // se for a C
        if (this.objetointeração.nomeDoActor == "mesa_stand_c") {

            // inserir texto
            this.elementotexto!.innerHTML = "<p>Essa é a descrição do case c</p>"
            this.elementotexto!.style.opacity = "1"

            // Inserir a img 
            this.actorEmpresa?.graphics.add(this.listaImagens![0])

            // mudar o zoom da img
            this.actorEmpresa!.graphics.current!.scale = vec(1.7, 1.7)

        }

        this.add(this.actorEmpresa!)

    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementotexto!.style.opacity = "0"
    }
}