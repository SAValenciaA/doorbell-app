import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    if(req.method != "POST") {
        return res.status(405).json({message: 'Method not allowed'})
    }
    const data = JSON.parse(req.body)
    
    if(data.by == "date") {
        const deleteAlarm = prisma.alarmsByDate.delete(
            {
                where: { 
                    id: data.id 
                }
            }
            )
        res.json(prisma.alarmsByDate.findMany())
    } else {
        const deleteAlarm = prisma.alarmsByWeek.delete(
            {
                where: { id: data.id }}
            )
    }
    const ans = await prisma.alarmsByDate.findMany()
    console.log(ans)
    res.json(ans)

}