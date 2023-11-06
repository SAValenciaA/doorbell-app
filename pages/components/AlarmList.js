import React from 'react'

export default function AlarmList(props) {
  return (
    <div className='w-50 d-flex'>
        <div className='w-50'>
            {props.alarmsWeek.map((alarm, key) => <div>N°{alarm.id} | {alarm.hour}:{alarm.minute}:{alarm.seconds} | {alarm.weekDay} | {alarm.ringtone}</div>)}
        </div>
        <div className='w-50'>
            {props.alarmsDate.map((alarm, key) => <div>N°{alarm.id} | {alarm.hour}:{alarm.minute}:{alarm.seconds} | {alarm.day}/{alarm.month}/{alarm.year} | {alarm.ringtone}</div>)}
        </div>
    </div>
  )
}
