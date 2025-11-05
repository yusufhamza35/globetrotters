import getNavList from "../data/navList";

export function getNavItemById(id, language = "tr") {
  const navItems = getNavList(language);
  return navItems.find((item) => item.id === id);
}
