"use client";
import { MenuItem } from "@/lib/menu";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
config.autoAddCss = false;

export default function SideMenu({
  menu,
  onClose,
}: {
  menu: MenuItem[];
  onClose: () => void;
}) {
  const renderMenu = (items: MenuItem[]) => (
    <ul>
      {items.map((item) => (
        <li key={item.path}>
          <Link href={item.path}>{item.name}</Link>
          {item.children && renderMenu(item.children)}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="sideMenu" aria-label="전체 메뉴">
      <button className="closeBtn" onClick={onClose} aria-label="닫기">
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </button>
      {renderMenu(menu)}
    </nav>
  );
}
