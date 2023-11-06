-- CreateTable
CREATE TABLE "alarmsByDate" (
    "id" SERIAL NOT NULL,
    "hour" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL,
    "seconds" INTEGER NOT NULL,
    "ringtone" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "alarmsByDate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alarmsByWeek" (
    "id" SERIAL NOT NULL,
    "hour" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL,
    "seconds" INTEGER NOT NULL,
    "ringtone" TEXT NOT NULL,
    "weekDay" INTEGER NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "alarmsByWeek_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ringtones" (
    "name" TEXT NOT NULL,
    "tone" TEXT NOT NULL,

    CONSTRAINT "ringtones_pkey" PRIMARY KEY ("name")
);
