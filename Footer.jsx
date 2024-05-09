import React from "react";

function Footer() {
  // Retrieving the current year using JavaScript's Date object
  const year = new Date().getFullYear();

  return (
    // Rendering the footer element
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
