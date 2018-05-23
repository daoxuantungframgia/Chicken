import React from 'react'
import PropTypes from 'prop-types'
import { Form, Field, reduxForm } from 'redux-form'
import TextField from '../../../../components/TextField'
import classes from './SelectAddressForm.scss'

const SelectAddressForm = ({ handleSubmit, submitAddress }) => (
  <Form onSubmit={handleSubmit(submitAddress)} className={classes.selectAddressForm}>
    <Field
      name='fullName'
      label='Họ và tên'
      component={TextField}
      type='text'
    />

    <Field
      name='phone'
      label='Số điện thoại'
      component={TextField}
      type='phone'
    />

    <Field
      name='address'
      label='Địa chỉ'
      component={TextField}
      type='text'
    />
    <button className={classes.btnSubmit}> Giao đến địa chỉ này</button>
  </Form>
)

SelectAddressForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitAddress: PropTypes.func
}

export default reduxForm({
  form: 'selectAddressForm'
})(SelectAddressForm)
