import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <div>
          {review.text}
        <button onClick={event=>this.props.deleteReview(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
