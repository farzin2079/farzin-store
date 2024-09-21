import React from "react";

import Banner from "../features/banner/Banner";
import OnSaleSection from "../ui/OnSaleSection";
import SuggestionSwction from "../ui/SuggestionSwction";

export default function Home() {
  return (
    <>
      <Banner place="2" />
      <OnSaleSection />
      <SuggestionSwction />
    </>
  );
}
