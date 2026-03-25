import { marked } from "marked";

type Props = {
  content: string;
};

export default function MarkdownPage({ content }: Props) {
  return (
    <article
      className="article markdown"
      dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
    />
  );
}