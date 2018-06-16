function character(name, template)
{
  this.name = 'Kragmar';

  this.navigating = false;

  this.speed = 30;
  this.flySpeed = 0;
  this.size = SIZE_MEDIUM;

  this.survival = 0;
  this.perception = 0;
  this.stealth = 0;

  this.strength = 10;
  this.constitution = 10;
  this.wisdom = 10;
  this.constitutionSave = 0;
  this.fireResistance = false;
  this.coldResistance = false;
  this.powerfulBuild = false;

  this.poisoned = false;
  this.exhaustion = 0;
  this.daysWithoutSleep = 0;
  this.daysWithoutFood = 0;
  this.daysWithoutWater = 0;

  this.armor = ARMOR_NONE;
  this.carriedGear = 0;
  this.carriedCharacters = [];

  this.outlander = false;
  this.naturalExplorer = false;
  //this.variantNaturalExplorer = false;
  this.favoredTerrains = [];

  this.mount = false;
  this.nativeForager = false;
}
