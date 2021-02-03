import { Container } from "inversify";
import TYPES from "./ioc/types";
import { WeaponImpl } from "./impl/WeaponImpl";

let container = new Container();
container.bind<IWeapon>(TYPES.Weapon).to(WeaponImpl);

export default container;