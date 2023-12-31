import { Fragment } from "react";
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Link } from 'react-router-dom'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Masoumeh', text: "I Like React" },
    { id: 'q2', author: 'Reazi', text: "I Like React and it is very fun" },

]

const QutesDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if (!quote) {
        return <p>No quote found</p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}/comments`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
                        Load Comments
                    </Link>
                </div>
                <Comments />


            </Route>

        </Fragment>
    )

}
export default QutesDetail;