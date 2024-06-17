import { ImageFiltering, ImageSource, Loader } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logovertical from "./images/logo-vertical.png";
import logoverticalcena3 from "./images/logo-vertical.png";
import pngtilesetPath from "./maps/Room_Builder_32x32.png?url"
import tsxparedesPath from "./maps/tileset_paredes.tsx?url"
import tsxgenericPath from "./maps/tileset_generic.tsx?url"
import tsxestoquePath from "./maps/tileset_estoque.tsx?url"
import tsxbibliotecaPath from "./maps/tileset_biblioteca?url"
import tmxmapaPath from "./maps/showroom_map.tmx?url"
import playerSpritePath from "./sprites/player.png"
import npcMesaA from "./images/npc_mesa_a.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  Logovertical: new ImageSource(logovertical),
  logoverticalcena3: new ImageSource(logoverticalcena3),
  npc_mesaA: new ImageSource(npcMesaA),
  playerSpriteSheet: new ImageSource(playerSpritePath, { filtering: ImageFiltering.Pixel }),
  Mapa: new TiledResource(tmxmapaPath, {
    pathMap: [
      { path: "showroom_map.tmx", output: tmxmapaPath },
      { path: "Room_Builder_32x32.png", output: pngtilesetPath },
      { path: "tileset_paredes.tsx", output: tsxparedesPath },
      { path: "tileset_generic.tsx", output: tsxgenericPath },
      { path: "tileset_estoque.tsx", output: tsxestoquePath },
      { path: "tileset_biblioteca", output: tsxbibliotecaPath }
    ]
  })
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
