import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'


export default function AlarmForm() {
    
    const [weekly, setWeekly] = useState(false);
    
    const [hour, setHour] = useState("")
    const [min, setMin] = useState("")
    const [sec, setSec] = useState("")
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [color, setColor] = useState("#ffffff")
    const [weekday, setWeekday] = useState([])
    
    const [ringtone, setRingtone] = useState("________")

    const numbers = [0,1,2,3,4,5,6,7,8]
    const weekdays = ["Lunes","Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    
    const replaceAt = function(s, index, replacement) {
        return s.substring(0, index) + replacement + s.substring(index + replacement.length);
    }

    const handleSubmit = async () => {
        var alarm = {
            h: Number(hour) ,
            min: Number(min),
            s: Number(sec),
            d: Number(day),
            m: Number(month),
            y: Number(year),
            r: ringtone,
            weekly: weekly,
            w: weekday,
            c: color
        }
        console.log(alarm)
        const res = await fetch('/api/newAlarm', {
            method:'POST',
            body: JSON.stringify(alarm)
        })

        window.location.reload(false); //Reload the page

    }


  return (
    <div className='col p-5 text-center'>
        <h1>Formulario para alarma</h1>
        <div className="my-4 w-50 m-auto">  
            <label className="form-check-label w-100">Semanal?</label>
            <input className="form-check-input" type="checkbox" role="switch" onClick={() => setWeekly(!weekly)} />
        </div>
        Ingrese la hora
        <div className="inputs-container m-auto mb-4">
            <input className='input' type='text' name='hour' placeholder='hora' maxLength={2} value={hour} onChange={(e) => setHour(e.target.value)} />
            <span className='span'>:</span>
            <input className='input' type='text' name='min' placeholder='min' maxLength={2} value={min} onChange={(e) => setMin(e.target.value)}/>
            <span className='span'>:</span>
            <input className='input' type='text' name='sec' placeholder='seg' maxLength={2} value={sec} onChange={(e) => setSec(e.target.value)} />
        </div>
        <div>
            {
            weekly ? 
            <div className="w-50 m-auto mt-5 d-flex button-container">
                {
                    weekdays.map((day, key) => 
                    <>
                        <button 
                        key={key} 
                        onClick={(e) => weekday.includes(key) ? setWeekday(weekday.filter((d) => d != key)) : setWeekday(weekday.concat(key))}
                        className={'m-1 button' + (weekday.includes(key)? "-active" : "-inactive")}>

                            {day}

                        </button>

                    </>
                    )
                }
            </div> 

            :
            <>
            Ingrese la fecha  
                <div className="inputs-container m-auto">
                    <input className='input' type='text' name='day' placeholder='dd' maxLength={2} value={day} onChange={(e) => setDay(e.target.value)} /> 

                    <span className='span'>/</span>

                    <input className='input' type='text' name='month' placeholder='mm' maxLength={2} value={month} onChange={(e) => setMonth(e.target.value)} />

                    <span className='span'>/</span>

                    <input className='input' type='text' name='year' placeholder='aa' maxLength={4} value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
            </>
            
            }
        </div>

        <div className='d-flex m-auto Checkboxes-container'>
        {
            numbers.map((key, num) =>
                <div key={key} className='Checkbox-container'>
                    <input 
                        className="Checkbox" 
                        name={'checkBox' + num} 
                        id={'checkBox' + num} 
                        type="checkBox" 
                        onChange={() => setRingtone(ringtone[num] == "." ? replaceAt(ringtone, num, "_") : replaceAt(ringtone, num, "." ))} />
                    <label className='Checkbox-face' htmlFor={'checkBox' + num}></label>
                </div>    
            )
        }
        </div>

        <div>
            ¿Que color quiere?
            <div>
                <input type='radio' name='color' id='color1' className='radio-color'/>
                <label className='radio-text' htmlFor='color1'>Predeterminado</label>
            </div>
            <div>
                <input type='radio' name='color' id='color2' className='radio-color'  />
                <label className='radio-text' htmlFor='color2'>Personalizado</label>
                <input type='color' className='color-picker'value={color} onChange={(e) => setColor(e.target.value)}/>
            </div>
        </div>

        <div className='submit-container'>
            <button onClick={handleSubmit}>Subir</button>
        </div>
    </div>
  )
}
