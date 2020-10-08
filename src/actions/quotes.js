// TODO: Create action creators as defined in tests

const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    quote: quote
  }
}

const removeQuote = (quoteId) => {
  // console.log("inside remove quote action")
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

const upvoteQuote = (quoteId) => {
  // console.log("inside upvote action")
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  }
}

const downvoteQuote = (quoteId) => {
  // console.log("inside downvote action", quoteId)
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  }
}

export { addQuote, removeQuote, upvoteQuote, downvoteQuote }