import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "@/components/PreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";

const query = groq`
  *[_type=="post"]{
    ...,
    author->,
    categories[]->,
    series->
  } | order(_createdAt desc)
`;

export const revalidate = 60; // its 60 sec

export default async function Home() {
  const { isEnabled } = draftMode();

  if (isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-lg text-center animate-pulse text-brand">
              Loading Preview State
            </p>
          </div>
        }>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
