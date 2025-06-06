import CertificationsSection from "../components/certifications/CertificationsSection";
import PageContainer from "../components/common/PageContainer";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/hero/HeroSection";
import Navbar from "../components/navbar/Navbar";
import ProjectsSection from "../components/projects/ProjectsSection";
import SkillsSection from "../components/skills/SkillsSection";

function Home() {

    return (
        <PageContainer>
            <Navbar />
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <CertificationsSection />
            <Footer />
        </PageContainer>
    );
}

export default Home;