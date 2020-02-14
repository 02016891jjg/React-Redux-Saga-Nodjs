//@flow

import React from 'react'
import { referenceAppsData } from 'utils/metaData'
import ReferenceAppButton from '../referenceAppButton/index.jsx'
import './styles.scss'

type Props = {
  onReferenceAppClick: (val: any) => any,
  onExploreAppClick: () => any,
  istooltipClick: boolean,
  wasOriginalAppChanged: boolean,
  showTooltipNumber: number,
  goCountApp: number
}
const ReferenceApps = (props: Props) => {
  const { onReferenceAppClick, onExploreAppClick, istooltipClick, wasOriginalAppChanged, showTooltipNumber, goCountApp } = props
  return (
    <div className="tech-app">
      <p>Apps</p>
      <div className="app-box">
        {referenceAppsData.map((data, index) => (
          <ReferenceAppButton
            key={index}
            data={data}
            onReferenceAppClick={onReferenceAppClick}
            onExploreAppClick={onExploreAppClick}
            istooltipClick={istooltipClick}
            wasOriginalAppChanged={wasOriginalAppChanged}
            showTooltipNumber={showTooltipNumber}
            goCountApp={goCountApp}
          />
        ))}
      </div>
    </div>
  )
}
export default ReferenceApps
