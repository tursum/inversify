import { Container } from "inversify-props";
import TYPES from "./types";
import { Katana } from "./classes";
import {Weapon} from './interfaces';

Container.bind(TYPES.Weapon).to(Katana);

export default Container;