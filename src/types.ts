export interface Result {
  name: string;
  url: string;
}

export interface PokemonResultAbility {
  ability: { name: string };
  is_hidden: boolean;
}

export interface PokemonResult {
  forms: { name: string }[];
  base_experience: number;
  height: number;
  weight: number;
  id: number;
  moves: { name: string }[];
  species: { name: string };
  stats: { stat: { name: string }; base_stat: number; effort: number }[];
  types: { type: { name: string } }[];
  name: string;
  abilities: PokemonResultAbility[];
  sprites: {
    frontDefault: string;
    backDefault: string;
    other: {
      'official-artwork'?: {
        front_default: string;
        back_default?: string;
      };
    };
  };
}

export interface Results {
  results: Result[];
  count: number;
}

export interface Ability {
  name: string;
  isHidden: boolean;
}

export interface Sprites {
  frontDefault: string | null;
  backDefault: string | null;
  backDefaultOfficial: string | null;
  frontDefaultOfficial: string | null;
}

export interface Pokemon {
  forms: { name: string }[];
  baseExperience: number;
  height: number;
  weight: number;
  id: number;
  moves: { name: string }[];
  species: string;
  stats: { name: string; baseStat: number; effort: number }[];
  types: { name: string }[];
  name: string;
  abilities: Ability[];
  sprites: {
    frontDefault: string;
    backDefault: string;
    official?: {
      frontDefault: string;
      backDefault?: string;
    };
  };
}
