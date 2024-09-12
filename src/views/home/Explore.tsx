export default function Explore() {
  return (
    <>
      <a href="details.html" className="card">
        <div className="bg-white p-4 flex flex-col gap-3 rounded-[26px] shadow-[6px_8px_20px_0_#00000008]">
          <div className="w-full h-full aspect-[311/150] rounded-xl overflow-hidden">
            <img
              src="assets/thumbnails/castle.jpg"
              className="w-full h-full object-cover object-center"
              alt="thumbnail"
            />
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-semibold two-lines">Fortress Osaka Castle Park</p>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/location-map.svg" alt="icon" />
                </div>
                <span className="text-sm text-darkGrey tracking-035">Osaka, Japan</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <p className="text-sm leading-[21px]">
                <span className="font-semibold text-[#4D73FF] text-nowrap">Rp 25.000.000</span>
                <br />
                <span className="text-darkGrey">/10days</span>
              </p>
              <div className="flex items-center gap-1 justify-end">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/Star.svg" alt="icon" />
                </div>
                <span className="font-semibold text-sm leading-[21px]">4.8</span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="details.html" className="card">
        <div className="bg-white p-4 flex flex-col gap-3 rounded-[26px] shadow-[6px_8px_20px_0_#00000008]">
          <div className="w-full h-full aspect-[311/150] rounded-xl overflow-hidden">
            <img
              src="assets/thumbnails/santorini.jpg"
              className="w-full h-full object-cover object-center"
              alt="thumbnail"
            />
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-semibold two-lines">Santorini Island Aegean Sea</p>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/location-map.svg" alt="icon" />
                </div>
                <span className="text-sm text-darkGrey tracking-035">South Aegean, Greece</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <p className="text-sm leading-[21px]">
                <span className="font-semibold text-[#4D73FF] text-nowrap">Rp 20.000.000</span>
                <br />
                <span className="text-darkGrey">/8days</span>
              </p>
              <div className="flex items-center gap-1 justify-end">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/Star.svg" alt="icon" />
                </div>
                <span className="font-semibold text-sm leading-[21px]">4.8</span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="details.html" className="card">
        <div className="bg-white p-4 flex flex-col gap-3 rounded-[26px] shadow-[6px_8px_20px_0_#00000008]">
          <div className="w-full h-full aspect-[311/150] rounded-xl overflow-hidden">
            <img
              src="assets/thumbnails/athena.jpg"
              className="w-full h-full object-cover object-center"
              alt="thumbnail"
            />
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-1">
              <p className="font-semibold two-lines">Temple of Athena Nike</p>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/location-map.svg" alt="icon" />
                </div>
                <span className="text-sm text-darkGrey tracking-035">Acropolis, Greeces</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <p className="text-sm leading-[21px]">
                <span className="font-semibold text-[#4D73FF] text-nowrap">Rp 30.000.000</span>
                <br />
                <span className="text-darkGrey">/8days</span>
              </p>
              <div className="flex items-center gap-1 justify-end">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/Star.svg" alt="icon" />
                </div>
                <span className="font-semibold text-sm leading-[21px]">5</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
