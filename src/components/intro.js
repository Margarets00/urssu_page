import React, { useRef, useEffect, useState } from "react"
import Scroll from "react-scroll"
import { Container, Row, Col } from "reactstrap"
import * as Device from "react-device-detect"

import Slide from "./slide"
import top from "../images/top.png"
import bulb from "../images/lightbulb-on-outline-inside-a-circle.png"
import develop from "../images/develop.png"
import Service_plan from "../images/Service_plan.png"
import Service_marketing from "../images/Service_marketing.png"
import Service_HR from "../images/Service_HR.png"
import Service_Contentes from "../images/Service_contents.png"
import Service_UXUI from "../images/Service_UXUI.png"
import Service_backend from "../images/Service_backend.png"
import Service_frontend from "../images/Service_frontend.png"
import Service_android from "../images/Service_android.png"
import Service_IOS from "../images/Service_IOS.png"
import Service_machinelearning from "../images/Service_machinelearning.png"

const Intro = ({ name }) => {
  var Element = Scroll.Element
  var scroller = Scroll.scroller
  var link_ = {
    //web,android,ios 순서, 그라운드 클릭시 android 일경우 -> link.ground[1] 의 주소 반환
    yourssu: ["http://intro.yourssu.com/"],
    ground: [
      "http://intro.yourssu.com/",
      "https://play.google.com/store/apps/details?id=com.yourssu.ground",
      "https://apps.apple.com/kr/app/%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C/id1483838254",
    ],
    ssubob: [""],
    notissu: [
      "",
      "https://play.google.com/store/apps/details?id=com.yourssu.notissu",
      "https://apps.apple.com/kr/app/notissu/id1488050194",
    ],
  }
  var deviceIs = 0
  useEffect(() => {
    if (Device.isBrowser) {
      deviceIs = 0
      console.log("its pc")
    } else if (Device.isIOS) {
      deviceIs = 2
    } else {
      deviceIs = 1
    }
    console.log(Device.osName)
  }, [])
  useEffect(() => {
    //console.log(name)
    scroller.scrollTo(name, { duration: 1000, smooth: true, offset: -120 })
  }, name)

  return (
    <>
      <Element name="main">
        <Slide />
      </Element>
      <Container className="center">
        <div className="vision header center">
          <h1 style={{ fontSize: "1.417em" }}>Vision</h1>
        </div>
        <Row
          className="vision_icon"
          xs="3"
          md="3"
          style={{ fontSize: "0.708em" }}
        >
          <Col>
            <img src={top} />
            <p>도전</p>
          </Col>
          <Col className="vision_border">
            <img src={bulb} />
            <p>창조</p>
          </Col>
          <Col className="vision_border">
            <img src={develop} />
            <p>협력</p>
          </Col>
        </Row>
        <Element name="product">
          <div>
            <p
              className="product"
              style={{ fontSize: "0.833em", textAlign: "left" }}
            >
              Product
            </p>
          </div>
          <Row style={{ textAlign: "left" }}>
            <Col xs="4" className="">
              <h1
                style={{
                  fontSize: "1.75em",
                  wordBreak: "keep-all",
                  paddingRight: "0",
                  fontWeight: "900",
                }}
              >
                유어슈가
                <br />
                제공하는 서비스
              </h1>
            </Col>
            <Col xs="8" style={{ fontSize: "0.792em", wordBreak: "keep-all" }}>
              <ul className="list" style={{ paddingLeft: "10px" }}>
                <li>
                  {" "}
                  IT는 사용자에게 직접적으로 결과물을 제공해주고 가치를 전달하는
                  것이 목적입니다.
                </li>
                <li>
                  {" "}
                  유어슈는 단순히 스터디와 생각에 그치지 않고 결과물을 만드는
                  것에 목적을 둡니다.
                </li>
                <li>
                  {" "}
                  유어슈는 지금까지 숭실대학교 학우들의 즐거운 캠퍼스 라이프를
                  위해 다양한 서비스를 개발하고 제공해왔습니다.
                </li>
              </ul>
            </Col>
          </Row>
        </Element>
        <Row xs="2" className="Service-box">
          <Col className="S-box-line-one">
            <div className="image-container div-center">
              <div className="image-logo div-center">
                <img src={require("../images/Logo.png")} />
              </div>
              <a
                className="link"
                href={link_.yourssu[deviceIs]}
                target="_blank"
              >
                <div className="image-caption">
                  <h1>Yourssu Web/App</h1>
                  <p>
                    유어슈 공식 어플리케이션. 각종 정보 및 커뮤니티를
                    운영합니다.
                  </p>
                </div>
              </a>
            </div>
          </Col>
          <Col className="S-box-line-two">
            <div className="image-container div-center">
              <div className="image-logo div-center">
                <img src={require("../images/Ground.png")} />
              </div>
              <a
                className="link"
                href="https://play.google.com/store/apps/details?id=com.yourssu.ground"
                target="_blank"
              >
                <div className="image-caption">
                  <h1>Ground Android/iOS</h1>
                  <p>숭실대학교 학우들을 위한 커뮤니티 서비스, 그라운드</p>
                </div>
              </a>
            </div>
          </Col>
          <Col className="S-box-line-three">
            <div className="image-container div-center">
              <div className="image-logo div-center">
                <img src={require("../images/subob.png")} />
              </div>
              <a
                className="link"
                href="https://apps.apple.com/kr/app/%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C/id1483838254"
                target="_blank"
              >
                <div className="image-caption">
                  <h1>슈밥 Android/iOS</h1>
                  <p>숭실대학교 주변 상권 맛집 소개 어플리케이션</p>
                </div>
              </a>
            </div>
          </Col>
          <Col className="S-box-line-four ">
            <div className="image-container div-center">
              <div className="image-logo div-center">
                <img
                  src={require("../images/notissu.png")}
                  style={{ width: "5.167em" }}
                />
              </div>
              <a className="link" href={link_.notissu[deviceIs]} target="blank">
                <div className="image-caption">
                  <h1>노티슈 Android/iOS</h1>
                  <p>숭실대 모든 학부 공지를 알려주는 학과 공지 서비스</p>
                </div>
              </a>
            </div>
          </Col>
        </Row>
        <Element name="about">
          <div style={{ margin: "8.292em 0 2.583em 0" }}>
            <p style={{ fontSize: "0.833em" }}>About</p>
            <h1
              className="header center"
              style={{ fontSize: "1.667em", fontWeight: "900" }}
            >
              유어슈 소개 영상
            </h1>
            <p style={{ fontSize: "0.875em" }}>
              유어슈는 단순히 서비스를 구현하는 것을 넘어서서
              <br />
              현실의 문제들을 해결하고 세상을 더 아름답게 만들어나갑니다.
            </p>
          </div>
          <div className="youtube" style={{ textAlign: "start" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uFTcY3_TvIs"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </Element>
        <div style={{ margin: "7.5em 0 4.167em 0" }}>
          <h1 className="header bold" style={{ fontSize: "1.667em" }}>
            Service
          </h1>
          <p style={{ fontSize: "0.875em" }}>
            유어슈는 다양한 팀들과 함께 합니다{" "}
          </p>
        </div>
        <Row classNmae="Service" md="5" xs="5" style={{ height: "20.625em" }}>
          <Col>
            <a
              href="https://www.notion.so/7c3a060207ad4ae488700ecba8ec740e"
              target="blank"
            >
              <div className="Service_btn">
                <div class="circle div-center orange">
                  <img src={Service_plan} />
                </div>
                <div class="back_circle bg_orange"></div>
              </div>

              <p>기획</p>
            </a>
          </Col>
          <Col className="">
            <a
              href="https://www.notion.so/7c3a060207ad4ae488700ecba8ec740e"
              target="blank"
            >
              <div className="Service_btn ">
                <div class="circle div-center orange">
                  <img src={Service_marketing} />
                </div>
                <div class="back_circle bg_orange"></div>
              </div>
              <p>마케팅</p>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.notion.so/HR-a4d3c296cb7546148b7ed5e581093df8"
              target="blank"
            >
              <div className="Service_btn">
                <div class="circle div-center orange">
                  <img src={Service_HR} />
                </div>
                <div class="back_circle bg_orange"></div>
              </div>
              <p>HR</p>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.notion.so/e5a88c57ddb94024b879a1c018c80895"
              target="blank"
            >
              <div className="Service_btn">
                <div class="circle div-center red">
                  <img src={Service_Contentes} />
                </div>
                <div class="back_circle bg_red"></div>
              </div>
              <p>콘텐츠</p>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.notion.so/UX-UI-c88298b0143943c3ada9e8d57c3f0c35"
              target="blank"
            >
              <div className="Service_btn">
                <div class="circle div-center red">
                  <img src={Service_UXUI} />
                </div>
                <div class="back_circle bg_red"></div>
              </div>
              <p>UX/UI</p>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.notion.so/55a0280970dd473e97c43c8330b948e0"
              target="blank"
            >
              <div className="Service_btn">
                <div class="circle div-center green">
                  <img src={Service_backend} />
                </div>
                <div class="back_circle bg_green"></div>
              </div>
              <p>back-end</p>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.notion.so/9ad8da80a73c4113a173699b53fba532"
              target="blank"
            >
              <div className="Service_btn">
                <div class="circle div-center green">
                  <img src={Service_frontend} />
                </div>
                <div class="back_circle bg_green"></div>
              </div>
              <p>front-end</p>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.notion.so/7967510ce9374ca2becdb234cd83517c"
              target="blank"
            >
              <div className="Service_btn">
                <div class="circle div-center green">
                  <img src={Service_android} />
                </div>
                <div class="back_circle bg_green"></div>
              </div>
              <div className="Service-name">
                <p>Android</p>
              </div>
            </a>
          </Col>
          <Col>
            <a href="https://google.com" target="blank">
              <div className="Service_btn">
                <div class="circle div-center green">
                  <img src={Service_IOS} />
                </div>
                <div class="back_circle bg_green"></div>
              </div>
              <p>IOS</p>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.notion.so/7c3a060207ad4ae488700ecba8ec740e"
              target="blank"
            >
              <div className="Service_btn">
                <div class="circle div-center green">
                  <img src={Service_machinelearning} />
                </div>
                <div class="back_circle bg_green"></div>
              </div>
              <p>
                Machine
                <br />
                Learning
              </p>
            </a>
          </Col>
        </Row>
        <div style={{ margin: "9.250em 0 2.5em 0" }}>
          <h1 className="header bold" style={{ fontSize: "1.667em" }}>
            유어슈 보도자료
          </h1>
          <p style={{ fontSize: "0.875em" }}>
            다양한 외부업체들에 소개된 유어슈 보도자료 및 영상입니다
          </p>
        </div>
        <div className="youtube" style={{ textAlign: "start" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1vnU9m7xTaQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", width: "100%", height: "100%" }}
          ></iframe>
        </div>
        <div style={{ margin: "6.667em 0 3.333em 0" }}>
          <h1 className="header bold" style={{ fontSize: "1.667em" }}>
            Cooperation
          </h1>
          <p style={{ fontSize: "0.875em" }}>
            실제 IT 회사에서 사용하는 협업툴, 유어슈에서 경험할 수 있습니다.
            <br />
            많은 사람이 모여서 작업하는 환경을 경험하고 더 나은 협업 방법을 찾기
            <br />
            위해 항상 노력합니다.
          </p>
        </div>
        <Row className="Cooper-box div-center" md="12">
          <div className="cooper-line">
            <div
              className="cooper-icon div-center"
              style={{
                right: "100%",
                top: "0",
              }}
            >
              <div className="cooper-text-upper">Slack</div>
              <img src={require("../images/Cooperation-slack.png")} />
              <div className="cooper-bg"></div>
              <div
                className="cooper-bg-hover"
                style={{
                  transform: "rotate( 30deg )",
                  WebkitBackdropFilter: "blur(5px)",
                  backdropFilter: "blur(5px)",
                  backgroundImage:
                    "linear-gradient(to bottom,#e01e5a,#ecb22e 37%, #2eb67d 74%, #36c5f0)",
                }}
              ></div>
            </div>
            <div
              className="cooper-icon div-center"
              style={{
                right: "50%",
                top: "0",
              }}
            >
              <div className="cooper-text-upper">Notion</div>
              <img src={require("../images/Cooperation-notion.png")} />
              <div className="cooper-bg"></div>
              <div
                className="cooper-bg-hover"
                style={{ backgroundColor: "black" }}
              ></div>
            </div>
            <div
              className="cooper-icon div-center"
              style={{
                right: "0",
                top: "0",
              }}
            >
              <div className="cooper-text-upper">G Suite</div>
              <p>G</p>
              <div className="cooper-bg"></div>
              <div
                className="cooper-bg-hover"
                style={{
                  backgroundColor: "#ea4335",
                }}
              ></div>
            </div>
            <div
              className="cooper-icon div-center"
              style={{
                right: "100%",
                top: "100%",
              }}
            >
              <img src={require("../images/Cooperation-gitlab.png")} />
              <div className="cooper-bg"></div>
              <div
                className="cooper-bg-hover"
                style={{
                  transform: "rotate( 300deg )",
                  backgroundImage:
                    "linear-gradient(to bottom, #fca121, #fc6d26 52%, #db3b21)",
                }}
              ></div>
              <div className="cooper-text-lower">GitLab</div>
            </div>
            <div
              className="cooper-icon div-center"
              style={{
                right: "50%",
                top: "100%",
              }}
            >
              <img
                style={{ filter: "brightness(2)" }}
                src={require("../images/Cooperation-github.png")}
              />
              <div className="cooper-bg"></div>
              <div
                className="cooper-bg-hover"
                style={{ backgroundColor: "black" }}
              ></div>
              <div className="cooper-text-lower">GitHub</div>
            </div>
            <div
              className="cooper-icon div-center"
              style={{ right: "0%", top: "100%" }}
            >
              <img src={require("../images/Cooperation-zeplin.png")} />
              <div className="cooper-bg"></div>
              <div
                className="cooper-bg-hover"
                style={{
                  transform: "rotate( 30deg )",
                  backgroundImage:
                    "linear-gradient(to bottom, #f0670a, #f89920 37%, #ffbe22 66%, #ffd00e)",
                }}
              ></div>
              <div className="cooper-text-lower">Zeplin</div>
            </div>
          </div>
        </Row>
        <Element name="contact">
          <div style={{ margin: "6.667em 0 3.333em 0" }}>
            <h1 className="header bold" style={{ fontSize: "1.667em" }}>
              Contact
            </h1>
            <p style={{ fontSize: "0.875em" }}>
              유어슈와 소통하고 싶으신가요? 아래의 채널에서 함께해요
            </p>
          </div>
        </Element>
        <Row
          className="contact-box div-center"
          md="4"
          xs="4"
          style={{ fontSize: "0.708em" }}
        >
          <Col>
            <a href="http://pf.kakao.com/_AxfrxeT" target="blank">
              <div className="contact-icon">
                <img src={require("../images/contact-kakao.png")} />
                <img src={require("../images/contact-kakao-hover.png")} />
              </div>
              <p>플러스친구</p>
            </a>
          </Col>
          <Col>
            <a
              href="https://www.instagram.com/ground_yourssu/?hl=ko"
              target="blank"
            >
              <div className="contact-icon">
                <img src={require("../images/contact-insta.png")} />
                <img src={require("../images/contact-insta-hover.png")} />
              </div>
              <div className="contact-text">
                <p>인스타그램</p>
              </div>
            </a>
          </Col>
          <Col>
            <a href="https://www.facebook.com/yourssu/" target="blank">
              <div className="contact-icon">
                <img src={require("../images/contact-facebook.png")} />
                <img src={require("../images/contact-facebook-hover.png")} />
              </div>
              <div className="contact-text">
                <p>페이스북</p>
              </div>
            </a>
          </Col>
          <Col>
            <a href="https://yourssu-dev.github.io/" target="blank">
              <div className="contact-icon">
                <img src={require("../images/contact-blog.png")} />
                <img src={require("../images/contact-blog-hover.png")} />
              </div>
              <p>기술블로그</p>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Intro
