import { Navbar, Container, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function NavigationBar() {
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">{t('personalInfo.name')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" role="navigation">
          <Nav className="ms-auto">
            <Nav.Link href="#about">{t('sections.about')}</Nav.Link>
            <Nav.Link href="#experience">{t('sections.experience')}</Nav.Link>
            <Nav.Link href="#skills">{t('sections.skills')}</Nav.Link>
            <Nav.Link href="#education">{t('sections.education')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
