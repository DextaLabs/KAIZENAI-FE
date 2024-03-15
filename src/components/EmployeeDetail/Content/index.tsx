import React, { useState } from "react";
import Awards from "./Awards";
import Overview from "./Overview";
import { RoleData } from "@/library/utils/constant";
import { DATA_CATEGORY } from "@/library/utils/enums";
import Communication from "./Communication";
import Metrics from "./Metrics";

export const dataCategoryOption = [
  { label: "About", value: DATA_CATEGORY.ABOUT },
  { label: "Communication", value: DATA_CATEGORY.COMMUNICATION },
  { label: "Code overview", value: DATA_CATEGORY.CODE_OVERVIEW },
];

const Content = (props: RoleData[0]) => {
  const [dataCategory, setDataCategory] = useState(dataCategoryOption[0].value);

  const handleUpdateCategory = (value: string) => {
    setDataCategory(value as DATA_CATEGORY);
  };

  return (
    <>
      <section className="grid gap-[30px] grid-rows-[repeat(4,100px)] mt-5 ">
        <Awards />
        <Overview
          {...props}
          dataCategory={dataCategory}
          handleUpdateCategory={handleUpdateCategory}
        />
      </section>
      {dataCategory === DATA_CATEGORY.COMMUNICATION && (
        <Communication {...props} />
      )}
      {dataCategory === DATA_CATEGORY.CODE_OVERVIEW && <Metrics />}
    </>
  );
};

export default Content;
