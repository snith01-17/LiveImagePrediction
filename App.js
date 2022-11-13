import react from "react"
import React from "react"
import { installReactHook } from "react-native/Libraries/Performance/Systrace"
import PickImage from "./screens/camera"

export default class App extends React.Component{
  render(){
    return(
      <PickImage/>
    )
  }
}