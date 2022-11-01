import { For, Suspense } from 'solid-js';
import { createRouteData, useRouteData } from 'solid-start';
import Loading from '~/components/Loading';
import Pagination from '~/components/pagination/Pagination';
import PokeCard from '~/components/PokeCard';
import SiteTitle from '~/components/SiteTitle';
import { Results } from '~/types';
import * as indexSyles from './index.css';

const limit = 20;

// const [];

export function routeData() {
  return createRouteData(
    async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=20&limit=${limit}`,
      );
      const results = (await response.json()) as Results;
      return results.results;
    },
    {
      key: {},
    },
  );
}

const onPaginate = (offset: number) => console.log('Offset ', offset);

export default function Home() {
  const resultList = useRouteData<typeof routeData>();

  return (
    <>
      <nav>
        <h1>Pokemon</h1>
      </nav>
      <main>
        <SiteTitle>Home</SiteTitle>
        <Suspense fallback={<Loading />}>
          <div class={indexSyles.pokeGrid}>
            <For each={resultList()}>
              {(result) => <PokeCard name={result.name} />}
            </For>
          </div>
        </Suspense>
        <div class={indexSyles.paginationContainer}>
          <Pagination onPaginate={onPaginate} totalCount={20} />
        </div>
      </main>
    </>
  );
}
