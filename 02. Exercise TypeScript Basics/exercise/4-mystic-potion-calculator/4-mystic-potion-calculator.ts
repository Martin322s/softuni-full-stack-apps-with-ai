type HealingPotion = {
  type: "healing";
  name: string;
  healingAmount: number;
};

type EnhancementPotion = {
  type: "enhancement";
  name: string;
  enhancementAmount: number;
};

type Potion = HealingPotion | EnhancementPotion;

function calculatePotionEffect(potion: Potion): string {
  if (potion.type === "healing") {
    return `${potion.name} restores ${potion.healingAmount} health points.`;
  } else {
    return `${potion.name} enhances abilities by ${potion.enhancementAmount} points.`;
  }
}

let healingPotion: HealingPotion = {
  type: "healing",
  name: "Elixir of Life",
  healingAmount: 50,
};

let enhancementPotion: EnhancementPotion = {
  type: "enhancement",
  name: "Strength Brew",
  enhancementAmount: 25,
};

console.log(calculatePotionEffect(healingPotion));
console.log(calculatePotionEffect(enhancementPotion));
