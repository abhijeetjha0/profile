import Hero from './Hero';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="portfolio-content">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <footer className="bg-dark text-white py-4 mt-5">
        <Container className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} {t('personalInfo.name')}. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}
