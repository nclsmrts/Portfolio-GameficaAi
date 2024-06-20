import { Actor, Color, Engine, FadeInOut, Keys, Resource, Scene, SceneActivationContext, Sprite, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetointeração: any
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

    // onTransition(direction: "in" | "out"): Transition | undefined {
    //     return new FadeInOut({
    //         direction: direction,
    //         color: Color.Black,
    //         duration: 250
    //     })
    // }

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

            this.elementotexto!.innerHTML = "<p>Uma escola está desperdiçando muita comida, mini game seria um esconde-esconde, onde Dudu teria que achar os meninos que estão desperdiçando comida, com um sistema de pontos. Esse mundo explicaria a forma que a empresa achou para reduzir o desperdício de comida, com pontuações e prêmios.</p>"

            this.elementotexto!.style.opacity = "1"

            // inserir a imagem
            this.actorEmpresa?.graphics.add(this.listaImagens![0])

            // Mudar o zoom da img 
            this.actorEmpresa!.graphics.current!.scale = vec(1.5, 1.5)

        }

        // se for a B
        if (this.objetointeração.nomeDoActor == "mesa_stand_b") {

            // inserir texto
            this.elementotexto!.innerHTML = "<p>Seria uma empresa que teria problemas com o desempenho com funcionários, o mini game desse mundo seria uma corrida em que você teria que acertas a teclas para correr mais entre os funcionários e você ou um mini game de plataforma onde você teria que terminar em um determinado tempo, com um sistema de pontos. Esse mundo explicaria como a empresa aumentou o desempenho com os funcionários com uma competição interna valendo pontos. </p>"
            this.elementotexto!.style.opacity = "1"

            // inserir a img
            this.actorEmpresa?.graphics.add(this.listaImagens![1])

            // mudar o zoom da img
            this.actorEmpresa!.graphics.current!.scale = vec(1.7, 1.7)
        }

        // se for a C
        if (this.objetointeração.nomeDoActor == "mesa_stand_c") {

            // inserir texto
            this.elementotexto!.innerHTML = "<p>Seria um escritório onde o próprio estaria bagunçado, e seria um mini game de erros, onde o jogador teria que decorar um seria um mini game onde você teria que organizar o escritório, como um quebra-cabeça. Esse mundo explicaria como a empresa usou a gamificação para ajudar a organizar o escritório. </p>"
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