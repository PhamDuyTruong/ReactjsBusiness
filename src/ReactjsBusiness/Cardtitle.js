import React from "react";
import CardtittleItem from "./CardtitleItem";

export default function Cardtitle() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-5">
          <CardtittleItem />
        </div>
        <div className="col-md-4 mb-5">
          <CardtittleItem />
        </div>
        <div className="col-md-4 mb-5">
          <CardtittleItem />
        </div>
      </div>
    </div>
  );
}
