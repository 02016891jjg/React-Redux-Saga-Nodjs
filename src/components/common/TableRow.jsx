//@flow

import React from 'react'

type Props = {
  rowStyle: string,
  colPropertyStyle: string,
  colValueStyle: string,
  property: string,
  value: string,
  spanText: string
}


const Selector = (props: Props) => {
  const { rowStyle, colPropertyStyle, colValueStyle, property, value, spanText } = props

  return (
    <tr className={rowStyle}>
      <td className={colPropertyStyle}>{property}</td>
      <td className={colValueStyle}><p>{value}</p></td>
    </tr>
  )
}

export default Selector
