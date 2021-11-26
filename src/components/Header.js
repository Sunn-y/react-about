import "../scss/header.scss"
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/about">ABOUT</Link>
      <Link to="/portfolio">PORTFOLIO</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
}
