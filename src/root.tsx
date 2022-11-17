// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import './root.css';
import { container } from './root.css';
import '@fontsource/montserrat';

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Pokemon</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="Pokemon Stats App built with Solid" />
      </Head>
      <Body>
        <div class={container}>
          <Suspense>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </div>
        <Scripts />
      </Body>
    </Html>
  );
}
