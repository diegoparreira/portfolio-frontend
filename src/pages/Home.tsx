import CertificationsSection from "../components/certifications/CertificationsSection";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/hero/HeroSection";
import Navbar from "../components/navbar/Navbar";
import ProjectsSection from "../components/projects/ProjectsSection";
import SkillsSection from "../components/skills/SkillsSection";

function Home() {

    return (
        <div>
            <Navbar />
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <CertificationsSection />
            <Footer />
        </div>
    );
}

export default Home;