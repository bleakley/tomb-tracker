export const ARMOR_NONE = 0;
export const ARMOR_NATURAL = 1;
export const ARMOR_LIGHT = 2;
export const ARMOR_MEDIUM = 3;
export const ARMOR_HEAVY = 4;

export const SIZE_TINY = 0;
export const SIZE_SMALL = 1;
export const SIZE_MEDIUM = 2;
export const SIZE_LARGE = 3;
export const SIZE_HUGE = 4;
export const SIZE_GARGANTUAN = 5;
export const SIZE_NAMES = ['Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Gargantuan'];

export const TEMPLATE_ADVENTURER = 0;

//generic NPCS
export const TEMPLATE_GUARD = 1;
export const TEMPLATE_TRIBAL_WARRIOR = 2;
export const TEMPLATE_AARAKOCRA = 3;
export const TEMPLATE_ALBINO_DWARF = 4;
export const TEMPLATE_BATIRI = 5;
export const TEMPLATE_GRUNG = 6;
export const TEMPLATE_PTERAFOLK = 7;
export const TEMPLATE_TABAXI_HUNTER = 8;

//unique NPCS
export const TEMPLATE_ATRUS = 9;
export const TEMPLATE_AZAKA = 10;
export const TEMPLATE_DRAGONBAIT = 11;
export const TEMPLATE_EKU = 12;
export const TEMPLATE_FAROUL = 13;
export const TEMPLATE_GONDOLO = 14;
export const TEMPLATE_HEW = 15;
export const TEMPLATE_KUPALUE = 16;
export const TEMPLATE_MUSHARIB = 17;
export const TEMPLATE_QAWASHA = 18;
export const TEMPLATE_RIVER_MIST = 19;
export const TEMPLATE_FLASK_OF_WINE = 20;
export const TEMPLATE_SALIDA = 21;
export const TEMPLATE_SHAGO = 22;
export const TEMPLATE_VOLO = 23;

export const NUMBER_OF_TEMPLATES = 24;

export const CATEGORY_ADVENTURER = 0;
export const CATEGORY_GENERIC_NPC = 1;
export const CATEGORY_UNIQUE_NPC = 2;

export const TEMPLATE_DATA = [];

TEMPLATE_DATA[TEMPLATE_ADVENTURER] = { name: 'Adventurer', category: CATEGORY_ADVENTURER };

TEMPLATE_DATA[TEMPLATE_GUARD] = { name: 'Guard', category: CATEGORY_GENERIC_NPC };
TEMPLATE_DATA[TEMPLATE_TRIBAL_WARRIOR] = { name: 'Tribal Warrior', category: CATEGORY_GENERIC_NPC };
TEMPLATE_DATA[TEMPLATE_AARAKOCRA] = { name: 'Aarakocra', category: CATEGORY_GENERIC_NPC };
TEMPLATE_DATA[TEMPLATE_ALBINO_DWARF] = { name: 'Albino Dwarf Warrior', category: CATEGORY_GENERIC_NPC };
TEMPLATE_DATA[TEMPLATE_BATIRI] = { name: 'Batiri', category: CATEGORY_GENERIC_NPC };
TEMPLATE_DATA[TEMPLATE_GRUNG] = { name: 'Grung', category: CATEGORY_GENERIC_NPC };
TEMPLATE_DATA[TEMPLATE_PTERAFOLK] = { name: 'Pterafolk', category: CATEGORY_GENERIC_NPC };
TEMPLATE_DATA[TEMPLATE_TABAXI_HUNTER] = { name: 'Tabaxi Hunter', category: CATEGORY_GENERIC_NPC };

TEMPLATE_DATA[TEMPLATE_ATRUS] = { name: 'Atrus Cimber', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_AZAKA] = { name: 'Azaka Stormfang', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_DRAGONBAIT] = { name: 'Dragonbait', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_EKU] = { name: 'Eku', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_FAROUL] = { name: 'Faroul', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_GONDOLO] = { name: 'Gondolo', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_HEW] = { name: 'Hew Hackinstone', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_KUPALUE] = { name: 'Kupalué', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_MUSHARIB] = { name: 'Musharib', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_QAWASHA] = { name: 'Qawasha', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_RIVER_MIST] = { name: 'River Mist', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_FLASK_OF_WINE] = { name: 'Flask of Wine', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_SALIDA] = { name: 'Salida', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_SHAGO] = { name: 'Shago', category: CATEGORY_UNIQUE_NPC };
TEMPLATE_DATA[TEMPLATE_VOLO] = { name: 'Volo', category: CATEGORY_UNIQUE_NPC };

export const FLYING_RULE_ALWAYS_ALLOWED = 0;
export const FLYING_RULE_NEVER_ALLOWED = 1;
export const FLYING_RULE_NOT_HEAVILY_ENCUMBERED = 2;
export const FLYING_RULE_NOT_ENCUMBERED = 3;

export const OVERLAND_TRAVEL_RULE_SIMPLE = 0;
export const OVERLAND_TRAVEL_RULE_ADVANCED = 1;

export const TEMPERATURE_NORMAL = 0;
export const TEMPERATURE_COLD = 1;
export const TEMPERATURE_HOT = 2;

export const TERRAIN_CHULT_BEACH = 0;
export const TERRAIN_CHULT_JUNGLE_NO_UNDEAD = 1;
export const TERRAIN_CHULT_JUNGLE_UNDEAD = 2;
export const TERRAIN_CHULT_JUNGLE_GREATER_UNDEAD = 3;
export const TERRAIN_CHULT_MOUNTAIN = 4;
export const TERRAIN_CHULT_RIVER = 5;
export const TERRAIN_CHULT_RUIN = 6;
export const TERRAIN_CHULT_WASTELAND = 7;

export const PRECIPITATION_RULE_RANDOM = 0;
export const PRECIPITATION_RULE_RANDOM_LOW_HUMID = 1;
export const PRECIPITATION_RULE_RANDOM_HIGH_HUMID = 2;
export const PRECIPITATION_RULE_NO_PRECIPITATION = 3;
export const PRECIPITATION_RULE_LIGHT_PRECIPITATION = 4;
export const PRECIPITATION_RULE_HEAVY_PRECIPITATION = 5;
export const PRECIPITATION_RULE_THUNDERSTORM = 6;

export const PRECIPITATION_NO_PRECIPITATION = 0;
export const PRECIPITATION_LIGHT_PRECIPITATION = 1;
export const PRECIPITATION_HEAVY_PRECIPITATION = 2;
export const PRECIPITATION_THUNDERSTORM = 3;

export const WATER_FORAGE_RULE_FRESH = 0;
export const WATER_FORAGE_RULE_FOUL = 1;
export const WATER_FORAGE_RULE_QUARTER_FRESH = 2;
export const WATER_FORAGE_RULE_HALF_FRESH = 3;

export const RANDOM_SITE_RULE_NONE = 0;
export const RANDOM_SITE_RULE_SETTLEMENTS = 1;
export const RANDOM_SITE_RULE_RUINS = 2;
export const RANDOM_SITE_RULE_ALL = 3;
/*

Party Carrying Capacity (sum of capacities minus personal gear)
Party Mounted Carrying Capacity (capacity at which each creature can either ride a mount or move at the speed of the slowest mount)
Party Canoeing Carrying Capacity (capacity at which each creature can either sit in a canoe or move/fly 60 feet or ride a mount at a speed of 60 feet)
Party Flying Carrying Capacity (capacity at which each creature can either fly or ride a flying mount)

Misc. party gear
Canoes
Raincatchers
Insect Repellent
Goodberries

Maximum food
Food Carried/Available

Maximum water (gallons)
Fresh Water Carried/Available (gallons)
Foul Water Carried/Available (gallons)
Salt Water Carried/Available (gallons)
Total Water weight (pounds)

*/

/*

Options:
Encumberance (on/off)
No flying while (heavily/lightly) encumbered
Overland speed (simple/advanced)
Temperature (hot)
Precipitation (random/random low humidity/random high humidity/light precipitation/heavy precipitation/thunderstorm)
Terrain (beach, river, jungle, jungle undead, jungle heavy undead, mountains, wasteland, swamp, ruin)
Foraged water (always fresh, always foul, 1/4 fresh, 1/2 fresh)
Random settlements (on/off)

*/

/*

Party Actions:
Cast goodberry (creates 10 goodberries)
Cast purify food and water (transforms all salt/foul water into fresh water)
Cast create food and water (creates 45 pounds of food, 30 gallons of fresh water)
Boil 10 gallons of water (transforms 10 gallons of foul water into fresh water)

Character settings (adjustable on bar):
Wearing insect repellent (yes/no)
Eating food (0+)
Drinking (0+) gallons of (fresh/foul/salt water)

Character information (viewable on bar):
Navigating (determined by ordering)
Days without food
Days without water
Exhausted
Diseased

*/

/*

Next day ->
remove goodberries that are two days old
remove worn insect repellent
remove consumed food/water
gain fresh water from raincatchers
advance the day counter
generate new weather
daily actions can be clicked
select daily settings and click Go!

Daily Settings:
Travel by (foot/mounts/canoe/flying)
Travel pace (slow/normal/fast)

Go! ->
Check navigation
Roll and display up to 3 random encounters (indicate which parties detect each other, list TOA encounter and MM/VGTM/TOA monster page number, link to dnd beyond and roll20)
Roll for foraging, increase food and water
Roll and display distance traveled
daily actions can be clicked
determine who eats and drinks and click Camp!

*/
