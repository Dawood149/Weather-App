import React from "react"
import Input from "./InputField/input field"
import SideNav from "./SideNav/side-nav"


export const Layout = (props) => {
    return (
      <div>
          {/* <Input/> */}
         <main>
          {props.children}
          </main>
          <SideNav/>
          
      </div>
    )
  }