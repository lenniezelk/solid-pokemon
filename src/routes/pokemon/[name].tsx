import { A } from '@solidjs/router';
import { Match, Suspense, Switch } from 'solid-js';
import { createRouteData, RouteDataArgs, useRouteData } from 'solid-start';
import { useParams } from 'solid-start';
import Loading from '~/components/Loading';
import SiteTitle from '~/components/SiteTitle';
import { fetchPokemon } from '~/utils';

export default function Pokemon({ name }: { name: string }) {
  const data = useRouteData<typeof routeData>();
  const params = useParams();

  return (
    <>
      <nav>
        <h1>{params.name}</h1>
        <A href="/">Home</A>
      </nav>
      <main>
        <Suspense fallback={<Loading />}>
          <SiteTitle>{params.name}</SiteTitle>
          <Switch>
            <Match when={data.error}>
              <p>Failed to fetch {name}</p>
            </Match>
            <Match when={data()}>
              <h1>{data().name}</h1>
            </Match>
          </Switch>
        </Suspense>
      </main>
    </>
  );
}

export function routeData({ params }: RouteDataArgs) {
  return createRouteData(
    async (key) => {
      return await fetchPokemon(key);
    },
    { key: () => params.name },
  );
}
