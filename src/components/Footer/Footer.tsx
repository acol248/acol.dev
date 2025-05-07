import useClassList, { mapClassesCurried } from "@blocdigital/useclasslist";
import maps from "./Footer.module.scss";

const mc = mapClassesCurried(maps, true);

export default function Footer() {
  const classList = useClassList({ defaultClass: "footer", maps, string: true });

  return (
    <footer className={classList}>
      <p className={mc("footer__copyright")}>© {new Date().getFullYear()} acol.dev - All rights reserved.</p>
    </footer>
  );
}
