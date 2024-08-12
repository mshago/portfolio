import ContainerBlock from '../components/ContainerBlock';
import Hero from '../components/Hero';
import AboutMe from '@components/AboutMe';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Experience from '@components/Experience';
import Projects from '@components/Projects';
import Contact from '@components/Contact';

export default function Home() {
  return (
    <ContainerBlock title="Miguel Luna">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </ContainerBlock>
  );
}
