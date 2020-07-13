export default ({ data }) => (
  <footer>
    <p>
      &copy; {new Date().getUTCFullYear()} - {data.title}
    </p>
  </footer>
);
