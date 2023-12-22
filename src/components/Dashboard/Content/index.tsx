import Awards from "./Awards";
import Score from "./Score";
import Overview from "./Overview";
import Analysis from "./Analysis";
import Communication from "./Communication";

const Content = () => {
  return (
    <>
      <section className="grid gap-[30px] grid-rows-[repeat(4,100px)] mt-5 ">
        <Awards />
        <Overview />
      </section>
      <Communication />
      <section className="grid gap-x-[30px] gap-y-[30px] row-span-4 mt-[30px]">
        <div className="mt-[30px] grid gap-[30px] grid-rows-[repeat(4,100px)] grid-cols-2">
          <Score />
          <Analysis />
        </div>
      </section>
    </>
  );
};

export default Content;
