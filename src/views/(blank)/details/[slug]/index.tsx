// Next
import Link from "next/link";
import Navbar from "./Navbar";
import ImagePreviews from "./ImagePreviews";

export default function DetailsWrapper() {
  return (
    <section className="max-w-[640px] w-full mx-auto flex flex-col">
      <div className="px-4 min-h-screen flex flex-col gap-8 bg-vista-500 pb-[120px]">
        <Navbar />
        <ImagePreviews />
        <div className="flex flex-col gap-3 bg-white p-[16px_24px] rounded-[22px]">
          <h2 className="font-semibold">About Destination</h2>
          <p id="readMore" className="text-sm leading-[22px] tracking-035 text-darkGrey">
            Picturesque destination renowned for its stunning coastal views and pristine white
            sand...
            <button className="font-semibold text-blue">Read More</button>
          </p>
          <p id="seeLess" className="hidden text-sm leading-[22px] tracking-035 text-darkGrey">
            Picturesque destination renowned for its stunning coastal views and pristine white sand
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt est aspernatur ex
            consequatur similique illo at eum repellendus ea ullam.
            <button className="font-semibold text-blue">See Less</button>
          </p>
        </div>
        <div className="flex flex-col gap-3 bg-white p-[16px_24px] rounded-[22px]">
          <h2 className="font-semibold">Testimonial</h2>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <div className="w-12 h-12 border-4 border-white rounded-full overflow-hidden flex shrink-0 shadow-[6px_8px_20px_0_#00000008]">
                  <img
                    src="/assets/photos/pfp2.png"
                    className="object-cover object-center w-full h-full"
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-sm leading-[22px] tracking-035">James Sullivan</p>
                  <p className="text-darkGrey text-xs leading-[20px] tracking-035">1 week ago</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <img src="/assets/icons/Star.svg" alt="icon" />
                <img src="/assets/icons/Star.svg" alt="icon" />
                <img src="/assets/icons/Star.svg" alt="icon" />
                <img src="/assets/icons/Star.svg" alt="icon" />
                <img src="/assets/icons/Star.svg" alt="icon" />
              </div>
            </div>
            <p className="text-sm leading-[22px] tracking-035 text-darkGrey">
              The view was good, also I really love the weather. It’s very warm and good for healing
            </p>
          </div>
          <hr />
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              <p className="font-semibold">
                2.547{" "}
                <span className="font-normal text-sm leading-[22px] tracking-035 text-darkGrey">
                  Reviews
                </span>
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 border-4 border-white rounded-full overflow-hidden flex shrink-0 shadow-[6px_8px_20px_0_#00000008] -ml-2 first-of-type:-ml-1">
                  <img
                    src="/assets/photos/pfp2.png"
                    className="object-cover object-center w-full h-full"
                    alt="photo"
                  />
                </div>
                <div className="w-12 h-12 border-4 border-white rounded-full overflow-hidden flex shrink-0 shadow-[6px_8px_20px_0_#00000008] -ml-2 first-of-type:-ml-1">
                  <img
                    src="/assets/photos/pfp3.png"
                    className="object-cover object-center w-full h-full"
                    alt="photo"
                  />
                </div>
                <div className="w-12 h-12 border-4 border-white rounded-full overflow-hidden flex shrink-0 shadow-[6px_8px_20px_0_#00000008] -ml-2 first-of-type:-ml-1">
                  <img
                    src="/assets/photos/pfp4.png"
                    className="object-cover object-center w-full h-full"
                    alt="photo"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Photo & Video</p>
              <div className="flex gap-1">
                <div className="relative flex w-12 h-12 overflow-hidden rounded-lg shrink-0">
                  <img
                    src="/assets/thumbnails/nusa-penida.jpg"
                    className="object-cover object-center w-full h-full"
                    alt="thumbnail"
                  />
                </div>
                <div className="relative flex w-12 h-12 overflow-hidden rounded-lg shrink-0">
                  <img
                    src="/assets/thumbnails/raja.jpg"
                    className="object-cover object-center w-full h-full"
                    alt="thumbnail"
                  />
                </div>
                <div className="relative flex w-12 h-12 overflow-hidden rounded-lg shrink-0">
                  <img
                    src="/assets/thumbnails/santorini.jpg"
                    className="object-cover object-center w-full h-full"
                    alt="thumbnail"
                  />
                  <div className="w-12 h-12 flex items-center justify-center bg-[#1c273080] absolute">
                    <span className="font-semibold text-white">101+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/" className="flex items-center justify-between py-2 text-blue">
            <span className="font-semibold text-sm leading-[22px] tracking-035">
              Read 2.546 more review
            </span>
            <div>
              <img src="/assets/icons/arrow-circle-right.svg" alt="icon" />
            </div>
          </Link>
        </div>
      </div>
      <div className="navigation-bar fixed bottom-0 z-50 max-w-[640px] w-full h-[85px] bg-white rounded-t-[25px] flex items-center justify-between px-6">
        <div className="flex flex-col justify-center gap-1">
          <p className="text-darkGrey text-sm tracking-035 leading-[22px]">Total Price</p>
          <p className="text-blue font-semibold text-lg leading-[26px] tracking-[0.6px]">
            Rp 900.000
            <span className="font-normal text-sx leading-[20px] tracking-035 text-darkGrey">
              /pack
            </span>
          </p>
        </div>
        <Link
          href="/booking"
          className="p-[16px_24px] rounded-xl bg-primary w-fit text-white hover:bg-[#06C755] transition-all duration-300"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
