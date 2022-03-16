/**
 * @see https://docs.pokemontcg.io/api-reference/cards/card-object
 */
export interface PokemonCard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: string;
  hp: string;
  types: string[];
  evolvesFrom: string;
  evolvesTo: string[];
  rules: string[];
  ancientTrait: string;
  images: {
    large: string;
    small: string;
  };
  nationalPokedexNumbers: number[];
  resistances: { type: string; value: number; }[];
  weaknesses: { type: string; value: number; }[];
  abilities: {
    name: string;
    text: string;
    type: string;
  };
  rarity: string;
}
