//@flow

import React, { Component, Fragment } from 'react'
import { MOBILE_IMG2, BUTTON_REMOVE } from 'common/images'
import TableRow from 'components/common/TableRow'
import { PHONE_IMG, BUTTON_ADD, BUTTON_CLOSE, SEARCH_IMG, ICON_RECENT } from 'common/images'
import Button from 'components/common/buttonComponent/ButtonComponent'
import RecentItems from 'components/common/RecentItems.jsx'
import './styles.scss'
import { Animated } from "react-animated-css";
import {
  breadCrumbData,
  recentProduct,
  // versusFooterData,
  productDescription,
  productColors,
  productDisplayDescriptionmodel,
  filterButtonList,
  addedItems,
  shortedProduct
} from 'utils/metaData'


type Props = {

  productDisplayDescription: Object,
  onCloseItem: (val: any, val: any, val: any) => any,
  multiProductsState: Array<Object>,
  isAddButtonClicked: boolean,
  onAddItem: () => any,
  onSearchModal: () => any,
  onRecentItems: () => any,
  isRecentItemVisible: boolean,
  closeRecent: () => any,
  isRemoveAnimation: boolean,
  outIndex: number,
  recentItems:Object,
  onRecentAddItemClick:(val:any) =>any
}

const AddedItems = (props: Props) => {

  const {
    productDisplayDescription,
    onCloseItem,
    multiProductsState,
    isAddButtonClicked,
    onAddItem,
    onSearchModal,
    onRecentItems,
    isRecentItemVisible,
    closeRecent,
    isRemoveAnimation,
    addRecentItemClick,
    outIndex,
    recentItems,
    onRecentAddItemClick
  } = props
  const products = Object.keys(productDisplayDescription).length
    ? productDisplayDescription
    : [];
  if (products.length == 0 || products[products.length - 1].result !== "search") {
    products.push({ result: "search" });
  }

  console.log("recent itemmmmmmmmmmmmmmmmmm")
  console.log(recentItems)

  return (
    <div className="vs_lists">
      {
        products.map((item, index) => {
          return (
            item.result != "search"?
              <Animated animationIn="fadeInUp" animationOut="fadeOutLeft" animationInDelay={200} animationInDuration={500} animationOutDelay={200} animationOutDuration={500} isVisible={index == outIndex ? false : true}>
                <div key={index} id={"product" + item.result.product_id} className="item_animation animated fadeInUp">
                  <div className="vscol-2 vs2_box back_color">
                    <span className="vs-minus">
                      <img src={BUTTON_REMOVE} onClick={() => onCloseItem(item, item.result.product_id, index)} />
                    </span>
                    <div className="box-img">
                        <div className="vsbt-img">
                          <img src={typeof item.result.images !== 'undefined' && typeof item.result.images[1] !== 'undefined' ? item.result.images[1].name.thumb:PHONE_IMG} alt="" />
                        </div>
                        <div className="vsbt-para">
                          <p>{typeof item.result.name != "undefined" ? item.result.name : "Samsung"}</p>
                        </div>
                    </div>
                   
                    <div className="iphn-table box_tbl" style={{display:'flex',flexDirection:'column',textAlign:'left'}}>
                         {
                              Object.keys(item.result.specification).map(key=>
                                   
                                     <div>
                                         <div className="spec_attr">{key}</div>
                                           {
                                               Object.keys(item.result.specification[key]).map((data, i)=>data !== "Colors"?(
                                                <div className="spec_attr_property">
                                                <span>{data}</span>
                                                <span>{item.result.specification[key][data].value}</span>
                                                  </div>
                                               ):(
                                                 <div className="spec_color_part">
                                                  <span>{data}</span>
                                                {item.result.specification.Misc.Colors.value &&
                                                    item.result.specification.Misc.Colors.value.map((item1, i) => {
                                                      return (
                                                        <div className="iphnimg-col" key={i}>
                                                          {/* <div className="compare">
                                                            <img src={PHONE_IMG} alt="" />
                                                          </div> */}
                                                          <div className="custm_select">
                                                            <button className="color_select">
                                                              <div className="styles_color_part" style={{ backgroundColor: item1.code }}>
                                                              </div>
                                                            </button>
                                                            <span>{item1.color_name}</span>
                                                          </div>
                                                        </div>
                                                      )
                                                    })}
                                                                        
                                              </div>
                                               )
                                                    
                                               )
                                           }                                                               
                                     </div>
                                  
                                  
                                
                                )
                            

                         }
                    </div>
                 
                 
                  </div>

                </div>
              </Animated>
              :
              <div className="vscol-2" key="vsitemsearch">
                <div className="vs2-cont drp-crs">
                  <div className="buttons">
                    <img src={!isAddButtonClicked ? BUTTON_ADD : BUTTON_CLOSE} onClick={onAddItem} />
                  </div>
                  <p className={products.length == 1 ? "start" : "start disable"}>Start comparing by adding products.</p>
                  {isAddButtonClicked && (
                    < div className="vs-src animated zoomIn">
                      <span className="span1 ">
                        <Button onClick={onSearchModal} className="search" dataToggel="modal" dataTarget="#myModal">
                          <img src={SEARCH_IMG} />
                          Search
                    </Button>
                      </span>
                      <span className="span2">
                        <Button onClick={onRecentItems} className="search" dataToggel="modal" dataTarget="#myModal">
                          <img src={ICON_RECENT} />
                          Recent
                    </Button>
                      </span>
                    </div>
                  )}
                  {
                    isRecentItemVisible && isAddButtonClicked && (
                      <div className="recent_vs animated zoomIn">
                        <div style={{width:'100%'}}>
                          <div className="drp-licn">
                            <i className="fa fa-angle-left i_arrow" aria-hidden="true" onClick={closeRecent}></i>
                    <span className="item_text" onClick={closeRecent}><b className="color_bold">{recentItems.length}</b> recent items found.</span>
                          </div>
                          {recentItems.map((item, i) => {
                            return (
                              <div className="drp-crd" key={i}>
                                <div className="vsbt-cont">
                                  <div className="vsbt-img">
                                    <img src={PHONE_IMG} alt="" />
                                  </div>
                                  <div className="vsbt-para">
                                    <h3>{item.productName}</h3>
                                    <p className="r_product">{item.aboutProduct}</p>
                                  </div>
                                </div>
                                <span className="add_item" onClick={() => onRecentAddItemClick(item.productId)}>
                                  <i className="fa fa-plus" aria-hidden="true"></i>
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
          )
        })
      }
    </div >
  )
}

export default AddedItems
