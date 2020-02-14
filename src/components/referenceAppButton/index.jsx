//@flow

import React from 'react'

type Props = {
  data: Object,
  onReferenceAppClick: (val: any) => any,
  istooltipClick: boolean,
  wasOriginalAppChanged: boolean,
  showTooltipNumber: number,
  goCountApp: number
}

const ReferenceAppButton = (props: Props) => {
  const { onReferenceAppClick, data, onExploreAppClick, istooltipClick, wasOriginalAppChanged, showTooltipNumber, goCountApp } = props
  return (
    <div className={data.className} onClick={data.index === 2 ? onExploreAppClick : onReferenceAppClick}>
      <div className="apps-cont">
        <img src={data.img} alt={data.appName} />
        <p>{data.appName}</p>
        <div className="cstm_tooltip">
          <p>{data.description}</p>
          <p className="try_now">Try Now.</p>
        </div>
      </div>
    </div >
  )
}

export default ReferenceAppButton
