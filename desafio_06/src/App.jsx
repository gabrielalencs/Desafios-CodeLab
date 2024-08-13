import GlobalStyles from "./styles/GlobalStyles";

import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import IntroductionSection from "./components/IntroductionSection";

function App() {

    return (
        <>
            <GlobalStyles />
            <Header />
            <IntroductionSection />
            <AboutSection />
        </>
    )
}

export default App
