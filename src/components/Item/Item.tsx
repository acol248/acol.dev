import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Close,
} from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
  body,
  links,
  images,
}: ItemProps) {
  const triggerCL = useClassList({
    defaultClass: "item",
    className,
    maps,
    string: true,
  });
  const contentCL = useClassList({
    defaultClass: "content",
    maps,
    string: true,
  });

  return (
    <Root>
      <Trigger className={triggerCL}>
        <h2 className={mc("item__title")}>{title}</h2>
        <p className={mc("item__description")}>{description}</p>
      </Trigger>

      <Portal>
        <Overlay className={mc("overlay")} />
        <Content className={contentCL}>
          <VisuallyHidden>
            <Title className={mc("content__title")}>{title}</Title>
          </VisuallyHidden>

          <Close className={mc("content__close")}>
            <svg viewBox="0 -960 960 960">
              <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
            </svg>
          </Close>

          {body}

          {images && images.length > 0 && (
            <div className={mc("content__images")}>
              {images?.map(({ src, alt }) => (
                <img
                  className={mc("content__image")}
                  src={src}
                  alt={alt}
                  key={src + alt}
                />
              ))}
            </div>
          )}

          {links && links.length > 0 && (
            <div className={mc("content__links")}>
              {links.map(({ label, href, icon }) => (
                <a
                  className={mc("content__link")}
                  href={href}
                  key={label + href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon} {label}
                </a>
              ))}
            </div>
          )}
        </Content>
      </Portal>
    </Root>
  );
}
