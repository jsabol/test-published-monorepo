// https://www.theatlantic.com/api/2.0/articles/?section=most-popular

import data from "../__fixtures__/most_popular.json";
import River from "../components/River";
import Layout from "../components/Layout";

const Popular = ({}) => {
  return (
    <Layout>
      <River articles={data.results}></River>
    </Layout>
  );
};

export default Popular;
