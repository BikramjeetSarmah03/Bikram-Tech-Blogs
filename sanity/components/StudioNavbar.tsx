import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

export default function StudioNavbar(props: any) {
  return (
    <header>
      <div className="flex items-center justify-between p-5">
        <Link href={"/"} className="flex items-center text-brand">
          <ArrowUturnLeftIcon className="w-6 h-6 mr-2 text-brand" />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </header>
  );
}
