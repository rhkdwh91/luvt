import type { NextPage } from "next";
import Head from "next/head";
import BlogContentCard from "components/ui/organisms/blog-content-card/blog-content-card.client";
import * as Styled from "components/templates/home/styled";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>KBlog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Styled.Main>
        <BlogContentCard />
        <BlogContentCard />
        <BlogContentCard />
        <BlogContentCard />
        <BlogContentCard />
        <BlogContentCard />
      </Styled.Main>
    </div>
  );
};

export default Home;
