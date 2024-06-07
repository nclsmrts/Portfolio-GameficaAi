import { Color, Engine, FadeInOut, Scene, Transition } from "excalibur";

export class expoScene extends Scene {
    elementotexto?: HTMLElement

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
}