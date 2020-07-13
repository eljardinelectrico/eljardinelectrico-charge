import { resolve as resolveURL } from "url";

const title = "El Jardín Eléctrico";
const description =
  "El Jardín Eléctrico es un lugar mágico donde puedes encontrar música y personajes fantásticos… abre el portón y entra con nosotrxs a este mundo lleno de sorpresas y risas";

export default (props) => {
  const { children, currentPageID, pages } = props;
  const currentPage = pages.find((page) => page.meta.id === currentPageID);
  const pageTitle =
    currentPageID === "index" ? title : `${currentPage.meta.title} — ${title}`;

  let baseURL = "https://charge.js.org";
  let url = resolveURL(baseURL, currentPage.path);
  if (url.endsWith("/")) {
    url = url.slice(0, -1);
  }

  return (
    <head>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={`${baseURL}/images/logomark.png`} />
      <meta property="og:image:type" content="image/png" />

      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@brandonweiss" />
      <meta name="twitter:image" content={`${baseURL}/images/logomark.png`} />

      <link rel="canonical" href={url} />

      <link rel="icon" type="image/png" href="/images/favicon.png" />

      <link rel="stylesheet" href="/stylesheets/global.css" />
      <script src="/javascripts/global.js"></script>

      {children}
    </head>
  );
};
