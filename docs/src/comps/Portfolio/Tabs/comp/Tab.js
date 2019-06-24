import React from 'react';

export const Card = props => {
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}
    >
      <div className="tab" data-tab={props.dataTab}>{props.text}</div>
    </div>
  )
}
