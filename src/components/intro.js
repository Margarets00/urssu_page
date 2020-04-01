import React from "react"
import { Container, Row, Col } from 'reactstrap';

import top from "../images/top.png"
import bulb from "../images/lightbulb-on-outline-inside-a-circle.png"
import develop from "../images/develop.png"
import Logo from "../images/Logo@3x.png"
import Ground from "../images/Ground.png"
import food from "../images/subob.png"
import notice from "../images/notissu.png"


const Intro = () => (
    <>
        <Container>
            <h1>Vision</h1>
            <Row xs="3" md="3">
                <Col><img src={top} /></Col>
                <Col><img src={bulb} /></Col>
                <Col><img src={develop} /></Col>
            </Row>
            <Row md="2" xs="1">
                <Col>
                    <p>Product</p>
                    <h1>유어슈가<br />제공하는 서비스
                    </h1>
                </Col>
                <Col>
                    <p>
                        - IT는 사용자에게 직접적으로 결과물을 제공해주고 가치를 전달하는 것이 목적입니다.
                    </p>
                    <p>
                        - IT는 사용자에게 직접적으로 결과물을 제공해주고 가치를 전달하는 것이 목적입니다.
                    </p>
                    <p>
                        - IT는 사용자에게 직접적으로 결과물을 제공해주고 가치를 전달하는 것이 목적입니다.
                    </p>
                </Col>
            </Row>
            <Row md="2" xs="2">
                <Col><img src={Logo} /></Col>
                <Col><img src={Ground} /></Col>
            </Row>
            <Row md="2" xs="2">
                <Col><img src={food} /></Col>
                <Col><img src={notice} /></Col>
            </Row>
            <p>About</p>
            <h1>유어슈 소개 영상</h1>
            <p>유어슈는 단순히 서비스를 구현하는 것을 넘어서서<br />현실의 문제들을 해결하고 세상을 더 아름답게 만들어나갑니다.</p>

            <div>
                <iframe width="840" height="500" src="https://www.youtube.com/embed/va6pzMeby78" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h1>Service</h1>
            <p>유어슈는 다양한 팀들과 함께 합니다 </p>
            <Row md="5" xs="5">
                <Col><img src={top} /><p>기획</p></Col>
                <Col><img src={top} /><p>마케팅</p></Col>
                <Col><img src={top} /><p>HR</p></Col>
                <Col><img src={top} /><p>콘텐츠</p></Col>
                <Col><img src={top} /><p>UX/UI</p></Col>
                <Col><img src={top} /><p>back-end</p></Col>
                <Col><img src={top} /><p>front-end</p></Col>
                <Col><img src={top} /><p>Android</p></Col>
                <Col><img src={top} /><p>IOS</p></Col>
                <Col><img src={top} /><p>Machine<br />Learning</p></Col>
            </Row>
            <p>contact</p>
            <p>유어슈와 소통하고 싶으신가요? 아래의 채널에서 함께해요</p>
            <Row md="4" xs="2">
                <Col><img src={top} /><p>플러스친구</p></Col>
                <Col><img src={top} /><p>인스타그램</p></Col>
                <Col><img src={top} /><p>페이스북</p></Col>
                <Col><img src={top} /><p>기술블로그</p></Col>
            </Row>
        </Container>
    </>
)

export default Intro