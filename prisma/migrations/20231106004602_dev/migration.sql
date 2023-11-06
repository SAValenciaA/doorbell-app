-- CreateTable
CREATE TABLE "alarmsByDate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hour" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL,
    "seconds" INTEGER NOT NULL,
    "ringtone" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "color" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "alarmsByWeek" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hour" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL,
    "seconds" INTEGER NOT NULL,
    "ringtone" TEXT NOT NULL,
    "weekDay" INTEGER NOT NULL,
    "color" TEXT NOT NULL
);
