import React, {useState} from 'react'
import propTypes from 'prop-types';

import"./index.test"


export default function Number(props) {
    const { value, placeholder, name, min, max, prefix, suffix } = props;
    const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`)
  return (
    <div>Number</div>
  )
}
Number.defaultProps={
    min:1,
    max:1,
    prefix: "",
    suffix: ""
}