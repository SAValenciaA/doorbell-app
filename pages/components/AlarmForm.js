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
    const [color, setColor] = useState("")
    
    const [ringtone, setRingtone] = useState("________")

    const numbers = [0,1,2,3,4,5,6,7,8]
    
    const replaceAt = function(s, index, replacement) {
        return s.substring(0, index) + replacement + s.substring(index + replacement.length);
    }

    const handleSubmit = async () => {
        var alarm = {
            hour: Number(hour) ,
            minute: Number(min),
            seconds: Number(sec),
            day: Number(day),
            month: Number(month),
            year: Number(year),
            ringtone: ringtone,
            weekly: weekly,
            color: "255-255-255"
        }
        const res = await fetch('/api/newAlarm', {
            method:'POST',
            body: JSON.stringify(alarm)
        }) 
    }


  return (
    <div className='col p-5 text-center'>
        <h1>Formulario para alarma</h1>
        <div className="my-4 w-50 m-auto">  
            <label className="form-check-label w-100">Semanal?</label>
            <input className="form-check-input" type="checkbox" role="switch" onClick={() => setWeekly(!weekly)} />
        </div>
        Ingrese la hora
        <div className="input-group w-25 m-auto mb-4">
            <input className='form-control' type='text' name='hour' maxLength={2} value={hour} onChange={(e) => setHour(e.target.value)} />
            <span className='input-group-text'>:</span>
            <input className='form-control' type='text' name='min' maxLength={2} value={min} onChange={(e) => setMin(e.target.value)}/>
            <span className='input-group-text'>:</span>
            <input className='form-control' type='text' name='sec' maxLength={2} value={sec} onChange={(e) => setSec(e.target.value)} />
        </div>
        <div>
            {
            weekly ? 
            <select className="form-select w-50 m-auto mt-5">
                <option selected>Elige dia de la semana</option>
                <option value="1">Lunes</option>
                <option value="2">Martes</option>
                <option value="3">Miercoles</option>
                <option value="4">Jueves</option>
                <option value="5">Viernes</option>
                <option value="6">Sabado</option>
                <option value="7">Domingo</option>
            </select> 

            :
            <>
            Ingrese la fecha  
                <div className="input-group w-25 m-auto">
                    <input className='form-control' type='text' name='day' maxLength={2} value={day} onChange={(e) => setDay(e.target.value)} /> 

                    <span className='input-group-text'>/</span>

                    <input className='form-control' type='text' name='month' maxLength={2} value={month} onChange={(e) => setMonth(e.target.value)} />

                    <span className='input-group-text'>/</span>

                    <input className='form-control' type='text' name='year' maxLength={4} value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
            </>
            
            }
        </div>

        <div className='d-flex m-auto Checkboxes-container'>
        {
            numbers.map((num, key) =>
                <div className='Checkbox-container'>
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
                <input type='color' className='color-picker' />
            </div>
        </div>

        <div className='submit-container'>
            <button onClick={handleSubmit}>Subir</button>
        </div>
    </div>
  )
}
