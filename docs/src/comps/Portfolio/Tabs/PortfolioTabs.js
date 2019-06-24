import React from 'react';

// Components

import { tabs, cards } from './data.js';// Data file


class PortfolioTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabList: [],
      cardList: []
    };
  }

  componentDidMount() {
    this.setState({
      tabList: tabs,
      cardList: cards
    });
  }

  tabClickHandler() {
    
  }

  render() {
    return (
      <div className="comp">
        <div className="topics">
          {this.state.tabList.map(tab => {
            <Tab
              key={tab.text}
              dataTab={tab.dataTab}
              text={tab.text}
            />
          })}
        </div>

        <div>
          {this.state.cardList.map(card => {
            <Card
              key={card.id}
            />
          })}
        </div>
      </div>
    )
  }
}

export default PortfolioTabs;
