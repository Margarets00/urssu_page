import React from "react"
import { Container, Row, Col } from 'reactstrap';

import top from "../images/top.png"
import bulb from "../images/lightbulb-on-outline-inside-a-circle.png"
import develop from "../images/develop.png"
import Logo from "../images/Logo@3x.png"
import Ground from "../images/Ground.png"
import food from "../images/subob.png"
import notice from "../images/notissu.png"
import Service_plan from "../images/Service_plan.png"
import Service_marketing from "../images/Service_marketing.png"
import Service_HR from "../images/Service_HR.png"
import Service_Contentes from "../images/Service_Contentes.png"
import Service_UXUI from "../images/Service_UXUI.png"
import Service_backend from "../images/Service_backend.png"
import Service_frontend from "../images/Service_frontend.png"
import Service_android from "../images/Service_android.png"
import Service_IOS from "../images/Service_IOS.png"
import Service_machinelearning from "../images/Service_machinelearning.png"

const Intro = () => (
    <>
        <Container className="center">
            <div className="vision">
                <h1 style={{ fontSize: "1.417em" }}>Vision</h1>
            </div>
            <Row xs="3" md="3" style={{ fontSize: "1.042em" }}>
                <Col><img src={top} /><p>도전</p></Col>
                <Col><img src={bulb} /><p>창조</p></Col>
                <Col><img src={develop} /><p>협력</p></Col>
            </Row>
            <div>
                <p className="product" style={{ fontSize: "0.833em", textAlign: "left" }}>Product</p>
            </div>
            <Row md="2" xs="1" style={{ textAlign: "left", wordBreak: "keep - all" }}>
                <Col style={{ flex: "0 0 30%" }}>
                    <h1 style={{ fontSize: "1.75em" }}>유어슈가<br />제공하는 서비스
                    </h1>
                </Col>
                <Col style={{ fontSize: "0.792em", flex: "0 0 70%" }}>
                    <p>
                        - IT는 사용자에게 직접적으로 결과물을 제공해주고 가치를 전달하는 것이 목적입니다.
                    </p>
                    <p>
                        - 유어슈는 단순히 스터디와 생각에 그치지 않고 결과물을 만드는 것에 목적을 둡니다.
                    </p>
                    <p>
                        - 유어슈는 지금까지 숭실대학교 학우들의 즐거운 캠퍼스 라이프를 위해 다양한 서비스를 개발하고 제공해왔습니다.
                    </p>
                </Col>
            </Row>
            <Row md="2" xs="2" className="wrapper" >
                <Col>
                    <div className="image-container">
                        <img src={Logo} />
                        <div className="image-caption">
                            <h1>Yourssu Web/App</h1><p>유어슈 공식 어플리케이션. 각종 정보 및 커뮤니티를 운영합니다.</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="image-container">
                        <img src={Ground} />
                    </div>
                    <div className="image-caption">
                        <h1>Yourssu Web/App</h1><p>유어슈 공식 어플리케이션. 각종 정보 및 커뮤니티를 운영합니다.</p>
                    </div>
                </Col>
            </Row>
            <Row md="2" xs="2">
                <Col>
                    <div className="image-container">
                        <img src={food} />
                        <div className="image-caption">
                            <h1>Yourssu Web/App</h1><p>유어슈 공식 어플리케이션. 각종 정보 및 커뮤니티를 운영합니다.</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="image-container">
                        <img src={notice} />
                        <div className="image-caption">
                            <h1>Yourssu Web/App</h1><p>유어슈 공식 어플리케이션. 각종 정보 및 커뮤니티를 운영합니다.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div>
                <p style={{ fontSize: "0.833em" }}>About</p>
                <h1 style={{ fontSize: "1.667em" }}>유어슈 소개 영상</h1>
                <p style={{ fontSize: "0.875em" }}>유어슈는 단순히 서비스를 구현하는 것을 넘어서서<br />현실의 문제들을 해결하고 세상을 더 아름답게 만들어나갑니다.</p>
            </div>
            <div className="youtube" style={{ textAlign: "start" }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6C7peck8xh8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", width: "100%", height: "100%" }}></iframe>
            </div>
            <h1 style={{ fontSize: "1.667em" }}>Service</h1>
            <p style={{ fontSize: "0.875em" }}>유어슈는 다양한 팀들과 함께 합니다 </p>
            <Row md="5" xs="5" style={{ fontSize: "1.083em" }}>
                <Col><div className="Service_btn"><img src={Service_plan} /></div><p>기획</p></Col>
                <Col><div className="Service_btn"><img src={Service_marketing} /></div><p>마케팅</p></Col>
                <Col><div className="Service_btn"><img src={Service_HR} /></div><p>HR</p></Col>
                <Col><div className="Service_btn"><img src={Service_Contentes} /></div><p>콘텐츠</p></Col>
                <Col><div className="Service_btn"><img src={Service_UXUI} /></div><p>UX/UI</p></Col>
                <Col><div className="Service_btn"><img src={Service_backend} /></div><p>back-end</p></Col>
                <Col><div className="Service_btn"><img src={Service_frontend} /></div><p>front-end</p></Col>
                <Col><div className="Service_btn"><img src={Service_android} /></div><p>Android</p></Col>
                <Col><div className="Service_btn"><img src={Service_IOS} /></div><p>IOS</p></Col>
                <Col><div className="Service_btn"><img src={Service_machinelearning} /></div><p>Machine<br />Learning</p></Col>
            </Row>
            <div>
                <h1 style={{ fontSize: "1.667em" }}>유어슈 보도자료</h1>
                <p style={{ fontSize: "0.875em" }}>다양한 외부업체들에 소개된 유어슈 보도자료 및 영상입니다</p>
            </div>
            <div className="youtube" style={{ textAlign: "start" }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6C7peck8xh8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", width: "100%", height: "100%" }}></iframe>
            </div>
            <h1 style={{ fontSize: "1.667em" }}>contact</h1>
            <p style={{ fontSize: "0.875em" }}>유어슈와 소통하고 싶으신가요? 아래의 채널에서 함께해요</p>
            <Row md="4" xs="2" style={{ fontSize: "0.708em" }}>
                <Col><img src={top} /><p>플러스친구</p></Col>
                <Col><img src={top} /><p>인스타그램</p></Col>
                <Col><img src={top} /><p>페이스북</p></Col>
                <Col><img src={top} /><p>기술블로그</p></Col>
            </Row>
        </Container>
    </>
)

export default Intro