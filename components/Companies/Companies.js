import React from "react";
import PropTypes from "prop-types";

import Company from "../Company/Company";

import companyStyle from "./companyStyle.module.scss";
const Companies = ({ companies }) => {
  return (
    <div className={companyStyle.wrap}>
      <h2>List companies. Please click for change marker on map</h2>
      <div>
        {companies &&
          companies.map((company) => (
            <Company key={company.id} company={company} />
          ))}
      </div>
    </div>
  );
};

Companies.propTypes = {
  companies: PropTypes.array,
};

export default Companies;
