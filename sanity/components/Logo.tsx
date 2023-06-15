import Image from "next/image";

export default function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        height={30}
        width={30}
        src={
          "https://res.cloudinary.com/bikramjeet/image/upload/v1686779161/Blogging%20Site/AAcHTtfHFpYOchTQ6cdiEuHnnTjXaD28YxfJIXxGQFMw_s288-c-no_h1og0c.png"
        }
        alt="logo"
        className="rounded-full"
      />

      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}
