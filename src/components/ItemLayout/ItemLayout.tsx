// styles
import useClassList, { mapClassesCurried } from "@blocdigital/useclasslist";
import maps from "./ItemLayout.module.scss";

// types
export interface ItemLayoutProps {
  title: string;
  date: string;
  body: React.ReactNode;
  images?: Array<{
    src: string;
    alt: string;
  }>;
}

const mc = mapClassesCurried(maps, true);

export default function ItemLayout({
  title,
  date,
  body,
  images,
}: ItemLayoutProps) {
  const classList = useClassList({
    defaultClass: "item-layout",
    maps,
    string: true,
  });

  return (
    <div className={classList}>
      <p className={mc("item-layout__title")}>{title}</p>
      <span className={mc("item-layout__date")}>{date}</span>

      <pre className={mc("item-layout__description")}>{body}</pre>

      {images && images.length > 0 && (
        <div className={mc("item-layout__images")}>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      )}
    </div>
  );
}
