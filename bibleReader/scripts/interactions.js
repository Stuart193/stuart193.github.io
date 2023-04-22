

var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1;
var currentYear = currentDate.getYear();
const currentMonthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var currentDayLocation = currentDay;
var currentMonthLocation = currentMonth;

function navigateToPast() {

    currentDayLocation--;
    if (currentDayLocation <= 0) {
        switch (currentMonthLocation) {
            case 1:
                currentDayLocation = 31;
                currentMonthLocation = 12;
                break;
            case 2:
                currentDayLocation = 31;
                currentMonthLocation = 1;
                break;
            case 3:
                if ((currentYear % 4) == 0) {
                    currentDayLocation = 29;
                    currentMonthLocation = 2;
                }
                else {
                    currentDayLocation = 28;
                    currentMonthLocation = 2;
                }
                break;
            case 4:
                currentDayLocation = 31;
                currentMonthLocation = 3;
                break;
            case 5:
                currentDayLocation = 30;
                currentMonthLocation = 4;
                break;
            case 6:
                currentDayLocation = 31;
                currentMonthLocation = 5;
                break;
            case 7:
                currentDayLocation = 30;
                currentMonthLocation = 6;
                break;
            case 8:
                currentDayLocation = 31;
                currentMonthLocation = 7;
                break;
            case 9:
                currentDayLocation = 31;
                currentMonthLocation = 8;
                break;
            case 10:
                currentDayLocation = 30;
                currentMonthLocation = 9;
                break;
            case 11:
                currentDayLocation = 31;
                currentMonthLocation = 10;
                break;
            case 12:
                currentDayLocation = 30;
                currentMonthLocation = 11;
                break;
        }
    }
    contentUpdate();

}

function navigateToToday() {

    currentMonthLocation = currentMonth;
    currentDayLocation = currentDay;
    contentUpdate();

}

function navigateToFuture() {

    currentDayLocation++;
    switch (currentMonthLocation) {
        case 1:
            if (currentDayLocation > 31) {
                currentDayLocation = 1;
                currentMonthLocation = 2;
            }
            break;
        case 2:
            if ((currentYear % 4) == 0) {
                if (currentDayLocation > 29) {
                    currentDayLocation = 1;
                    currentMonthLocation = 3;
                }
            }
            else {
                if (currentDayLocation > 28) {
                    currentDayLocation = 1;
                    currentMonthLocation = 3;
                }
            }
            break;
        case 3:
            if (currentDayLocation > 31) {
                currentDayLocation = 1;
                currentMonthLocation = 4;
            }
            break;
        case 4:
            if (currentDayLocation > 30) {
                currentDayLocation = 1;
                currentMonthLocation = 5;
            }
            break;
        case 5:
            if (currentDayLocation > 31) {
                currentDayLocation = 1;
                currentMonthLocation = 6;
            }
            break;
        case 6:
            if (currentDayLocation > 30) {
                currentDayLocation = 1;
                currentMonthLocation = 7;
            }
            break;
        case 7:
            if (currentDayLocation > 31) {
                currentDayLocation = 1;
                currentMonthLocation = 8;
            }
            break;
        case 8:
            if (currentDayLocation > 31) {
                currentDayLocation = 1;
                currentMonthLocation = 9;
            }
            break;
        case 9:
            if (currentDayLocation > 30) {
                currentDayLocation = 1;
                currentMonthLocation = 10;
            }
            break;
        case 10:
            if (currentDayLocation > 31) {
                currentDayLocation = 1;
                currentMonthLocation = 11;
            }
            break;
        case 11:
            if (currentDayLocation > 30) {
                currentDayLocation = 1;
                currentMonthLocation = 12;
            }
            break;
        case 12:
            if (currentDayLocation > 31) {
                currentDayLocation = 1;
                currentMonthLocation = 1;
            }
            break;
    }
    contentUpdate();

}

function contentUpdate() {

    document.getElementById("dateText").innerHTML = currentDayLocation + " " + currentMonthName[currentMonthLocation - 1];
    document.getElementById("proverbsReading").innerHTML = "Proverbs " + currentDayLocation;
    if (currentMonthLocation == 4) {
        switch (currentDayLocation) {
            case 1:
                document.getElementById("psalmReading").innerHTML = "Psalm 13";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 1";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 5";
                document.getElementById("gospelReading").innerHTML = "Matthew 2";
                document.getElementById("historyAndLettersReading").innerHTML = "Colossians 2";
                break;
            case 2:
                document.getElementById("psalmReading").innerHTML = "Psalm 14";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 2";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 6";
                document.getElementById("gospelReading").innerHTML = "Matthew 3";
                document.getElementById("historyAndLettersReading").innerHTML = "Colossians 3";
                break;
            case 3:
                document.getElementById("psalmReading").innerHTML = "Psalm 14";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 3";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 7";
                document.getElementById("gospelReading").innerHTML = "Matthew 4";
                document.getElementById("historyAndLettersReading").innerHTML = "Colossians 4";
                break;
            case 4:
                document.getElementById("psalmReading").innerHTML = "Psalm 14";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 4";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 8";
                document.getElementById("gospelReading").innerHTML = "Matthew 5";
                document.getElementById("historyAndLettersReading").innerHTML = "I Thessalonians 1";
                break;
            case 5:
                document.getElementById("psalmReading").innerHTML = "Psalm 14";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 5";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 9";
                document.getElementById("gospelReading").innerHTML = "Matthew 6";
                document.getElementById("historyAndLettersReading").innerHTML = "I Thessalonians 2";
                break;
            case 6:
                document.getElementById("psalmReading").innerHTML = "Psalm 14";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 6";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 10";
                document.getElementById("gospelReading").innerHTML = "Matthew 7";
                document.getElementById("historyAndLettersReading").innerHTML = "I Thessalonians 3";
                break;
            case 7:
                document.getElementById("psalmReading").innerHTML = "Psalm 14";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 7";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 11";
                document.getElementById("gospelReading").innerHTML = "Matthew 8";
                document.getElementById("historyAndLettersReading").innerHTML = "I Thessalonians 4";
                break;
            case 8:
                document.getElementById("psalmReading").innerHTML = "Psalm 14";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 8";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 12";
                document.getElementById("gospelReading").innerHTML = "Matthew 9";
                document.getElementById("historyAndLettersReading").innerHTML = "I Thessalonians 5";
                break;
            case 9:
                document.getElementById("psalmReading").innerHTML = "Psalm 15";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 9";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 13";
                document.getElementById("gospelReading").innerHTML = "Matthew 10";
                document.getElementById("historyAndLettersReading").innerHTML = "II Thessalonians 1";
                break;
            case 10:
                document.getElementById("psalmReading").innerHTML = "Psalm 15";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 10";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 14";
                document.getElementById("gospelReading").innerHTML = "Matthew 11";
                document.getElementById("historyAndLettersReading").innerHTML = "II Thessalonians 2";
                break;
            case 11:
                document.getElementById("psalmReading").innerHTML = "Psalm 15";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 11";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 15";
                document.getElementById("gospelReading").innerHTML = "Matthew 12";
                document.getElementById("historyAndLettersReading").innerHTML = "II Thessalonians 3";
                break;
            case 12:
                document.getElementById("psalmReading").innerHTML = "Psalm 15";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 12";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 16";
                document.getElementById("gospelReading").innerHTML = "Matthew 13";
                document.getElementById("historyAndLettersReading").innerHTML = "I Timothy 1";
                break;
            case 13:
                document.getElementById("psalmReading").innerHTML = "Psalm 15";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 13";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 17";
                document.getElementById("gospelReading").innerHTML = "Matthew 14";
                document.getElementById("historyAndLettersReading").innerHTML = "I Timothy 2";
                break;
            case 14:
                document.getElementById("psalmReading").innerHTML = "Psalm 15";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 14";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 18";
                document.getElementById("gospelReading").innerHTML = "Matthew 15";
                document.getElementById("historyAndLettersReading").innerHTML = "I Timothy 3";
                break;
            case 15:
                document.getElementById("psalmReading").innerHTML = "Psalm 15";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 15";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 19";
                document.getElementById("gospelReading").innerHTML = "Matthew 16";
                document.getElementById("historyAndLettersReading").innerHTML = "I Timothy 4";
                break;
            case 16:
                document.getElementById("psalmReading").innerHTML = "Psalm 16";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 16";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 20";
                document.getElementById("gospelReading").innerHTML = "Matthew 17";
                document.getElementById("historyAndLettersReading").innerHTML = "I Timothy 5";
                break;
            case 17:
                document.getElementById("psalmReading").innerHTML = "Psalm 16";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 17";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 21";
                document.getElementById("gospelReading").innerHTML = "Matthew 18";
                document.getElementById("historyAndLettersReading").innerHTML = "I Timothy 6";
                break;
            case 18:
                document.getElementById("psalmReading").innerHTML = "Psalm 16";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 18";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 22";
                document.getElementById("gospelReading").innerHTML = "Matthew 19";
                document.getElementById("historyAndLettersReading").innerHTML = "II Timothy 1";
                break;
            case 19:
                document.getElementById("psalmReading").innerHTML = "Psalm 16";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 19";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 23";
                document.getElementById("gospelReading").innerHTML = "Matthew 20";
                document.getElementById("historyAndLettersReading").innerHTML = "II Timothy 2";
                break;
            case 20:
                document.getElementById("psalmReading").innerHTML = "Psalm 16";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 20";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 24";
                document.getElementById("gospelReading").innerHTML = "Matthew 21";
                document.getElementById("historyAndLettersReading").innerHTML = "II Timothy 3";
                break;
            case 21:
                document.getElementById("psalmReading").innerHTML = "Psalm 16";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 21";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 25";
                document.getElementById("gospelReading").innerHTML = "Matthew 22";
                document.getElementById("historyAndLettersReading").innerHTML = "II Timothy 4";
                break;
            case 22:
                document.getElementById("psalmReading").innerHTML = "Psalm 16";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 22";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 26";
                document.getElementById("gospelReading").innerHTML = "Matthew 23";
                document.getElementById("historyAndLettersReading").innerHTML = "Titus 1";
                break;
            case 23:
                document.getElementById("psalmReading").innerHTML = "Psalm 17";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 23";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 27";
                document.getElementById("gospelReading").innerHTML = "Matthew 24";
                document.getElementById("historyAndLettersReading").innerHTML = "Titus 2";
                break;
            case 24:
                document.getElementById("psalmReading").innerHTML = "Psalm 17";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 24";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 28";
                document.getElementById("gospelReading").innerHTML = "Matthew 25";
                document.getElementById("historyAndLettersReading").innerHTML = "Titus 3";
                break;
            case 25:
                document.getElementById("psalmReading").innerHTML = "Psalm 17";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 25";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 29";
                document.getElementById("gospelReading").innerHTML = "Matthew 26";
                document.getElementById("historyAndLettersReading").innerHTML = "Philemon";
                break;
            case 26:
                document.getElementById("psalmReading").innerHTML = "Psalm 17";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 26";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 30";
                document.getElementById("gospelReading").innerHTML = "Matthew 27";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 1";
                break;
            case 27:
                document.getElementById("psalmReading").innerHTML = "Psalm 17";
                document.getElementById("lawAndHistoryReading").innerHTML = "Leviticus 27";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 31";
                document.getElementById("gospelReading").innerHTML = "Matthew 28";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 2";
                break;
            case 28:
                document.getElementById("psalmReading").innerHTML = "Psalm 17";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 1";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 32";
                document.getElementById("gospelReading").innerHTML = "Mark 1";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 3";
                break;
            case 29:
                document.getElementById("psalmReading").innerHTML = "Psalm 17";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 2";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 33";
                document.getElementById("gospelReading").innerHTML = "Mark 2";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 4";
                break;
            case 30:
                document.getElementById("psalmReading").innerHTML = "Psalm 18";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 3";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 34";
                document.getElementById("gospelReading").innerHTML = "Mark 3";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 5";
                break;
        }
    }

    if (currentMonthLocation == 5) {
        switch (currentDayLocation) {
            case 1:
                document.getElementById("psalmReading").innerHTML = "Psalm 18";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 4";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 35";
                document.getElementById("gospelReading").innerHTML = "Mark 4";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 6";
                break;
            case 2:
                document.getElementById("psalmReading").innerHTML = "Psalm 18";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 5";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 36";
                document.getElementById("gospelReading").innerHTML = "Mark 5";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 7";
                break;
            case 3:
                document.getElementById("psalmReading").innerHTML = "Psalm 18";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 6";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 37";
                document.getElementById("gospelReading").innerHTML = "Mark 6";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 8";
                break;
            case 4:
                document.getElementById("psalmReading").innerHTML = "Psalm 18";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 7";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 38";
                document.getElementById("gospelReading").innerHTML = "Mark 7";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 9";
                break;
            case 5:
                document.getElementById("psalmReading").innerHTML = "Psalm 18";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 8";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 39";
                document.getElementById("gospelReading").innerHTML = "Mark 8";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 10";
                break;
            case 6:
                document.getElementById("psalmReading").innerHTML = "Psalm 18";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 9";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 40";
                document.getElementById("gospelReading").innerHTML = "Mark 9";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 11";
                break;
            case 7:
                document.getElementById("psalmReading").innerHTML = "Psalm 19";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 10";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 41";
                document.getElementById("gospelReading").innerHTML = "Mark 10";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 12";
                break;
            case 8:
                document.getElementById("psalmReading").innerHTML = "Psalm 19";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 11";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 42";
                document.getElementById("gospelReading").innerHTML = "Mark 11";
                document.getElementById("historyAndLettersReading").innerHTML = "Hebrews 13";
                break;
            case 9:
                document.getElementById("psalmReading").innerHTML = "Psalm 19";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 12";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 43";
                document.getElementById("gospelReading").innerHTML = "Mark 12";
                document.getElementById("historyAndLettersReading").innerHTML = "James 1";
                break;
            case 10:
                document.getElementById("psalmReading").innerHTML = "Psalm 19";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 13";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 44";
                document.getElementById("gospelReading").innerHTML = "Mark 13";
                document.getElementById("historyAndLettersReading").innerHTML = "James 2";
                break;
            case 11:
                document.getElementById("psalmReading").innerHTML = "Psalm 19";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 14";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 45";
                document.getElementById("gospelReading").innerHTML = "Mark 14";
                document.getElementById("historyAndLettersReading").innerHTML = "James 3";
                break;
            case 12:
                document.getElementById("psalmReading").innerHTML = "Psalm 19";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 15";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 46";
                document.getElementById("gospelReading").innerHTML = "Mark 15";
                document.getElementById("historyAndLettersReading").innerHTML = "James 4";
                break;
            case 13:
                document.getElementById("psalmReading").innerHTML = "Psalm 19";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 16";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 47";
                document.getElementById("gospelReading").innerHTML = "Mark 16";
                document.getElementById("historyAndLettersReading").innerHTML = "James 5";
                break;
            case 14:
                document.getElementById("psalmReading").innerHTML = "Psalm 20";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 17";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 48";
                document.getElementById("gospelReading").innerHTML = "Luke 1";
                document.getElementById("historyAndLettersReading").innerHTML = "I Peter 1";
                break;
            case 15:
                document.getElementById("psalmReading").innerHTML = "Psalm 20";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 18";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 49";
                document.getElementById("gospelReading").innerHTML = "Luke 2";
                document.getElementById("historyAndLettersReading").innerHTML = "I Peter 2";
                break;
            case 16:
                document.getElementById("psalmReading").innerHTML = "Psalm 20";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 19";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 50";
                document.getElementById("gospelReading").innerHTML = "Luke 3";
                document.getElementById("historyAndLettersReading").innerHTML = "I Peter 3";
                break;
            case 17:
                document.getElementById("psalmReading").innerHTML = "Psalm 20";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 20";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 51";
                document.getElementById("gospelReading").innerHTML = "Luke 4";
                document.getElementById("historyAndLettersReading").innerHTML = "I Peter 4";
                break;
            case 18:
                document.getElementById("psalmReading").innerHTML = "Psalm 20";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 21";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Jeremiah 52";
                document.getElementById("gospelReading").innerHTML = "Luke 5";
                document.getElementById("historyAndLettersReading").innerHTML = "I Peter 5";
                break;
            case 19:
                document.getElementById("psalmReading").innerHTML = "Psalm 20";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 22";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Lamentations 1";
                document.getElementById("gospelReading").innerHTML = "Luke 6";
                document.getElementById("historyAndLettersReading").innerHTML = "II Peter 1";
                break;
            case 20:
                document.getElementById("psalmReading").innerHTML = "Psalm 20";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 23";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Lamentations 2";
                document.getElementById("gospelReading").innerHTML = "Luke 7";
                document.getElementById("historyAndLettersReading").innerHTML = "II Peter 2";
                break;
            case 21:
                document.getElementById("psalmReading").innerHTML = "Psalm 21";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 24";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Lamentations 3";
                document.getElementById("gospelReading").innerHTML = "Luke 8";
                document.getElementById("historyAndLettersReading").innerHTML = "II Peter 3";
                break;
            case 22:
                document.getElementById("psalmReading").innerHTML = "Psalm 21";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 25";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Lamentations 4";
                document.getElementById("gospelReading").innerHTML = "Luke 9";
                document.getElementById("historyAndLettersReading").innerHTML = "I John 1";
                break;
            case 23:
                document.getElementById("psalmReading").innerHTML = "Psalm 21";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 26";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Lamentations 5";
                document.getElementById("gospelReading").innerHTML = "Luke 10";
                document.getElementById("historyAndLettersReading").innerHTML = "I John 2";
                break;
            case 24:
                document.getElementById("psalmReading").innerHTML = "Psalm 21";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 27";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Ezekiel 1";
                document.getElementById("gospelReading").innerHTML = "Luke 11";
                document.getElementById("historyAndLettersReading").innerHTML = "I John 3";
                break;
            case 25:
                document.getElementById("psalmReading").innerHTML = "Psalm 21";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 28";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Ezekiel 2";
                document.getElementById("gospelReading").innerHTML = "Luke 12";
                document.getElementById("historyAndLettersReading").innerHTML = "I John 4";
                break;
            case 26:
                document.getElementById("psalmReading").innerHTML = "Psalm 21";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 29";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Ezekiel 3";
                document.getElementById("gospelReading").innerHTML = "Luke 13";
                document.getElementById("historyAndLettersReading").innerHTML = "I John 5";
                break;
            case 27:
                document.getElementById("psalmReading").innerHTML = "Psalm 21";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 30";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Ezekiel 4";
                document.getElementById("gospelReading").innerHTML = "Luke 14";
                document.getElementById("historyAndLettersReading").innerHTML = "II John";
                break;
            case 28:
                document.getElementById("psalmReading").innerHTML = "Psalm 22";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 31";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Ezekiel 5";
                document.getElementById("gospelReading").innerHTML = "Luke 15";
                document.getElementById("historyAndLettersReading").innerHTML = "III John";
                break;
            case 29:
                document.getElementById("psalmReading").innerHTML = "Psalm 22";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 32";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Ezekiel 6";
                document.getElementById("gospelReading").innerHTML = "Luke 16";
                document.getElementById("historyAndLettersReading").innerHTML = "Jude";
                break;
            case 30:
                document.getElementById("psalmReading").innerHTML = "Psalm 22";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 33";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Ezekiel 7";
                document.getElementById("gospelReading").innerHTML = "Luke 17";
                document.getElementById("historyAndLettersReading").innerHTML = "Revelation 1";
                break;
            case 31:
                document.getElementById("psalmReading").innerHTML = "Psalm 22";
                document.getElementById("lawAndHistoryReading").innerHTML = "Numbers 34";
                document.getElementById("wisdomAndProphetsReading").innerHTML = "Ezekiel 8";
                document.getElementById("gospelReading").innerHTML = "Luke 18";
                document.getElementById("historyAndLettersReading").innerHTML = "Revelation 2";
                break;
        }
    }

    document.getElementById("dateText").setAttribute("style", "color: #FFFFFF;");
    document.getElementById("leftNavigationButton").setAttribute("style", "color: #FFFFFF;");
    document.getElementById("rightNavigationButton").setAttribute("style", "color: #FFFFFF;");
}