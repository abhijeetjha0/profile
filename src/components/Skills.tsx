import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();
  const skills = t('skills', { returnObjects: true }) as any;

  const skillCategories = [
    { label: 'Libraries & Frameworks', data: skills.frameworks },
    { label: 'Programming Languages', data: skills.languages },
    { label: 'Build Tools', data: skills.buildTools },
    { label: 'Web Technologies', data: skills.webTech },
    { label: 'Linting', data: skills.linting },
    { label: 'Others', data: skills.others },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">{t('sections.skills')}</h2>
        <Row>
          {skillCategories.map((category, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <div className="p-3 bg-white rounded shadow-sm h-100">
                <h3 className="h5 fw-bold mb-3">{category.label}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {category.data.map((skill: string, sIndex: number) => (
                    <Badge bg="info" text="dark" key={sIndex} className="px-3 py-2 fw-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
