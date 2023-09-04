export interface Props {
  tags: { label: string }[];
}

export default function TagList(props: Props) {
  return (
    <ul className="flex flex-wrap justify-center gap-2">
      {props.tags.map(({ label }) => (
        <li
          key={label}
          className="rounded-lg border border-gray-300 bg-white/70 px-4 py-2 dark:border-gray-700 dark:bg-black/70"
        >
          {label}
        </li>
      ))}
    </ul>
  );
}
