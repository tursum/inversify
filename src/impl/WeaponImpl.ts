import { injectable } from 'inversify';
import {IWeapon} from './interfaces/IWeapon';

@injectable()
class WeaponImpl implements IWeapon  {
  fight() {
    return 'fight!';
  }
}