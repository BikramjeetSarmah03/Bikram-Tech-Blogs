import { RichTextComponents } from "@/components/RichTextComponents";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { Post } from "@/sanity/types";
import { groq } from "next-sanity";
import Image from "next/image";
import PortableText from "react-portable-text";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60; // its 60 sec

export async function generateStaticParams() {
  const query = groq`*[_type=="post"]{slug}`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug?.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function page({ params: { slug } }: Props) {
  const query = groq`
 *[_type=="post" && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
 }
`;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28 ">
      <section className="space-y-2 text-white border border-brand">
        <div className="relative flex flex-col justify-between min-h-56 md:flex-row">
          <div className="absolute top-0 w-full h-full p-10 opacity-20 blur-sm">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author?.name || ""}
              fill
            />
          </div>

          <section className="w-full p-5 bg-brand">
            <div className="flex flex-col justify-between md:flex-row gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {" "}
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author?.image).url()}
                  alt={post.author?.name || ""}
                  height={50}
                  width={50}
                />

                <div className="w-64">
                  <h3 className="text-lg font-bold">
                    {post.author?.name || ""}
                  </h3>
                  <div>{/*TODO Author bio */}</div>
                </div>
              </div>
            </div>

            <div>
              {post.description && (
                <h2 className="pt-10 italic">{post.description}</h2>
              )}
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories?.map((cat) => (
                  <p
                    key={cat._id}
                    className="px-3 py-1 mt-4 text-sm font-semibold text-white bg-gray-800 rounded-full">
                    {cat.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText content={post.body} serializers={RichTextComponents} />
    </article>
  );
}
