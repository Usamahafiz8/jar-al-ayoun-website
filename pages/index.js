import { useEffect, useState } from "react";
import PageHead from "../src/components/Helpers/PageHead";
import Preloader from "../src/components/PreLoader/Preloader";
import Home from "./../src/components/Home/index";

export default function HomePage({ data }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const { seoSetting } = data;
  return (
    <>
      <PageHead
        title={`${seoSetting.seo_title}`}
        metaDes={seoSetting.seo_description}
      />
      {isLoading ? <Preloader /> : <Home homepageData={data} />}
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/`);
  const data = await res.json();
  return { props: { data } };
}
