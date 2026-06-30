import useClassList, { mapClassesCurried } from "@blocdigital/useclasslist";
import maps from "./ProjectShowcase.module.scss";
import { projects } from "../data/projects";

const mc = mapClassesCurried(maps, true);

interface ProjectShowcaseProps {
  id?: string;
  path?: string;
}

export default function ProjectShowcase({ id }: ProjectShowcaseProps) {
  const classList = useClassList({
    defaultClass: "showcase",
    maps,
    string: true,
  });

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className={classList}>
        <div className={mc("showcase__not-found")}>
          <h2>Project Not Found</h2>
          <p>
            Sorry, the project you are looking for does not exist or has been
            moved.
          </p>
          <a href="/" className={mc("showcase__back")}>
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
        </div>
      </div>
    );
  }

  return (
    <div className={classList}>
      <a href="/projects" className={mc("showcase__back")}>
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
        Back to Projects
      </a>

      <header className={mc("showcase__header")}>
        <h1>{project.title}</h1>
        <span className={mc("showcase__date")}>{project.date}</span>
        {project.tags && project.tags.length > 0 && (
          <div className={mc("showcase__tags")}>
            {project.tags.map((tag) => (
              <span key={tag} className={mc("showcase__tag")}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className={mc("showcase__tagline")}>{project.description}</p>
      </header>

      <section className={mc("showcase__content")}>
        {project.paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </section>

      {project.images && project.images.length > 0 && (
        <section className={mc("showcase__images-section")}>
          <h3>Project Gallery</h3>
          <div className={mc("showcase__images-grid")}>
            {project.images.map((image, idx) => (
              <img src={image.src} alt={image.alt} key={idx} />
            ))}
          </div>
        </section>
      )}

      {project.links && project.links.length > 0 && (
        <section className={mc("showcase__links-section")}>
          {project.links.map((link, idx) => {
            const isGitHub = link.type === "github";
            return (
              <a
                href={link.href}
                key={idx}
                className={mc([
                  "showcase__link",
                  isGitHub
                    ? "showcase__link--github"
                    : "showcase__link--external",
                ])}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isGitHub ? (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ) : (
                  <svg viewBox="0 -960 960 960">
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h560v-240q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v240q0 33-23.5 56.5T760-120H200Zm560-584L416-360q-11 11-28 11t-28-11q-11-11-11-28t11-28l344-344H600q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840h200q17 0 28.5 11.5T840-800v200q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-104Z" />
                  </svg>
                )}
                {link.label}
              </a>
            );
          })}
        </section>
      )}
    </div>
  );
}
