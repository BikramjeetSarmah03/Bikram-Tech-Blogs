import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-5 font-bold">
      <Link href={"/"} className="flex items-center space-x-2">
        <Image
          src={
            "https://res.cloudinary.com/bikramjeet/image/upload/v1686779161/Blogging%20Site/AAcHTtfHFpYOchTQ6cdiEuHnnTjXaD28YxfJIXxGQFMw_s288-c-no_h1og0c.png"
          }
          alt="headerImg"
          width={30}
          height={30}
          className="rounded-full"
        />
        <h1>Bikram Blogs</h1>
      </Link>
      {/* <div>Routes</div> */}
    </header>
  );
}
