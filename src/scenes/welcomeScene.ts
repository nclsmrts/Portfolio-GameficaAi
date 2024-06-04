import { Actor, Color, Engine, FadeInOut, Font, Keys, Label, Scene, TextAlign, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class welcomeScene extends Scene {

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        // configura o objeto para ser a frase bem vindo
        let frasebemvindo = new Label({
            text: "Bem vindo ao Portfólio",
            width: 400,
            height: 50,
            pos: vec(engine.drawWidth / 2, 300),
            font: new Font({
                size: 40,
                color: Color.White,
                textAlign: TextAlign.Center,
                family: "Anta"
            })

        })
        // adicionando a frase acima na cena 
        this.add(frasebemvindo)

        // configurar Actor do logo
        let actorlogo = new Actor({
            pos: vec(engine.drawWidth / 2, 430)

        })

        // Ultilizar imagem do logo
        let imagemlogo = Resources.Logo.toSprite()

        // aplicar zoom na imagem
        imagemlogo.scale = vec(0.4, 0.4)

        // configurar Actor para usar a imagem
        actorlogo.graphics.add(imagemlogo)

        //Adicionando o Actor na tela
        this.add(actorlogo)


        // fazer a frase 
        let frase = new Label({
            text: 'Pressione "Enter" para iniciar...',
            width: 400,
            height: 50,
            pos: vec(engine.drawWidth / 2, 630),
            font: new Font({
                size: 20,
                color: Color.White,
                family: "Anta",
                textAlign: TextAlign.Center
            })
        })

        this.add(frase)

        // Fazer a frase sumir e aparecer suave
        frase.actions.repeatForever((frase) => {
            frase.fade(0, 1000)
            frase.fade(1, 1000)
        })

        // monitora o evento de tecla pressionada
        this.input.keyboard.on("press", (event) => {
            // caso a tecla pressionada for "enter", deve ir para a proxima cena
            if (event.key == Keys.Enter) {
                // direciona para a cena Historia
                engine.goToScene("historia")
            }
        })

    }
}