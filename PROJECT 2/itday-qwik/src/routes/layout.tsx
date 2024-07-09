import { component$, Slot } from "@builder.io/qwik";
// import 'tw-elements';
import Header from "../components/header/header";
// import { Footer } from "~/components/sections/GetStartedNow";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
      </main>
      <section>
        <Slot />
      </section>
      {/* <footer>
        <Footer></Footer>
      </footer> */}
    </>
  );
});
