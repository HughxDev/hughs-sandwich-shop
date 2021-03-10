import React, { useState } from "react";
import branding from "../../data/branding";
import contactDetails from "../../data/contactDetails";
import "./AppHeader.css";

export default function AppHeader() {
  return (
    <header className="app-header">
      <h1 className="app-header__title">{branding.title}</h1>
      <p className="app-header__tagline">{branding.tagline}</p>
      <nav>
        {contactDetails.map((contactDetail, index) => {
          return (
            <React.Fragment key={index}>
              <a href={contactDetail.url}>{contactDetail.label}</a>
              {index !== contactDetails.length - 1 && <span> • </span>}
            </React.Fragment>
          );
        })}
      </nav>
    </header>
  );
}
