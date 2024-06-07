import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {

    elementotexto2?: HTMLElement

    // Método para esmaecer um elemento HTML
    fadeOutElement(elemento: HTMLElement) {
        // pegar opacidade do elemento HTML
        let opacidade = parseFloat(elemento.style.opacity)

        // Repetir diminuição da opcidade
        setInterval(() => {

            // se elemetno ainda está visivel
            if (opacidade > 0) {
                // diminuir a opacidade
                opacidade -= 0.03
                // atualizar a opacidade do elemento
                elemento.style.opacity = opacidade.toString()
            }
        }, 20)

    }

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        // imagem 
        let actorlogo2 = new Actor({
            pos: vec(engine.halfDrawWidth / 2, engine.halfDrawHeight)
        })

        let logovertical2 = Resources.logoverticalcena3.toSprite()
        logovertical2.scale = vec(0.7, 0.7)
        actorlogo2.graphics.add(logovertical2)

        this.add(actorlogo2)

        // texto 
        this.elementotexto2 = document.createElement("div") as HTMLElement
        this.elementotexto2.style.opacity = "1"
        let containergame = document.querySelector(".container-game") as HTMLElement
        containergame.appendChild(this.elementotexto2)

        this.elementotexto2.classList.add("sobre-gamificacao")
        this.elementotexto2.innerHTML = ` <h2>O que é gamificação?</h2>
        <p>
            Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de
            engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes
            como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos
            desejados e aumentar a participação e o comprometimento dos participantes.</p>`


        // configurar a cena para detectar a tecla enter

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                this.fadeOutElement(this.elementotexto2!)
                engine.goToScene("exposicao")
            }
        })

    }
    onDeactivate(_context: SceneActivationContext<undefined>): void {
        this.elementotexto2?.remove()
    }

}