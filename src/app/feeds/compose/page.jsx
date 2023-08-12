import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";

import React from "react";
import Compose from "./Compose";

const Page = () => {
  return (
    <div>
      <Navbar />

      <Compose />

      <Footer />
    </div>
  );
};

export default Page;
