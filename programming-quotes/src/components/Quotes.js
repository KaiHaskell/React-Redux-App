import React from "react";
import { connect } from "react-redux";

import { getQuote } from "../actions";

const Quote = props => {
  console.log(props);
  return (
    <div>
      {props.quote && <p>{props.quote.en}</p>}
      <i onClick={props.getQuote} class="fas fa-angle-double-left"></i>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getQuote })(Quote);
