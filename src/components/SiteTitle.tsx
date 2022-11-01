import { JSX } from 'solid-js/jsx-runtime';
import { Title } from 'solid-start';

interface SiteTitleProps {
  children: JSX.Element;
}

export default function SiteTitle({ children }: SiteTitleProps) {
  return <Title>{children} | Solid Pokemon</Title>;
}
