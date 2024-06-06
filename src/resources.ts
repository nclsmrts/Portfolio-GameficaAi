import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logovertical from "./images/logo-vertical.png";
import logoverticalcena3 from "./images/logo-vertical.png";

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  Logovertical: new ImageSource(logovertical),
  logoverticalcena3: new ImageSource(logoverticalcena3)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
