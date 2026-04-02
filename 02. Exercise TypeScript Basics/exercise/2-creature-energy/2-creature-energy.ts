type GalacticCreature = {
  name: string;
  energyLevels: number[];
  avgEnergy?: number;
};

function calculateCreatureEnergy(creature: GalacticCreature): GalacticCreature {
  const totalEnergy = creature.energyLevels.reduce(
    (sum, level) => sum + level,
    0,
  );
  const averageEnergy = totalEnergy / creature.energyLevels.length;

  creature.avgEnergy = averageEnergy;

  console.log(`Creature: ${creature.name}`);
  console.log(`Energy Levels: [${creature.energyLevels.join(", ")}]`);
  console.log(`Average Energy Level: ${averageEnergy.toFixed(2)}`);

  return creature;
}

const zorblax: GalacticCreature = {
  name: "Zorblax",
  energyLevels: [35, 42, 50, 29],
};

const lumivex: GalacticCreature = {
  name: "Lumivex",
  energyLevels: [75, 80, 90],
};

calculateCreatureEnergy(zorblax);
calculateCreatureEnergy(lumivex);
