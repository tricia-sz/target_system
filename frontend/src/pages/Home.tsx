import { Hero } from "../components/Hero";

export function Home() {
  return (
    <section className="w-full bg-orange-50">
      <div className="mx-auto flex max-w-7xl items-center gap-10 px-8 py-12">
        <Hero />

        <img
          src="/hero.png"
          alt="Ilustração do sistema Target"
          className="block h-auto w-[600px]"
        />
      </div>
    </section>
  );
}
