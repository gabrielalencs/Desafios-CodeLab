import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/layout/Header";
import IntroductionSection from "./components/layout/IntroductionSection";
import AboutSection from "./components/layout/AboutSection";
import ProjectsSection from "./components/layout/ProjectsSection";
import ServicesSection from "./components/layout/ServicesSection";

function App() {

    return (
        <>
            <GlobalStyles />
            <Header />
            <IntroductionSection />
            <AboutSection />
            <ProjectsSection />
            <ServicesSection />
        </>
    )
}

export default App
