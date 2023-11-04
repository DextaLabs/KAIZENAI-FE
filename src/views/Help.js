import SectionWrapper from "components/Headers/SectionWrapper";
import { Col, Row } from "reactstrap";

const Help = () => {
  return (
    <SectionWrapper>
      <Row className="justify-content-center">
        <Col className="col-md-4">
          <div>
            <h2 className="text-white text-center">Intro</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KFx4yXZGlx8?si=AWKyvaDI0XQ1azaP"
              className="w-100 mt-2"
              title="Intro Video"
            />
          </div>
          <div className="mt-5">
            <h2 className="text-white text-center">How to use</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KFx4yXZGlx8?si=AWKyvaDI0XQ1azaP"
              className="w-100 mt-2"
              title="Intro Video"
            />
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Help;
