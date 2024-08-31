import Analysis from "./Analysis";
import Awards from "./Awards";
import Communication from "./Communication";
import Overview from "./Overview";
import Score from "./Score";

interface ContentProp {
  other?: boolean;
}

const Content = ({ other }: ContentProp) => {
  return (
    <>
      <section className="grid gap-[30px] grid-rows-[repeat(4,100px)] mt-5">
        <Awards />
        <Overview other={other} />
      </section>
      <Communication other={other} />
      <section className="grid gap-x-[30px] gap-y-[30px] row-span-4 mt-[30px]">
        <div className="mt-[30px] grid gap-[30px] grid-rows-[repeat(4,100px)] grid-cols-2">
          <Score other={other} />
          <Analysis />
        </div>
      </section>
    </>
  );
};

export default Content;
