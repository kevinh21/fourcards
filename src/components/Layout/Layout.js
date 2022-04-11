import React from "react";

import Supervisor from "../Supervisor/Supervisor";
import Calculator from "../Calculator/Calculator";
import Team from "../Team/Team";
import Karma from "../Karma/Karma";

function Layout() {
  return (
    <div className="layout">
      <div className="supervisor">
        <Supervisor />
      </div>

      {/* =Middle */}

      <div className="middle">
        <Karma />

        <div className="team">
          <Team />
        </div>

        <div className="karma">
          <Karma />
        </div>
      </div>

      {/* end middle */}

      <div className="calculator">
        <Team />
      </div>
      <Calculator />
    </div>
  );
}

export default Layout;
