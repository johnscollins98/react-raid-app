import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMarkdown from "react-markdown";
import htmlParser from "react-markdown/plugins/html-parser";

import "./Encounter.css";
import { IEncounter } from "../../utilities/Interfaces";
import GW2Skill from "../GW2Skill/GW2Skill";
import GW2Trait from "../GW2Trait/GW2Trait";
import RoleEmbed from "../RoleEmbed/RoleEmbed";
import MiscEmbed from "../MiscEmbed/MiscEmbed";
import CustomGW2Skill from "../CustomGW2Skill/CustomGW2Skill";

import Subgroup from "../Subgroup/Subgroup";

function Encounter(props: IEncounter) {
  const parseHtml = htmlParser({
    isValidNode: (node: any) => node.type !== "script",
    processingInstructions: [
      {
        shouldProcessNode: (node: any) => node.name === "gw2skill",
        processNode: (node: any, children: any) => (
          <GW2Skill id={node.attribs.id} />
        ),
      },
      {
        shouldProcessNode: (node: any) => node.name === "gw2trait",
        processNode: (node: any, children: any) => (
          <GW2Trait id={node.attribs.id} />
        ),
      },
      {
        shouldProcessNode: (node: any) => node.name === "roleembed",
        processNode: (node: any, children: any) => (
          <RoleEmbed
            role={node.attribs.role}
            profession={node.attribs.profession}
          />
        ),
      },
      {
        shouldProcessNode: (node: any) => node.name === "miscembed",
        processNode: (node: any, children: any) => (
          <MiscEmbed id={node.attribs.id} />
        ),
      },
      {
        shouldProcessNode: (node: any) => node.name === "customgw2skill",
        processNode: (node: any, children: any) => (
          <CustomGW2Skill
            label={node.attribs.label}
            wikiLink={node.attribs.wikilink}
            imageLink={node.attribs.imagelink}
          />
        ),
      },
    ],
  });

  return (
    <div className="encounter">
      <Container fluid>
        <Row>
          <Col lg>
            <Row className="align-items-center justify-content-center">
              <Col xs="auto">
                <img
                  src={props.imageLink}
                  alt={props.label}
                  width={128}
                  height={128}
                  className="boss-image"
                />
              </Col>
              <Col xs="auto">
                <h1 className="boss-title">{props.label}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                {props.subgroups.map((subgroup, i) => (
                  <div key={subgroup.label}>
                    <Subgroup {...subgroup} />
                    {props.subgroups[i + 1] != null ? (
                      <div className="rule" />
                    ) : null}
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
          <Col lg className="notes">
            <ReactMarkdown
              source={props.notes}
              escapeHtml={false}
              astPlugins={[parseHtml]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Encounter;
