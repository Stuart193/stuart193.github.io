var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1;
const currentMonthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



document.getElementById("dateText").innerHTML = currentDay + " " + currentMonthName[currentMonth - 1];

document.getElementById("proverbsReading").innerHTML = "Proverbs " + currentDay;
if (currentMonth == 4) {
    switch (currentDay) {
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