import { useState } from "react";
import Header from "./components/Header";
import MainKeyVisualSection from "./components/MainKeyVisualSection";
import NewsSection from "./components/NewsSection";
import OurPlatformsSection from "./components/OurPlatformsSection";
import EventsSection from "./components/EventsSection";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainKeyVisualSection />
      <NewsSection />
      <OurPlatformsSection />
      <EventsSection />
      <Footer />
    </>
  );
}

export default App;
