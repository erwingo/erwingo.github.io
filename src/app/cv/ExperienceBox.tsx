import React, { ReactNode } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export interface Props {
  children?: ReactNode;
  title: string;
  subtitle: string;
  link?: string;
  items?: string[];
  markdownContent?: string;
}

export default function ExperienceBox(props: Props) {
  return (
    <div className="experience-box">
      <h2>
        {props.title} — <span>{props.subtitle}</span>
      </h2>

      {props.link ? (
        <a href={props.link} target="_blank">
          {props.link}
        </a>
      ) : null}

      {props.items?.map((it) => <p key={it}>{it}</p>)}

      {props.markdownContent ? (
        <ReactMarkdown className="experience-box-markdown">
          {props.markdownContent}
        </ReactMarkdown>
      ) : null}
    </div>
  );
}
