import { Fragment } from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useHistory } from 'react-router-dom'

const QuoteList = (props) => {
  const history = useHistory();


  const changeSortHandler = () => {
    history.push('/quotes?=sort=asc')

  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}> Add Sotrt</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
