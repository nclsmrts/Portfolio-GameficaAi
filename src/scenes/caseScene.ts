import { Actor, Color, Engine, FadeInOut, Keys, Resource, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetointeração: any

    private textoDacena?: string
    elementotexto1?: HTMLElement
    elementotexto2?: HTMLElement
    elementotexto3?: HTMLElement


    fadeOutElement(elemento: HTMLElement) {
        let opacidade = parseFloat(elemento.style.opacity)

        setInterval(() => {
            if (opacidade > 0) {
                opacidade -= 0.03
                elemento.style.opacity = opacidade.toString()
            }
        })
    }

    // onTransition(direction: "in" | "out"): Transition | undefined {
    //     return new FadeInOut({
    //         direction: direction,
    //         color: Color.Black,
    //         duration: 20
    //     })
    // }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray




        this.elementotexto1 = document.createElement("div") as HTMLElement
        this.elementotexto1.style.opacity = "1"
        let containergame = document.querySelector(".container-game") as HTMLElement
        containergame.appendChild(this.elementotexto1)
        this.elementotexto1.classList.add("case")
        this.elementotexto1.innerHTML = this.textoDacena!

    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada
        this.objetointeração = context.data

        // console.log(this.objetointeração);

        // se for a mesa a 
        if (this.objetointeração.nomeDoActor == "mesa_stand_a") {
            // this.textoDacena = "Essa é a descrição do case a"

            // this.elementotexto1 = document.createElement("div") as HTMLElement
            // this.elementotexto1.style.opacity = "1"
            // let containergame = document.querySelector(".container-game") as HTMLElement
            // containergame.appendChild(this.elementotexto1)
            // this.elementotexto1.classList.add("case")
            // this.elementotexto1.innerHTML = "<p> Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de"

            let textoDacena = "<p>salve</p>"

            let npc_a = new Actor({
                pos: vec(850, 400)
            })

            let imgmesaa = Resources.npc_mesaA.toSprite()
            npc_a.graphics.add(imgmesaa)
            imgmesaa.scale = vec(1.7, 1.7)
            this.add(npc_a)

            this.input.keyboard.on("press", (event) => {
                if (event.key == Keys.F) {
                    this.fadeOutElement(this.elementotexto1!)
                    this.remove(npc_a)
                    this.engine.goToScene("exposicao")
                }
            })
        }

        // se for a b
        if (this.objetointeração.nomeDoActor == "mesa_stand_b") {

            this.elementotexto2 = document.createElement("div") as HTMLElement
            this.elementotexto2.style.opacity = "1"
            let containergame = document.querySelector(".container-game") as HTMLElement
            containergame.appendChild(this.elementotexto2)
            this.elementotexto2.classList.add("case")
            this.elementotexto2.innerHTML = "<p>salve</p>"

            let npc_b = new Actor({
                pos: vec(850, 400)
            })

            let imgmesab = Resources.npc_mesaB.toSprite()
            npc_b.graphics.add(imgmesab)
            this.add(npc_b)

            this.input.keyboard.on("press", (event) => {
                if (event.key == Keys.F) {
                    this.fadeOutElement(this.elementotexto2!)
                    this.remove(npc_b)
                    this.engine.goToScene("exposicao")
                }
            })
        }

        // se for a c
        if (this.objetointeração.nomeDoActor == "mesa_stand_c") {
            // this.textoDacena = "Essa é a descrição do case c"

            this.elementotexto3 = document.createElement("div") as HTMLElement
            this.elementotexto3.style.opacity = "1"
            let containergame = document.querySelector(".container-game") as HTMLElement
            containergame.appendChild(this.elementotexto3)
            this.elementotexto3.classList.add("case")
            this.elementotexto3.innerHTML = "<p>Uma escola está desperdiçando muita comida, mini game seria um esconde-esconde, onde Dudu teria que achar os meninos que estão desperdiçando comida, com um sistema de pontos. Esse mundo explicaria a forma que a empresa achou para reduzir o desperdício de comida, com pontuações e prêmios."

            let npc_b = new Actor({
                pos: vec(850, 400)
            })

            let imgmesab = Resources.npc_mesaB.toSprite()
            npc_b.graphics.add(imgmesab)
            this.add(npc_b)


            this.input.keyboard.on("press", (event) => {
                if (event.key == Keys.F) {
                    this.fadeOutElement(this.elementotexto3!)
                    this.remove(npc_b)
                    this.engine.goToScene("exposicao")
                }
            })
        }
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementotexto1?.remove()
        this.elementotexto2?.remove()
    }
}