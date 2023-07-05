import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom'
const NewQutes = () => {
    const history = useHistory();
    const addQuoteHandler = qouteData => {
        console.log(qouteData);
        history.push('/quotes')
    }
    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    )

}
export default NewQutes;