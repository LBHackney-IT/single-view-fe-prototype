import React from "react";
import Header from "./components/header";
import Phase from "./components/phase";
import { SearchView } from "./views/search";

export default function App(): JSX.Element {
  return (
    <div id="prototype">
      <Header />
      <Phase />
      <div className="lbh-container">
        <SearchView />
      </div>
    </div>
  );
}
