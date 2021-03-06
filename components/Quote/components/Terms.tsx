import React from "react";
import Markdown from "react-markdown";
import moment from "moment";
import numeral from "numeral";
import SectionHeader from "./SectionHeader";
import pluralize from "pluralize";
import { GetQuoteQuery } from "../../../lib/graphql";

const Terms = ({ data }: { data: GetQuoteQuery }) => (
  <section id="terms" className="section container">
    <SectionHeader title="Terms and conditions" />
    <div className="columns">
      {data.quote?.inclusions && (
        <div className="column">
          <span className="heading">Inclusions</span>
          <Markdown source={data.quote.inclusions} className="content" />
        </div>
      )}
      {data.quote?.exclusions && (
        <div className="column">
          <span className="heading">Exclusions</span>
          <Markdown source={data.quote.exclusions} className="content" />
        </div>
      )}
      <div className="column">
        <span className="heading">Terms</span>
        <div className="content">
          <ol type="a">
            {data.quote?.status !== 1 && (
              <li>
                This price is valid until midnight{" "}
                {moment(data.quote?.expires ?? "").format("D MMM YYYY")}.
              </li>
            )}
            <li>
              The price listed here is total for{" "}
              {pluralize("traveller", data.quote?.travellerCount ?? 1, true)}{" "}
              based on {data.quote?.travellerCount === 1 ? "single" : "double"}{" "}
              room occupancy (
              {numeral(
                data.quote?.total / (data.quote?.travellerCount ?? 1)
              ).format("$0,0.00")}{" "}
              {data.quote?.baseCurrency} per person).
            </li>
            <li>
              Your deposit is due immediately on booking (30% of program price,
              minimum $500 {data.quote?.baseCurrency}).
            </li>
            <li>The balance is due 90 days prior to departure.</li>
            <li>
              All cancellations of confirmed reservations are subject to minimum
              of a $500 per person administrative fee. Additionally, clients are
              subject to any cancellation fees assessed by the purveyors of
              services including hotels, cruises, local transportation
              companies, and any airlines used in the itinerary.
            </li>
            <li>
              Cancellations 90 days or more prior to departure will be subject
              to any local penalties as well as an additional $500 per person
              administrative fee and any non refundable services. 60-89 days
              will be subject to loss of deposit (30% trip price). 30-59 days
              will be subject to loss of 50% of program price. 29 days or less
              will be subject to 100% of program price, all of the above may
              vary depending on seasonality and cancellation charges by the
              hotels and airlines which costs will be passed on to the traveller
              at the time of cancellation.
            </li>
            <li>
              Tour quotes do not include airfare to/from the trip start point
              unless noted on the itinerary.
            </li>
            <li>
              Cost increases in currency exchange, government fees, taxes,
              surcharges or hotel/lodge tariff increases between quote date and
              start date may be payable by the client.
            </li>
            <li>
              Availability cannot be guaranteed until booked. We will exercise
              best efforts to book hotels per the itinerary, however, in busy
              seasons and with client bookings made within 90 days of tour date
              we may be forced to offer substitutes
            </li>
            <li>
              Any Egypt itineraries will incur a 25% penalty of the cost of the
              tour for all private and tailor-made tours or 50% of the cost of
              the tour for discounted/voucher bookings made through agents of
              the Company, in addition to the full price of any internal or
              international flights and travel insurance booked as part of the
              package.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default Terms;
