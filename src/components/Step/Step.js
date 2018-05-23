import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import classes from './Step.scss'

const Step = ({ step }) => (
  <ul className={classes.step}>
    <li className={classNames(classes.number, step >= 1 && classes.active)}>
      <span className={classes.text}> 1 </span>
    </li>
    <li className={classNames(classes.number, step >= 2 && classes.active)}>
      <span className={classes.line} />
      <span className={classes.text}> 2 </span>
    </li>
    <li className={classNames(classes.number, step >= 3 && classes.active)}>
      <span className={classes.line} />
      <span className={classes.text}> 3 </span>
    </li>
  </ul>
)

Step.propTypes = {
  step: PropTypes.number
}

export default Step
