export interface Result {
  name: string;
  url: string;
}

export interface PokemonResultAbility {
  ability: { name: string };
  is_hidden: boolean;
}

export interface PokemonResult {
  name: string;
  abilities: PokemonResultAbility[];
  sprites: {
    front_default: string;
    back_default: string;
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
  name: string;
  abilities: Ability[];
  sprites: Sprites;
}
