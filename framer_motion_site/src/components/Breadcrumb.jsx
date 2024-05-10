// eslint-disable-next-line no-unused-vars
import React from "react";
import apiRoutes from "../constants/apiRoutes";

// eslint-disable-next-line react/prop-types
function Breadcrumb({ pageTitle, pageName }) {
  return (
    <div className="breadcrumb-section py-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="breadcrumb-content flex flex-col gap-3">
              <ul className="breadcrumb-list flex items-center gap-3">
                <li className="text-base uppercase text-white">
                  <a
                    href={apiRoutes.HOME}
                    className="hover:text-green-600 transition-all"
                  >
                    home
                  </a>
                </li>
                <li className="text-white">/</li>
                <li className="text-base uppercase text-white">{pageTitle}</li>
              </ul>
              <h1 className="title-part text-4xl font-bold capitalize text-white">
                {pageName}
              </h1>
              <p>
                Although, Final Stages Of The Internal Network Gives A Complete
                Experience Of The Parameter Of Speculative Environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
