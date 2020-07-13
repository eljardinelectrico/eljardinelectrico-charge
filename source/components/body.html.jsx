import Header from "./header.html.jsx";
import Footer from "./footer.html.jsx";

export default (props) => {
  const { children } = props;
  return (
    <body>
      <Header {...props} />
      {children}
      <Footer {...props} />
    </body>
  );
};
