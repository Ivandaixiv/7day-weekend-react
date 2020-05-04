import React from "react";
import Footer from "./Footer";
const data = [
  {
    header: "Contact Us",
    content: ["604-604-6044", "adobexd@gmail.com", "Find a Store"],
  },
  {
    header: "Services",
    content: ["Ordering and Payment", "adobexd@gmail.com", "Find a Store"],
  },
  {
    header: "Information",
    content: ["604-604-6044", "adobexd@gmail.com", "Find a Store"],
  },
];
export default function FooterContainer() {
  return (
    <div>
      <Footer data={data} />
    </div>
  );
}
