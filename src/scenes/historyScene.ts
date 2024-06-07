import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur"
import { Resources } from "../resources"

export class historyScene extends Scene {

    // declaração do elementoTexto
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
    
    onInitialize(Engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        // criar elemento com a descrição da empresa 
        this.elementotexto = document.createElement("div") as HTMLElement

        // definir a opacidade do elemento 1 = visivel
        this.elementotexto.style.opacity = "1"

        // inserir elemento texto no container-game
        let containergame = document.querySelector(".container-game") as HTMLElement
        containergame.appendChild(this.elementotexto)

        // adicionar elementotexto na div criada (elementotexto)
        this.elementotexto.classList.add("sobre-gamifica")

        // adcionando titulo e paragrafo dentro do conteudo da div 
        this.elementotexto.innerHTML = `<h2>Sobre o GameficaAi</h2>
        <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
            usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
            experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para
            engajar
            equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do
            cliente,
            desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`

        // adicionando a logo
        let actorlogovertical = new Actor({
            pos: vec(875, 400)
        })

        let imagemvertical = Resources.Logovertical.toSprite()
        imagemvertical.scale = vec(0.7, 0.7)
        actorlogovertical.graphics.add(imagemvertical)

        this.add(actorlogovertical)


        // Configurar cena para monitorar o evento para tecla pressionada
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                // criar transição suave do elemento texto
                this.fadeOutElement(this.elementotexto!)
                // direcionar para a proxima cena
                Engine.goToScene("gamificacao")
            }
        })

    }

    onDeactivate(_context: SceneActivationContext<undefined>): void {
        // remover elemento texto da tela
        this.elementotexto?.remove()

    }
}