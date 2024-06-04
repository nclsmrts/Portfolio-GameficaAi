import { Engine, FadeInOut } from "excalibur";
import { welcomeScene } from "./scenes/welcomeScene";
import { loader } from "./resources";
import { historyScene } from "./scenes/historyScene";

const game = new Engine({
    width: 1200,
    height: 800,
    canvasElementId: "jogo"
})

game.addScene("Bemvindo", new welcomeScene())
game.addScene("historia", new historyScene)

game.start(loader).then(() => {
    game.goToScene("Bemvindo", {
        sourceOut: new FadeInOut({ duration: 1000 })
    })
})