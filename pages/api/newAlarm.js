import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    if(req.method != "POST") {
        return res.status(405).json({message: 'Method not allowed'})
    }
    const data = JSON.parse(req.body)
    
    if(data.weekly) {
        const {weekly, d, m, y, ...alarm} = JSON.parse(req.body)
        const savedPerson = await prisma.alarmsByWeek.create( {
            data: alarm
        })
        res.json(prisma.alarmsByWeek.findMany())
    } else {
        const {weekly, w, ...alarm} = JSON.parse(req.body)
        const savedAlarm = await prisma.alarmsByDate.create( {
            data: alarm
        })
        res.json(prisma.alarmsByDate.findMany())
    }


}