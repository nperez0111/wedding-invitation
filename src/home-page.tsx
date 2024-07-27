import { html, raw } from "hono/html";
import type { FC } from "hono/jsx";

export const HomePage: FC<{ isTurkish: boolean }> = ({ isTurkish }) => {
  return (
    <div class="relative mx-auto w-full px-4 py-12">
      <div class="relative mx-auto max-w-[700px] animate-fade-up cursor-default rounded-3xl border-2 border-sky-100 shadow-lg animate-delay-300 animate-once animate-ease-in-out">
        <video
          class="absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full rounded-3xl bg-sky-100 opacity-[90%] shadow-lg"
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
        <div class="absolute inset-0 z-0 rounded-3xl bg-gradient-to-b from-black/40 to-black/40"></div>
        <div class="relative z-10 p-8">
          <div class="rounded-lg border-4 border-sky-50 p-4 lg:p-8">
            <div class="mb-8 mt-2 text-center font-semibold text-sky-50 drop-shadow-md lg:mb-16">
              <div class="text-sm uppercase tracking-wider">
                {isTurkish ? (
                  <>UNUTMAYIN</>
                ) : (
                  <>
                    Together with <br /> their families
                  </>
                )}
              </div>
            </div>
            <div class="mb-8 flex w-full items-center gap-3 px-2 md:px-10 lg:gap-10">
              <div class="flex-1 text-center font-cursive text-sky-50 drop-shadow-md">
                <div class="mb-1 text-2xl md:text-3xl lg:text-5xl">Nick</div>
                <div class="text-lg lg:text-3xl">Perez</div>
              </div>
              <div class="font-cursive text-xl text-sky-50 drop-shadow-md md:text-3xl lg:text-5xl">
                &amp;
              </div>
              <div class="flex-1 text-center font-cursive text-sky-50 drop-shadow-md">
                <div class="mb-1 text-2xl md:text-3xl lg:text-5xl">Bensu</div>
                <div class="text-lg lg:text-3xl">Tangil</div>
              </div>
            </div>

            <div class="text-center">
              <div class="my-6 md:my-12">
                <p class="md:text-md font-sans text-sm uppercase tracking-widest text-sky-50 drop-shadow-md">
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
              </div>
              <div>
                {isTurkish ? (
                  <div class="font-serif text-2xl font-extrabold text-stone-100 drop-shadow-md md:text-5xl">
                    7
                  </div>
                ) : (
                  <div class="font-serif text-2xl font-medium text-stone-100 drop-shadow-md">
                    September
                  </div>
                )}
                <div class="mx-2 my-2 flex items-center md:mx-16">
                  <div class="flex flex-1 items-center justify-center whitespace-nowrap rounded-sm border-y-2 border-stone-100 py-2 text-sm font-semibold uppercase tracking-wider text-stone-100 drop-shadow-md md:py-3 md:text-base">
                    {isTurkish ? "Cumartesi" : "Saturday"}
                  </div>

                  {isTurkish ? (
                    <div class="w-24 text-2xl text-stone-100 drop-shadow-md md:text-2xl">
                      <span class="pr-1 font-extrabold">Eylül</span>
                    </div>
                  ) : (
                    <div class="w-24 text-2xl text-stone-100 drop-shadow-md md:text-5xl">
                      <span class="pr-1 font-extrabold">7</span>
                      <span class="align-top text-lg">th</span>
                    </div>
                  )}
                  <div class="flex flex-1 items-center justify-center whitespace-nowrap rounded-sm border-y-2 border-stone-100 py-2 text-sm font-semibold uppercase tracking-wider text-stone-100 drop-shadow-md md:py-3 md:text-base">
                    {isTurkish ? "saat 16:30" : "at 16:30"}
                  </div>
                </div>
              </div>
              <div class="mb-2 font-sans text-lg font-bold tracking-widest text-stone-100 drop-shadow-md">
                2024
              </div>
              <div class="my-8 md:my-12">
                {isTurkish ? (
                  <a
                    class="md:text-md text-md cursor-pointer font-serif font-medium uppercase text-sky-50 drop-shadow-md hover:underline"
                    href="https://maps.app.goo.gl/ZQhhR4u5ikQ2t7Ty6"
                  >
                    SEYA BEACH HOTEL&nbsp;&nbsp;ALAÇATI
                    <br />
                    ÇEŞME - İZMİR
                  </a>
                ) : (
                  <a
                    class="md:text-md text-md cursor-pointer font-serif font-medium uppercase text-sky-50 drop-shadow-md hover:underline"
                    href="https://maps.app.goo.gl/ZQhhR4u5ikQ2t7Ty6"
                  >
                    Design Plus Seya Beach Hotel
                    <br />
                    Alacati, Turkey
                  </a>
                )}
              </div>
              <div class="my-8 md:my-12">
                {isTurkish ? (
                  <p class="md:text-md font-sans text-sm font-medium uppercase leading-6 text-sky-50 drop-shadow-md">
                    KOKTEYL 🍹: 19:00 <br />
                    YEMEK 🥘: 20:00
                  </p>
                ) : (
                  <p class="md:text-md font-sans text-sm font-medium uppercase leading-6 text-sky-50 drop-shadow-md">
                    Cocktail 🍹: 19:00 <br />
                    Dinner 🥘: 20:00
                  </p>
                )}
              </div>
              <div class="my-8 md:my-12">
                {isTurkish ? (
                  <p class="md:text-md mb-6 font-sans text-sm font-medium uppercase text-sky-50 drop-shadow-md">
                    LCV: 25 AĞUSTOS 2024 tarihine kadar <br />
                    lütfen katılım durumunuzu bildiriniz.
                  </p>
                ) : (
                  <p class="md:text-md mb-6 font-sans text-sm font-medium uppercase text-sky-50 drop-shadow-md">
                    RSVP by 25th of August
                  </p>
                )}
                <button
                  id="rsvp"
                  class="inline-flex cursor-pointer items-center justify-center rounded-md border-2 bg-sky-50 px-10 py-2 text-sm font-bold tracking-widest text-stone-600 shadow drop-shadow-md transition-colors hover:scale-105 hover:bg-sky-50/40 hover:text-sky-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  {isTurkish ? "LCV" : "RSVP"}
                </button>
                <p class="md:text-md text-md mt-6 font-serif font-medium uppercase tracking-wide text-sky-50 drop-shadow-md">
                  {isTurkish ? "İletişim" : "Contact"}:{" "}
                  <a href="tel:123456789">(123) 456 7890</a>
                </p>
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
            <div class="relative transform animate-fade-up overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all animate-duration-100 animate-ease-in-out sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="flex items-center gap-4">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADk0lEQVR4nO2YV2sVQRiGH0UTUWOLXgjGBoINsYCiREWJRlAEScTyAyyIig0jeqEoIvaGwTsRG95YUMSIBWMsQSxgEsWCitgVW2LDwoR3ZbKc5Jw92d0TcB9YQva8883M7s73vTMQERERERERERrdgLnAIeAW8A74CXwHXgLFwDZgApBOAyQHuAD8Bv4keL0CVgMtaQAMAi5Zg/sCHAdmAcOA7kALIAPoDeQCq4CbVpvHQHaqJtAIWKhPxnm65v/mHmIMBUqsBxD6ZJoBRzQA8ylt1lNPhsZqb2K9ATIJCTPgM+r4LTDep7inFXMlIWCyzHl1+BzoE0NTrMsroxXXrJ3A2aPOngE9atG8lqarx9jtrbUSKEusjgbUoTso3VaP8TtaSSMwhgA/tLAnxdH2k/YXMMW6nwWUAleUit2s1kROEBCm0wfqZGOCbRZZGe0osFNP2qkbpu6YVNsG6AvsktZMfnBQEylU5zc8WgpjUz65KvkB2ZZYVf6r6w36Srae0vdaMlQ8OgCVGugoqwbNB84BFcBlYD3QiYBIA8o1CGMpkuWeYvQnRSzVACo8fFLXtJhtDivObFJAJ+CzBmBcbaJ8VJvW1r2ZuldECjiszs1fL9xRO2MGHTK1xsxa60mI5FiFz+R+L+xQ23Wu+7t1/xghkQ7cVacFSbQfablY285nWal4BiGwUp2VK2slwzXFWOa6P0f3K1X9A8PUiW+qsMN9+DQrtTuM5cPMGzM7S99Js7ae5nuuL/sUq9SVutNlWcxvH2TdfcVZpPd9OggwHuqRYu7VttihCbBfv/3SiUqyu8sazLO8jp+GbaBViwo1AXt7u0YTMb8/lM+yNZ5YrjXxOyDDlqt1ZwZ7Cmjl+n0EUGYZxyfAYnm0uHTQ4VixGv9U9Q2KHOvNuO2Loaky2lNrQubB3ga2aP9jrH47aatxBu9cL4CxBE8vJROzD6kr4UzWm3OOmGJd1ecBxUqL14EFHs+gwiQDmAisBU6qrr3XzvNiqgcX8d+RpmxSkuAGqqkW7dUGov/HFisjbCc+Gy29qcrx2FAP/U48bmcrLZtdkMAxj603MWpjoQ/6FS6LU8MH5Wrr6fidacrhjmUokqat9GOU3x399BD0+Zb+LDBO+mouuIpLlcua5FnHN7Eutz4/Af3UeujzYugvOxOpkr/ZBHSJ8cY6ax2UKUiVCtLmJPRdfdBnad3ckd4kpYiICGrnLwKXZ4kl3lZUAAAAAElFTkSuQmCC" />
                  </div>
                  <h3
                    class="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {isTurkish ? "RSVP Detayları" : "RSVP Details"}
                  </h3>
                </div>
                <form
                  class="mt-4 w-full space-y-6"
                  action="/rsvp"
                  method="POST"
                >
                  <div>
                    <div class="flex items-center justify-between">
                      <label
                        for="name0"
                        class="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {isTurkish
                          ? "Tam İsim (Kişi 1)"
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
    </div>
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
          ${isTurkish ? `Tam İsim (Kişi ${personCount + 1})` : `Full Name (Person ${personCount + 1})`}
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
