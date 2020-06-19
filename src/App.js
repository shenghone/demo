import React, { useState } from "react";
import AppWrapper from "./Style/AppWrapper";
import HorizontalBar from "./Components/HorizontalBar";
import MainContainer from "./Components/MainContainer";

function App() {
  const [tab, setTab] = useState("frontend");

  return (
    <AppWrapper className="App">
      <HorizontalBar tab={tab} setTab={setTab}></HorizontalBar>
      <MainContainer tab={tab} />
    </AppWrapper>
  );
}

export default App;
