import { Pokemon, PokemonResult } from './types';

function getPokemonFromResult(result: PokemonResult): Pokemon {
  return {
    name: result.name,
    abilities: result.abilities.map((ability) => ({
      name: ability.ability.name,
      isHidden: ability.is_hidden,
    })),
    sprites: {
      frontDefault: result.sprites.front_default,
      backDefault: result.sprites.back_default,
      backDefaultOfficial:
        result.sprites.other?.['official-artwork']?.front_default,
      frontDefaultOfficial:
        result.sprites.other?.['official-artwork']?.front_default,
    },
  };
}

export const fetchPokemon = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const result: PokemonResult = await response.json();
  return getPokemonFromResult(result);
};
