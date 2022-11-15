import { createSignal, For, Match, Suspense, Switch } from 'solid-js';
import { createRouteData, refetchRouteData, useRouteData } from 'solid-start';
import Loading from '~/components/Loading';
import Pagination from '~/components/pagination/Pagination';
import PokeCard from '~/components/PokeCard';
import SiteTitle from '~/components/SiteTitle';
import { RowsPerPage } from '~/constants';
import { Result, Results } from '~/types';
import * as indexSyles from './index.css';

const offsetFromPage = (page: number): number =>
  page * RowsPerPage - RowsPerPage;

const [page, setPage] = createSignal(1);

export function routeData() {
  return createRouteData(
    async (key) => {
      const offset = offsetFromPage(key.page());
      console.log('Offset>>>> ', offset);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${RowsPerPage}`,
      );
      return (await response.json()) as Results;
    },
    {
      key: { page },
    },
  );
}

const onPaginate = (page: number) => {
  console.log('ABC....', page);
  setPage(page);
  refetchRouteData([{ page }]);
};

export default function Home() {
  const results = useRouteData<typeof routeData>();
  const pokemonList: () => Result[] = () => results()?.results;
  const totalCount: () => number = () => results()?.count;

  return (
    <>
      <nav>
        <h1>Pokemon</h1>
      </nav>
      <main>
        <SiteTitle>Home</SiteTitle>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Match when={results.error}>
              <p>Failed to fetch Pokemon</p>
            </Match>
            <Match when={pokemonList()}>
              <div class={indexSyles.pokeGrid}>
                <For each={pokemonList()}>
                  {(result) => <PokeCard name={result.name} />}
                </For>
              </div>
              <div class={indexSyles.paginationContainer}>
                <Pagination
                  onPageChange={onPaginate}
                  totalCount={totalCount()}
                  currentPage={page()}
                  pageSize={RowsPerPage}
                />
              </div>
            </Match>
          </Switch>
        </Suspense>
      </main>
    </>
  );
}
