import { Container } from "react-bootstrap";
import CertificationsSection from "../components/certifications/CertificationsSection";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/hero/HeroSection";
import Navbar from "../components/navbar/Navbar";
import ProjectsSection from "../components/projects/ProjectsSection";
import SkillsSection from "../components/skills/SkillsSection";

function Home() {

    return (
        <Container fluid className="d-flex flex-column min-vh-100 p-0">
            <Navbar />
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <CertificationsSection />
            <Footer />
        </Container>
    );
}

export default Home;