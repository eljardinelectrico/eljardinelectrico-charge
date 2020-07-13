import Hamburger from "./hamburger.html.jsx";

export default ({ pages, data }) => {
  const indexPage = pages.find((page) => page.meta.id === "index");
  const navItems = pages
    .filter((page) => page.meta.id !== "index")
    .sort((current, next) => (current.meta.index > next.meta.index ? 1 : -1))
    .map((page, index) => {
      return (
        <li key={page.path}>
          <a
            href={page.path}
            style={{ color: `var(--party-background-${index + 1})` }}
          >
            {page.meta.title}
          </a>
        </li>
      );
    });

  return (
    <header>
      <a href={indexPage.path}>
        <img src="/images/logo.png" width="80" />
      </a>
      <nav>
        <ul className="animated">{navItems}</ul>
        <Hamburger />
      </nav>
    </header>
  );
};
