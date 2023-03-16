import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Projects: React.FC = () => {
  const { search } = useLocation();
  const allItems: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  if (search.includes("all")) {
    allItems.push(9, 10, 11, 12, 13, 14, 15);
  }

  return (
    <div
      id="projects"
      className={`min-h-screen h-full pb-10 flex flex-col items-center ${
        search.includes("all") && "bg-light-gray"
      }`}
    >
      {search.includes("all") && <Navbar />}
      <h2 className="text-3xl font-bold mt-20">Templates</h2>
      <div className="grid grid-cols-4 gap-28 mt-10">
        {allItems.map((e) => (
          <Link to={`/templates/project-${e}`} key={e}>
            <section
              key={e}
              className="w-60 h-40 bg-white rounded flex flex-col items-center justify-center"
            >
              <h4 className="font-bold text-center">Project-{e}</h4>
            </section>
          </Link>
        ))}
      </div>
      {!search.includes("all") && (
        <div className="w-full m-20 flex justify-center items-center">
          <Link to={"/templates?query=all"}>
            <button className="bg-black text-white rounded px-10 py-5 hover:translate-y-1 transition-all hover:bg-opacity-60 ">
              Show all
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
