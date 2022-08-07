import Link from "next/link";
export const dataMapping = (data, label) => {
  let components = null;
  if (label === "link") {
    components = data.map((link, index) => (
      <Link key={index} href={link.href}>
        {link.label}
      </Link>
    ));
  }
  return components;
};
