import React from "react";
import { connect } from "react-redux";

import { getQuote } from "../actions";

const Quote = props => {
  console.log(props);
  return (
    <div>
      {!props.en && !props.isFetching && (
        <h1>Programming quotes, for inspiration && procrastination.</h1>
      )}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.joke && <p>{props.joke.joke}</p>}
      <button onClick={props.getJoke}>Get Chucked!</button>
    </div>
  );
};

export default connect(mapStateToProps, { getQuote }(Quote));
