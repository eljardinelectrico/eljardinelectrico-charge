import Head from "./head.html.jsx";
import Body from "./body.html.jsx";

export default ({ head, ...props }) => {
  return (
    <html lang="es">
      <Head {...props} children={head} />
      <Body {...props} />
    </html>
  );
};
