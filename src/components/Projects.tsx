import useClassList, { mapClassesCurried } from "@blocdigital/useclasslist";
import maps from "./Projects.module.scss";
import Item from "./Item";
import { projects } from "../data/projects";

const mc = mapClassesCurried(maps, true);

export default function Projects({ path }: { path?: string }) {
  const classList = useClassList({
    defaultClass: "projects-page",
    maps,
    string: true,
  });

  return (
    <main className={classList}>
      <a href="/" className={mc("projects-page__back")}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Home
      </a>

      <section className={mc("projects-page__section")}>
        <div className={mc("projects-page__grid")}>
          <h2>Personal Projects</h2>
          <p>
            Here's a look at the personal software projects I've built in my free
            time, driven by curiosity and a love for creating.
          </p>

          {projects.map((project) => (
            <Item
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
