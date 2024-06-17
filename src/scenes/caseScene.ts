import { Actor, Color, Engine, FadeInOut, Resource, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetointeração: any

    private textoDacena?: string
    elementotexto1?: HTMLElement

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada
        this.objetointeração = context.data

        console.log(this.objetointeração);

        // se for a mesa a 
        if (this.objetointeração.nomeDoActor == "mesa_stand_a") {
            // this.textoDacena = "Essa é a descrição do case a"

            this.elementotexto1 = document.createElement("div") as HTMLElement
            this.elementotexto1.style.opacity = "1"
            let containergame = document.querySelector(".container-game") as HTMLElement
            containergame.appendChild(this.elementotexto1)
            this.elementotexto1.classList.add("case1")
            this.elementotexto1.innerHTML = "<p> Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de"


            let npc_a = new Actor({
                pos: vec(850,400)
            })

            let imgmesa = Resources.npc_mesaA.toSprite()
            npc_a.graphics.add(imgmesa)
            imgmesa.scale = vec(1.7, 1.7)
            this.add(npc_a)
        }

        // se for a b
        if (this.objetointeração.nomeDoActor == "mesa_stand_b") {
            this.textoDacena = "Essa é a descrição do case b"
        }

        // se for a c
        if (this.objetointeração.nomeDoActor == "mesa_stand_c") {
            this.textoDacena = "Essa é a descrição do case c"
        }

    }

}