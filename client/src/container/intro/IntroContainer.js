import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { setCookie, getCookie } from "../../utils/cookie";
import { ONE_WEEK } from "../../constants/date";
import Intro from "./Intro";

function IntroContainer() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  console.log(history);

  const goMainMap = () => {
    setCookie("permission", "true", {
      expires: new Date(Date.now() + ONE_WEEK),
    });

    if (getCookie("permission")) {
      console.log("🏄 쿠키 저장됨");
    }

    history.push("/mainMap");
  };

  return <Intro goMainMap={goMainMap} />;
}

export default IntroContainer;
