import SectionWrapper from "components/Headers/SectionWrapper";
import StatCard from "components/StatCard";
import { Col, Row } from "reactstrap";

const Index = (props) => {
  let onGoingProjects = [
    {
      name: "Project 1",
      deadLine: "16 Nov, 2023",
      developer: "John",
    },
    {
      name: "Project 2",
      deadLine: "23 Nov, 2023",
      developer: "Luke",
    },
    {
      name: "Project 3",
      deadLine: "01 Dec, 2023",
      developer: "Luke",
    },
  ];
  let developers = [
    {
      name: "Luke",
      role: "Full Stack Developer",
      skills: ["node.js", "react.js", "mongoDB"],
    },
    {
      name: "John",
      role: "Front-end Developer",
      skills: ["vue.js", "react.js"],
    },
    {
      name: "Smith",
      role: "Front-end Developer",
      skills: ["react.js", "next.js", "vue.js", "nuxt.js"],
    },
  ];
  return (
    <>
      <SectionWrapper>
        <Row>
          <Col lg={6}>
            <StatCard title="On-going projects">
              <table className="table table-borderless text-white">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Deadline</th>
                    <th>Developer</th>
                  </tr>
                </thead>
                <tbody>
                  {onGoingProjects.map((project) => (
                    <tr>
                      <td>{project.name}</td>
                      <td>{project.deadLine}</td>
                      <td>{project.developer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </StatCard>
          </Col>
          <Col className="mt-4 mt-lg-0" lg={6}>
            <StatCard title="Developers">
              <table className="table table-borderless text-white">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Skills</th>
                  </tr>
                </thead>
                <tbody>
                  {developers.map((developer) => (
                    <tr>
                      <td>{developer.name}</td>
                      <td>{developer.role}</td>
                      <td>
                        <div className="d-flex">
                          {developer.skills.map((skill) => (
                            <div className="badge badge-dark badge-pill mr-1 text-white">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </StatCard>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} lg={4}>
            <StatCard title="Hours Saved">
              <div className="d-flex align-items-center">
                <h1 className="text-white m-0">40 hours</h1>
                <div className="stat-card-icon ml-auto text-white">
                  <i className="fa fa-clock"></i>
                </div>
              </div>
              <small className="text-green">
                <i className="fa fa-angle-up mr-1"></i>4%
              </small>
            </StatCard>
          </Col>
          <Col className="mt-4 mt-md-0" md={6} lg={4}>
            <StatCard title="Clarifications Cleared">
              <div className="d-flex align-items-center">
                <h1 className="text-white m-0">20 clarifications</h1>
                <div className="stat-card-icon ml-auto text-white">
                  <i className="fa fa-check"></i>
                </div>
              </div>
              <small className="text-danger">
                <i className="fa fa-angle-down mr-1"></i>-2.5%
              </small>
            </StatCard>
          </Col>
          <Col className="mt-4 mt-lg-0" md={6} lg={4}>
            <StatCard title="Revenue Saved">
              <div className="d-flex align-items-center">
                <h1 className="text-white m-0">2000 €</h1>
                <div className="stat-card-icon ml-auto text-white">
                  <i className="fa fa-money-bill"></i>
                </div>
              </div>
              <small className="text-danger">
                <i className="fa fa-angle-down mr-1"></i>-0.25%
              </small>
            </StatCard>
          </Col>
        </Row>
      </SectionWrapper>
    </>
  );
};

export default Index;
