import { getPaginationCategories } from "@/views/category/actions/actions";

export default async function HomePage() {
  const categories = await getPaginationCategories();

  console.log(categories);

  return (
    <section
      id="content"
      className="max-w-[640px] w-full mx-auto bg-trv-light-5 min-h-screen flex flex-col gap-8 pb-[120px]"
    >
      <nav className="mt-8 px-4 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 border-4 border-white rounded-full overflow-hidden flex shrink-0 shadow-[6px_8px_20px_0_#00000008]">
            <img
              src="assets/photos/pfp.png"
              className="w-full h-full object-cover object-center"
              alt="photo"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs tracking-035">Welcome!</p>
            <p className="font-semibold">Victoria Watson</p>
          </div>
        </div>
        <a href="">
          <div className="w-12 h-12 rounded-full bg-white overflow-hidden flex shrink-0 items-center justify-center shadow-[6px_8px_20px_0_#00000008]">
            <img src="assets/icons/bell.svg" alt="icon" />
          </div>
        </a>
      </nav>
      <h1 className="font-semibold text-2xl leading-[36px] text-center">
        Explore New
        <br />
        Experience with Us
      </h1>
      <div id="categories" className="flex flex-col gap-3">
        <h2 className="font-semibold px-4">Categories</h2>
        <div className="main-carousel buttons-container">
          <a href="category.html" className="group px-2 first-of-type:pl-4 last-of-type:pr-4">
            <div className="p-3 flex items-center gap-2 rounded-[10px] border border-trv-blue-9 group-hover:bg-trv-blue-9 transition-all duration-300">
              <div className="w-6 h-6 flex shrink-0">
                <img src="assets/icons/umbrella.svg" alt="icon" />
              </div>
              <span className="text-sm tracking-[0.35px] text-trv-blue-9 group-hover:text-white transition-all duration-300">
                Beach
              </span>
            </div>
          </a>
          <a href="category.html" className="group px-2 first-of-type:pl-4 last-of-type:pr-4">
            <div className="p-3 flex items-center gap-2 rounded-[10px] border border-trv-blue-9 group-hover:bg-trv-blue-9 transition-all duration-300">
              <div className="w-6 h-6 flex shrink-0">
                <img src="assets/icons/mountain.svg" alt="icon" />
              </div>
              <span className="text-sm tracking-[0.35px] text-trv-blue-9 group-hover:text-white transition-all duration-300">
                Mountain
              </span>
            </div>
          </a>
          <a href="category.html" className="group px-2 first-of-type:pl-4 last-of-type:pr-4">
            <div className="p-3 flex items-center gap-2 rounded-[10px] border border-trv-blue-9 group-hover:bg-trv-blue-9 transition-all duration-300">
              <div className="w-6 h-6 flex shrink-0">
                <img src="assets/icons/tent.svg" alt="icon" />
              </div>
              <span className="text-sm tracking-[0.35px] text-trv-blue-9 group-hover:text-white transition-all duration-300">
                Nature
              </span>
            </div>
          </a>
          <a href="category.html" className="group px-2 first-of-type:pl-4 last-of-type:pr-4">
            <div className="p-3 flex items-center gap-2 rounded-[10px] border border-trv-blue-9 group-hover:bg-trv-blue-9 transition-all duration-300">
              <div className="w-6 h-6 flex shrink-0">
                <img src="assets/icons/historical.svg" alt="icon" />
              </div>
              <span className="text-sm tracking-[0.35px] text-trv-blue-9 group-hover:text-white transition-all duration-300">
                Historical
              </span>
            </div>
          </a>
        </div>
      </div>
      <div id="recommendations" className="flex flex-col gap-3">
        <h2 className="font-semibold px-4">Trip Recommendation</h2>
        <div className="main-carousel card-container">
          <a href="details.html" className="group px-2 first-of-type:pl-4 last-of-type:pr-4">
            <div className="w-[288px] p-4 flex flex-col gap-3 rounded-[26px] bg-white shadow-[6px_8px_20px_0_#00000008]">
              <div className="w-full h-[330px] rounded-xl flex shrink-0 overflow-hidden">
                <img
                  src="assets/thumbnails/nusa-penida.jpg"
                  className="w-full h-full object-cover"
                  alt="thumbnails"
                />
              </div>
              <div className="flex justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold two-lines">Nusa Penida Kelingking Beach</p>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 flex shrink-0">
                      <img src="assets/icons/location-map.svg" alt="icon" />
                    </div>
                    <span className="text-sm text-trv-light-9 tracking-035">Bali, Indonesia</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <p className="text-sm leading-[21px]">
                    <span className="font-semibold text-trv-blue-9 text-nowrap">Rp 900.000</span>
                    <br />
                    <span className="text-trv-light-9">/3days</span>
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
          <a href="details.html" className="group px-2 first-of-type:pl-4 last-of-type:pr-4">
            <div className="w-[288px] p-4 flex flex-col gap-3 rounded-[26px] bg-white shadow-[6px_8px_20px_0_#00000008]">
              <div className="w-full h-[330px] rounded-xl flex shrink-0 overflow-hidden">
                <img
                  src="assets/thumbnails/raja.jpg"
                  className="w-full h-full object-cover"
                  alt="thumbnails"
                />
              </div>
              <div className="flex justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold two-lines">Raja Ampat Salawati Island</p>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 flex shrink-0">
                      <img src="assets/icons/location-map.svg" alt="icon" />
                    </div>
                    <span className="text-sm text-trv-light-9 tracking-035">Papua, Indonesia</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <p className="text-sm leading-[21px]">
                    <span className="font-semibold text-trv-blue-9 text-nowrap">Rp 900.000</span>
                    <br />
                    <span className="text-trv-light-9">/3days</span>
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
          <a href="details.html" className="group px-2 first-of-type:pl-4 last-of-type:pr-4">
            <div className="w-[288px] p-4 flex flex-col gap-3 rounded-[26px] bg-white shadow-[6px_8px_20px_0_#00000008]">
              <div className="w-full h-[330px] rounded-xl flex shrink-0 overflow-hidden">
                <img
                  src="assets/thumbnails/maldives.jpg"
                  className="w-full h-full object-cover"
                  alt="thumbnails"
                />
              </div>
              <div className="flex justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold two-lines">Maldives Exotic Island</p>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 flex shrink-0">
                      <img src="assets/icons/location-map.svg" alt="icon" />
                    </div>
                    <span className="text-sm text-trv-light-9 tracking-035">Bali, Indonesia</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <p className="text-sm leading-[21px]">
                    <span className="font-semibold text-trv-blue-9 text-nowrap">Rp 900.000</span>
                    <br />
                    <span className="text-trv-light-9">/3days</span>
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
        </div>
      </div>
      <div id="discover" className="px-4">
        <div className="w-full h-[130px] flex flex-col gap-[10px] rounded-[22px] items-center overflow-hidden relative">
          <img
            src="assets/backgrounds/Banner.png"
            className="w-full h-full object-cover object-center"
            alt="background"
          />
          <div className="absolute z-10 flex flex-col gap-[10px] transform -translate-y-1/2 top-1/2 left-4">
            <p className="text-white font-semibold">
              Discover the
              <br />
              Beauty of Japan
            </p>
            <a
              href=""
              className="bg-trv-blue-9 p-[8px_24px] rounded-[10px] text-white font-semibold text-xs w-fit"
            >
              Discover
            </a>
          </div>
        </div>
      </div>
      <div id="explore" className="flex flex-col px-4 gap-3">
        <h2 className="font-semibold">More to Explore</h2>
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
                  <span className="text-sm text-trv-light-9 tracking-035">Osaka, Japan</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <p className="text-sm leading-[21px]">
                  <span className="font-semibold text-trv-blue-9 text-nowrap">Rp 25.000.000</span>
                  <br />
                  <span className="text-trv-light-9">/10days</span>
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
                  <span className="text-sm text-trv-light-9 tracking-035">
                    South Aegean, Greece
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <p className="text-sm leading-[21px]">
                  <span className="font-semibold text-trv-blue-9 text-nowrap">Rp 20.000.000</span>
                  <br />
                  <span className="text-trv-light-9">/8days</span>
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
                  <span className="text-sm text-trv-light-9 tracking-035">Acropolis, Greeces</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <p className="text-sm leading-[21px]">
                  <span className="font-semibold text-trv-blue-9 text-nowrap">Rp 30.000.000</span>
                  <br />
                  <span className="text-trv-light-9">/8days</span>
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
      </div>
      <div className="navigation-bar fixed bottom-0 z-50 max-w-[640px] w-full h-[85px] bg-white rounded-t-[25px] flex items-center justify-evenly py-[45px]">
        <a href="" className="menu">
          <div className="flex flex-col justify-center w-fit gap-1">
            <div className="w-4 h-4 flex shrink-0 overflow-hidden mx-auto text-trv-blue-9">
              <img src="assets/icons/home.svg" alt="icon" />
            </div>
            <p className="font-semibold text-xs leading-[20px] tracking-[0.35px]">Home</p>
          </div>
        </a>
        <a href="" className="menu opacity-25">
          <div className="flex flex-col justify-center w-fit gap-1">
            <div className="w-4 h-4 flex shrink-0 overflow-hidden mx-auto text-trv-blue-9">
              <img src="assets/icons/search.svg" alt="icon" />
            </div>
            <p className="font-semibold text-xs leading-[20px] tracking-[0.35px]">Search</p>
          </div>
        </a>
        <a href="schedule.html" className="menu opacity-25">
          <div className="flex flex-col justify-center w-fit gap-1">
            <div className="w-4 h-4 flex shrink-0 overflow-hidden mx-auto text-trv-blue-9">
              <img src="assets/icons/calendar-blue.svg" alt="icon" />
            </div>
            <p className="font-semibold text-xs leading-[20px] tracking-[0.35px]">Schedule</p>
          </div>
        </a>
        <a href="" className="menu opacity-25">
          <div className="flex flex-col justify-center w-fit gap-1">
            <div className="w-4 h-4 flex shrink-0 overflow-hidden mx-auto text-trv-blue-9">
              <img src="assets/icons/user-flat.svg" alt="icon" />
            </div>
            <p className="font-semibold text-xs leading-[20px] tracking-[0.35px]">Profile</p>
          </div>
        </a>
      </div>
    </section>
  );
}
