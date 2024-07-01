import React from 'react'

export default function Peso(props){
    return(
        <div>
      <label>
        Peso
        <input type="text" value={props.p} onChange={(e)=>{props.sp(e.targed.value)}}/>
      </label>
    </div>
    )
}