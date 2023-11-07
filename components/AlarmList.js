import React from 'react'
import Listrow from './Listrow'

export default function AlarmList(props) {

  const {alarmsDate = []} = props
  const {alarmsWeek = []} = props

  return (
    <div className='list'>
        <div className='half'>
            {props.alarmsWeek.map((alarm, key) => <Listrow alarm={alarm} key={key} />)}
        </div>
        <div className='half'>
            {props.alarmsDate.map((alarm, key) => <Listrow alarm={alarm} key={key} />)}
        </div>
    </div>
  )
}
