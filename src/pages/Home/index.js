import React, { Component } from 'react';
import './home.scss';
import { observer, inject } from "mobx-react"

@inject(stores => {
  return {
    Global: stores.appStore.Global
  }
})
@observer
class Home extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <p className="home">{this.props.Global.name}</p>
      </div>
    )
  }
}

export default Home