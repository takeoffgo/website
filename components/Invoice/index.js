import React from "react";
import Header from "../Header";
import Footer from "./components/Footer";
import Summary from "./components/Summary";
import LineItems from "./components/LineItems";
import Total from "./components/Total";

const Invoice = ({ model }) => (
  <>
    <section className="sheet container padding-10mm">
      <Header />
      <main className="body">
        <Summary data={model} />
        <hr />
        <LineItems data={model} />
        <Total data={model} />
      </main>
      <Footer data={model} />
    </section>
  </>
);

export default Invoice;
