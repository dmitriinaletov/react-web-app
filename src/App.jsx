import Header from "./components/Header/Header";
import DifferencesSection from "./components/DifferencesSection";
import TeachingSaction from "./components/TeachingSection";
import IntroSaction from "./components/IntroSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";
import EffectSection from "./components/EffectsSection";

export default function App() {
  const [tab, setTab] = useState("main");

  return (
    <>
      <Header tab={tab} setTab={setTab} />
      <main>
        <IntroSaction />

        {tab === "main" && (
          <>
            <TeachingSaction />
            <DifferencesSection />
          </>
        )}
        {tab === "feedback" && <FeedbackSection />}
        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}
