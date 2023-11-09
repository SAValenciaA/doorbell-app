import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    if(req.method != "DELETE") {
        return res.status(405).json({message: 'Method not allowed'})
    }
    const data = JSON.parse(req.body)
    
    if(data.by == "date") {
        const deleteAlarm = await prisma.alarmsByDate.delete(
            {
                where: { 
                    id: data.id 
                }
            }
            )
        res.json(deleteAlarm)
    } else {
        const deleteAlarm = await prisma.alarmsByWeek.delete(
            {
                where: { id: data.id }}
            )
        res.json(deleteAlarm)
    }


}