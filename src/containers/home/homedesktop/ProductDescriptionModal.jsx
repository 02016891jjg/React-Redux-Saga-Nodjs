//@flow

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ModalSideBar from 'components/modalSidebar'
import ModalHeader from 'components/modalHeader'
import RelatedProducts from 'components/relatedProducts'
import Tabs from 'components/common/Tabs'
import ProductDescriptionTable from 'components/productDescriptionTable'
import ProductVideos from 'components/productVideos'
import ReviewContainer from 'components/reviewContainer'
import CommentContainer from 'components/commentContainer'
import { BASE_URL } from 'common/constants'
import { WHITE_VS_ICN, SEARCH_IMG, CLOSE_IMG, ARROW_ICON, ICON_GREY_SEARCH } from 'common/images'
import './styles.scss'
import './hiddenoverflow.scss'
import { Any } from 'index'
var stringSimilarity = require('string-similarity');
type SocialAppType = { socialName: string, className: string }

type RelatedProductsType = { productName: string, version: string }

type TabListType = { tabName: string, status: string }
type TabPaneType = { paneName: string }

type Props = {
  onShortedProductClick: (val: any) => any,
  onAdvanceSearhClick: (val: any) => any,
  onProductTabChange: (val: string, val: string, val: string) => any,
  activeTab: string,
  onProductColorSelect: (event: any) => any,
  onModalOuterClick: (event: any) => any,
  socialApp: Array<SocialAppType>,
  sideBarMenu: Array<string>,
  relatedProductsData: Array<Object>,
  tabList: Array<TabListType>,
  tabPane: Array<TabPaneType>,
  onArrowClick: () => any,
  isArrowClicked: boolean,
  productDetailItem: Object,
  callbackHome: (data: number) => any,
  onhandleShow: (index: number) => any,
  versionDetailState: Object,
  attributeItems: Array<string>,
  review: Object,
  closebutton: boolean,
  isSocialShareModal: boolean,
  onShareClick: () => any,
  categoryID: string,
  backPart: boolean,
  linkPart: boolean,
  embeddedPart: boolean,
  isDescModalVisible: boolean,
  isVisibleMenubar: boolean,
  convertToversionDetail: (val: any, val: any) => any,
  convertToversionDetail1: (val: any, val: any) => any,
  onFBClick: () => any,
  onTwitterClick: () => any,
  onLinkClick: () => any,
  onEmbeddedClick: () => any,
  onAllBackClick: () => any,
  onVsItemClick: () => any,
  onVisibleMenubarClick: () => any,
  isKeyAspectVisible: boolean,
  onHandleScroll: () => any,
  onPostReviewClick: () => Any,
  onChangeReviewIndex: ()=>Any
}

const ProductDescriptionModal = (props: Props) => {
  const {
    socialApp,
    sideBarMenu,
    onProductTabChange,
    activeTab,
    onProductColorSelect,
    relatedProductsData,
    tabList,
    tabPane,
    productDetailMenu1,
    productDetailMenu2,
    onModalOuterClick,
    onArrowClick,
    isArrowClicked,
    productDetailItem,
    versionDetailState,
    attributeItems,
    closebutton,
    isSocialShareModal,
    onShareClick,
    categoryID,
    AllversionDetail,
    convertToversionDetail1,
    backPart,
    linkPart,
    embeddedPart,
    onFBClick,
    onTwitterClick,
    onLinkClick,
    onEmbeddedClick,
    onAllBackClick,
    isDescModalVisible,
    onVsItemClick,
    isVisibleMenubar,
    onVisibleMenubarClick,
    onKeyAspectClick,
    isKeyAspectVisible,
    onhandleShow,
    onHandleScroll,
    onPostReviewClick,
    review,
    onChangeReviewIndex
  } = props


  const [sidenav, setSideNav] = useState(0)
  const [activeIcon, setActiveIcon] = useState(0)
  const versiondetail = typeof versionDetailState.versionDetailState.result !== "undefined" ? versionDetailState.versionDetailState.result.specification : {};
  console.log(versiondetail)
  const images = typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.images : [];
  const specfications = typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.specification : {};
  const versions = typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.version : [];
  // const activedVersionTab = typeof versions[0] !== "undefined" ? versions[0].version_name : '';
  const name = typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.name : "";
  const prduct_id = typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.product_id : "";
  // convertToversionDetail1(versions, specfications)
  
  const callbackFunction = (data = 0) => {
    setSideNav(data)
    props.callbackHome(data)
  }

  const sideNavClick = i => {
    setActiveIcon(i)
    setSideNav(i)

  }
  const getAttributeByName = (value) => {
    var check=false;
    var id=""
    if (attributeItems !== "undefined" || attributeItems.length != 0) {

      for(var i=0;i<attributeItems.length;i++){
        if(attributeItems[i].toLowerCase().includes(value.toLowerCase())){
          check=true;
          id=attributeItems[i]
        }

      }
      if(value === ""){
        var object = document.getElementById("panepart0");
        object.scrollIntoView(true, { behavior: 'smooth' });
        var itemClasses=document.getElementsByClassName("attr_part");
        for(var k=0;k<itemClasses.length;k++){
          itemClasses[k].style.opacity =1;
        }
        var sessionClasses=document.getElementsByClassName("session_title");
        for(var j=0;j<sessionClasses.length;j++){
          sessionClasses[j].style.opacity=1;
        }
      }
      else{
        if (check) {
          var object = document.getElementById(id);
          object.scrollIntoView(true, { behavior: 'smooth' });
          var itemClasses=document.getElementsByClassName("attr_part");
          var sessionClasses=document.getElementsByClassName("session_title");
          for(var j=0;j<sessionClasses.length;j++){
            sessionClasses[j].style.opacity=0.1;
          }
          for(var k=0;k<itemClasses.length;k++){
            itemClasses[k].style.opacity = 0.1;
          }
          document.getElementById(id).style.opacity=1;
          
        } else {
          var object = document.getElementById("panepart0");
          object.scrollIntoView(true, { behavior: 'smooth' });
          var itemClasses=document.getElementsByClassName("attr_part");
          for(var k=0;k<itemClasses.length;k++){
            itemClasses[k].style.opacity =1;
          }
          var sessionClasses=document.getElementsByClassName("session_title");
          for(var j=0;j<sessionClasses.length;j++){
            sessionClasses[j].style.opacity=1;
          }
        }
      }
     
    }
  }

  console.log("description....................")
  console.log(specfications)
  return (
    <div className={isDescModalVisible ? "iphone left0" : "iphone"} >
      <div className="left-portion1" onClick={onModalOuterClick}>

      </div>
      <div className="left-portion">
        <ul className={isVisibleMenubar ? "social_login_icons" : "social_login_icons disable"}>
          {socialApp.map((item, i) => {
            return (
              <li
                className={activeIcon === i ? 'active' : ''}
                key={i}
                onClick={event => sideNavClick(i)}
              >
                <img src={item.className} alt="" />
              </li>
            )
          })}
        </ul>
      </div>
      <ModalSideBar
        sideBarIndex={sidenav}
        sideBarMenu={sideBarMenu}
        reviews = {review.reviews}
        Menus={specfications}
        productDetailMenu2={productDetailMenu2}
        socialApp={socialApp}
        parentCallback={callbackFunction}
        onhandleShow={onhandleShow}
        onChangeReviewIndex={onChangeReviewIndex}
        onVisibleMenubarClick={onVisibleMenubarClick}
        isVisibleMenubar={isVisibleMenubar}
        onKeyAspectClick={onKeyAspectClick}
        isKeyAspectVisible={isKeyAspectVisible}
        isDescModalVisible={isDescModalVisible}
        // deviceImage={typeof images[0] !== "undefined" ? images[0].name.original : ""}
        deviceImage=""
      />
      <div className="iphn-rgt">
        <ModalHeader
          onArrowClick={onArrowClick}
          isArrowClicked={isArrowClicked}
          onShareClick={onShareClick}
          isVisibleMenubar={isVisibleMenubar}
          deviceName={typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.name : ""}
        />

        <RelatedProducts relatedProductsData={relatedProductsData} isArrowClicked={isArrowClicked} />

        {sidenav == 0 && (
          <div className="spec-container">
            <div className="iphn-tab" id="iphone-table">
              <Tabs
                tabList={versions}
                onTabChange={onProductTabChange}
                activeTab={activeTab}
                productID={typeof productDetailItem.smartPhoneDetails.result !== "undefined" ? productDetailItem.smartPhoneDetails.result.product_id : ""}
              />
              {/* <button type="button" className="suggest_btn">
                <i className="fa fa-outdent" aria-hidden="true"></i> Suggest
                Edit
              </button> */}
              <div className="suggest_btn">
                <img src={ICON_GREY_SEARCH} />
                <input type="text" className="searchTerm"style={{textTransform:'capitalize'}} placeholder="Find a Spec..." onChange={(e) => getAttributeByName(e.target.value)} />
                <img className="close_size" src={CLOSE_IMG} />
              </div>

              <ProductDescriptionTable
                onProductColorSelect={onProductColorSelect}
                paneList={specfications}
                versionDetailState={versiondetail}
                attributeItems={attributeItems}
                closebutton={closebutton}
                isKeyAspectVisible={isKeyAspectVisible}
                onHandleScroll={onHandleScroll}
              />
            </div>
            <div className={isDescModalVisible ? "plus_toggle plus_toggle_fixed" : "plus_toggle"} onClick={onVsItemClick}>
              <Link to="">
                <span>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </span>
              </Link>
              <img src={WHITE_VS_ICN} alt="versus-icon" />
            </div>
          </div>
        )}
        {sidenav === 1 &&
          <ReviewContainer
            review={review}
            prduct_id={prduct_id}
            onPostReviewClick = {onPostReviewClick}
          />}
        {sidenav === 2 && <ProductVideos />}
        {sidenav === 3 && <CommentContainer />}
      </div>
      {
        isSocialShareModal && (
          <div className="social_part social_in">
            {
              backPart ? <div className="back_part social_in" onClick={onAllBackClick}>
                <i className="fa fa-angle-left icon_size social_in" />
                <b className="back_title social_in" >Back</b>
              </div> : null
            }

            <div className="share_social_part social_in" id="social">
              <div className="face_style social_in" onClick={() => onFBClick("https://www.facebook.com/sharer/sharer.php?u=" + BASE_URL + "/specs/" + prduct_id)}>
                <i className="fa fa-facebook-f face_name social_in"></i>
              </div>
              <div className="face_style twitter social_in" onClick={() => onTwitterClick("https://twitter.com/intent/tweet?text=Check out " + name + " on @Techspecs " + BASE_URL + "/specs/" + prduct_id)}>
                <i className="fa fa-twitter face_name social_in"></i>
              </div>
              <div className="face_style chain social_in" onClick={() => onLinkClick("")}>
                <i className="fa fa-link face_name social_in"></i>
                <input type="text" id="Copysharelink" defaultValue={BASE_URL + "/specs/" + prduct_id} />
              </div>
              <div className="face_style embed social_in" onClick={onEmbeddedClick}>
                <i className="fa fa-code face_name social_in"></i>
                <input type="text" id="embeded_code" defaultValue={'<iframe src="https://techspecs.io/embed/' + prduct_id + '" width="880" height="520" frameborder="0" scrolling="yes" style="max-width: 100%;height:520px;"></iframe>'} />
              </div>
            </div>        
            {
              linkPart ? <div className="link_part social_in">
                <p className="social_in">Link has been copied.</p>
              </div> : null
            }
            {
              !embeddedPart ? <div className="bottom_part social_in">
                <div className="bottom_part1">
                  <textarea className="embeded_code social_in" defaultValue={'<iframe src="https://techspecs.io/embed/' + prduct_id + '" width="880" height="520" frameborder="0" scrolling="yes" style="max-width: 100%;height:520px;"></iframe>'}></textarea>
                </div>
                <div className="bottom_part2 social_in">
                  <p className="social_in">Embed code has been copied.</p>
                </div>
              </div> : null
            }
          </div>
        )

      }

    </div>
  )
}
export default ProductDescriptionModal
