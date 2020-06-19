import React, { useState } from "react";
import styled from "styled-components";
import AdminSignIn from "../Static/adminSignIn.jpg";
import StudentSignIn from "../Static/studentSignIn.jpg";
import TeacherSignIn from "../Static/teacherSignin.jpg";
import Landing from "../Static/landing.jpg";
import Cookie from "../Static/cookie.png";
import ERD from "../Static/erd.jpg";
import Validation from "../Static/validation.png";

const MainContainerWrapper = styled.div`
  justify-self: center;
  height: 600px;
  display: grid;
  grid-column: 1 / span 2;
  grid-row: 3 / span 1;
  border-radius: 4px;
  grid-template-rows: 20px 1fr;
  grid-template-columns: 1fr;
  button {
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    margin: 1rem;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 4px;
    transition: all 1s;
    outline: none;
    box-shadow: -2px -2px 2px rgba(256, 256, 256, 0.3);
    :hover {
      opacity: 0.6;
      letter-spacing: 0.1rem;
    }
  }
`;

const BackEndWrapper = styled.div`
  width: 100%;
  position: relative;
  grid-row: 2 / span 1;
  margin-left: 40px;

  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: 1fr;
  h5 {
    transition: all 1s;
    cursor: pointer;
    color: #538fa0;
    :hover {
      opacity: 0.6;
      letter-spacing: 0.1rem;
    }
  }
  > div:nth-of-type(2) {
    border-radius: 5px;
    height: 90%;

    width: 90%;
    box-sizing: border-box;
    display: grid;
    margin: 2rem;
    place-items: center;
    color: #fff;
    grid-column: 2 / span 1;
  }
  > div:nth-of-type(1) {
    grid-column: 1 / span 1;
    display: grid;
    place-items: center;
    font-size: 2rem;
    height: 100%;
    color: rgb(237, 144, 80);
    display: grid;
    align-content: center;
    > h5 {
      text-align: center;
    }
  }
`;

const FrontEndWrapper = styled.div`
  width: 100%;
  position: relative;
  grid-row: 2 / span 1;
  margin-left: 40px;
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: 1fr;

  h5 {
    transition: all 1s;
    cursor: pointer;
    color: #538fa0;
    :hover {
      opacity: 0.6;
      letter-spacing: 0.1rem;
    }
  }
  > div:nth-of-type(2) {
    border-radius: 5px;
    height: 90%;
    min-width: 90%;
    width: 90%;
    box-sizing: border-box;
    display: grid;
    margin: 2rem;
    place-items: center;
    color: #fff;
    grid-column: 2 / span 1;
  }
  > div:nth-of-type(1) {
    grid-column: 1 / span 1;
    display: grid;
    width: 100%;
    place-items: center;
    font-size: 2rem;
    height: 100%;
    color: rgb(237, 144, 80);
    display: grid;
    align-content: center;
    > h5 {
      text-align: center;
    }
  }
`;

export default ({ tab }) => {
  const [content, setContent] = useState("4pages");

  return (
    <MainContainerWrapper>
      {tab === "email" ? (
        <div
          style={{
            justifySelf: "center",

            height: "90%",
            placeItems: "center",
            minHeight: "400px",

            minWidth: "700px",
            position: "relative",

            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr",
            marginTop: "40px",
          }}
        >
          <button style={{ display: "grid" }}>email app demo</button>
        </div>
      ) : null}
      {tab === "backend" ? (
        <BackEndWrapper>
          <div>
            <h5 onClick={() => setContent("15schemas")}>15 database schemas</h5>
            <h5 onClick={() => setContent("3validationSchemas")}>
              3 validation schemas
            </h5>
          </div>
          <div className="content-right">
            {content === "15schemas" ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gridTemplateRows: "1fr",
                  gridGap: "20px",
                }}
              >
                <div>
                  <img
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={ERD}
                    alt="ERD"
                  />
                </div>
              </div>
            ) : null}
            {content === "3validationSchemas" ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gridTemplateRows: "1fr",
                  gridGap: "20px",
                }}
              >
                <div>
                  <img
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={Validation}
                    alt="Validation"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </BackEndWrapper>
      ) : null}
      {tab === "frontend" ? (
        <FrontEndWrapper>
          <div>
            <h5 onClick={() => setContent("4pages")}>4 pages</h5>
            <h5 onClick={() => setContent("cookie")}>cookie-session</h5>
          </div>
          <div className="content-right">
            {content === "4pages" ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "1fr 1fr",
                  gridGap: "20px",
                }}
              >
                <div style={{ borderRadius: "5px" }}>
                  <img
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={AdminSignIn}
                    alt="admin"
                  />
                </div>
                <div>
                  <img
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={StudentSignIn}
                    alt="student"
                  />
                </div>
                <div>
                  <img
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={TeacherSignIn}
                    alt="admin"
                  />
                </div>
                <div>
                  <img
                    style={{
                      borderRadius: "5px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={Landing}
                    alt="lading"
                  />
                </div>
              </div>
            ) : null}
            {content === "cookie" ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gridTemplateRows: "1fr",
                }}
              >
                <img
                  style={{ borderRadius: "5px", width: "100%" }}
                  src={Cookie}
                  alt="cookie"
                />
              </div>
            ) : null}
          </div>
        </FrontEndWrapper>
      ) : null}
    </MainContainerWrapper>
  );
};
