import { Container } from 'react-bootstrap';
import Footer from '../components/commons/footer/Footer';
import Navbar from '../components/commons/navbar/Navbar';
import HeroSection from '../components/home/hero/HeroSection';
import ProjectsSection from '../components/home/projects/ProjectsSection';
import SkillsSection from '../components/home/skills/SkillsSection';
import CertificationsSection from '../components/home/certifications/CertificationsSection';

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
