import data from "../../../../../../__fixtures__/article.json";
import Layout from "../../../../../../components/Layout";

const Article = ({}) => {
  return (
    <Layout>
      <h1>{data.title}</h1>
    </Layout>
  );
};

export default Article;
