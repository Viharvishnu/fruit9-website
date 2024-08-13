import gqlclient from "@/gql/client";
import { fruitsDataQuery } from "@/gql/queries";
import HomeModule from "@/modules/home-module";

export const getStaticProps = async () => {
  const fruitsDataObj = await gqlclient.request(fruitsDataQuery);
  const fruitsData = fruitsDataObj?.fruitsCollection?.items ?? [];
  return {
    props: { fruitsData: fruitsData },
    revalidate: 60 * 60 * 6
  };
};

const HomePage = ({ fruitsData }) => {
  return <HomeModule fruitsData={fruitsData} />;
};
export default HomePage;
