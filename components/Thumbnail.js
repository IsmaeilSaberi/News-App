import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import notloaded from "../public/assets/notload.png";

function Thumbnail({ result }) {
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={`/api/imageproxy?url=${result.urlToImage}` || notloaded}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.content}</p>

        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.source.name}
        </h2>

        <p className="flex item-center opacity-0 group-hover:opacity-100">
          {result.author} {result.publishedAt}
          {" . "}
          <ThumbUpIcon className="h-5 mx-5" />
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
