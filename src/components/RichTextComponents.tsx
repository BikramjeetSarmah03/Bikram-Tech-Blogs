import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";

export const RichTextComponents = {
  image: ({ value }: any) => (
    <div className="relative w-full m-10 max-h-96">
      <Image
        className="object-contain"
        src={urlFor(value).url()}
        alt="Blog post image"
        fill
      />
    </div>
  ),
  bullet: ({ children }: any) => (
    <ul className="py-4 ml-10 space-y-5 list-disc">{children}</ul>
  ),
  number: ({ children }: any) => (
    <ol className="list-decimal mix-blend-soft-light">{children}</ol>
  ),
  h1: ({ children }: any) => (
    <h1 className="py-10 text-5xl font-bold">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="py-10 text-4xl font-bold">{children}</h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="py-10 text-3xl font-bold">{children}</h3>
  ),
  h4: ({ children }: any) => (
    <h4 className="py-10 text-2xl font-bold">{children}</h4>
  ),

  blockquote: ({ children }: any) => (
    <blockquote className="py-5 pl-5 my-5 border-l-4 border-l-brand">
      {children}
    </blockquote>
  ),
  link: ({ children, value }: any) => {
    const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;

    return (
      <Link
        href={value.href}
        rel={rel}
        className="underline decoration-brand hover:decoration-black">
        {children}
      </Link>
    );
  },
};
