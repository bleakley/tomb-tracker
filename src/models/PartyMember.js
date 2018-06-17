import * as constants from './constants'

class PartyMember {
  constructor(name, template)
  {
    this.name = name;
    this.template = parseInt(template, 10);

    this.speed = 30;
    this.flySpeed = 0;
    this.size = constants.SIZE_MEDIUM;

    this.survival = 0;
    this.perception = 0;
    this.stealth = 0;

    this.strength = 10;
    //this.constitution = 10;
    this.wisdom = 10;
    //this.constitutionSave = 0;
    //this.fireResistance = false;
    //this.coldResistance = false;
    //this.powerfulBuild = false;

    this.poisoned = false;
    this.exhaustion = 0;
    this.daysWithoutSleep = 0;
    this.daysWithoutFood = 0;
    this.daysWithoutWater = 0;

    this.armor = constants.ARMOR_NONE;
    this.carriedGear = 0;
    //this.carriedCharacters = [];

    this.outlander = false;
    this.naturalExplorer = false;
    //this.variantNaturalExplorer = false;
    this.favoredTerrains = [];

    this.mount = false;
    this.selfForager = false;
    this.nativeEnvironments = [];

    switch (this.template) {
      case constants.TEMPLATE_GUARD:
        this.strength = 13;
        this.wisdom = 11;

        this.perception = 2;
        this.stealth = 1;

        this.armor = constants.ARMOR_MEDIUM;
        this.carriedGear = 29; // +3 lbs per extra spear
        break;
      case constants.TEMPLATE_TRIBAL_WARRIOR:
        this.strength = 13;
        this.wisdom = 11;

        this.armor = constants.ARMOR_MEDIUM;
        this.carriedGear = 15; // +3 lbs per extra spear
        break;
      case constants.TEMPLATE_AARAKOCRA:
        this.speed = 20;
        this.flySpeed = 50;

        this.wisdom = 12;

        this.survival = 1;
        this.stealth = 2;
        this.perception = 5;

        this.armor = constants.ARMOR_NONE;
        this.carriedGear = 2; // +2 lbs per extra javelin
        break;
      case constants.TEMPLATE_ALBINO_DWARF:
      case constants.TEMPLATE_MUSHARIB:
        this.speed = 25;

        this.strength = 13;
        this.wisdom = 14;

        this.survival = 4;
        this.perception = 4;
        this.stealth = 3;

        this.armor = constants.ARMOR_MEDIUM;
        this.carriedGear = 14; // +2 lbs per extra handaxe
        break;
      case constants.TEMPLATE_BATIRI:
        this.speed = 30;
        this.size = constants.SIZE_SMALL;

        this.strength = 8;
        this.wisdom = 8;

        this.survival = -1;
        this.perception = -1;
        this.stealth = 6;

        this.armor = constants.ARMOR_LIGHT;
        this.carriedGear = 22;
        break;
      case constants.TEMPLATE_GRUNG:
        this.speed = 25;
        this.size = constants.SIZE_SMALL;

        this.strength = 7;
        this.wisdom = 11;

        this.survival = 2;
        this.perception = 2;
        this.stealth = 4;

        this.armor = constants.ARMOR_NONE;
        this.carriedGear = 1;
        break;
      case constants.TEMPLATE_PTERAFOLK:
        this.speed = 30;
        this.flySpeed = 50;
        this.size = constants.SIZE_LARGE;

        this.strength = 15;
        this.wisdom = 10;

        this.survival = 2;
        this.perception = 2;
        this.stealth = 1;

        this.armor = constants.ARMOR_NATURAL;
        this.carriedGear = 2; // +2 lbs per extra javelin
        break;
      case constants.TEMPLATE_TABAXI_HUNTER:
      case constants.TEMPLATE_RIVER_MIST:
      case constants.TEMPLATE_FLASK_OF_WINE:
        this.speed = 30;

        this.strength = 10;
        this.wisdom = 14;

        this.survival = 6;
        this.perception = 4;
        this.stealth = 5;

        this.armor = constants.ARMOR_LIGHT;
        this.carriedGear = 15;
        break;
      case constants.TEMPLATE_ATRUS:
        this.speed = 30;

        this.strength = 10;
        this.wisdom = 16;

        this.survival = 9;
        this.perception = 3;
        this.stealth = 2;

        this.armor = constants.ARMOR_LIGHT;
        this.carriedGear = 14;
        break;
      case constants.TEMPLATE_AZAKA:
        this.speed = 30;

        this.strength = 17;
        this.wisdom = 13;

        this.survival = 1;
        this.perception = 5;
        this.stealth = 4;

        this.armor = constants.ARMOR_NONE;
        this.carriedGear = 6;
        break;
      case constants.TEMPLATE_DRAGONBAIT:
        this.speed = 30;

        this.strength = 15;
        this.wisdom = 16;

        this.survival = 3;
        this.perception = 3;
        this.stealth = 1;

        this.armor = constants.ARMOR_MEDIUM;
        this.carriedGear = 29;
        break;
      case constants.TEMPLATE_EKU:
        this.speed = 30;
        //this.flySpeed = 90; // assume she keeps this secret

        this.strength = 16;
        this.wisdom = 20;

        this.survival = 5;
        this.perception = 5;
        this.stealth = 5;

        this.armor = constants.ARMOR_NATURAL;
        this.carriedGear = 4;
        break;
      case constants.TEMPLATE_FAROUL:
      case constants.TEMPLATE_GONDOLO: //scouts
        this.speed = 30;

        this.strength = 11;
        this.wisdom = 13;

        this.survival = 5;
        this.perception = 5;
        this.stealth = 6;

        this.armor = constants.ARMOR_LIGHT;
        this.carriedGear = 15;
        break;
      case constants.TEMPLATE_HEW:
        this.speed = 30;

        this.strength = 16;
        this.wisdom = 11;

        this.survival = 4;
        this.perception = 0;
        this.stealth = 1;

        this.armor = constants.ARMOR_MEDIUM;
        this.carriedGear = 16;
        break;
      case constants.TEMPLATE_KUPALUE:
        this.speed = 30;
        this.size = constants.SIZE_SMALL;

        this.strength = 7;
        this.wisdom = 11;

        this.survival = 0;
        this.perception = 2;
        this.stealth = 4;

        this.armor = constants.ARMOR_NATURAL;
        this.carriedGear = 0;
        break;
      case constants.TEMPLATE_QAWASHA:
        this.speed = 30;

        this.strength = 10;
        this.wisdom = 15;

        this.survival = 2;
        this.perception = 4;
        this.stealth = 1;

        this.armor = constants.ARMOR_NONE;
        this.carriedGear = 4;
        break;
      case constants.TEMPLATE_SALIDA:
        this.speed = 30;

        this.strength = 11;
        this.wisdom = 12;

        this.survival = 5;
        this.perception = 3;
        this.stealth = 3;

        this.armor = constants.ARMOR_NONE;
        this.carriedGear = 6;
        break;
      case constants.TEMPLATE_SHAGO:
        this.speed = 30;

        this.strength = 18;
        this.wisdom = 12;

        this.survival = 7;
        this.perception = 1;
        this.stealth = 2;

        this.armor = constants.ARMOR_LIGHT;
        this.carriedGear = 22; // +3 lbs per extra spear
        break;
      case constants.TEMPLATE_VOLO:
        this.speed = 30;

        this.strength = 9;
        this.wisdom = 11;

        this.survival = 2;
        this.perception = 2;
        this.stealth = 1;

        this.armor = constants.ARMOR_NONE;
        this.carriedGear = 1;
        break;
      default:
        console.log('template not found');
        break;
    }

    this.getCarryingCapacity = this.getCarryingCapacity.bind(this);
  }

  forage(dc) {
    console.log('foraging');
  }

  getCarryingCapacity() {
    return this.strength * 15 * Math.pow(2, this.size - constants.SIZE_MEDIUM);
  }

}

export default PartyMember;
