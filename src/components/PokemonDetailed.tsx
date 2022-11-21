import { Pokemon } from '~/types';
import * as pokemonDetailedStyles from './PokemonDetailed.css';
import { JSX } from 'solid-js/jsx-runtime';
import { Show } from 'solid-js';

const Label = ({ children }: { children: JSX.Element }) => {
  return <span class={pokemonDetailedStyles.label}>{children}</span>;
};

const Stat = ({ children }: { children: JSX.Element }) => {
  return <div class={pokemonDetailedStyles.stat}>{children}</div>;
};

export default function PokemonDetailed({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div class={pokemonDetailedStyles.container}>
      <section>
        <img alt={pokemon.name} src={pokemon.sprites.official?.frontDefault} />
      </section>
      <article class={pokemonDetailedStyles.statsContainer}>
        <h2>Pokemon</h2>
        <div class={pokemonDetailedStyles.statsItem}>
          <div class={pokemonDetailedStyles.statsLabelContainer}>
            <Label>Type</Label>
          </div>
          <div>
            {pokemon.types.map((type) => (
              <Stat>{type.name}</Stat>
            ))}
          </div>
        </div>
        <div class={pokemonDetailedStyles.statsItem}>
          <div class={pokemonDetailedStyles.statsLabelContainer}>
            <Label>Species</Label>
          </div>
          <div>{pokemon.species}</div>
        </div>
        <div class={pokemonDetailedStyles.statsItem}>
          <div class={pokemonDetailedStyles.statsLabelContainer}>
            <Label>Base Exp.</Label>
          </div>
          <div>{pokemon.baseExperience}</div>
        </div>
        <div class={pokemonDetailedStyles.statsItem}>
          <div class={pokemonDetailedStyles.statsLabelContainer}>
            <Label>Height</Label>
          </div>
          <div>{pokemon.height / 10} m</div>
        </div>
        <div class={pokemonDetailedStyles.statsItem}>
          <div class={pokemonDetailedStyles.statsLabelContainer}>
            <Label>Weight</Label>
          </div>
          <div>{pokemon.weight / 10} Kg</div>
        </div>
        <div class={pokemonDetailedStyles.statsItem}>
          <div class={pokemonDetailedStyles.statsLabelContainer}>
            <Label>Abilities</Label>
          </div>
          <div>
            {pokemon.abilities.map((ability) => (
              <Stat>{ability.name}</Stat>
            ))}
          </div>
        </div>
      </article>
      <Show when={pokemon.stats.length > 0}>
        <article class={pokemonDetailedStyles.statsContainer}>
          <h2>Base Stats</h2>

          {pokemon.stats.map((stat) => {
            return (
              <div class={pokemonDetailedStyles.statsItem}>
                <div class={pokemonDetailedStyles.statsLabelContainer}>
                  <Label>{stat.name}</Label>
                </div>
                <div>{stat.baseStat}</div>
              </div>
            );
          })}
          <div class={pokemonDetailedStyles.statsItem}>
            <div class={pokemonDetailedStyles.statsLabelContainer}>
              <Label>
                <span style={{ 'font-weight': 'bolder' }}>Total</span>
              </Label>
            </div>
            <div>
              {pokemon.stats.reduce(
                (prevStat, currStat) => prevStat + currStat.baseStat,
                0,
              )}
            </div>
          </div>
        </article>
      </Show>
    </div>
  );
}
