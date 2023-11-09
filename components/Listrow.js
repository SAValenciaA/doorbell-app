import React, { useEffect } from 'react'

export default function Listrow(props) {
  const week = ["Lunes","Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

  const date = new Date(null);
  date.setSeconds(props.alarm.s); // specify value for SECONDS here
  const timestampe = date.toISOString().slice(11, 19);


  function pad(num) {
    return String(num).padStart(2, '0');
  }

  const handleDelete = async () => {
    var data = props.alarm.w ? { id: props.alarm.id, by: "week" } : {id: props.alarm.id, by: "date" }
    const res = await fetch('/api/deleteAlarm', {
      method:'POST',
      body: JSON.stringify(data)
    })
    const val = await res.json()
    console.log(val)

  }

  return (
    <div className='list-item'>
      <span className='id value'> <button onClick={()=> handleDelete()}>Eliminar</button></span>
      <span className='id value'>{props.alarm.id}</span>
      <span className='value'>{timestampe}</span>

      {
        props.alarm.w ? <span className='value dayWeek'>{props.alarm.w.map((w) => <>{week[w]}, </>)}</span> : <span className='value date'>{pad(props.alarm.d) + "/" + pad(props.alarm.m) + "/" + props.alarm.y}</span>
      }
      <span className='value'>{props.alarm.r}</span>
      <span className='value color' style={{backgroundColor: props.alarm.c}}></span>
    </div>
  )
}