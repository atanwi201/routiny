import { registerRootComponent } from "expo";
import App from "./App"; // O la ruta a tu componente principal

// registerRootComponent se asegura de que, independientemente de si abres la app
// en Expo Go, en un build nativo o en la web, el entorno nativo se configure
// correctamente y el componente principal se renderice de forma apropiada.
registerRootComponent(App);
