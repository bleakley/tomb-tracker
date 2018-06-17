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
