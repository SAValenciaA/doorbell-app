import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import AlarmForm from '../components/AlarmForm'
import AlarmList from '../components/AlarmList'

import { PrismaClient } from '@prisma/client'
import { useEffect } from 'react'


const prisma = new PrismaClient()

export async function getServerSideProps() {
  const alarmsWeek = await prisma.alarmsByWeek.findMany()
  const alarmsDate = await prisma.alarmsByDate.findMany()
  const ringtones = await prisma.ringtones.findMany()
  return {
    props: {alarmsWeek, alarmsDate, ringtones}
  }
}

export default function Home({alarmsWeek, alarmsDate, ringtones}) {
  
  useEffect(() => {
    console.log(alarmsWeek)
    console.log(alarmsDate)
    console.log(ringtones)
  }, [])

  return (
    <div className="">
      <Head>
        <title>Doorbell App</title>
        <meta name="description" content="For your time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="d-flex flex-row vh-100">

        <AlarmForm className='col' />
        <AlarmList className='col' alarmsWeek={alarmsWeek} alarmsDate={alarmsDate} ringtones={ringtones} />
        
      </main>

    </div>
  )
}
