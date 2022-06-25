import React from "react";
import Head from "next/head";

import { MarketingSection } from "./components";
import { marketingDatas } from "./Data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Technology Company | Hyaroo</title>
        <meta
          name="description"
          content="XPONENT offers a wide range of web technology services to clients all over the world."
        />
      </Head>
      <div className="bg-gray-50 py-5">
        <MarketingSection marketingDatas={marketingDatas} />
      </div>
    </>
  );
}
