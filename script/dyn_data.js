const img_defaults = {
    afbeelding_prefix: "../media/",
    afbeelding_big: "big/",
    afbeelding_small: "small/",
    afbeelding_suffix: ".jpg",
};

const keys = {
    cuberdons: "cuberdons",
    dolfijn: "dolfijn",
    gummybears: "gummybears",
    dracula: "dracula",
    dropveters: "dropveters",
    zure_tutters: "zure_tutters",
    maoam: "maoam",
    smurfkes: "smurfkes",

    toblerone: "toblerone",
    ferrero: "ferrero",
    mnms: "mnms",
    kinder_surprise: "kinder_surprise",
    kinder_maxi: "kinder_maxi",
    mars: "mars",

    jds: "jds",
    lotus: "lotus",
    macarons: "macarons",
    oreos: "oreos"
};




const cuberdons = {
    key: keys.cuberdons,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.cuberdons + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.cuberdons + img_defaults.afbeelding_suffix,
    naam: "Cuberdons",
    prijs: "€3,95",
    link: "..\\html\\productdetails_cuberdons.html",
    beschrijving: "De favoriete snoep van je grootouders!\n" +
        "\n" +
        "Kunnen ook op aanvraag met sterke drank gevuld worden ;)",
    belangrijkste_productspecificaties: {gewicht: "250g", gemaakt_door: "Geldhof", speciaal: "met of zonder drank"}
};
const dolfijn = {
    key: keys.dolfijn,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.dolfijn + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.dolfijn + img_defaults.afbeelding_suffix,
    link: "..\\html\\productdetails_blauweDolfijntjes.html",
    naam: "Blauwe Dolfijntjes",
    prijs: "€3,05",
    beschrijving: "Deze dolfijntjes zijn een echte klassieker!\n" +
        "\n" +
        "Ze hebben een lekker herkenbare geur en maken je tong mooi blauw!",
    belangrijkste_productspecificaties: {gewicht: "300g", gemaakt_door: "Astra Sweets"}
};
const gummybears = {
    key: keys.gummybears,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.gummybears + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.gummybears + img_defaults.afbeelding_suffix,
    naam: "Gummybears",
    prijs: "€2,94",
    beschrijving: "Het eerste waar je aan denkt als je HARIBO hoort!\n" +
        "\n" +
        "Geen enkel soort snoep wordt zo vaak gekozen als deze.",
    belangrijkste_productspecificaties: {gewicht: "500g", gemaakt_door: "HARIBO"}
};
const dracula = {
    key: keys.dracula,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.dracula + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.dracula + img_defaults.afbeelding_suffix,
    naam: "Draculatandjes",
    prijs: "€2,05",
    beschrijving: "De beste item voor Halloween!\n" +
        "\n" +
        "Om van te watertanden!",
    belangrijkste_productspecificaties: {gewicht: "350g", gemaakt_door: "LUTTI"}
};
const dropveters = {
    key: keys.dropveters,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.dropveters + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.dropveters + img_defaults.afbeelding_suffix,
    naam: "Dropveters",
    prijs: "€1,99",
    beschrijving: "Geimporteerd uit Nederland!\n" +
        "\n" +
        "Hollandse delicatesse!",
    belangrijkste_productspecificaties: {gewicht: "2000g", gemaakt_door: "DeDropKoning.nl"}
};
const zure_tutters = {
    key: "zure_tutters",
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.zure_tutters + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.zure_tutters + img_defaults.afbeelding_suffix,
    naam: "Zure tutters",
    prijs: "€1,93",
    beschrijving: "Onze favoriete zure snoep item!\n" +
        "\n" +
        "Gemaakt in België!",
    belangrijkste_productspecificaties: {gewicht: "500g", gemaakt_door: "LUTTI"}
};
const maoam = {
    key: keys.maoam,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.maoam + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.maoam + img_defaults.afbeelding_suffix,
    naam: keys.maoam.toUpperCase(),
    prijs: "€2,75",
    beschrijving: "MAOAM BLOXX!\n" +
        "\n" +
        "Nog een knaller gemaakt door HARIBO!",
    belangrijkste_productspecificaties: {gewicht: "350g", gemaakt_door: "HARIBO"}
};
const smurfkes = {
    key: keys.smurfkes,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.smurfkes + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.smurfkes + img_defaults.afbeelding_suffix,
    naam: "Smurfkes",
    prijs: "€2,75",
    beschrijving: "HARIBO Smurfen!\n" +
        "\n" +
        "De beste smurfen in de wereld!",
    belangrijkste_productspecificaties: {gewicht: "350g", gemaakt_door: "HARIBO"}
};


// CHOC
const toblerone = {
    key: keys.toblerone,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.toblerone + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.toblerone + img_defaults.afbeelding_suffix,
    naam: "Toblerone",
    prijs: "€22,95",
    beschrijving: "Toblerone!\n" +
        "\n" +
        "De beste chocolade uit Zwitserland!",
    belangrijkste_productspecificaties: {gewicht: "950g", gemaakt_door: "Mondelēz International, Inc."}
};
const ferrero = {
    key: keys.ferrero,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.ferrero + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.ferrero + img_defaults.afbeelding_suffix,
    naam: "Ferrero Rocher",
    prijs: "€3,19",
    beschrijving: "Ferrero Rocher, de showstopper!\n" +
        "\n" +
        "De goude verpakking is niet eetbaar, ik spreek uit ervaring.",
    belangrijkste_productspecificaties: {gewicht: "250g", gemaakt_door: "Ferrero"}
};
const mnms = {
    key: keys.mnms,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.mnms + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.mnms + img_defaults.afbeelding_suffix,
    naam: "M&M's",
    prijs: "€4,89",
    beschrijving: "M&M's, ontstaan door oorlog!\n" +
        "\n" +
        "Moordlustig krokant!",
    belangrijkste_productspecificaties: {gewicht: "350g", gemaakt_door: "Mars Wrigley Confectionery"}
};
const kinder_surprise = {
    key: keys.kinder_surprise,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.kinder_surprise + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.kinder_surprise + img_defaults.afbeelding_suffix,
    naam: "Kinder surprise",
    prijs: "€1,95",
    beschrijving: "Zo lekker dat het is verboden is in Amerika!\n" +
        "\n" +
        "Crimineel lekker!",
    belangrijkste_productspecificaties: {gewicht: "150g", gemaakt_door: "Kinder"}
};
const kinder_maxi = {
    key: keys.kinder_maxi,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.kinder_maxi  + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.kinder_maxi + img_defaults.afbeelding_suffix,
    naam: "Kinder reepen",
    prijs: "€4,99",
    beschrijving: "Ongeloofelijk lekker!\n" +
        "\n" +
        "Onze beste chocolade!",
    belangrijkste_productspecificaties: {gewicht: "250g", gemaakt_door: "Kinder"}
};
const mars = {
    key: keys.mars,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.mars + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.mars + img_defaults.afbeelding_suffix,
    naam: "Mars",
    prijs: "€2,96",
    beschrijving: "Deze smaak komt rech van een andere planeet!\n" +
        "\n" +
        "MET KARAMEL!",
    belangrijkste_productspecificaties: {gewicht: "150g", gemaakt_door: "Mars, Incorporated"}
};

// KOEKEN
const jds = {
    key: keys.jds,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.jds + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.jds + img_defaults.afbeelding_suffix,
    naam: "Jules Destrooper",
    prijs: "€17,81",
    beschrijving: "Hier komen al die lege koekendozen dus vandaan!\n" +
        "\n" +
        "Proef onze selectie",
    belangrijkste_productspecificaties: {gewicht: "1500g", gemaakt_door: "Jules Destrooper"}
};
const lotus = {
    key: keys.lotus,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.lotus + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.lotus + img_defaults.afbeelding_suffix,
    naam: "Lotus Speculoos",
    prijs: "€3,75",
    beschrijving: "De beste speculoos in heel de Benelux!\n" +
        "\n" +
        "Waanzinnig lekker!",
    belangrijkste_productspecificaties: {gewicht: "700g", gemaakt_door: "Lotus Speculoos"}
};
const macarons = {
    key: keys.macarons,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.macarons + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.macarons + img_defaults.afbeelding_suffix,
    naam: "Macarons",
    prijs: "€12,39",
    beschrijving: "Recht uit Frankrijk!\n" +
        "\n" +
        "Lekker multicurtureel!",
    belangrijkste_productspecificaties: {gewicht: "850g", gemaakt_door: "Pierre Hermé"}
};
const oreos = {
    key: keys.oreos,
    afb_lg: img_defaults.afbeelding_prefix + img_defaults.afbeelding_big + keys.oreos + img_defaults.afbeelding_suffix,
    afb_sm: img_defaults.afbeelding_prefix + img_defaults.afbeelding_small+ keys.oreos + img_defaults.afbeelding_suffix,
    naam: "Oreos",
    prijs: "€3,98",
    beschrijving: "De beste koeken in de wereld!\n" +
        "\n" +
        "DE favoriet in Amerika!",
    belangrijkste_productspecificaties: {gewicht: "550g", gemaakt_door: "Nabisco"}
};

export const producten = [
    {naam: "Snoep", lijst: [
        cuberdons,
        dolfijn,
        gummybears,
        dracula,
        dropveters,
        zure_tutters,
        maoam,
    ]},

    {naam: "Chocolade", lijst: [
        mnms,
        kinder_surprise,
        kinder_maxi,
    ]},


    {naam: "Koeken", lijst: [
        jds,
        lotus,
        macarons,
    ]},

    /*
    {naam: "Dyn test", lijst: [
            oreos,
            mars,
            smurfkes,
    ]},
     */

    {naam: "nieuwe koekies", lijst: [
        toblerone,
        ferrero
    ]},
];

