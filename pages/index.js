import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useJsApiLoader } from "@react-google-maps/api";

import { showCompany } from "../store/companySlice";
import { listCompany } from "../back-end/company-list";
import Companies from "../components/Companies/Companies";
import Map from "../components/Map/Map";

const Index = () => {
  const { company, isClick } = useSelector((state) => state["company"]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAZbsd6O2aSisNrvG0MSsjCOg7_G1hL-rI",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCompany(listCompany));
  }, [isClick, dispatch]);
  return (
    <div>
      {isLoaded && <Map />}
      <Companies companies={company} />
    </div>
  );
};

export default Index;
