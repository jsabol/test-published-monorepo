import Link from "next/link";

const RiverArticle = ({
  title,
  image,
  authors = [],
  rubric,
  dek,
  date_published,
  canonical_url
}) => {
  return (
    <li>
      <Link
        href="/[section]/archive/[year]/[month]/[slug]/[article_id]/"
        as={canonical_url.replace("https://www.theatlantic.com", "")}
      >
        <a>{title}</a>
      </Link>
    </li>
  );
};

const River = ({ articles }) => {
  return (
    <ul>
      {articles.map((article, key) => (
        <RiverArticle key={key} {...article}></RiverArticle>
      ))}
    </ul>
  );
};

export default River;
