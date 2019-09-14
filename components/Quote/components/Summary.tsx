import React from "react";
import moment from "moment";
import pluralize from "pluralize";

const Summary = ({ data }: any) => (
  <section className="section container">
    <div id="summary" className="columns">
      <div className="column is-narrow">
        <p className="heading">Starting</p>
        <p className="title">{moment(data.start).format("MMM Do, YYYY")}</p>
        {moment(data.start).isAfter(moment()) && (
          <p className="subtitle is-hidden-print">
            {moment(data.start).fromNow()}
          </p>
        )}
      </div>
      <div className="column is-narrow">
        <p className="heading">Duration</p>
        <p className="title">{pluralize("day", data.duration + 1, true)}</p>
        <p className="subtitle">{pluralize("night", data.duration, true)}</p>
      </div>
      <div className="column is-narrow">
        <p className="heading">Group size</p>
        <p className="title">{data.groupSize}</p>
      </div>
    </div>
  </section>
);

export default Summary;
