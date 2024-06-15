// import React from "react";

function App() {
  return (
    <>
      <div className="relative mx-auto w-full bg-sky-100 px-4 py-12">
        <div className="relative mx-auto max-w-[700px] rounded-3xl shadow-lg">
          <div className="absolute inset-0 rounded-3xl bg-black"></div>
          <video
            className="absolute left-0 right-0 z-0 h-full rounded-3xl opacity-[90%] shadow-lg"
            autoPlay
            loop
            muted
            style={{
              objectFit: "cover",
            }}
          >
            <source src="/video-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* <div
            className="absolute inset-0 z-0 rounded-2xl opacity-[70%] shadow-lg"
            style={{
              backgroundSize: "cover",
              backgroundImage: "url('/bg.jpg')",
              // "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKE6mFQCjy3KpxCvrXkwqWCcyIjErjUXH2SpwgoBabqyvgnvmGTjmoOPN_rH_ypOJyIcs&usqp=CAU')",
              // "url('https://www.shutterstock.com/image-photo/relaxing-aerial-beach-scene-summer-600nw-1907144995.jpg')",
            }}
          /> */}
          <div className="relative p-8">
            <div className="rounded-lg border-4 border-sky-50 p-4 lg:p-8">
              <div className="mb-8 mt-2 text-center font-semibold text-sky-50 drop-shadow-md lg:mb-16">
                <div className="text-sm uppercase tracking-wider">
                  Together with <br /> their families
                </div>
              </div>
              <div className="mb-8 flex w-full items-center gap-3 px-2 md:px-10 lg:gap-10">
                <div className="flex-1 text-center font-cursive text-sky-50 drop-shadow-md">
                  <div className="mb-1 text-2xl md:text-3xl lg:text-5xl">
                    Nick
                  </div>
                  <div className="text-lg lg:text-3xl">Perez</div>
                </div>
                <div className="font-cursive text-xl text-sky-50 drop-shadow-md md:text-3xl lg:text-5xl">
                  &amp;
                </div>
                <div className="flex-1 text-center font-cursive text-sky-50 drop-shadow-md">
                  <div className="mb-1 text-2xl md:text-3xl lg:text-5xl">
                    Bensu
                  </div>
                  <div className="text-lg lg:text-3xl">Tangil</div>
                </div>
              </div>

              <div className="text-center">
                <div className="my-6 md:my-12">
                  <p className="md:text-md font-sans text-sm uppercase tracking-widest text-sky-50 drop-shadow-md">
                    Invite you to
                    <br />
                    celebrate their wedding
                  </p>
                </div>
                <div>
                  <div className="font-serif text-2xl font-medium text-stone-100 drop-shadow-md">
                    September
                  </div>
                  <div className="mx-2 my-3 flex items-center md:mx-16">
                    <div className="flex flex-1 items-center justify-center whitespace-nowrap rounded-sm border-y-2 border-stone-100 py-2 text-sm font-semibold uppercase tracking-wider text-stone-100 drop-shadow-md md:py-3 md:text-base">
                      Saturday
                    </div>
                    <div className="w-24 text-2xl text-stone-100 drop-shadow-md md:text-5xl">
                      <span className="font-extrabold">7</span>
                      &nbsp;
                      <span className="align-top text-lg">th</span>
                    </div>
                    <div className="flex flex-1 items-center justify-center whitespace-nowrap rounded-sm border-y-2 border-stone-100 py-2 text-sm font-semibold uppercase tracking-wider text-stone-100 drop-shadow-md md:py-3 md:text-base">
                      at 16:00
                    </div>
                  </div>
                </div>
                <div className="text-md font-sans font-bold text-stone-100">
                  2024
                </div>
                <div className="my-12">
                  <p className="md:text-md font-serif text-sm font-medium uppercase text-sky-50 drop-shadow-md">
                    Design Plus Seya Beach Hotel
                    <br />
                    Alacati, Turkey Mah. Cark Plaji
                    <br />
                    Mevkii, 8010. Sk., 35930 Izmir
                  </p>
                </div>
                <div className="my-12">
                  <p className="md:text-md font-sans text-sm font-medium uppercase text-sky-50 drop-shadow-md">
                    Dinner &amp; Dance
                  </p>
                  <p className="md:text-md font-sans text-sm font-medium uppercase text-sky-50 drop-shadow-md">
                    Address here 51st st
                  </p>
                </div>
                <div className="my-12">
                  <p className="md:text-md mb-6 font-sans text-sm font-medium uppercase text-sky-50 drop-shadow-md">
                    RSVP by 1st of August
                  </p>
                  <button
                    onClick={() => {
                      window.prompt("Enter your name to RSVP");
                    }}
                    className="inline-flex items-center justify-center rounded-md border-2 border-sky-50 bg-transparent px-10 py-2 text-sm font-bold tracking-widest text-sky-50 shadow transition-colors hover:bg-sky-50/90 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  >
                    RSVP
                  </button>
                  <p className="md:text-md mt-6 font-sans text-sm font-medium uppercase text-sky-50 drop-shadow-md">
                    Contact: <a href="tel:13052828358">(305) 280-8903</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
