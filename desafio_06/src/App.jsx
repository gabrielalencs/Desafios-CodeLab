import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/layout/Header";
import IntroductionSection from "./components/layout/IntroductionSection";
import AboutSection from "./components/layout/AboutSection";
import ProjectsSection from "./components/layout/ProjectsSection";
import ServicesSection from "./components/layout/ServicesSection";
import SkillsSection from "./components/layout/SkillsSection";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main className="container">
                <IntroductionSection />
                <AboutSection />
                <ProjectsSection />
                <ServicesSection />
                <SkillsSection />
            </main>
            <Footer />
        </>
    )
}

export default App