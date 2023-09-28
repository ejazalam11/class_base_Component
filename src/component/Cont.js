import React from "react";
import "../style/Cont.css";
import Button from "./Button";
import Para from "./Para";
export default function Cont(props) {
  return (
    <div className="content">
      <h1>
        {props.web}
        <br />
        <span>Development</span>
        <br />
        Course
      </h1>

      <Para
        className="par"
        text="We are Excited to announce the courses of web design and development"
      />

      <Button label="JOIN US" className={"cn"} />
    </div>
  );
}
