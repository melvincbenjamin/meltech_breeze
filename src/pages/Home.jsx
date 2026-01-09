import { ThemeToggle } from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectSection } from "../components/Projects";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";


export const Home = () => {
    return <div className="min-h-screen">

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/**Navbar */}
        <Navbar />

        {/** Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
        </main>

        {/** Footer */}
        <Footer />
    </div>
}

export default Home;