//@flow

import * as React from 'react'
import FilterBtns from '../common/FilterButton'
import PropTypes from 'prop-types'
import SpeechRecognition from 'react-speech-recognition'
//define props
type Props = {
  labelClassName: string,
  children: React.Node,
  label: string,
  onFilterButtonClick: (item: string) => any,
  activeFilter: string,
  filterButtonList: Array<Object>,
  techClass: string,
  techContentClass: string,
  tagRowClass?: string,
  isSuggestProductVisible?: boolean,
  // deviceByName?: Object
  placeholder: string,
  defaultValue: string,
  is_mic_show: boolean,
  onValueChange: () => any,
  handleKeyDown: () => any,
  stopListening: boolean,
  startListening: boolean,
  isBackgroundSearchInput: boolean,
  deviceByName?: Object
}
const propTypes = {
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  isListening: PropTypes.bool,
  defaultValue: PropTypes.string
}

const options = {
  autoStart: false
}

let isListening = false

const InputSearchBar = (props: Props, state: State) => {
  const {
    labelClassName,
    children,
    onFilterButtonClick,
    activeFilter,
    filterButtonList,
    label,
    techClass,
    techContentClass,
    tagRowClass,
    isSuggestProductVisible,
    placeholder,
    defaultValue,
    is_mic_show,
    onValueChange,
    handleKeyDown,
    startListening,
    stopListening,
    isBackgroundSearchInput,
    deviceByName,
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = props

  const toggleListening = () => {
    isListening ? stopListening() : startListening()
    isListening = !isListening
  }

  const devices = Object.keys(deviceByName).length
    ? deviceByName.deviceByName.result
    : []
  console.log("suggestttttt")
  console.log(transcript)
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <div className={devices ? 'tech-ipt none-bottom ' : techClass}>
      <div className="bottom-adjust">
        <div className={devices ? 'tech_out active' : 'tech_out'}>
          <div className={techContentClass}>
            <label htmlFor="" className={labelClassName}>
              {label}
            </label>
            {/* {children} */}
            <input
              id="search_input"
              type="text"
              autoFocus
              placeholder={placeholder}
              onChange={onValueChange}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              defaultValue={transcript}
            />
            {is_mic_show && (
              // <button className="mic" type="button">
                    <button className="mic" type="button" onClick={toggleListening}>
 <i className="fa fa-microphone" aria-hidden="true"></i>
                    </button>
               
              // </button>
            )}
            {!is_mic_show && (
              <p className="clear_title"><b>ESC</b> to clear</p>
            )}

          </div>
          <div className={tagRowClass}>
            {isSuggestProductVisible && (
              <FilterBtns
                onClick={onFilterButtonClick}
                activeFilter={activeFilter}
                btnList={filterButtonList}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
InputSearchBar.propTypes = propTypes

export default SpeechRecognition(options)(InputSearchBar)

// export default InputSearchBar


