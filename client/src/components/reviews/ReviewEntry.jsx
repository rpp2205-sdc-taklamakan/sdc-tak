import React from 'react';
import { format, parseJSON } from 'date-fns';
import Star from '../Star/Star.jsx';
import {roundNearQtr} from '../../helpers.js'
const ReviewEntry = (props) => {
  return (
    <li>
      <div className="rev">
        <div className="rev-header">
          <Star rating={roundNearQtr(props.review.rating)} />
          <div className="date">{props.review.reviewer_name}, {format(parseJSON(props.review.date), "MMMM/dd/yyyy")}</div>
        </div>
        <div className="rev-body">
          <div className="rev-summary">{props.review.summary}</div>
          <div className="review small_font">{props.review.body}</div>
        </div>
        <div className="rev-footer small_font">
          <p>Helpful?Yes. | Report </p>
          <hr/>
        </div>
      </div>

    </li>
  )
}

export default ReviewEntry;