import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { changeMarker } from "../../store/companySlice";
import companyStyle from "../Companies/companyStyle.module.scss";
const Company = ({ company }) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line require-jsdoc
  function active(id) {
    dispatch(changeMarker(id));
    const div = document.getElementById(id);
    div.classList.toggle(companyStyle.active);
  }
  return (
    <div id={company.id} onClick={() => active(company.id)}>
      {company.name}
    </div>
  );
};

Company.propTypes = {
  company: PropTypes.object,
};
export default Company;
