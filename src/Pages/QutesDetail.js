import { Fragment } from "react";
import {useParams} from 'react-router-dom'

const QutesDetail = () => {
    const params=useParams()
    return (
        <Fragment>
            <h2>QutesDetail page</h2>
            <p>{params.quoteId}</p>

        </Fragment>
    )

}
export default QutesDetail;