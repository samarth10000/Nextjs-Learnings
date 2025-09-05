import { notFound } from "next/navigation";

export default function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = params; // no await needed
  if (slug.length === 6) {
    notFound();
  }
  if (slug?.length === 2) {
    return (
      <h2>
        viewing docs for feature {slug[0]} and concept {slug[1]}
      </h2>
    );
  } else if (slug?.length === 1) {
    return <h1>viewing docs for feature only {slug[0]}</h1>;
  }

  return <h1>viewing docs Homepage</h1>;
}
