/* @jsxImportSource @emotion/react */
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { alert } from "../style"

export const Alert = (props) =>{
  return <div css={alert} style={{background:props.background}}>
    <div>{props.message}</div>
    <FontAwesomeIcon icon={faTimes} onClick={props.closeAlert}/>
  </div>
}