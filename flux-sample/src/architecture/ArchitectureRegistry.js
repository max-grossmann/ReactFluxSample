import { Dispatcher } from 'flux';
import CityStore from "./CityStore";

// create dispatcher
let dispatcher = new Dispatcher();

// create all stores and pass dispatcher
let cityStore = new CityStore(dispatcher);

// export dispatcher and all stores
export {dispatcher, cityStore};