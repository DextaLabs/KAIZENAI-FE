import SectionWrapper from "components/Headers/SectionWrapper";
import StatCard from "components/StatCard";
import { useState } from "react";
import { Col, Row, Table } from "reactstrap";

const Performance = () => {
  let developers = [
    "Alice",
    "Benjamin",
    "Charlotte",
    "Daniel",
    "Eleanor",
    "Felix",
    "Grace",
    "Henry",
    "Isabella",
    "James",
    "Katherine",
    "Liam",
    "Madison",
    "Noah",
    "Olivia",
    "Patrick",
    "Quinn",
    "Rachel",
    "Samuel",
    "Taylor",
  ];
  let statuses = [
    "Outstanding",
    "Excellent",
    "Average",
    "Poor",
    "Outstanding",
    "Excellent",
    "Average",
    "Poor",
  ];
  let statusesColor = [
    "success",
    "success",
    "warning",
    "danger",
    "success",
    "success",
    "warning",
    "danger",
  ];
  let [developer, setDeveloper] = useState("");
  let [workDaysDuration, setWorkDaysDuration] = useState("");

  let commits = [
    {
      message: "Fixed a bug in the authentication system",
      time: "10 Oct, 2023 08:30 AM",
      commitId: "a1b2c3d",
    },
    {
      message: "Added new feature: user profile customization",
      time: "15 Oct, 2023 10:45 AM",
      commitId: "e4f5g6h",
    },
    {
      message: "Refactored the backend API endpoints",
      time: "20 Oct, 2023 01:20 PM",
      commitId: "i7j8k9l",
    },
    {
      message: "Updated dependencies and resolved security vulnerabilities",
      time: "25 Oct, 2023 04:55 PM",
      commitId: "m1n2o3p",
    },
  ];

  const toSentenceCase = (str) => {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  };
  let randomIdx = Math.floor(Math.random() * 7);
  return (
    <SectionWrapper>
      <div>
        <label className="m-0">Developer</label>
        <select
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)}
          className="mt-2 bg-dark-2 text-white d-block w-100 form-control border-0"
        >
          <option hidden value="">
            -- Select Developer --
          </option>
          {developers.map((developer) => (
            <option value={developer.toLowerCase()}>{developer}</option>
          ))}
        </select>
      </div>
      {developer ? (
        <Row className="mt-4">
          <Col md={6}>
            <StatCard title="Git Commits">
              <Table borderless className="text-white" responsive>
                <thead>
                  <tr>
                    <th>Message</th>
                    <th>Time</th>
                    <th>Commit Id</th>
                  </tr>
                </thead>
                <tbody>
                  {commits.map((commit) => (
                    <tr>
                      <td>{commit.message}</td>
                      <td>{commit.time}</td>
                      <td>{commit.commitId}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </StatCard>
          </Col>
          <Col md={6}>
            <StatCard className="h-100" title="Work Days">
              <div className="d-flex justify-content-end">
                <select
                  className="form-control bg-dark-1 border-0 text-white d-inline-block"
                  style={{ maxWidth: 100 }}
                  value={workDaysDuration}
                  onChange={(e) => setWorkDaysDuration(e.target.value)}
                >
                  <option value={"monthly"}>Monthly</option>
                  <option value={"yearly"}>Yearly</option>
                </select>
              </div>
              <div className="d-flex mt-4 align-items-center">
                <h4 className="m-0 text-white">Work Days:</h4>
                <h4 className="m-0 text-white ml-auto">20</h4>
              </div>
              <div className="d-flex align-items-center">
                <h4 className="m-0 text-white">Days Off:</h4>
                <h4 className="m-0 text-white ml-auto">2</h4>
              </div>
            </StatCard>
          </Col>
          <Col className="mt-4" md={6}>
            <StatCard className="h-100" title="Feedback">
              <h3 className="text-white">
                {toSentenceCase(developer)} is performing{" "}
                <span className={`text-${statusesColor[randomIdx]}`}>
                  {statuses[randomIdx]}
                </span>{" "}
                in the current {workDaysDuration.replace("ly", "")}
              </h3>
            </StatCard>
          </Col>
          <Col className="mt-4" md={6}>
            <StatCard title="Cultural Feedback">
              <Row>
                <Col md={6}>
                  <h2 className="text-white">Your Culture</h2>
                  <ul>
                    <li>Timezone: 5+GMT</li>
                    <li>Environment: Office</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h2 className="text-white">
                    {toSentenceCase(developer)}'s Culture
                  </h2>
                  <ul>
                    <li>Timezone: 8+GMT</li>
                    <li>Environment: Remote</li>
                  </ul>
                </Col>
              </Row>
            </StatCard>
          </Col>
        </Row>
      ) : null}
    </SectionWrapper>
  );
};

export default Performance;
