//@flow

import React from 'react'
import './styles.scss'
import { Collapse } from 'react-collapse';
import { MOBILE_IMG1, GOLD_PHONE } from 'common/images'

type RelatedProductsType = { productName: string, version: string }

type Props = {
  relatedProductsData: Array<Object>,
  isArrowClicked: boolean
}

const RelatedProducts = (props: Props) => {
  const { relatedProductsData, isArrowClicked } = props
  const relatedProducts = Object.keys(relatedProductsData).length
    ? relatedProductsData.relatedProducts.result
    : []

  console.log(isArrowClicked)
  return relatedProducts ? (
    <div>

      <div className={isArrowClicked ? "ipn-rp" : "ipn-rp disable"}>
        <p>Related Products</p>
        <div className="ipn-box">
          {relatedProducts.map((data, index) => {
            return (
              <div className="vsbt-cont ipn-cont" key={index}>
                <div className="vsbt-img1">
                  <div className="vsbt-inner-img1">
                    <img src={data.featured_image.thumb || GOLD_PHONE} alt="related-product" />

                  </div>
                </div>
                <div className="vsbt-para1">
                  <p>{data.v_brand_name}</p>
                  <h3>{data.device_name}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  ) : null
}

export default RelatedProducts
