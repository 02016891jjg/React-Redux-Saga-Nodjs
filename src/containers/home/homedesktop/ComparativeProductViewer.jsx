//@flow

import React, { useState, useEffect } from 'react'
import ShortedProduct from 'components/shortedProduct'
import Selector from 'components/common/Selector'
import Selector1 from 'components/common/Selector1'
import AdvancedSearchButton from 'components/common/AdvancedSearchButton'
import { PHONE_IMG } from 'common/images'
import {
  // shortedProduct,
  phoneTypeFilter,
  phoneBrandFilter
} from 'utils/metaData'
import './styles.scss'
import './shortcut.scss'

type Props = {
  deviceByName: Object,
  categories: Object,
  brands: Object,
  onShortedProductClick: (val: any) => any,
  onAdvanceSearhClick: (val: any) => any,
  onProductDetails: (val: any, val: any) => any,
  cbfilteredProducts: Object,
  isBackgroundSearchInput: boolean,
  onBackgroundSearchInput: (val: number) => any,
  clickedActive: boolean,
  activedIndex: number
}
const ComparativeProductViewer = (props: Props) => {
  const {
    onShortedProductClick,
    onAdvanceSearhClick,
    deviceByName,
    categories,
    onProductDetails,
    brands,
    cbfilteredProducts,
    isBackgroundSearchInput,
    onBackgroundSearchInput,
    clickedActive,
    activedIndex

  } = props
  // const [isBackgroundSearchInput, setIsBackgroundSearchInput] = useState(false);
  const devices = Object.keys(deviceByName).length
    ? deviceByName.deviceByName.result
    : []
  const cbfilters = typeof cbfilteredProducts.cbfilterProducts !== 'undefined' && typeof cbfilteredProducts.cbfilterProducts.result !== 'undefined' ? cbfilteredProducts.cbfilterProducts.result : []

  console.log("sfsdfsdfsdfsdf")
  console.log(activedIndex)
  return devices ? (
    <div className="comparission_dropdown">
      <div className="drop_row">
        <div className="drop_lft">

          <Selector optionList1={categories} />
          <Selector1 optionList={brands} />
        </div>
        <AdvancedSearchButton onClick={onAdvanceSearhClick} />
      </div>
      {

        cbfilters.length > 0 ?
          <div className="cbfiltersitems">
            {
              cbfilters.map((item, index) => {
                const itemObj = {
                  productImg: item.featured_image.thumb,
                  aboutProduct: item.v_brand_name,
                  productName: item.device_name
                }
                return (
                  // <ShortedProduct
                  //   key={index}
                  //   onClick={() => onProductDetails(item, index)}
                  //   item={itemObj}
                  //   clickedActive={clickedActive}
                  //   activedIndex={activedIndex}
                  // >

                  <div key={index} id={"active" + index} className={activedIndex == index ? 'item_row clicked' : 'item_row'} onClick={() => onProductDetails(item, index)}>
                    <div className={'item_row_lft'}>
                      <center>
                        <div className={'mobile_icn'}>
                          <img src={itemObj.productImg || PHONE_IMG} alt="product" />
                        </div>
                      </center>
                      <div className={'mobile_contnt'}>
                        <h4>{itemObj.productName}</h4>
                        <p>{itemObj.aboutProduct}</p>
                      </div>
                    </div>
                    <div className="item_row_rgt">
                      <button type="button" onClick={() => onProductDetails(item, index)}>
                        See Specs <i className="fa fa-angle-right" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  // </ShortedProduct>
                )
              })
            }
          </div> : <div className="devicenameitems">
            {
              devices.map((item, index) => {
                const itemObj = {
                  productImg: item.featured_image.thumb,
                  aboutProduct: item.v_brand_name,
                  productName: item.device_name
                }
                return (
                  <div key={index} id={"active" + index} className={activedIndex == index ? 'item_row clicked' : 'item_row'} onClick={() => onProductDetails(item, index)}>
                    <div className={'item_row_lft'}>
                      <center>
                        <div className={'mobile_icn'}>
                          <img src={itemObj.productImg || PHONE_IMG} alt="product" />
                        </div>
                      </center>
                      <div className={'mobile_contnt'}>
                        <h4>{itemObj.productName}</h4>
                        <p>{itemObj.aboutProduct}</p>
                      </div>
                    </div>
                    <div className="item_row_rgt">
                      <button type="button" onClick={() => onProductDetails(item, index)}>
                        See Specs <i className="fa fa-angle-right" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                )
              })
            }
          </div>


      }
    </div>
  ) : null
}
export default ComparativeProductViewer
