// styles
import useClassList, { mapClassesCurried } from "@blocdigital/useclasslist";
import maps from "./Navbar.module.scss";

// types
import { NavbarItem } from "./Navbar.d";

const mc = mapClassesCurried(maps, true);

export default function Navbar({ items }: { items?: Array<NavbarItem> }) {
  const classList = useClassList({ defaultClass: "navbar", maps, string: true });

  return (
    <nav className={classList}>
      <div className={mc("navbar__inner")}>
        <a className={mc("navbar__link-logo")} href="/">
          acol.dev
        </a>

        {items && (
          <div className={mc("navbar__items")}>
            {items.map(({ label, href }) => (
              <a href={href} key={label + href}>
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
