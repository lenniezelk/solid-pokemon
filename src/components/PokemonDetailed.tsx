import { Pokemon } from '~/types';

export default function PokemonDetailed({ pokemon }: { pokemon: Pokemon }) {
  return <h1>{pokemon.name}</h1>;
}
