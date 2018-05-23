import React from 'react'
import PropTypes from 'prop-types'
import classes from './TextField.scss'

const TextField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={classes.wrapper}>
    <div className='form-group'>
      <label className='control-label'> {label} </label>
      <input {...input}
        placeholder={label}
        type={type}
        className='form-control'
      />
      { touched && error && <span> {error} </span> }
    </div>
  </div>
)

TextField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
}

export default TextField
