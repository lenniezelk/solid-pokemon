import {
  createResource,
  createSignal,
  For,
  Match,
  Suspense,
  Switch,
} from 'solid-js';
import Loading from '~/components/loading/Loading';
import Pagination from '~/components/pagination/Pagination';
import PokeCard from '~/components/PokeCard';
import SiteTitle from '~/components/SiteTitle';
import { RowsPerPage } from '~/constants';
import { Result, Results } from '~/types';
import * as indexSyles from './index.css';
import Footer from '~/components/Footer';

const offsetFromPage = (page: number): number =>
  page * RowsPerPage - RowsPerPage;

const [page, setPage] = createSignal(1);

export default function Home() {
  const [results] = createResource(
    () =>
      `https://pokeapi.co/api/v2/pokemon?offset=${offsetFromPage(
        page(),
      )}&limit=${RowsPerPage}`,
    async (path) => {
      const response = await fetch(path);
      return (await response.json()) as Results;
    },
  );
  const pokemonList: () => Result[] = () => results()?.results;
  const totalCount: () => number = () => results()?.count;

  const onPaginate = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <nav>
        <h1>Pokemon</h1>
      </nav>
      <main>
        <SiteTitle>Home</SiteTitle>
        <Suspense fallback={<Loading width={400} height={400} />}>
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
            </Match>
          </Switch>
          <div class={indexSyles.paginationContainer}>
            <Pagination
              onPageChange={onPaginate}
              totalCount={totalCount}
              currentPage={page}
              pageSize={RowsPerPage}
            />
          </div>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
