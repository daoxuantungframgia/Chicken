import React from 'react'
import PropTypes from 'prop-types'
import classes from './InputNumber.scss'

const InputNumber = ({ value, changeValue }) => (
  <div className={classes.wrapper}>
    <button onClick={changeValue(value + 1)} className={classes.increase}> + </button>
    <input type='number'
      onChange={(event) => { changeValue(+event.target.value) }}
      value={value}
      className={classes.input}
    />
    <button onClick={changeValue(value - 1)} className={classes.decrease}> - </button>
  </div>
)

InputNumber.propTypes = {
  value: PropTypes.number,
  changeValue: PropTypes.func,
}

export default InputNumber
