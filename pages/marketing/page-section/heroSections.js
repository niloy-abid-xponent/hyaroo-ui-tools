import React from "react";
import Layout from "../../../src/layout";
import FirstExample from "../../../src/views/Home/components/MarketingSection/hero/firstHero";
export default function HeroSections() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 lg:px-24">
        <p className="text-sm text-slate-500 hover:text-slate-600 font-semibold">
          Marketing / Page Sections
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          Hero Sections
        </h1>
        <FirstExample />
      </div>
    </Layout>
  );
}
