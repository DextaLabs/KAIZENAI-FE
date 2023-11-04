import { Card, CardBody, CardHeader, Container, Row } from "reactstrap";

const SectionWrapper = ({ children, sectionTitle }) => {
  return (
    <>
      <Container className="pb-8 pt-5 pt-md-8" fluid>
        <Row>
          <div className="col">
            <Card className="shadow-none bg-dark-1 text-white">
              {sectionTitle ? (
                <CardHeader className="bg-transparent">
                  <h3 className="mb-0 text-white">{sectionTitle}</h3>
                </CardHeader>
              ) : null}
              <CardBody>{children}</CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default SectionWrapper;
