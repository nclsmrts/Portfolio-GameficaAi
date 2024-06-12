import { Actor, CollisionType, Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";

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

    onInitialize(engine: Engine<any>): void {

        // Carregar o mapa 
        let tiledmap = Resources.Mapa

        // Definir offset para renderização do mapa

        let offsetX = 138
        let offsetY = 100

        // Adicionando o mapa na cena 
        tiledmap.addToScene(this, {
            pos: vec(offsetX, offsetY)
        })

        // Definir zoom da camera para aumentar um pouco a vizualização
        this.camera.zoom = 1.4

        // Criação e configuração do Player
        let jogador = new Player()

        jogador.z = 1

        // Adicionar jogador na cena 
        this.add(jogador)

        // Adicionar colisão com cada objeto
        // Pegar a camada de objetos colisores
        let camadaObjetosColisores = tiledmap.getObjectLayers("ObjetosColisores")[0]

        // Percorrer os objetos com o foreach e para cada objeto, renderizar um actor 
        camadaObjetosColisores.objects.forEach(Object => {
            // Configurar o actor 
            const objetoatual = new Actor({
                name: Object.name,
                x: Object.x + offsetX + (Object.tiledObject.width! / 2),
                y: Object.y + offsetY + (Object.tiledObject.height! / 2),
                width: Object.tiledObject.width,
                height: Object.tiledObject.height,
                collisionType: CollisionType.Fixed,
            })

            // Adicionar o colisor do objeto na cena 
            this.add(objetoatual)
        })

    }
}