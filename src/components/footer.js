import React from "react"
import * as Device from "react-device-detect"
const Footer = () => (
  <>
    <footer>
      <p style={{ fontSize: "0.792em" }}>
        유어슈 서울특별시 동작구 상도로 369 숭실대학교 학생회관 244호
        <br />
        Copyright 유어슈. 2009-{new Date().getFullYear()}. all rights reserved.
        Built with {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
      <p>
        you're using {Device.deviceType} and {Device.osName}
      </p>
      <h3 style={{ fontSize: "0.917em" }}>yourssu.com@gmail.com</h3>
    </footer>
  </>
)

export default Footer
