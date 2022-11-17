import { createResource, Match, Switch } from 'solid-js';
import { A } from 'solid-start';
import { fetchPokemon } from '~/utils';
import * as pokeCardStyles from './PokeCard.css';

export default function PokeCard({ name }: { name: string }) {
  const [pokemon] = createResource(async () => {
    return await fetchPokemon(name);
  });

  return (
    <Switch>
      <Match when={pokemon.error}>
        <div>
          Error fetching {name} {pokemon.error}
        </div>
      </Match>
      <Match when={pokemon()}>
        <A class={pokeCardStyles.pokeCard} href={`/pokemon/${pokemon().name}`}>
          {pokemon().sprites.official ? (
            <img
              src={pokemon().sprites.official?.frontDefault}
              alt={pokemon().name}
              class={pokeCardStyles.pokeCardImg}
            />
          ) : (
            <img
              src="https://placeholder.pics/svg/300"
              alt="placeholder"
              class={pokeCardStyles.pokeCardImg}
            />
          )}
          <span class={pokeCardStyles.name}>{pokemon().name}</span>
        </A>
      </Match>
    </Switch>
  );
}
