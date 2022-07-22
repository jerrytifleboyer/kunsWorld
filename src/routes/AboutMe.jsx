import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const sectors = [
  "all",
  "tech",
  "construction",
  "finance",
  "health",
  "energy",
  "real estate",
  "communication",
  "utility",
];
export function AboutMe() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [tab, setTab] = useState(1);
  const [selectSector, setSelectSector] = useState(0);
  //implement useFetch on your project
  return (
    <div className="flex border-2 h-screen">
      <div id="box1-left" className="w-64 border"></div>
      <div id="box2-center" className="w-full border">
        <div className="flex justify-evenly">
          {sectors.map((sector, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setSelectSector(index);
              }}
              className={`bg-${
                selectSector === index ? "orange" : "yellow"
              }-400 px-2 py-1 rounded-xl text-white my-1 font-bold`}
            >
              {sector}
            </button>
          ))}
        </div>
        <div className="">
          {tab === 1 && (
            <div>
              {loading ? (
                <div>loading...</div>
              ) : data.length && data ? (
                data.map((e) => <div>{e.name}</div>)
              ) : (
                <div>Something went wrong.</div>
              )}
            </div>
          )}
        </div>
      </div>
      <div id="box3-right" className="w-64 flex flex-col">
        <button
          className="bg-indigo-400 text-white py-2 font-bold"
          onClick={() => {
            setTab(1);
          }}
        >
          Watchlist
        </button>
        <button
          className="bg-blue-400 text-white py-2 font-bold"
          onClick={() => {
            setTab(2);
          }}
        >
          Notes
        </button>
      </div>
    </div>
  );
}
