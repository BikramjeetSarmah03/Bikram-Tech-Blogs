import urlFor from "@/lib/urlFor";
import { Post } from "@/sanity/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="mb-10 border-brand" />

      <div className="grid grid-cols-1 gap-10 px-10 pb-24 md:grid-cols-2 gap-y-16">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug?.current}`}>
            <div className="flex flex-col cursor-pointer group">
              <div className="relative w-full transition-transform duration-200 ease-out h-80 drop-shadow-xl group-hover:scale-105 ">
                <div className="relative h-full">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.author?.name || ""}
                    fill
                    className="object-cover object-left lg:object-center"
                  />
                </div>

                <div className="absolute bottom-0 flex justify-between w-full p-5 text-white bg-black rounded bg-opacity-20 drop-shadow-lg">
                  <div>
                    <p className="font-bold">{post.title}</p>

                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:flex-row gap-y-2 md:gap-x-2">
                    {post.categories?.map((category) => (
                      <div
                        className="px-3 py-1 text-sm font-semibold text-center text-black rounded-full bg-brand"
                        key={category._id}>
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 mt-5">
                <p className="text-lg font-bold underline ">{post.title}</p>
                <p className="text-gray-500 line-clamp-2">{post.description}</p>
              </div>

              <p className="flex items-center mt-5 font-bold group-hover:underline">
                Read Post <ArrowRightIcon className="w-4 h-4 ml-2" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
