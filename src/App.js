import "./App.css";

import React, { useState } from "react";

import AgeModal from "./_components/AgeModal";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
import NoModal from "./_components/NoModal";
import Overlay from "./_components/Overlay";
import Warning from "./_components/Warning";

function App() {
  const [ageModalActive, setAgeModalActive] = useState(true);
  const [noModalActive, setNoModalActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(true);

  return (
    <div className="App">
      <Warning />
      <Header />
      <Navigation />
      <AgeModal
        ageModalStyle={{ display: !ageModalActive ? "none" : "block" }}
        onYesClick={() => {
          setAgeModalActive(false);
          setOverlayActive(false);
        }}
        onNoClick={() => {
          setAgeModalActive(false);
          setNoModalActive(true);
          setOverlayActive(true);
        }}
      />
      <NoModal noModalStyle={{ display: noModalActive ? "block" : "none" }} />
      <Overlay overlayStyle={{ display: !overlayActive ? "none" : "block" }} />
    </div>
  );
}

export default App;
