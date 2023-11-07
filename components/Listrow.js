import React, { useEffect } from 'react'

export default function Listrow(props) {
  const week = ["Lunes","Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

  function pad(num) {
    return String(num).padStart(2, '0');
  }
  return (
    <div className='list-item'>
      <span className='id value'>{props.alarm.id}</span>
      <span className='value'>{pad(props.alarm.h) + ":" + pad(props.alarm.min) + ":" + pad(props.alarm.s)}</span>

      {
        props.alarm.w ? <span className='value dayWeek'>{props.alarm.w.map((w) => <>{week[w]}, </>)}</span> : <span className='value date'>{pad(props.alarm.d) + "/" + pad(props.alarm.m) + "/" + props.alarm.y}</span>
      }
      <span className='value'>{props.alarm.r}</span>
      <span className='value color' style={{backgroundColor: props.alarm.c}}></span>
    </div>
  )
}