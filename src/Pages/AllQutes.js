import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
    { id: 'q1', author: 'Masoumeh', text: "I Like React" },
    { id: 'q1', author: 'Reazi', text: "I Like React and it is very fun" },

]
const AllQutes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    )

}
export default AllQutes;
