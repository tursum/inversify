import { injectable } from "inversify-props";
import "reflect-metadata";
import {Weapon} from './interfaces';

@injectable()
class Katana implements Weapon {
    public hit() {
        return "cut!";
    }
}

export { Katana };