import React, { useState, useContext } from "react";
import { useScript } from "../hooks/useApi";
// import { getAccessToken } from "../services/Auth"


export const LoginPage = (props: any) => {
  useScript('https://cdn.belvo.io/belvo-widget-1-stable.js');
  return (
      <><div id="belvo" /><h1>AQUI</h1></>
  );
}

export default LoginPage;