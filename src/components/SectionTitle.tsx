import type { ReactNode } from 'react';

type Props = { title: string; children?: ReactNode };
export default function SectionTitle({ title, children }: Props) {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium capitalize">
      {title}
      {children ? <p>{children}</p> : null}
    </h2>
  );
}
