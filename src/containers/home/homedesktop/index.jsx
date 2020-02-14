//@flow

import * as React from 'react'
import {ReactTitle} from 'react-meta-tags';

import { connect } from 'react-redux'
import Header from 'components/header'
import $ from 'jquery';
import { debounce } from 'lodash'
import InputSearchBar from 'components/inputSearchBar'
import ComparativeProductViewer from './ComparativeProductViewer.jsx'
import TrendingListSection from './TrendingListSection'
import ProductDescriptionModal from './ProductDescriptionModal'
import ReferenceApps from 'components/referenceApps/index'
import AboutPopup from 'components/aboutPopup'
import axios from 'axios'
import {
  filterButtonList,
  sideBarMenu,
  sideBarMenu1,
  sideBarMenu2,
  sideBarMenu3,
  socialApp,
  relatedProducts,
  tabList,
  tabPane,
  productDetailMenu1,
  productDetailMenu2
} from 'utils/metaData'
import '../homedesktop/styles.scss'
import Search from 'components/search/Search.jsx'
import {
  SEARCH_BY_NAME,
  GET_TRENDING_PRODUCTS,
  GET_CATEGORIES_PRODUCTS,
  GET_BRANDS,
  GET_DETAIL_PRODUCTION,
  GET_RELATED_PRODUCTS,
} from 'common/constants'
import {
  REVIEWS_SET_DATA
} from 'common/action';
import { trendingProductType } from 'common/types'
import { allVersionType } from 'common/types'
import { Item } from 'semantic-ui-react';



type Props = {
  history: {
    push: (path: string) => any
  },
  dispatch: ({ type: string, payload: any }) => any,
  deviceByName: Array<Object>,
  categories: Array<Object>,
  brands: Array<Object>,
  versionDetailState: Object,
  trendingProducts: Array<trendingProductType>,
  smartPhoneDetails: Object,
  relatedProductsToDevice: Array<Object>,
  cbfilterProducts: Object
}

type State = {
  activeFilter: string,
  isAboutPopup: boolean,
  activeTab: string,
  versionID: string,
  productID: string,
  isDescModalVisible: boolean,
  isSeeSpecModalVisible: boolean,
  productName: string,
  isArrowClicked: boolean,
  currentToolTip: string,
  isSuggestProductVisible: boolean,
  is_mic_show: boolean,
  productDetailItem: Object,
  sidebar: Array<Object>,
  isDropVisible: boolean,
  attributeItems: Array<string>,
  isSocialShareModal: boolean,
  isSocialCheck: boolean,
  backpart: boolean,
  backcheck: boolean,
  linkpart: boolean,
  linkcheck: boolean,
  embeddedpart: boolean,
  embeddedcheck: boolean,
  categoryID: string,
  AllversionDetail: Object,
  tempDetail: Object,
  loading: boolean,
  isCloseAboutPop: boolean,
  deviceID: boolean,
  isVisibleMenubar: boolean,
  isBackgroundSearchInput: boolean,
  istooltipClick: boolean,
  wasOriginalAppChanged: boolean,
  showTooltipNumber: number,
  goCountApp: number,
  isKeyAspectVisible: boolean,
  activedIndex: number
}

class DeskTopHome extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeFilter: 'Iphone X',
      isAboutPopup: true,
      activeTab: 'A1865',
      versionID: '',
      productID: '',
      categoryID: '',
      isDescModalVisible: false,
      isSeeSpecModalVisible: false,
      isSuggestProductVisible: false,
      is_mic_show: true,
      productName: '',
      currentToolTip: '',
      isArrowClicked: false,
      sidebar: sideBarMenu,
      productDetailItem: {},
      isDropVisible: false,
      attributeItems: [],
      closebutton: false,
      isSocialShareModal: false,
      isSocialCheck: true,
      AllversionDetail: {},
      loading: true,
      linkpart: false,
      linkcheck: true,
      backpart: false,
      backcheck: true,
      embeddedpart: true,
      embeddedcheck: true,
      isCloseAboutPop: false,
      deviceID: '',
      isVisibleMenubar: false,
      isBackgroundSearchInput: false,
      istooltipClick: false,
      wasOriginalAppChanged: false,
      showTooltipNumber: -1,
      goCountApp: 0,
      isKeyAspectVisible: false,
      clickedActive: false,
      activedIndex: -1,
    }
    // document.body.style.overflow = "scroll";

    document.body.id = "home-page";
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.convertToversionDetail1 = this.convertToversionDetail1.bind(this)
    props.dispatch({
      type: 'GET_TRENDING_PRODUCTS',
      payload: { url: GET_TRENDING_PRODUCTS }
    })

    props.dispatch({
      type: 'GET_CATEGORIES',
      payload: { url: GET_CATEGORIES_PRODUCTS }
    })

    props.dispatch({
      type: 'GET_BRANDS',
      payload: { url: GET_BRANDS }
    })


  }

  onFilterButtonClick = (activeFilter: string) => {
    this.setState({ activeFilter: activeFilter })
    //this.setState({productName:activeFilter})
    if (activeFilter != '') {
      document.getElementById("search_input").value = activeFilter
      this.props.dispatch({
        type: 'GET_DEVICE_BY_NAME',
        payload: { url: SEARCH_BY_NAME, name: activeFilter }
      })
    } else {
      this.props.dispatch({
        type: 'RESET',
        payload: { type: 'GET_DEVICE_BY_NAME_RESET' }
      })
    }
  }
  onPostReviewClick = (reviews: Array<Object>) => {
    this.props.dispatch({
      type: 'POST_REVIEW',
      payload: reviews
    })
  }

  onShortedProductClick = () => {
    this.setState({ isDescModalVisible: true });
    this.setState({ isAboutPopup: false });

  }

  onAdvanceSearhClick = () => { }

  onTrendingProductBtnClick = (device_id: string, category: string) => {
    console.log(category)
    this.setState({ categoryID: category })
    this.setState({ deviceID: device_id })
    this.props.dispatch({
      type: 'GET_SMARTPHONE_DETAILS',
      payload: { url: GET_DETAIL_PRODUCTION, deviceID: device_id, status: 1 }
    })
    const data = {
      'product_id': device_id,
     }
    axios.post('https://admin.techspecs.io/api/getReview', data)
      .then(res => {
        if (!res.data.error) {
         console.log("response------", res.data)
         this.props.dispatch({
          type: 'POST_REVIEW',
          payload: res.data
        })
        }
        else {
          console.log("error")
        }
      })
    this.setState({ isDescModalVisible: true, loading: false })
    this.setState({ isAboutPopup: false });
  }

  onModalOuterClick = () => {
    this.setState({ isDescModalVisible: false, categoryID: '', isKeyAspectVisible: false, isArrowClicked: false })
    this.setState({ isAboutPopup: true });
    this.setState({ isVisibleMenubar: false })
  }

  onAboutPopupClose = () => {
    this.setState({ isAboutPopup: false })
    this.setState({ isCloseAboutPop: true })
    localStorage.setItem("popup", "about")
  }

  onHideTrending = () => {
    this.setState({ isDropVisible: false })
  }
  onVisibleTrending = () => {
    this.setState({ isDropVisible: true })
  }

  onFeedBackClick = () => { }

  onProductTabChange = (
    versionID: string,
    activeTab: string,
    productID: string
  ) => {
    this.setState({ activeTab: activeTab })
    this.props.dispatch({
      type: 'GET_VERSION_SPECIALFICATION',
      payload: {
        url: GET_DETAIL_PRODUCTION,
        productId: productID,
        status: 1,
        versionId: versionID
      }
    })
  }


  componentWillReceiveProps(nextProps) {
    if (
      nextProps.smartPhoneDetails.smartPhoneDetails !==
      this.props.smartPhoneDetails.smartPhoneDetails
    ) {
      let activeTTab =
        typeof nextProps.smartPhoneDetails.smartPhoneDetails.result.version !== 'undefined' && nextProps.smartPhoneDetails.smartPhoneDetails.result.version.length > 0
          ? nextProps.smartPhoneDetails.smartPhoneDetails.result.version[0]
            .version_name : ""

      this.setState({ activeTab: activeTTab })
    }
  }
  onMobileColorSelect = event => { }

  onProductColorSelect = (event: SyntheticEvent<HTMLButtonElement>) => { }

  onProductDetails = (item, key) => {
    const { dispatch } = this.props
    this.setState({ deviceID: item.device_id, clickedActive: true, activedIndex: key })



    dispatch({
      type: 'GET_SMARTPHONE_DETAILS',
      payload: { url: GET_DETAIL_PRODUCTION, deviceID: item.device_id, status: 1 }
    })
    this.setState({
      isDescModalVisible: true,
      productDetailItem: item,
      categoryID: item.category_id
    })
    this.setState({ isAboutPopup: false });
  }

  onReferenceAppClick = (value) => {
    this.props.history.push('/app/versus')

    // this.setState({
    //   istooltipClick: true,
    //   wasOriginalAppChanged: true,
    //   showTooltipNumber: value,
    //   goCountApp: value + 1
    // })


  }

  onExploreAppClick = (value1) => {
    this.props.history.push('/app/explore')

    // if (value1 == 0) {
    //   this.props.history.push('/app/versus')
    // }
    // else if (value1 == 2) {
    //   this.props.history.push('/app/explore')
    // }

    // this.setState({ goCountApp: 0 })
  }

  getProductByName = debounce(productName => {
    const { dispatch } = this.props
    this.setState({ productName: productName })


    if (productName != '') {
      this.setState({ isSuggestProductVisible: true, is_mic_show: false })
      dispatch({
        type: 'GET_DEVICE_BY_NAME',
        payload: { url: SEARCH_BY_NAME, name: productName }
      })

      dispatch({
        type: 'RESET',
        payload: { type: 'GET_CB_FILTER_PRODUCTS_RESET' }
      })
      var element = document.getElementsByName("category_select");
      if (element.length > 0) {
        element[0].value = "";
      }
      console.log(element);

    } else {
      this.setState({ isSuggestProductVisible: false, is_mic_show: true })
      dispatch({
        type: 'RESET',
        payload: { type: 'GET_DEVICE_BY_NAME_RESET' }
      })
    }
  }, 200)

  clearSearchkeyword = () => {
    this.setState({ isSuggestProductVisible: false })
  }

  onTrendingMouseOver = currentToolTip => {
    this.setState({ currentToolTip })
  }

  onArrowClick = () => {
    if (this.state.categoryID !== '') {
      this.props.dispatch({
        type: 'GET_RELATED_PRODUCTS',
        payload: {
          url: GET_RELATED_PRODUCTS,
          categoryID: this.state.categoryID
        }
      })


      this.setState({ isArrowClicked: !this.state.isArrowClicked })


    }
  }

  callbackHome = data => {
    if (data === 0) {
      this.setState({ sidebar: sideBarMenu })
    }
    if (data === 1) {
      this.setState({ sidebar: sideBarMenu1 })
    }
    if (data === 2) {
      this.setState({ sidebar: sideBarMenu2 })
    }
    if (data === 3) {
      this.setState({ sidebar: sideBarMenu3 })
    }
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      e.target.value = ''
      this.getProductByName('')
    }
  }
  componentWillMount() {
    document.addEventListener('click', this.handleOutsideClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false)
  }
  onShareClick = () => {
    
    console.log("clikkkkkkkkkkkkkkk");
    console.log(this.state.isSocialCheck);
    console.log("$$$$$$$$$$$$$$$$$$$");
    console.log(this.state.isSocialShareModal);

    if (this.state.isSocialCheck) {

      this.setState({ isSocialShareModal: false })
      this.setState({ isSocialCheck: false })

    }
    else {
      this.setState({ isSocialShareModal: true })
      this.setState({ isSocialCheck: true })

    }

  }

  handleOutsideClick(event) {
    if (!event.target.classList.contains("social_in")) {
      this.setState({ isSocialShareModal: false })
      this.setState({ isSocialCheck: false })
    }
  }

  convertToversionDetail1 = (value1, value2) => {
    var temp = {}
    if (value1 !== [] && value2 !== {}) {
      value1.map((item, index) => {
        if (index == 0) {
          temp[item.version_name] = value2
        } else {
          temp[item.version_name] = {}
        }
      })

    }
  }

  onBackgroundSearchInput = (value) => {

    if (value == 1) {
      this.setState({ isBackgroundSearchInput: true })
    }
    else {
      this.setState({ isBackgroundSearchInput: false })
    }
  }
  onVisibleMenubarClick = () => {
    this.setState({ isVisibleMenubar: true })
  }
  onFBClick = (url) => {
    window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600'); return false;
  }

  onTwitterClick = (url) => {
    window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600'); return false;
  }

  onLinkClick = () => {

    this.setState({ linkpart: true })
    this.setState({ backpart: true })
    this.setState({ embeddedpart: true })
    var copyText = document.getElementById("Copysharelink");
    copyText.select();
    document.execCommand("copy");
  }
  onEmbeddedClick = () => {
    this.setState({ embeddedpart: false })
    this.setState({ backpart: true })
    this.setState({ linkpart: false })
    // var copyText = document.getElementById("embeded_code");
    // copyText.select();
    // document.execCommand("copy");
    let textarea = document.getElementById("embeded_code");
    textarea.select();
    document.execCommand("copy");

  }

  onAllBackClick = () => {
    this.setState({ linkpart: false })
    this.setState({ embeddedpart: true })
    this.setState({ backpart: false })
  }
  onVsItemClick = () => {
    console.log(this.state.deviceID)
    this.props.dispatch({
      type: 'GET_VS_MULTI_PRODUCTS',
      payload: { url: GET_DETAIL_PRODUCTION, deviceID: this.state.deviceID, status: 2 }
    })
    this.props.history.push('/app/versus')
  }

  onKeyAspectClick = () => {
    this.setState({ isKeyAspectVisible: true })
  }


  onhandleShow = (index) => {
    this.setState({ isKeyAspectVisible: false })
    var paneref = "panepart" + index;
    var paneindex = document.getElementsByClassName("paneindex");
    for (var j = 0; j < paneindex.length; j++) {
      paneindex[j].classList.remove("active");
    }
    paneindex[index].classList.add('active');

    var object = document.getElementById(paneref);
    object.scrollIntoView({ block: 'start', behavior: 'smooth' });
    var session_objects = document.getElementsByClassName("session_title")
    for (var i = 0; i < session_objects.length; i++) {
      session_objects[i].classList.remove("active");
    }
    session_objects[index].classList.add("active")
    var height = document.getElementById("table_part").scrollTop;
    var seperateHeight = document.getElementById("table_part").scrollHeight
    console.log(height)
  }
  onChangeReviewIndex = (index) =>{
    console.log("Change Review Index--------")
    this.setState({ isKeyAspectVisible: false })
    var paneref = "panepart" + index;
    var paneindex = document.getElementsByClassName("paneindex");
    for (var j = 0; j < paneindex.length; j++) {
      paneindex[j].classList.remove("active");
    }
    paneindex[index].classList.add('active');
      this.props.dispatch({
          type: 'REVIEW_INDEX_CHANGE',
          payload: index
      })
  }
  onHandleScroll = () => {

    var paneindex = document.getElementsByClassName("paneindex");
    var height = document.getElementById("table_part").scrollTop;
    var seperateHeight = document.getElementById("table_part").scrollHeight / 28;
    // console.log(height)
    // for (var j = 0; j < paneindex.length; j++) {
    //   paneindex[j].classList.remove("active");
    // }
    // if (height < 200) {
    //   paneindex[0].classList.add('active');
    // }
    // else if (height < 300) {
    //   paneindex[1].classList.add('active');
    // }
    // else if (height < 500) {
    //   paneindex[2].classList.add('active');
    // }
    // else {
    //   paneindex[3].classList.add('active');
    // }
  }
  render() {
    const {
      activeFilter,
      isAboutPopup,
      isDescModalVisible,
      isSuggestProductVisible,
      is_mic_show,
      productName,
      currentToolTip,
      isArrowClicked,
      productDetailItem,
      activeTab,
      isDropVisible,
      attributeItems,
      closebutton,
      isSocialShareModal,
      categoryID,
      isCloseAboutPop,
      isVisibleMenubar,
      isBackgroundSearchInput,
      istooltipClick,
      wasOriginalAppChanged,
      showTooltipNumber,
      goCountApp,
      isKeyAspectVisible,
      clickedActive,
      activedIndex
    } = this.state
    const {
      trendingProducts,
      deviceByName,
      categories,
      brands,
      smartPhoneDetails,
      versionDetailState,
      cbfilterProducts,
      relatedProductsToDevice,

    } = this.props
    console.log("###################")
    console.log(trendingProducts)

    return (
      <div className="wrapper test">
        <Header onFeedBackClick={this.onFeedBackClick} />
        <div className="techspec-cont">
          <div className="container cstm-container">
            <InputSearchBar
              labelClassName="blu-ipn"
              label="I want to find"
              activeFilter={activeFilter}
              filterButtonList={deviceByName}
              onFilterButtonClick={this.onFilterButtonClick}
              techClass="tech-ipt"
              techContentClass="tech-cont"
              deviceByName={deviceByName}
              isSuggestProductVisible={isSuggestProductVisible}
              tagRowClass="pos-relative"
              placeholder="iPhone X"
              defaultValue={productName}
              is_mic_show={is_mic_show}
              onValueChange={e => this.getProductByName(e.target.value)}
              handleKeyDown={this.handleKeyDown}
              isBackgroundSearchInput={isBackgroundSearchInput}
            >
              {/* <Search
                placeholder="iPhone X"
                defaultValue={productName}
                is_mic_show={is_mic_show}
                onValueChange={e => this.getProductByName(e.target.value)}
                handleKeyDown={this.handleKeyDown}
              /> */}
            </InputSearchBar>

            <ComparativeProductViewer
              deviceByName={deviceByName}
              cbfilteredProducts={cbfilterProducts}
              categories={categories}
              brands={brands}
              onShortedProductClick={this.onShortedProductClick}
              onAdvanceSearhClick={this.onAdvanceSearhClick}
              onProductDetails={this.onProductDetails}
              isBackgroundSearchInput={isBackgroundSearchInput}
              onBackgroundSearchInput={this.onBackgroundSearchInput}
              clickedActive={clickedActive}
              activedIndex={activedIndex}
            />
            {trendingProducts && (
              <TrendingListSection
                currentToolTip={currentToolTip}
                onMouseOver={this.onTrendingMouseOver}
                trendingProducts={trendingProducts}
                isDropVisible={isDropVisible}
                onTrendingProductBtnClick={this.onTrendingProductBtnClick}
                onHideTrending={this.onHideTrending}
                onVisibleTrending={this.onVisibleTrending}
              />
            )}
            <ReferenceApps
              onReferenceAppClick={this.onReferenceAppClick}
              onExploreAppClick={this.onExploreAppClick}
              istooltipClick={istooltipClick}
              wasOriginalAppChanged={wasOriginalAppChanged}
              showTooltipNumber={showTooltipNumber}
              goCountApp={goCountApp}
            />
          </div>
          {localStorage.getItem("popup") !== "about" &&
            <AboutPopup
              onAboutPopupClose={this.onAboutPopupClose}
              isAboutPopup={isAboutPopup}
              isCloseAboutPop={isCloseAboutPop}
            />
          }

        </div>

        {/* Product Description Modal */}
        {/* {isDescModalVisible && ( */}
        <ProductDescriptionModal
          {...this.state}
          onModalOuterClick={this.onModalOuterClick}
          sideBarMenu={this.state.sidebar}
          isDescModalVisible={isDescModalVisible}
          socialApp={socialApp}
          relatedProductsData={relatedProductsToDevice}
          tabList={tabList}
          tabPane={tabPane}
          productDetailMenu1={productDetailMenu1}
          productDetailMenu2={productDetailMenu2}
          productDetailItem={smartPhoneDetails}//detail information of product
          onProductTabChange={this.onProductTabChange}
          onProductColorSelect={this.onProductColorSelect}
          onAdvanceSearhClick={this.onAdvanceSearhClick}
          activeTab={activeTab}
          versionDetailState={versionDetailState}
          onShortedProductClick={this.onShortedProductClick}
          onArrowClick={this.onArrowClick}
          isArrowClicked={isArrowClicked}
          callbackHome={this.callbackHome}
          attributeItems={attributeItems}
          closebutton={closebutton}
          isSocialShareModal={isSocialShareModal}
          onShareClick={this.onShareClick}
          categoryID={categoryID}
          convertToversionDetail1={this.convertToversionDetail1}
          backPart={this.state.backpart}
          linkPart={this.state.linkpart}
          embeddedPart={this.state.embeddedpart}
          onFBClick={this.onFBClick}
          onTwitterClick={this.onTwitterClick}
          onLinkClick={this.onLinkClick}
          onEmbeddedClick={this.onEmbeddedClick}
          onAllBackClick={this.onAllBackClick}
          onVsItemClick={this.onVsItemClick}
          isVisibleMenubar={isVisibleMenubar}
          onVisibleMenubarClick={this.onVisibleMenubarClick}
          onKeyAspectClick={this.onKeyAspectClick}
          isKeyAspectVisible={isKeyAspectVisible}
          onhandleShow={this.onhandleShow}
          onHandleScroll={this.onHandleScroll}
          onPostReviewClick={this.onPostReviewClick}
          onChangeReviewIndex={this.onChangeReviewIndex}
          review = {this.props.review}
        />
        {/* )} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cbfilterProducts: state.cbfilterProducts,
    review: state.review
  }
}

// $FlowFixMe
export default connect(mapStateToProps)(DeskTopHome)
