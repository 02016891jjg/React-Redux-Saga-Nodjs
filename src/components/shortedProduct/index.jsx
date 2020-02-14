//@flow

import React, { useState } from 'react'
import { PHONE_IMG } from 'common/images'
import './styles.scss'

type Props = {
  onClick: (val: any, val: any) => any,
  item: {
    productImg: string,
    aboutProduct: string,
    productName: string
  },
  itemRowClass?: string,
  itemRowLeftClass?: string,
  productImageClass?: string,
  productContent?: string,
  children: React.Node,
  clickedActive: boolean,
  keyIndex: number,
  activedIndex: number
}

const ShortedProduct = (props: Props) => {
  const {
    keyIndex,
    item,
    itemRowClass,
    itemRowLeftClass,
    productImageClass,
    productContent,
    children,
    onClick,
    clickedActive,
    activedIndex
  } = props

  const { productName, productImg, aboutProduct } = item

  return (
    <div key={keyIndex} id={"active" + keyIndex} className='item_row' onClick={onClick}>
      <div className={itemRowLeftClass || 'item_row_lft'}>
        <center>
          <div className={productImageClass || 'mobile_icn'}>
            <img src={productImg || PHONE_IMG} alt="product" />
          </div>
        </center>
        <div className={productContent || 'mobile_contnt'}>
          <h4>{productName}</h4>
          <p>{aboutProduct}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default ShortedProduct
