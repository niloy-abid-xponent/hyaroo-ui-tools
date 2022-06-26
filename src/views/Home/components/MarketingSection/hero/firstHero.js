import React, { useState } from "react";

const data = [{ title: "preview" }, { title: "< > code" }];

export default function FirstExample() {
  const [active, setActive] = useState("preview");

  return (
    <>
      <div className="flex justify-between mt-12  items-center">
        <p className="text-slate-900 font-medium">
          Simple centered
          <span className="bg-slate-100 text-slate-700 text-xs rounded-md ml-2 font-semibold hidden sm:inline-block px-2 py-1">
            Requires JS
          </span>
        </p>

        <div className="flex ">
          <nav className="flex border rounded-lg  bg-slate-100 text-sm cursor-pointer">
            {data.map((sData) => (
              <span
                className={`${
                  active === sData.title &&
                  ` bg-white text-slate-900  rounded-lg`
                } p-2 text-slate-600 font-semibold
                `}
                onClick={() => setActive(sData.title)}
              >
                {sData.title}
              </span>
            ))}
          </nav>
        </div>
        {/* {data.map(
      (sdata) => active === sdata.title && <div>this is {sdata.title} </div>
    )} */}
      </div>
      {active === "preview" && (
        <div className="text-center mt-12">this is preview </div>
      )}
      {active === "code" && <div>some gibrish code</div>}
    </>
  );
}
