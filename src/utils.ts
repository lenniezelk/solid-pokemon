import { Accessor, createSignal } from 'solid-js';
import { Pokemon, PokemonResult } from './types';

function getPokemonFromResult(result: PokemonResult): Pokemon {
  return {
    id: result.id,
    name: result.name,
    abilities: result.abilities.map((ability) => ({
      name: ability.ability.name,
      isHidden: ability.is_hidden,
    })),
    sprites: {
      frontDefault: result.sprites.frontDefault,
      backDefault: result.sprites.backDefault,
      official: {
        frontDefault: result.sprites.other?.['official-artwork']?.front_default,
        backDefault: result.sprites.other?.['official-artwork']?.back_default,
      },
    },
    height: result.height,
    weight: result.weight,
    baseExperience: result.base_experience,
    moves: result.moves,
    species: result.species.name,
    stats: result.stats.map((stat) => {
      return {
        name: stat.stat.name,
        baseStat: stat.base_stat,
        effort: stat.effort,
      };
    }),
    types: result.types.map((type) => ({ name: type.type.name })),
    forms: result.forms,
  };
}

export const fetchPokemon = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const result: PokemonResult = await response.json();
  return getPokemonFromResult(result);
};

type DeviceSize = 'mobile' | 'tablet' | 'desktop' | 'unknown';

export function useDeviceSize(): Accessor<DeviceSize> {
  const [deviceSize, setDeviceSize] = createSignal<DeviceSize>('unknown');
  let mql: MediaQueryList;
  if (window) {
    mql = window.matchMedia('(max-width: 480px)');
    mql.addEventListener('change', (mql) => {
      if (mql.matches) {
        setDeviceSize('mobile');
      }
    });
  }
  return deviceSize;
}
