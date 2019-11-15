import Link from "next/link";
import { Button } from "@jsabol/design-system";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle} href="/">
        Home
      </a>
    </Link>
    <Link href="/most-popular/">
      <a style={linkStyle}>Popular</a>
    </Link>
    <Button>test</Button>
  </div>
);

export default Header;
