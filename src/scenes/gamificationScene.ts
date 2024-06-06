import { Actor, Color, Engine, Resource, Scene, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {

    elementotexto2?: HTMLElement

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

        let containergame = document.querySelector(".container-game") as HTMLElement
        containergame.appendChild(this.elementotexto2)

        this.elementotexto2.classList.add("sobre-gamificacao")
        this.elementotexto2.innerHTML = ` <h2>O que é gamificação?</h2>
        <p>
            Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de
            engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes
            como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos
            desejados e aumentar a participação e o comprometimento dos participantes.</p>`
    }
}