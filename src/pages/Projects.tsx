import React from "react";
import { Link } from "react-router-dom";

export const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="min-h-screen h-1000 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mt-20">Templates</h2>
      <div className="grid grid-cols-4 gap-40 mt-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
          <Link to={`/templates/project-${e}`}>
            <section
              key={e}
              className="w-60 h-40 bg-white rounded flex flex-col items-center justify-center"
            >
              <h4 className="font-bold text-center">Project-{e}</h4>
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
};
