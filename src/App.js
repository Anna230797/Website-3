import React from "react";
import s from "./App.css";
import Header from "./componets/header/header";
import Registration from "./componets/registration/registration";
import Navigation from "./componets/navigation/navigation";
import Collection from "./componets/collection/collection";
import Section from "./componets/section/section";
import Footer from "./componets/footer/footer";
import Bottom from "./componets/bottom/bottom";

function App() {
  return (
    <div className="App">
      <Header />
      <Registration />
      <Navigation />
      <Collection />
      <Section />
      <Footer />
      <Bottom />
    </div>
  );
}
export default App;
