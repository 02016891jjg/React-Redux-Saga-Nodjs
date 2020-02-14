//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery';
import Header from 'components/header'
import BreadCrum1 from 'components/breadCrum1'
import VersusSidebar from 'components/versusSidebar/index.jsx'
import VersusFooterItems from 'components/versusFooterItems'
import RecentItems from 'components/common/RecentItems'
import Button from 'components/common/buttonComponent/ButtonComponent'
import Modal from 'components/common/Modal'
import InputSearchBar from 'components/inputSearchBar'
import ShortedProduct from 'components/shortedProduct'
import SelectedItem from 'components/SelectedItems'
import BannerProduction from 'components/bannerproduction'
import SearchProductionModal from 'components/searchvsproduction'
import {
  breadCrumbData,
  recentProduct,
  versusFooterData,
  productDescription,
  productColors,
  productDisplayDescription,
  filterButtonList,
  addedItems,
  shortedProduct
} from 'utils/metaData'
import AddedItems from './AddedItems'

import './styles.scss'
import { SEARCH_IMG } from 'common/images'
import { GET_VS_FOOTER_PRODUCTS, GET_DETAIL_PRODUCTION } from 'common/constants'
import { addItem, removeItem, resetItem } from "common/action"



type Props = {
  dispatch: ({ type: string, payload: any }) => any,
  history: {
    push: (path: string) => any
  },
  onFeedBackClick: () => any,
  onBreadCrumClick: () => any,
  activeFilter: string,
  isAddButtonClicked: boolean,
  onAddItem: () => any,
  onSearchModal: () => any,
  onRecentItems: () => any,
  isRecentItemVisible: boolean,
  onCloseModal: () => any,
  onShortedProductClick: (val: any) => any,
  onFilterButton: (item: string) => any,
  isModalOpen: boolean,
  onVSButtonClick: (value1: string, value2: string) => any,
  onTextChange: (item: any) => any,
  isVSitemChecked: boolean,
  totalItems: Array<Object>,
  footerProducts: Object,
  multiProducts: Object,
  additems: Object,
  isBanner: boolean,
  closeRecent: () => any,
  recentadditems:Object,
  onRecentAddItemClick:(value:any) =>any

}

type State = {
  multiProductsState: Array<Object>,
  isVSitemChecked: boolean,
  isRemoveAnimation: boolean,
  isClosesidebar:boolean,

}

class VersusView extends Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      footerProducts: {},
      multiProductsState: [],
      isVSitemChecked: false,
      isRemoveAnimation: false,
      isClosesidebar:false,
      vsitems: []
    }

    props.dispatch({
      type: 'GET_VS_FOOTER_PRODUCTS',
      payload: { url: GET_VS_FOOTER_PRODUCTS }
    })


  }

  componentWillReceiveProps(nextProps) {

    console.log("component will receive props")
    this.setState({ vsitems: nextProps.multiProducts.multivsProducts })

  }

  componentWillMount() {

    console.log("component will Mount")

  }

  componentDidMount() {

  }

  componentWillUpdate(nextProps, nexState) {
    console.log("component will Update")

  }

  componentDidUpdate(previousProps) {
    console.log("component did update")
    if (!this.state) return;
  }



  onCloseItem = (Objectitem, index1) => {

    var array = this.state.vsitems;
    if (!index1) return;
    var ripItUpKey;
    array.forEach(function (item, index) {
      if (item.result.product_id === index1) {
        ripItUpKey = index;
      }
    });
    // const object = document.getElementById("product" + index1)
    // console.log(object)
    // $("#product" + index1).animate({
    //   'opacity': "0",
    //   'translateX': '-306',
    // }, 1000, function () {

    // });
    setTimeout(function () { //Start the timer
      if (ripItUpKey !== undefined) {
        array.splice(ripItUpKey, 1);
        this.setState({ vsitems: array });
      }
    }.bind(this), 300)


  }

  onVSButtonClick = (itemid1, itemid2) => {

    console.log(itemid1 + "," + itemid2)
    var product_id = itemid1 + "," + itemid2
    console.log(product_id)
    this.props.dispatch({
      type: 'GET_VS_MULTI_PRODUCTS',
      payload: { url: GET_DETAIL_PRODUCTION, deviceID: product_id, status: 2 }
    })
    this.setState({ isVSitemChecked: true })


  }
  
  onCloseReveal =() =>{
     
      this.setState({isClosesidebar:!this.state.isClosesidebar});

  }

  onReturnHome = () => {

    this.props.dispatch({

      type: 'RESET_VS_PRODUCTS'

    })


  }
  render() {
    const { multiProductsState, isVSitemChecked, isRemoveAnimation, vsitems,isClosesidebar} = this.state
    const {
      onFeedBackClick,
      onBreadCrumClick,
      activeFilter,
      isAddButtonClicked,
      onAddItem,
      onSearchModal,
      onRecentItems,
      isRecentItemVisible,
      onCloseModal,
      onShortedProductClick,
      onFilterButton,
      isModalOpen,
      onVSButtonClick,
      onTextChange,
      totalItems,
      footerProducts,
      multiProducts,
      additems,
      isBanner,
      closeRecent,
      recentadditems,
      onRecentAddItemClick
    } = this.props
    console.log("resultttttttttt")
    console.log(vsitems)
    return (
      <div className="containerf">
        <div className="box box-1">
          {/* <Header onFeedBackClick={onFeedBackClick} headerClass="header-wrapper" feedbackButton="feedback-style" vsFeedbutton="vs-feedbutton" /> */}
          <BreadCrum1 breadCrumbData={breadCrumbData} onReturnHome={this.onReturnHome} isBanner={isBanner} />
        </div>
        <div className="box box-2">
        
          <div className={!isClosesidebar?"versus_side":"close_side"}>
                <VersusSidebar />
          </div>
          <div className="versus_main">
          
            <div className="main1">
            <span className="close_reavel_btn" onClick={this.onCloseReveal}>
              {
                isClosesidebar&&(
                  <i className="fa fa-angle-right" style={{color:'white'}} aria-hidden="true"></i>
                )
              }
              {
                !isClosesidebar&&(
                  <i className="fa fa-angle-left" style={{color:'white'}} aria-hidden="true"></i>
                )
              }
            
            </span>
              <AddedItems
                productDisplayDescription={vsitems}
                onCloseItem={this.onCloseItem}
                multiProductsState={multiProductsState}
                isAddButtonClicked={isAddButtonClicked}
                onAddItem={onAddItem}
                isRecentItemVisible={isRecentItemVisible}
                onSearchModal={onSearchModal}
                onRecentItems={onRecentItems}
                closeRecent={closeRecent}
                isRemoveAnimation={isRemoveAnimation}
                recentItems={recentadditems}
                onRecentAddItemClick={onRecentAddItemClick}
              />
            </div>
            {
              !isClosesidebar&&(
                <div className={isBanner ? "main2 disable" : "main2"}>
               
                   <BannerProduction footerProducts={footerProducts} onVSButtonClick={this.onVSButtonClick} isBanner={isBanner} versusFooterData={versusFooterData} />
        
                 </div>
              )
              
            }
           
          </div>
        </div>
        {
          isModalOpen && (
            <SearchProductionModal onCloseModal={onCloseModal} onVSButtonClick={onVSButtonClick} />
          )

        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    additems: state.additems,
    footerProducts: state.vsFooterProducts.vsFooterProducts.result,
    multiProducts: state.multivsProducts,
    recentadditems:state.recentadditems.recentadditems
  }
}
export default connect(mapStateToProps)(VersusView)