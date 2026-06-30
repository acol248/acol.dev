// styles
import useClassList, { mapClassesCurried } from "@blocdigital/useclasslist";
import maps from "./Item.module.scss";

// types
import { ItemProps } from "./Item.d";

const mc = mapClassesCurried(maps, true);

export default function Item({
  className,
  title,
  description,
  id,
  tags,
}: ItemProps) {
  const itemCL = useClassList({
    defaultClass: "item",
    className,
    maps,
    string: true,
  });

  return (
    <a className={itemCL} href={`/project/${id}`}>
      <div className={mc("item__content")}>
        <h2 className={mc("item__title")}>{title}</h2>
        <p className={mc("item__description")}>{description}</p>
        
        {tags && tags.length > 0 && (
          <div className={mc("item__tags")}>
            {tags.map((tag) => (
              <span key={tag} className={mc("item__tag")}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={mc("item__indicator")}>
        <span>View Project</span>
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </a>
  );
}
