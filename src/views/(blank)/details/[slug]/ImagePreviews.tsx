import Link from "next/link";

export default function ImagePreviews() {
  return (
    <div id="image-details" className="flex flex-col gap-3">
      <div className="w-full h-[345px] flex shrink-0 rounded-xl overflow-hidden">
        <img
          id="image-thumbnail"
          src="/assets/thumbnails/nusa-penida.jpg"
          className="object-cover object-center w-full h-full"
          alt="thumbnail"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mx-auto w-fit">
        <Link
          href="/assets/thumbnails/nusa-penida.jpg"
          className="thumbnail-option w-[74px] h-[74px] flex shrink-0 rounded-xl border-2 overflow-hidden mx-auto border-blue"
        >
          <img
            src="/assets/thumbnails/nusa-penida.jpg"
            className="object-cover object-center w-full h-full"
            alt="thumbnail"
          />
        </Link>
        <Link
          href="/assets/thumbnails/nusa-penida2.jpg"
          className="thumbnail-option w-[74px] h-[74px] flex shrink-0 rounded-xl border-2 overflow-hidden mx-auto opacity-50"
        >
          <img
            src="/assets/thumbnails/nusa-penida2.jpg"
            className="object-cover object-center w-full h-full"
            alt="thumbnail"
          />
        </Link>
        <Link
          href="/assets/thumbnails/nusa-penida3.jpg"
          className="thumbnail-option w-[74px] h-[74px] flex shrink-0 rounded-xl border-2 overflow-hidden mx-auto opacity-50"
        >
          <img
            src="/assets/thumbnails/nusa-penida3.jpg"
            className="object-cover object-center w-full h-full"
            alt="thumbnail"
          />
        </Link>
        <Link
          href="/assets/thumbnails/nusa-penida4.jpg"
          className="thumbnail-option w-[74px] h-[74px] flex shrink-0 rounded-xl border-2 overflow-hidden mx-auto opacity-50"
        >
          <img
            src="/assets/thumbnails/nusa-penida4.jpg"
            className="object-cover object-center w-full h-full"
            alt="thumbnail"
          />
        </Link>
      </div>
    </div>
  );
}
