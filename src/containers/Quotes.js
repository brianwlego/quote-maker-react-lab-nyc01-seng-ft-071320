import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {


  // renderQuotes = () => {
  //   return this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote}/> ) 
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} removeQuote={this.props.removeQuote}/> )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeQuote: () => {
//       dispatch(removeQuote())
//     },
//     upvoteQuote: () => {
//       dispatch(upvoteQuote())
//     },
//     downvoteQuote: () => {
//       dispatch(downvoteQuote())
//     }
//   }
// }

//add arguments to connect as needed
export default connect(mapStateToProps, {downvoteQuote, upvoteQuote, removeQuote})(Quotes);
