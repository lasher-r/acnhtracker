const sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";

const massInsert = (db) => {
  var insert =
    "INSERT INTO bugs (name, icon_url, price, location, times, months_northern) VALUES (?,?,?,?,?,?)";

  db.run(insert, [
    "Common butterfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/3/3a/NH-Icon-commonbutterfly.png/revision/latest?cb=20200401005428",
    160,
    "Flying",
    "[[04, 19]]",
    "[1, 2, 3, 4, 5, 6, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Yellow butterfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/f/fa/NH-Icon-yellowbutterfly.png/revision/latest?cb=20200401005428",
    160,
    "Flying",
    "[[04, 19]]",
    "[3, 4, 5, 6, 9, 10]",
  ]);

  db.run(insert, [
    "Tiger butterfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/6/65/NH-Icon-tigerbutterfly.png/revision/latest?cb=20200401005429",
    240,
    "Flying",
    "[[04, 19]]",
    "[3, 4, 5, 6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Peacock butterfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-peacockbutterfly.png/revision/latest?cb=20200401005429",
    2500,
    "Flying by Hybrid Flowers",
    "[[04, 19]]",
    "[3, 4, 5, 6]",
  ]);

  db.run(insert, [
    "Common bluebottle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-commonbluebottle.png/revision/latest?cb=20200401005428",
    300,
    "Flying",
    "[[04, 19]]",
    "[4, 5, 6, 7, 8]",
  ]);

  db.run(insert, [
    "Paper kite butterfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Icon-paperkitebutterfly.png/revision/latest?cb=20200401005429",
    1000,
    "Flying",
    "[[08, 19]]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Great purple emperor",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/2/27/NH-Icon-greatpurpleemperor.png/revision/latest?cb=20200401005428",
    3000,
    "Flying",
    "[[04, 19]]",
    "[5, 6, 7, 8]",
  ]);

  db.run(insert, [
    "Monarch butterfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-monarchbutterfly.png/revision/latest?cb=20200401005429",
    140,
    "Flying",
    "[[04, 17]]",
    "[9, 10, 11]",
  ]);

  db.run(insert, [
    "Emperor butterfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5e/NH-Icon-emperorbutterfly.png/revision/latest?cb=20200401005428",
    4000,
    "Flying",
    "[[17, 08]]",
    "[1, 2, 3, 6, 7, 8, 9, 12]",
  ]);

  db.run(insert, [
    "Agrias butterfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/d/dc/NH-Icon-agriasbutterfly.png/revision/latest?cb=20200401005428",
    3000,
    "Flying",
    "[[08, 17]]",
    "[4, 5, 6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Rajah Brooke's birdwing",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Icon-rajahbrookesbirdwing.png/revision/latest?cb=20200401005428",
    2500,
    "Flying",
    "[[08, 17]]",
    "[1, 2, 4, 5, 6, 7, 8, 9, 12]",
  ]);

  db.run(insert, [
    "Queen Alexandra's birdwing",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b8/NH-Icon-queenalexandrasbirdwing.png/revision/latest?cb=20200401005429",
    4000,
    "Flying",
    "[[08, 16]]",
    "[5, 6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Moth",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-moth.png/revision/latest?cb=20200401005428",
    130,
    "Flying by Light",
    "[[19, 04]]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Atlas moth",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-atlasmoth.png/revision/latest?cb=20200401005428",
    3000,
    "On Trees",
    "[[19, 04]]",
    "[4, 5, 6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Madagascan sunset moth",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7d/NH-Icon-madagascansunsetmoth.png/revision/latest?cb=20200401005429",
    2500,
    "Flying",
    "[[08, 16]]",
    "[4, 5, 6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Long locust",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-longlocust.png/revision/latest?cb=20200401005429",
    200,
    "On the Ground",
    "[[08, 19]]",
    "[4, 5, 6, 7, 8, 9, 10, 11]",
  ]);

  db.run(insert, [
    "Migratory locust",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e4/NH-Icon-migratorylocust.png/revision/latest?cb=20200401005429",
    600,
    "On the Ground",
    "[[08, 19]]",
    "[8, 9, 10, 11]",
  ]);

  db.run(insert, [
    "Rice grasshopper",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/d/d3/NH-Icon-ricegrasshopper.png/revision/latest?cb=20200401005428",
    160,
    "On the Ground",
    "[[08, 19]]",
    "[8, 9, 10, 11]",
  ]);

  db.run(insert, [
    "Grasshopper",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/5/56/NH-Icon-grasshopper.png/revision/latest?cb=20200401005428",
    160,
    "On the Ground",
    "[[08, 17]]",
    "[7, 8, 9]",
  ]);

  db.run(insert, [
    "Cricket",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7a/NH-Icon-cricket.png/revision/latest?cb=20200401005428",
    130,
    "On the Ground",
    "[[17, 08]]",
    "[9, 10, 11]",
  ]);

  db.run(insert, [
    "Bell cricket",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-bellcricket.png/revision/latest?cb=20200401005428",
    430,
    "On the Ground",
    "[[17, 08]]",
    "[9, 10]",
  ]);

  db.run(insert, [
    "Mantis",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-mantis.png/revision/latest?cb=20200401005429",
    430,
    "On Flowers",
    "[[08, 17]]",
    "[3, 4, 5, 6, 7, 8, 9, 10, 11]",
  ]);

  db.run(insert, [
    "Orchid mantis",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-orchidmantis.png/revision/latest?cb=20200401005428",
    2400,
    "On Flowers (White)",
    "[[08, 17]]",
    "[3, 4, 5, 6, 7, 8, 9, 10, 11]",
  ]);

  db.run(insert, [
    "Honeybee",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-honeybee.png/revision/latest?cb=20200401005428",
    200,
    "Flying",
    "[[08, 17]]",
    "[3, 4, 5, 6, 7]",
  ]);

  db.run(insert, [
    "Wasp",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/9/9e/NH-Icon-wasp.png/revision/latest?cb=20200401005428",
    2500,
    "Shaking Trees",
    "[[00]]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Brown cicada",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/a/ab/NH-Icon-browncicada.png/revision/latest?cb=20200401005428",
    250,
    "On Trees",
    "[[08, 17]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Robust cicada",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2f/NH-Icon-robustcicada.png/revision/latest?cb=20200401005429",
    300,
    "On Trees",
    "[[08, 17]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Giant cicada",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/5/58/NH-Icon-giantcicada.png/revision/latest?cb=20200401005428",
    500,
    "On Trees",
    "[[08, 17]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Walker cicada",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ec/NH-Icon-walkercicada.png/revision/latest?cb=20200401005429",
    400,
    "On Trees",
    "[[08, 17]]",
    "[8, 9]",
  ]);

  db.run(insert, [
    "Evening cicada",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-eveningcicada.png/revision/latest?cb=20200401005428",
    550,
    "On Trees",
    "[[04, 08], [16, 19]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Cicada shell",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/9/97/NH-Icon-cicadashell.png/revision/latest?cb=20200401005428",
    10,
    "On Trees",
    "[[00]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Red dragonfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/e/eb/NH-Icon-reddragonfly.png/revision/latest?cb=20200401005428",
    180,
    "Flying",
    "[[08, 19]]",
    "[9, 10]",
  ]);

  db.run(insert, [
    "Darner dragonfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/7/70/NH-Icon-darnerdragonfly.png/revision/latest?cb=20200401005428",
    230,
    "Flying",
    "[[08, 17]]",
    "[4, 5, 6, 7, 8, 9, 10]",
  ]);

  db.run(insert, [
    "Banded dragonfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/6/64/NH-Icon-bandeddragonfly.png/revision/latest?cb=20200401005428",
    4500,
    "Flying",
    "[[08, 17]]",
    "[5, 6, 7, 8, 9, 10]",
  ]);

  db.run(insert, [
    "Damselfly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/1/16/NH-Icon-damselfly.png/revision/latest?cb=20200401005428",
    500,
    "Flying",
    "[[00]]",
    "[1, 2, 11, 12]",
  ]);

  db.run(insert, [
    "Firefly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/a/ae/NH-Icon-firefly.png/revision/latest?cb=20200401005428",
    300,
    "Flying",
    "[[19, 04]]",
    "[6]",
  ]);

  db.run(insert, [
    "Mole cricket",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/0/00/NH-Icon-molecricket.png/revision/latest?cb=20200401005429",
    500,
    "Underground",
    "[[00]]",
    "[1, 2, 3, 4, 5, 11, 12]",
  ]);

  db.run(insert, [
    "Pondskater",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/f/f4/NH-Icon-pondskater.png/revision/latest?cb=20200401005429",
    130,
    "On Ponds and Rivers",
    "[[08, 19]]",
    "[5, 6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Diving beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-divingbeetle.png/revision/latest?cb=20200401005428",
    800,
    "On Ponds and Rivers",
    "[[08, 19]]",
    "[5, 6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Giant water bug",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/5/55/NH-Icon-giantwaterbug.png/revision/latest?cb=20200401005428",
    2000,
    "On Ponds and Rivers",
    "[[19, 08]]",
    "[4, 5, 6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Stinkbug",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/8/80/NH-Icon-stinkbug.png/revision/latest?cb=20200401005429",
    120,
    "On Flowers",
    "[[00]]",
    "[3, 4, 5, 6, 7, 8, 9, 10]",
  ]);

  db.run(insert, [
    "Man-faced stink bug",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Icon-manfacedstinkbug.png/revision/latest?cb=20200401005429",
    1000,
    "On Flowers",
    "[[19, 08]]",
    "[3, 4, 5, 6, 7, 8, 9, 10]",
  ]);

  db.run(insert, [
    "Ladybug",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/1/18/NH-Icon-ladybug.png/revision/latest?cb=20200401005428",
    200,
    "On Flowers",
    "[[08, 17]]",
    "[3, 4, 5, 6, 10]",
  ]);

  db.run(insert, [
    "Tiger beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e3/NH-Icon-tigerbeetle.png/revision/latest?cb=20200401005428",
    1500,
    "On the Ground",
    "[[00]]",
    "[2, 3, 4, 5, 6, 7, 8, 9, 10]",
  ]);

  db.run(insert, [
    "Jewel beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-jewelbeetle.png/revision/latest?cb=20200401005428",
    2400,
    "On Tree Stumps",
    "[[00]]",
    "[4, 5, 6, 7, 8]",
  ]);

  db.run(insert, [
    "Violin beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6a/NH-Icon-violinbeetle.png/revision/latest?cb=20200401005429",
    450,
    "On Tree Stumps",
    "[[00]]",
    "[5, 6, 9, 10, 11]",
  ]);

  db.run(insert, [
    "Citrus long-horned beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/8/8f/NH-Icon-citruslonghornedbeetle.png/revision/latest?cb=20200401005428",
    350,
    "On Tree Stumps",
    "[[00]]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Rosalia batesi beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e0/NH-Icon-rosaliabatesibeetle.png/revision/latest?cb=20200401005429",
    3000,
    "On Tree Stumps",
    "[[00]]",
    "[5, 6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Blue weevil beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/f/f5/NH-Icon-blueweevilbeetle.png/revision/latest?cb=20200401005428",
    800,
    "On Trees (Coconut)",
    "[[00]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Dung beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-dungbeetle.png/revision/latest?cb=20200401005431",
    3000,
    "On the Ground (rolling snowballs)",
    "[[00]]",
    "[1, 2, 12]",
  ]);

  db.run(insert, [
    "Earth-boring dung beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/NH-Icon-earthboringdungbeetle.png/revision/latest?cb=20200401005428",
    300,
    "On the Ground",
    "[[00]]",
    "[7, 8, 9]",
  ]);

  db.run(insert, [
    "Scarab beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/4/4c/NH-Icon-scarabbeetle.png/revision/latest?cb=20200401005429",
    10000,
    "On Trees",
    "[[23, 08]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Drone beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/9/99/NH-Icon-dronebeetle.png/revision/latest?cb=20200401005428",
    200,
    "On Trees",
    "[[00]]",
    "[6, 7, 8]",
  ]);

  db.run(insert, [
    "Goliath beetle",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5b/NH-Icon-goliathbeetle.png/revision/latest?cb=20200401005428",
    8000,
    "On Trees (Coconut)",
    "[[17, 08]]",
    "[6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Saw stag",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/4/48/NH-Icon-sawstag.png/revision/latest?cb=20200401005429",
    2000,
    "On Trees",
    "[[00]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Miyama stag",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/1/1b/NH-Icon-miyamastag.png/revision/latest?cb=20200401005429",
    1000,
    "On Trees",
    "[[00]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Giant stag",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/2/25/NH-Icon-giantstag.png/revision/latest?cb=20200401005428",
    10000,
    "On Trees",
    "[[23, 08]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Rainbow stag",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/1/1c/NH-Icon-rainbowstag.png/revision/latest?cb=20200401005429",
    6000,
    "On Trees",
    "[[19, 08]]",
    "[6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Cyclommatus stag",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/1/17/NH-Icon-cyclommatusstag.png/revision/latest?cb=20200401005428",
    8000,
    "On Trees (Coconut)",
    "[[17, 08]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Golden stag",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/8/82/NH-Icon-goldenstag.png/revision/latest?cb=20200401005428",
    12000,
    "On Trees (Coconut)",
    "[[17, 08]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Giraffe stag",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Icon-giraffestag.png/revision/latest?cb=20200401005428",
    12000,
    "On Trees (Coconut)",
    "[[17, 08]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Horned dynastid",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-Icon-horneddynastid.png/revision/latest?cb=20200401005428",
    1350,
    "On Trees",
    "[[17, 08]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Horned atlas",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-hornedatlas.png/revision/latest?cb=20200401005428",
    8000,
    "On Trees (Coconut)",
    "[[17, 08]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Horned elephant",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-hornedelephant.png/revision/latest?cb=20200401005429",
    8000,
    "On Trees (Coconut)",
    "[[17, 08]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Horned hercules",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c2/NH-Icon-hornedhercules.png/revision/latest?cb=20200401005428",
    12000,
    "On Trees (Coconut)",
    "[[17, 08]]",
    "[7, 8]",
  ]);

  db.run(insert, [
    "Walking stick",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/6/62/NH-Icon-walkingstick.png/revision/latest?cb=20200401005428",
    600,
    "On Trees",
    "[[04, 08], [17, 19]]",
    "[7, 8, 9, 10, 11]",
  ]);

  db.run(insert, [
    "Walking leaf",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/c/cb/NH-Icon-walkingleaf.png/revision/latest?cb=20200401005429",
    600,
    "Under Trees Disguised as Leafs",
    "[[00]]",
    "[7, 8, 9]",
  ]);

  db.run(insert, [
    "Bagworm",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/8/81/NH-Icon-bagworm.png/revision/latest?cb=20200401005428",
    600,
    "Shaking Trees",
    "[[00]]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Ant",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/4/45/NH-Icon-ant.png/revision/latest?cb=20200401005428",
    80,
    "On rotten food",
    "[[00]]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Hermit crab",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/7/7f/NH-Icon-hermitcrab.png/revision/latest?cb=20200401005430",
    1000,
    "Beach disguised as Shells",
    "[[19, 08]]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Wharf roach",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/5/5d/NH-Icon-wharfroach.png/revision/latest?cb=20200401005428",
    200,
    "On Beach Rocks",
    "[[00]]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Fly",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/4/4f/NH-Icon-fly.png/revision/latest?cb=20200401005428",
    60,
    "On Trash Items",
    "[[00]]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Mosquito",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c0/NH-Icon-mosquito.png/revision/latest?cb=20200401005429",
    130,
    "Flying",
    "[[17, 04]]",
    "[6, 7, 8, 9]",
  ]);

  db.run(insert, [
    "Flea",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/9/92/NH-Icon-flea.png/revision/latest?cb=20200401005428",
    70,
    "Villager's Heads",
    "[[00]]",
    "[4, 5, 6, 7, 8, 9, 10, 11]",
  ]);

  db.run(insert, [
    "Snail",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b1/NH-Icon-snail.png/revision/latest?cb=20200401005429",
    250,
    "On Rocks and Bushes (Rain)",
    "[[00]]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Pill bug",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/NH-Icon-pillbug.png/revision/latest?cb=20200401005428",
    250,
    "Hitting Rocks",
    "[[23, 16]]",
    "[1, 2, 3, 4, 5, 6, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Centipede",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/3/30/NH-Icon-centipede.png/revision/latest?cb=20200401005429",
    300,
    "Hitting Rocks",
    "[[16, 23]]",
    "[1, 2, 3, 4, 5, 6, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Spider",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/NH-Icon-spider.png/revision/latest?cb=20200401005429",
    600,
    "Shaking Trees",
    "[[19, 08]]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
  ]);

  db.run(insert, [
    "Tarantula",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/0/0a/NH-Icon-tarantula.png/revision/latest?cb=20200401005429",
    8000,
    "On the Ground",
    "[[19, 04]]",
    "[1, 2, 3, 4, 11, 12]",
  ]);

  db.run(insert, [
    "Scorpion",
    "https://vignette.wikia.nocookie.net/animalcrossing/images/3/34/NH-Icon-scorpion.png/revision/latest?cb=20200401005429",
    8000,
    "On the Ground",
    "[[19, 04]]",
    "[5, 6, 7, 8, 9, 10]",
  ]);
};

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE bugs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT, 
            status TEXT DEFAULT "uncaught",
            icon_url TEXT, 
            price INTEGER,
            location TEXT,
            times TEXT,
            months_northern TEXT
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          massInsert(db);
        }
      }
    );
  }
});

module.exports = db;
