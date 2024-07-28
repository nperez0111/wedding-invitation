import { html, raw } from "hono/html";
import type { FC } from "hono/jsx";

export const HomePage: FC<{ isTurkish: boolean }> = ({ isTurkish }) => {
  return (
    <>
      <div class="relative mx-auto h-full w-full py-2 drop-shadow-xl sm:px-4 sm:py-4 md:py-12">
        <div class="relative mx-auto max-w-[700px] animate-fade-up cursor-default rounded-3xl shadow-lg animate-delay-300 animate-once animate-ease-in-out">
          <video
            class="absolute z-0 h-full w-full rounded-3xl bg-sky-100 opacity-[90%] shadow-lg"
            autoPlay
            loop
            muted
            playsinline
            style={{
              objectFit: "cover",
            }}
          >
            <source src="/public/bg-video.mp4" type="video/mp4" />
          </video>
          <div class="absolute inset-0 bottom-6 left-6 right-6 top-6 z-0 rounded-2xl border-2 border-sky-50 bg-gradient-to-b from-slate-900/40 to-black/65 drop-shadow-md sm:bottom-9 sm:left-9 sm:right-9 sm:top-9"></div>
          <div class="relative z-10 p-4 sm:p-8">
            <div class="p-4 lg:p-8">
              <div class="text-shadow-md mb-8 mt-2 text-center font-semibold text-white shadow-slate-950 lg:mb-16">
                {isTurkish ? null : (
                  <div class="text-sm uppercase tracking-wider">
                    Together with <br /> their families
                  </div>
                )}
              </div>
              <div class="mb-8 flex w-full items-center gap-3 px-2 md:px-10 lg:gap-10">
                <div class="text-shadow-sm flex-1 text-center font-cursive font-semibold text-white shadow-slate-950">
                  <div class="mb-1 text-3xl sm:text-4xl md:text-5xl">Nick</div>
                  <div class="text-xl md:text-2xl lg:text-3xl">Perez</div>
                </div>
                <div class="text-shadow-sm font-cursive text-xl font-semibold text-white shadow-slate-950 md:text-3xl lg:text-5xl">
                  &amp;
                </div>
                <div class="text-shadow-sm flex-1 text-center font-cursive font-semibold text-white shadow-slate-950">
                  <div class="mb-1 text-3xl sm:text-4xl md:text-5xl">Bensu</div>
                  <div class="text-xl md:text-2xl lg:text-3xl">Tangil</div>
                </div>
              </div>

              <div class="text-center">
                <div class="my-6 md:my-12">
                  <p class="md:text-md text-shadow-md font-sans text-sm font-semibold uppercase tracking-widest text-white shadow-slate-950">
                    {isTurkish ? (
                      <>
                        BU ÖZEL GÜNÜMÜZDE SİZLERİ DE ARAMIZDA <br /> GÖRMEKTEN
                        MUTLULUK DUYARIZ.
                      </>
                    ) : (
                      <>
                        Invite you to
                        <br />
                        celebrate their wedding
                      </>
                    )}
                  </p>
                  {isTurkish ? (
                    <p class="md:text-md text-shadow-md mt-6 font-sans text-lg font-semibold uppercase tracking-widest text-white shadow-slate-950">
                      Perez & Tangil AİLELERİ
                    </p>
                  ) : null}
                </div>
                <div>
                  {isTurkish ? (
                    <div class="text-shadow-md font-sans text-4xl font-extrabold text-stone-100 shadow-slate-950 md:text-5xl">
                      7
                    </div>
                  ) : (
                    <div class="text-shadow-md font-sans text-2xl font-medium text-stone-100 shadow-slate-950">
                      September
                    </div>
                  )}
                  <div class="mx-1 my-2 flex items-center md:mx-16">
                    <div class="text-shadow-md flex flex-1 items-center justify-center whitespace-nowrap rounded-sm border-y-2 border-stone-100 py-2 text-sm font-semibold uppercase tracking-wider text-stone-100 shadow-slate-950 md:py-3 md:text-base">
                      {isTurkish ? "Cumartesi" : "Saturday"}
                    </div>

                    {isTurkish ? (
                      <div class="text-shadow-md w-24 text-2xl text-stone-100 shadow-slate-950">
                        <span class="font-extrabold">Eylül</span>
                      </div>
                    ) : (
                      <div class="text-shadow-md w-24 text-2xl text-stone-100 shadow-slate-950 md:text-5xl">
                        <span class="pr-1 font-extrabold">7</span>
                        <span class="align-top text-lg">th</span>
                      </div>
                    )}
                    <div class="text-shadow-md flex flex-1 items-center justify-center whitespace-nowrap rounded-sm border-y-2 border-stone-100 py-2 text-sm font-semibold uppercase tracking-wider text-stone-100 shadow-slate-950 md:py-3 md:text-base">
                      {isTurkish ? "saat 19:00" : "at 7:00PM"}
                    </div>
                  </div>
                </div>
                <div class="text-shadow-md mb-2 font-sans text-lg font-bold tracking-widest text-stone-100 shadow-slate-950">
                  2024
                </div>
                <div class="my-8 md:my-12">
                  {isTurkish ? (
                    <a
                      class="md:text-md text-md text-shadow-md cursor-pointer font-sans font-semibold uppercase text-white underline shadow-slate-950 hover:text-sky-100"
                      href="https://www.designplus-hotels.com/tr/seya-beach"
                    >
                      SEYA BEACH HOTEL&nbsp;&nbsp;ALAÇATI
                      <br />
                      ÇEŞME - İZMİR
                    </a>
                  ) : (
                    <a
                      class="md:text-md text-md text-shadow-md cursor-pointer font-sans font-semibold uppercase text-white underline shadow-slate-950 hover:text-sky-100"
                      href="https://www.designplus-hotels.com/seya-beach"
                    >
                      Design Plus Seya Beach Hotel
                      <br />
                      Alacati, Turkey
                    </a>
                  )}
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    height="14"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 64 64"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFF"
                    class="mb-1 ml-1 inline-block"
                  >
                    <path d="m-896 0h1280v800h-1280z" fill="none" />
                    <path d="m36.026 20.058h-21.092c-1.65 0-2.989 1.339-2.989 2.989v25.964c0 1.65 1.339 2.989 2.989 2.989h26.024c1.65 0 2.989-1.339 2.989-2.989v-20.953h3.999v21.948c0 3.308-2.686 5.994-5.995 5.995h-28.01c-3.309 0-5.995-2.687-5.995-5.995v-27.954c0-3.309 2.686-5.995 5.995-5.995h22.085z" />
                    <path d="m55.925 25.32h-4.005v-10.481l-27.894 27.893-2.832-2.832 27.895-27.895h-10.484v-4.005h17.318l.002.001z" />
                  </svg>
                </div>
                <div class="my-8 md:my-12">
                  {isTurkish ? (
                    <p class="text-shadow-md font-sans text-sm font-semibold uppercase leading-7 text-white shadow-slate-950 md:text-lg">
                      KOKTEYL 19:00 <br />
                      YEMEK 20:00
                    </p>
                  ) : (
                    <p class="text-shadow-md font-sans text-sm font-semibold uppercase leading-7 text-white shadow-slate-950 md:text-lg">
                      Cocktail 7:00pm <br />
                      Dinner 8:00pm
                    </p>
                  )}
                </div>
                <div class="my-8 md:my-12">
                  {isTurkish ? (
                    <p class="md:text-md text-shadow-md mb-4 font-sans text-sm font-medium uppercase text-white shadow-slate-950">
                      LCV: 25 AĞUSTOS 2024 tarihine kadar <br />
                      lütfen katılım durumunuzu bildiriniz.
                    </p>
                  ) : (
                    <p class="md:text-md text-shadow-md mb-4 font-sans text-sm font-medium uppercase text-white shadow-slate-950">
                      RSVP by 25th of August
                    </p>
                  )}
                  <button
                    id="rsvp"
                    class="inline-flex cursor-pointer items-center justify-center rounded-md border-2 border-slate-900 bg-sky-50 px-10 py-2 text-sm font-bold tracking-widest text-stone-900 shadow drop-shadow-md transition-colors hover:scale-105 hover:bg-sky-50/40 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  >
                    {isTurkish ? "LCV" : "RSVP"}
                  </button>
                  <p class="text-md text-shadow-md mt-6 font-sans font-semibold uppercase tracking-wide text-white shadow-slate-950">
                    {isTurkish ? (
                      <a href="tel:5063446904">İletişim: 506 344 69 04</a>
                    ) : (
                      <a href="tel:7862808903">Contact: (786) 280 8903</a>
                    )}
                  </p>
                  <p class="text-shadow-md mt-6 font-sans text-sm font-semibold tracking-wide text-white shadow-slate-950">
                    {isTurkish ? (
                      <>
                        Düğünümüz iskele üzerinde olacaktır. <br /> İnce topuklu
                        ayakkabı giyilmemesini tavsiye ederiz.
                      </>
                    ) : (
                      <>
                        The wedding will be on a pier. <br /> We recommend to
                        not wear high heels.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        style={{ display: "none" }}
        id="dialog"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          id="dialog-bg"
        ></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative w-full transform animate-fade-up overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all animate-duration-100 animate-ease-in-out sm:my-8 sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="flex items-center gap-4">
                  <div class="mx-0 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:h-12 sm:w-12">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADk0lEQVR4nO2YV2sVQRiGH0UTUWOLXgjGBoINsYCiREWJRlAEScTyAyyIig0jeqEoIvaGwTsRG95YUMSIBWMsQSxgEsWCitgVW2LDwoR3ZbKc5Jw92d0TcB9YQva8883M7s73vTMQERERERERERrdgLnAIeAW8A74CXwHXgLFwDZgApBOAyQHuAD8Bv4keL0CVgMtaQAMAi5Zg/sCHAdmAcOA7kALIAPoDeQCq4CbVpvHQHaqJtAIWKhPxnm65v/mHmIMBUqsBxD6ZJoBRzQA8ylt1lNPhsZqb2K9ATIJCTPgM+r4LTDep7inFXMlIWCyzHl1+BzoE0NTrMsroxXXrJ3A2aPOngE9atG8lqarx9jtrbUSKEusjgbUoTso3VaP8TtaSSMwhgA/tLAnxdH2k/YXMMW6nwWUAleUit2s1kROEBCm0wfqZGOCbRZZGe0osFNP2qkbpu6YVNsG6AvsktZMfnBQEylU5zc8WgpjUz65KvkB2ZZYVf6r6w36Srae0vdaMlQ8OgCVGugoqwbNB84BFcBlYD3QiYBIA8o1CGMpkuWeYvQnRSzVACo8fFLXtJhtDivObFJAJ+CzBmBcbaJ8VJvW1r2ZuldECjiszs1fL9xRO2MGHTK1xsxa60mI5FiFz+R+L+xQ23Wu+7t1/xghkQ7cVacFSbQfablY285nWal4BiGwUp2VK2slwzXFWOa6P0f3K1X9A8PUiW+qsMN9+DQrtTuM5cPMGzM7S99Js7ae5nuuL/sUq9SVutNlWcxvH2TdfcVZpPd9OggwHuqRYu7VttihCbBfv/3SiUqyu8sazLO8jp+GbaBViwo1AXt7u0YTMb8/lM+yNZ5YrjXxOyDDlqt1ZwZ7Cmjl+n0EUGYZxyfAYnm0uHTQ4VixGv9U9Q2KHOvNuO2Loaky2lNrQubB3ga2aP9jrH47aatxBu9cL4CxBE8vJROzD6kr4UzWm3OOmGJd1ecBxUqL14EFHs+gwiQDmAisBU6qrr3XzvNiqgcX8d+RpmxSkuAGqqkW7dUGov/HFisjbCc+Gy29qcrx2FAP/U48bmcrLZtdkMAxj603MWpjoQ/6FS6LU8MH5Wrr6fidacrhjmUokqat9GOU3x399BD0+Zb+LDBO+mouuIpLlcua5FnHN7Eutz4/Af3UeujzYugvOxOpkr/ZBHSJ8cY6ax2UKUiVCtLmJPRdfdBnad3ckd4kpYiICGrnLwKXZ4kl3lZUAAAAAElFTkSuQmCC" />
                  </div>
                  <h3
                    class="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {isTurkish ? "LCV Detayları" : "RSVP Details"}
                  </h3>
                </div>
                <form
                  class="mt-4 w-full space-y-6"
                  action={isTurkish ? "/rsvp?lang=tr" : "/rsvp"}
                  method="POST"
                >
                  <div>
                    <div class="flex items-center justify-between">
                      <label
                        for="name0"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {isTurkish
                          ? "İsim Soyad (1. Kişi)"
                          : "Full Name (Person 1)"}{" "}
                        <span class="text-red-900">*</span>
                      </label>
                      <div class="text-sm">
                        <button
                          id="add-person"
                          class="font-semibold text-cyan-600 hover:text-cyan-500"
                        >
                          {isTurkish
                            ? "+ Başka kişi ekle"
                            : "+ Add another person"}
                        </button>
                      </div>
                    </div>
                    <div class="mt-2">
                      <input
                        id="name0"
                        name="name"
                        type="text"
                        autocomplete="name"
                        required
                        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div id="inject-more-people" class="space-y-6"></div>

                  <div>
                    <button
                      type="submit"
                      class="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {isTurkish ? "Gönder" : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What a hack to get nice highlighting of interactive JS */}
      <script>{html`(${raw(interactivity.toString())})(document, ${isTurkish})`}</script>
    </>
  );
};

function interactivity(document: Document, isTurkish: boolean) {
  const dialog = document.getElementById("dialog")!;
  // Open the dialog when clicking RSVP
  document.getElementById("rsvp")!.addEventListener("click", () => {
    dialog.style.display = "block";
  });

  // Close the dialog when clicking outside of it
  dialog!.addEventListener("click", function (e) {
    // @ts-expect-error - parentNode is always there
    if (e.target!.parentNode!.parentElement === this) {
      dialog.style.display = "none";
    }
  });

  // Add more people button
  let personCount = 0;
  document.getElementById("add-person")!.addEventListener("click", () => {
    personCount++;
    document.getElementById("inject-more-people")!.innerHTML += `
    <div id="person-el${personCount}">
      <div class="flex items-center justify-between">
        <label
          for="name${personCount}"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          ${isTurkish ? `İsim Soyad (${personCount + 1}. Kişi)` : `Full Name (Person ${personCount + 1})`}
        </label>
      </div>
      <div class="mt-2">
        <input
          id="name${personCount}"
          name="name"
          type="text"
          autocomplete="name"
          required
          class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    `;
  });
}
