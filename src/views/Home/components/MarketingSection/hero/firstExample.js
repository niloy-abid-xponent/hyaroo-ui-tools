import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const data = [{ title: "Preview" }, { title: "Code" }];

export default function FirstExample() {
  const [active, setActive] = useState("Preview");

  return (
    <>
      <div className="flex justify-between mt-12  items-center">
        <p className="text-slate-900 font-medium">
          Simple centered
          <span className="bg-slate-100 text-slate-700 text-xs rounded-md ml-2 font-semibold hidden sm:inline-block px-2 py-1">
            Requires JS
          </span>
        </p>

        <div className="flex gap-x-6 items-center">
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

          <div>
            <select
              id="location"
              name="location"
              className="block w-20 pl-3 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-md focus:border-2 focus:border-blue-500 text-slate-900 font-medium text-sm"
            >
              <option>HTML</option>
              <option>React</option>
              <option>Vue</option>
            </select>
          </div>

          <CopyToClipboard>
            <button className="pl-8 py-1 border-l-2">
              <img src="/clipboard.svg" className="w-4 h-4"></img>
            </button>
          </CopyToClipboard>
        </div>
        {/* {data.map(
      (sdata) => active === sdata.title && <div>this is {sdata.title} </div>
    )} */}
      </div>
      {active === "Preview" && <div className="text-center mt-12">this is preview</div>}
      {active === "Code" && (
        <div className="text-center mt-12">
          This is code
        </div>
      )}
    </>
  );
}
