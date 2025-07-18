import Article from "@/components/home/article";
import Header from "@/components/header";
import MainSection from "@/components/home/mainsection";
import Section from "@/components/home/section";
import Subsection from "@/components/home/subsection";
import Patners from "@/components/home/patners";

export default function Home() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <section>
        <MainSection />
      </section>
      <section>
        <Subsection />
      </section>
      <Section />
      <article>
        <Article />
      </article>

      <section>
        <Patners />
      </section>
    </div>
  );
}
