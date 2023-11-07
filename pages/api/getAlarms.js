import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
    if(req.method != "GET") {
        return res.status(405).json({message: 'Method not allowed'})
    }

    const alarmsByDate = await prisma.alarmsByDate.findMany(  {orderBy: [
        {
          s: 'asc',
        }
      ]})
    const alarmsByWeek = await prisma.alarmsByWeek.findMany()
    res.json({
        specificDates: alarmsByDate,
        weeklyDates: alarmsByWeek
    })
}