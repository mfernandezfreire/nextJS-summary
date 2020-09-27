import Link from "next/Link";
const Navbar = () => {
  const styles = {
    display: "flex",
    background: "grey",
    justifyContent: "space-between",
    padding: "1rem",
  };
  return (
    <div style={styles}>
      <Link href="/">
        <button>
          <a>Home</a>
        </button>
      </Link>
      <Link href="/about">
        <button>
          <a>AboutPage</a>
        </button>
      </Link>
      <Link href="/contact">
        <button>
          <a>ContactPage</a>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
