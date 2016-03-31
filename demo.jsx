import React from 'react'
import HoverShifter from './index'

export default class HoverShifterDemo extends React.Component {
  render() {
    return <div>
      <h1>patchkit-hover-shifter</h1>
      <section className="hover-shifter">
        <header>&lt;HoverShifter&gt;</header>
        <div className="content">
          <div className="example">
            <HoverShifter>
              <div>Unhovered</div>
              <div>Hovered</div>
            </HoverShifter>
          </div>
        </div>
      </section>
    </div>
  }
}