//@flow
import React, { useEffect } from 'react'
import $ from 'jquery'
import { debounce } from 'lodash'
import { MOBILE_IMG2, GOLD_PHONE, Silver_PHONE, Black_PHONE, ICON_CHECK } from 'common/images'
import ShortTable from 'components/shorttable'
import './styles.scss'
type PaneListTypes = { paneName: string }
type Props = {
  onProductColorSelect: (event: any) => string,
  paneList: Object,
  versionDetailState: Object,
  attributeItems: Array<string>,
  closebutton: boolean,
  isKeyAspectVisible: boolean,
  onHandleScroll: () => string
}

const ProductDescriptionTable = (props: Props) => {
  const { onProductColorSelect, paneList, versionDetailState, attributeItems, closebutton, isKeyAspectVisible, onHandleScroll } = props
  const panlistkeys = Object.keys(paneList).length ? Object.keys(paneList) : []
  const check = Object.keys(versionDetailState).length ? true : false
  console.log(check)
  const runOnScroll = function (evt) {
    // not the most exciting thing, but a thing nonetheless
    console.log(evt.target);
  };

  useEffect(() => {

    window.addEventListener('scroll', debounce(() => {

    }, 300))
  }, []);

  return panlistkeys ? (
    <div className="table_part" >
      <div className={isKeyAspectVisible ? "key-box" : "key-box disable"}>
        <div className="key-box1">
          <b>Key Aspects</b>
        </div>
        <div className="key-box2">
          <ul>
            <li className="key-content key1 animated fadeInRight">
              <div className="key-sub-title">
                <img src={ICON_CHECK} />
                <span>Faster A11 Bionic processor.</span>
              </div>
              <p>The iPhone X is powered by a 10-nanometer six-core 2.4GHz A11 Bionic chip designed by Apple. The A11 Bionic chip features two performance cores and four high-efficiency cores, all of which can be harnessed at the same time thanks to a second-generation performance controller resulting in 70 percent better performance for multi-threaded workflows and much better battery life.</p>
            </li>
            <li className="key-content key2 animated fadeInRight">
              <div className="key-sub-title">
                <img src={ICON_CHECK} />
                <span>Facial Recognition.</span>
              </div>
              <p>Face ID is a facial recognition system that replaces the Touch ID fingerprint sensor used for authentication purposes in earlier devices. Because Face ID takes a detailed 3D facial scan, it’s unable to be fooled by a photo, a mask, or other facial imitation, and there’s also an “attention aware” security feature.</p>
            </li>

            <li className="key-content key3 animated fadeInRight">
              <div className="key-sub-title">
                <img src={ICON_CHECK} />
                <span>Wireless inductive charging.</span>
              </div>
              <p>Apple chose glass for the body of the iPhone X to enable inductive wireless charging. Apple is using the Qi wireless charging standard that is also available in many Android phones, which means the iPhone X can charge wirelessly using any Qi-certified inductive charging device.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="table_inner_product" id="table_part" onScroll={onHandleScroll}>
        {
          check ? (
            panlistkeys.map((item, index) => {
              return (
                <ShortTable key={index} index={index} item={item} shortItems={typeof versionDetailState[item] !== 'undefined' ? versionDetailState[item] : {}} attributeItems={attributeItems} closebutton={closebutton} />
              )
            })
          ) : (
              panlistkeys.map((item, index) => {
                return (
                  <ShortTable key={index} index={index} item={item} shortItems={typeof paneList[item] !== 'undefined' ? paneList[item] : {}} attributeItems={attributeItems} closebutton={closebutton} />
                )
              })
            )
        }
      </div>
    </div >
  ) : null
}
export default ProductDescriptionTable

