import QuoteForm from '../components/quotes/QuoteForm'
const NewQutes = () => {
    const addQuoteHandler=qouteData=>{
        console.log(qouteData)
    }
    return (
        <QuoteForm onAddQoute={addQuoteHandler} />
    )

}
export default NewQutes;