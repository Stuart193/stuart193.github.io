

const epoch = new Date(2023, 0, 1, 0, 0, 0);
var today = new Date();
var tempDateString = new Date();
var tempDate = tempDateString.getDate();
var tempMonth = tempDateString.getMonth();

const daysSinceEpoch = ((today - epoch) / 86400000);

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const lawAndHistoryReadingNames = ["Genesis 1", "Genesis 2", "Genesis 3", "Genesis 4", "Genesis 5", "Genesis 6", "Genesis 7", "Genesis 8", "Genesis 9", "Genesis 10", "Genesis 11", "Genesis 12", "Genesis 13", "Genesis 14", "Genesis 15", "Genesis 16", "Genesis 17", "Genesis 18", "Genesis 19", "Genesis 20", "Genesis 21", "Genesis 22", "Genesis 23", "Genesis 24", "Genesis 25", "Genesis 26", "Genesis 27", "Genesis 28", "Genesis 29", "Genesis 30", "Genesis 31", "Genesis 32", "Genesis 33", "Genesis 34", "Genesis 35", "Genesis 36", "Genesis 37", "Genesis 38", "Genesis 39", "Genesis 40", "Genesis 41", "Genesis 42", "Genesis 43", "Genesis 44", "Genesis 45", "Genesis 46", "Genesis 47", "Genesis 48", "Genesis 49", "Genesis 50", "Exodus 1", "Exodus 2", "Exodus 3", "Exodus 4", "Exodus 5", "Exodus 6", "Exodus 7", "Exodus 8", "Exodus 9", "Exodus 10", "Exodus 11", "Exodus 12", "Exodus 13", "Exodus 14", "Exodus 15", "Exodus 16", "Exodus 17", "Exodus 18", "Exodus 19", "Exodus 20", "Exodus 21", "Exodus 22", "Exodus 23", "Exodus 24", "Exodus 25", "Exodus 26", "Exodus 27", "Exodus 28", "Exodus 29", "Exodus 30", "Exodus 31", "Exodus 32", "Exodus 33", "Exodus 34", "Exodus 35", "Exodus 36", "Exodus 37", "Exodus 38", "Exodus 39", "Exodus 40", "Leviticus 1", "Leviticus 2", "Leviticus 3", "Leviticus 4", "Leviticus 5", "Leviticus 6", "Leviticus 7", "Leviticus 8", "Leviticus 9", "Leviticus 10", "Leviticus 11", "Leviticus 12", "Leviticus 13", "Leviticus 14", "Leviticus 15", "Leviticus 16", "Leviticus 17", "Leviticus 18", "Leviticus 19", "Leviticus 20", "Leviticus 21", "Leviticus 22", "Leviticus 23", "Leviticus 24", "Leviticus 25", "Leviticus 26", "Leviticus 27", "Numbers 1", "Numbers 2", "Numbers 3", "Numbers 4", "Numbers 5", "Numbers 6", "Numbers 7", "Numbers 8", "Numbers 9", "Numbers 10", "Numbers 11", "Numbers 12", "Numbers 13", "Numbers 14", "Numbers 15", "Numbers 16", "Numbers 17", "Numbers 18", "Numbers 19", "Numbers 20", "Numbers 21", "Numbers 22", "Numbers 23", "Numbers 24", "Numbers 25", "Numbers 26", "Numbers 27", "Numbers 28", "Numbers 29", "Numbers 30", "Numbers 31", "Numbers 32", "Numbers 33", "Numbers 34", "Numbers 35", "Numbers 36", "Deuteronomy 1", "Deuteronomy 2", "Deuteronomy 3", "Deuteronomy 4", "Deuteronomy 5", "Deuteronomy 6", "Deuteronomy 7", "Deuteronomy 8", "Deuteronomy 9", "Deuteronomy 10", "Deuteronomy 11", "Deuteronomy 12", "Deuteronomy 13", "Deuteronomy 14", "Deuteronomy 15", "Deuteronomy 16", "De1uteronomy 17", "Deuteronomy 18", "Deuteronomy 19", "Deuteronomy 20", "Deuteronomy 21", "Deuteronomy 22", "Deuteronomy 23", "Deuteronomy 24", "Deuteronomy 25", "Deuteronomy 26", "Deuteronomy 27", "Deuteronomy 28", "Deuteronomy 29", "Deuteronomy 30", "Deuteronomy 31", "Deuteronomy 32", "Deuteronomy 33", "Deuteronomy 34", "Joshua 1", "Joshua 2", "Joshua 3", "Joshua 4", "Joshua 5", "Joshua 6", "Joshua 7", "Joshua 8", "Joshua 9", "Joshua 10", "Joshua 11", "Joshua 12", "Joshua 13", "Joshua 14", "Joshua 15", "Joshua 16", "Joshua 17", "Joshua 18", "Joshua 19", "Joshua 20", "Joshua 21", "Joshua 22", "Joshua 23", "Joshua 24", "Judges 1", "Judges 2", "Judges 3", "Judges 4", "Judges 5", "Judges 6", "Judges 7", "Judges 8", "Judges 9", "Judges 10", "Judges 11", "Judges 12", "Judges 13", "Judges 14", "Judges 15", "Judges 16", "Judges 17", "Judges 18", "Judges 19", "Judges 20", "Judges 21", "Ruth 1", "Ruth 2", "Ruth 3", "Ruth 4", "I Samuel 1", "I Samuel 2", "I Samuel 3", "I Samuel 4", "I Samuel 5", "I Samuel 6", "I Samuel 7", "I Samuel 8", "I Samuel 9", "I Samuel 10", "I Samuel 11", "I Samuel 12", "I Samuel 13", "I Samuel 14", "I Samuel 15", "I Samuel 16", "I Samuel 17", "I Samuel 18", "I Samuel 19", "I Samuel 20", "I Samuel 21", "I Samuel 22", "I Samuel 23", "I Samuel 24", "I Samuel 25", "I Samuel 26", "I Samuel 27", "I Samuel 28", "I Samuel 29", "I Samuel 30", "I Samuel 31", "II Samuel 1", "II Samuel 2", "II Samuel 3", "II Samuel 4", "II Samuel 5", "II Samuel 6", "II Samuel 7", "II Samuel 8", "II Samuel 9", "II Samuel 10", "II Samuel 11", "II Samuel 12", "II Samuel 13", "II Samuel 14", "II Samuel 15", "II Samuel 16", "II Samuel 17", "II Samuel 18", "II Samuel 19", "II Samuel 20", "II Samuel 21", "II Samuel 22", "II Samuel 23", "II Samuel 24", "I Kings 1", "I Kings 2", "I Kings 3", "I Kings 4", "I Kings 5", "I Kings 6", "I Kings 7", "I Kings 8", "I Kings 9", "I Kings 10", "I Kings 11", "I Kings 12", "I Kings 13", "I Kings 14", "I Kings 15", "I Kings 16", "I Kings 17", "I Kings 18", "I Kings 19", "I Kings 20", "I Kings 21", "I Kings 22", "II Kings 1", "II Kings 2", "II Kings 3", "II Kings 4", "II Kings 5", "II Kings 6", "II Kings 7", "II Kings 8", "II Kings 9", "II Kings 10", "II Kings 11", "II Kings 12", "II Kings 13", "II Kings 14", "II Kings 15", "II Kings 16", "II Kings 17", "II Kings 18", "II Kings 19", "II Kings 20", "II Kings 21", "II Kings 22", "II Kings 23", "II Kings 24", "II Kings 25", "I Chronicles 1", "I Chronicles 2", "I Chronicles 3", "I Chronicles 4", "I Chronicles 5", "I Chronicles 6", "I Chronicles 7", "I Chronicles 8", "I Chronicles 9", "I Chronicles 10", "I Chronicles 11", "I Chronicles 12", "I Chronicles 13", "I Chronicles 14", "I Chronicles 15", "I Chronicles 16", "I Chronicles 17", "I Chronicles 18", "I Chronicles 19", "I Chronicles 20", "I Chronicles 21", "I Chronicles 22", "I Chronicles 23", "I Chronicles 24", "I Chronicles 25", "I Chronicles 26", "I Chronicles 27", "I Chronicles 28", "I Chronicles 29", "II Chronicles 1", "II Chronicles 2", "II Chronicles 3", "II Chronicles 4", "II Chronicles 5", "II Chronicles 6", "II Chronicles 7", "II Chronicles 8", "II Chronicles 9", "II Chronicles 10", "II Chronicles 11", "II Chronicles 12", "II Chronicles 13", "II Chronicles 14", "II Chronicles 15", "II Chronicles 16", "II Chronicles 17", "II Chronicles 18", "II Chronicles 19", "II Chronicles 20", "II Chronicles 21", "II Chronicles 22", "II Chronicles 23", "II Chronicles 24", "II Chronicles 25", "II Chronicles 26", "II Chronicles 27", "II Chronicles 28", "II Chronicles 29", "II Chronicles 30", "II Chronicles 31", "II Chronicles 32", "II Chronicles 33", "II Chronicles 34", "II Chronicles 35", "II Chronicles 36", "Ezra 1", "Ezra 2", "Ezra 3", "Ezra 4", "Ezra 5", "Ezra 6", "Ezra 7", "Ezra 8", "Ezra 9", "Ezra 10", "Nehemiah 1", "Nehemiah 2", "Nehemiah 3", "Nehemiah 4", "Nehemiah 5", "Nehemiah 6", "Nehemiah 7", "Nehemiah 8", "Nehemiah 9", "Nehemiah 10", "Nehemiah 11", "Nehemiah 12", "Nehemiah 13", "Esther 1", "Esther 2", "Esther 3", "Esther 4", "Esther 5", "Esther 6", "Esther 7", "Esther 8", "Esther 9", "Esther 10", "Job 1", "Job 2", "Job 3", "Job 4", "Job 5", "Job 6", "Job 7", "Job 8", "Job 9", "Job 10", "Job 11", "Job 12", "Job 13", "Job 14", "Job 15", "Job 16", "Job 17", "Job 18", "Job 19", "Job 20", "Job 21", "Job 22", "Job 23", "Job 24", "Job 25", "Job 26", "Job 27", "Job 28", "Job 29", "Job 30", "Job 31", "Job 32", "Job 33", "Job 34", "Job 35", "Job 36", "Job 37", "Job 38", "Job 39", "Job 40", "Job 41", "Job 42"];
const wisdomAndProphetsReadingNames = ["Ecclesiastes 1", "Ecclesiastes 2", "Ecclesiastes 3", "Ecclesiastes 4", "Ecclesiastes 5", "Ecclesiastes 6", "Ecclesiastes 7", "Ecclesiastes 8", "Ecclesiastes 9", "Ecclesiastes 10", "Ecclesiastes 11", "Ecclesiastes 12", "Song of Sol. 1", "Song of Sol. 2", "Song of Sol. 3", "Song of Sol. 4", "Song of Sol. 5", "Song of Sol. 6", "Song of Sol. 7", "Song of Sol. 8", "Isaiah 1", "Isaiah 2", "Isaiah 3", "Isaiah 4", "Isaiah 5", "Isaiah 6", "Isaiah 7", "Isaiah 8", "Isaiah 9", "Isaiah 10", "Isaiah 11", "Isaiah 12", "Isaiah 13", "Isaiah 14", "Isaiah 15", "Isaiah 16", "Isaiah 17", "Isaiah 18", "Isaiah 19", "Isaiah 20", "Isaiah 21", "Isaiah 22", "Isaiah 23", "Isaiah 24", "Isaiah 25", "Isaiah 26", "Isaiah 27", "Isaiah 28", "Isaiah 29", "Isaiah 30", "Isaiah 31", "Isaiah 32", "Isaiah 33", "Isaiah 34", "Isaiah 35", "Isaiah 36", "Isaiah 37", "Isaiah 38", "Isaiah 39", "Isaiah 40", "Isaiah 41", "Isaiah 42", "Isaiah 43", "Isaiah 44", "Isaiah 45", "Isaiah 46", "Isaiah 47", "Isaiah 48", "Isaiah 49", "Isaiah 50", "Isaiah 51", "Isaiah 52", "Isaiah 53", "Isaiah 54", "Isaiah 55", "Isaiah 56", "Isaiah 57", "Isaiah 58", "Isaiah 59", "Isaiah 60", "Isaiah 61", "Isaiah 62", "Isaiah 63", "Isaiah 64", "Isaiah 65", "Isaiah 66", "Jeremiah 1", "Jeremiah 2", "Jeremiah 3", "Jeremiah 4", "Jeremiah 5", "Jeremiah 6", "Jeremiah 7", "Jeremiah 8", "Jeremiah 9", "Jeremiah 10", "Jeremiah 11", "Jeremiah 12", "Jeremiah 13", "Jeremiah 14", "Jeremiah 15", "Jeremiah 16", "Jeremiah 17", "Jeremiah 18", "Jeremiah 19", "Jeremiah 20", "Jeremiah 21", "Jeremiah 22", "Jeremiah 23", "Jeremiah 24", "Jeremiah 25", "Jeremiah 26", "Jeremiah 27", "Jeremiah 28", "Jeremiah 29", "Jeremiah 30", "Jeremiah 31", "Jeremiah 32", "Jeremiah 33", "Jeremiah 34", "Jeremiah 35", "Jeremiah 36", "Jeremiah 37", "Jeremiah 38", "Jeremiah 39", "Jeremiah 40", "Jeremiah 41", "Jeremiah 42", "Jeremiah 43", "Jeremiah 44", "Jeremiah 45", "Jeremiah 46", "Jeremiah 47", "Jeremiah 48", "Jeremiah 49", "Jeremiah 50", "Jeremiah 51", "Jeremiah 52", "Lamentations 1", "Lamentations 2", "Lamentations 3", "Lamentations 4", "Lamentations 5", "Ezekiel 1", "Ezekiel 2", "Ezekiel 3", "Ezekiel 4", "Ezekiel 5", "Ezekiel 6", "Ezekiel 7", "Ezekiel 8", "Ezekiel 9", "Ezekiel 10", "Ezekiel 11", "Ezekiel 12", "Ezekiel 13", "Ezekiel 14", "Ezekiel 15", "Ezekiel 16", "Ezekiel 17", "Ezekiel 18", "Ezekiel 19", "Ezekiel 20", "Ezekiel 21", "Ezekiel 22", "Ezekiel 23", "Ezekiel 24", "Ezekiel 25", "Ezekiel 26", "Ezekiel 27", "Ezekiel 28", "Ezekiel 29", "Ezekiel 30", "Ezekiel 31", "Ezekiel 32", "Ezekiel 33", "Ezekiel 34", "Ezekiel 35", "Ezekiel 36", "Ezekiel 37", "Ezekiel 38", "Ezekiel 39", "Ezekiel 40", "Ezekiel 41", "Ezekiel 42", "Ezekiel 43", "Ezekiel 44", "Ezekiel 45", "Ezekiel 46", "Ezekiel 47", "Ezekiel 48", "Daniel 1", "Daniel 2", "Daniel 3", "Daniel 4", "Daniel 5", "Daniel 6", "Daniel 7", "Daniel 8", "Daniel 9", "Daniel 10", "Daniel 11", "Daniel 12", "Hosea 1", "Hosea 2", "Hosea 3", "Hosea 4", "Hosea 5", "Hosea 6", "Hosea 7", "Hosea 8", "Hosea 9", "Hosea 10", "Hosea 11", "Hosea 12", "Hosea 13", "Hosea 14", "Joel 1", "Joel 2", "Joel 3", "Amos 1", "Amos 2", "Amos 3", "Amos 4", "Amos 5", "Amos 6", "Amos 7", "Amos 8", "Amos 9", "Obadiah", "Jonah 1", "Jonah 2", "Jonah 3", "Jonah 4", "Micah 1", "Micah 2", "Micah 3", "Micah 4", "Micah 5", "Micah 6", "Micah 7", "Nahum 1", "Nahum 2", "Nahum 3", "Habakkuk 1", "Habakkuk 2", "Habakkuk 3", "Zephaniah 1", "Zephaniah 2", "Zephaniah 3", "Haggai 1", "Haggai 2", "Zechariah 1", "Zechariah 2", "Zechariah 3", "Zechariah 4", "Zechariah 5", "Zechariah 6", "Zechariah 7", "Zechariah 8", "Zechariah 9", "Zechariah 10", "Zechariah 11", "Zechariah 12", "Zechariah 13", "Zechariah 14", "Malachi 1", "Malachi 2", "Malachi 3", "Malachi 4"];
const gospelReadingNames = ["Matthew 1", "Matthew 2", "Matthew 3", "Matthew 4", "Matthew 5", "Matthew 6", "Matthew 7", "Matthew 8", "Matthew 9", "Matthew 10", "Matthew 11", "Matthew 12", "Matthew 13", "Matthew 14", "Matthew 15", "Matthew 16", "Matthew 17", "Matthew 18", "Matthew 19", "Matthew 20", "Matthew 21", "Matthew 22", "Matthew 23", "Matthew 24", "Matthew 25", "Matthew 26", "Matthew 27", "Matthew 28", "Mark 1", "Mark 2", "Mark 3", "Mark 4", "Mark 5", "Mark 6", "Mark 7", "Mark 8", "Mark 9", "Mark 10", "Mark 11", "Mark 12", "Mark 13", "Mark 14", "Mark 15", "Mark 16", "Luke 1", "Luke 2", "Luke 3", "Luke 4", "Luke 5", "Luke 6", "Luke 7", "Luke 8", "Luke 9", "Luke 10", "Luke 11", "Luke 12", "Luke 13", "Luke 14", "Luke 15", "Luke 16", "Luke 17", "Luke 18", "Luke 19", "Luke 20", "Luke 21", "Luke 22", "Luke 23", "Luke 24", "John 1", "John 2", "John 3", "John 4", "John 5", "John 6", "John 7", "John 8", "John 9", "John 10", "John 11", "John 12", "John 13", "John 14", "John 15", "John 16", "John 17", "John 18", "John 19", "John 20", "John 21"];
const historyAndLettersReadingNames = ["Acts 1", "Acts 2", "Acts 3", "Acts 4", "Acts 5", "Acts 6", "Acts 7", "Acts 8", "Acts 9", "Acts 10", "Acts 11", "Acts 12", "Acts 13", "Acts 14", "Acts 15", "Acts 16", "Acts 17", "Acts 18", "Acts 19", "Acts 20", "Acts 21", "Acts 22", "Acts 23", "Acts 24", "Acts 25", "Acts 26", "Acts 27", "Acts 28", "Romans 1", "Romans 2", "Romans 3", "Romans 4", "Romans 5", "Romans 6", "Romans 7", "Romans 8", "Romans 9", "Romans 10", "Romans 11", "Romans 12", "Romans 13", "Romans 14", "Romans 15", "Romans 16", "I Corinthians 1", "I Corinthians 2", "I Corinthians 3", "I Corinthians 4", "I Corinthians 5", "I Corinthians 6", "I Corinthians 7", "I Corinthians 8", "I Corinthians 9", "I Corinthians 10", "I Corinthians 11", "I Corinthians 12", "I Corinthians 13", "I Corinthians 14", "I Corinthians 15", "I Corinthians 16", "II Corinthians 1", "II Corinthians 2", "II Corinthians 3", "II Corinthians 4", "II Corinthians 5", "II Corinthians 6", "II Corinthians 7", "II Corinthians 8", "II Corinthians 9", "II Corinthians 10", "II Corinthians 11", "II Corinthians 12", "II Corinthians 13", "Galatians 1", "Galatians 2", "Galatians 3", "Galatians 4", "Galatians 5", "Galatians 6", "Ephesians 1", "Ephesians 2", "Ephesians 3", "Ephesians 4", "Ephesians 5", "Ephesians 6", "Philippians 1", "Philippians 2", "Philippians 3", "Philippians 4", "Colossians 1", "Colossians 2", "Colossians 3", "Colossians 4", "I Thessalonians 1", "I Thessalonians 2", "I Thessalonians 3", "I Thessalonians 4", "I Thessalonians 5", "II Thessalonians 1", "II Thessalonians 2", "II Thessalonians 3", "I Timothy 1", "I Timothy 2", "I Timothy 3", "I Timothy 4", "I Timothy 5", "I Timothy 6", "II Timothy 1", "II Timothy 2", "II Timothy 3", "II Timothy 4", "Titus 1", "Titus 2", "Titus 3", "Philemon", "Hebrews 1", "Hebrews 2", "Hebrews 3", "Hebrews 4", "Hebrews 5", "Hebrews 6", "Hebrews 7", "Hebrews 8", "Hebrews 9", "Hebrews 10", "Hebrews 11", "Hebrews 12", "Hebrews 13", "James 1", "James 2", "James 3", "James 4", "James 5", "I Peter 1", "I Peter 2", "I Peter 3", "I Peter 4", "I Peter 5", "II Peter 1", "II Peter 2", "II Peter 3", "I John 1", "I John 2", "I John 3", "I John 4", "I John 5", "II John", "III John", "Jude", "Revelation 1", "Revelation 2", "Revelation 3", "Revelation 4", "Revelation 5", "Revelation 6", "Revelation 7", "Revelation 8", "Revelation 9", "Revelation 10", "Revelation 11", "Revelation 12", "Revelation 13", "Revelation 14", "Revelation 15", "Revelation 16", "Revelation 17", "Revelation 18", "Revelation 19", "Revelation 20", "Revelation 21", "Revelation 22"];

var psalmReading;
var proverbsReading;
var lawAndHistoryReading;
var wisdomAndProphetsReading;
var gospelReading;
var historyAndLettersReading;

var dayChange = 0;

function addDays(date, days) {

    const newDate = new Date(date);
    newDate.setDate(date.getDate() + dayChange);
    tempMonth = newDate.getMonth();
    tempDate = newDate.getDate();
    return tempDate;

}

function getPsalmReading() {

    var psalmVariable = Math.trunc(((daysSinceEpoch + dayChange) / 7) + 1);

    while (psalmVariable >= 150) {
        psalmVariable -= 150;
    }

    psalmReading = "Psalm " + psalmVariable;

}

function getProverbsReading() {

    proverbsReading = "Proverbs " + addDays(tempDateString, dayChange);

}

function getLawAndHistoryReading() {

    var lawAndHistoryVariable = Math.trunc(daysSinceEpoch + dayChange);

    while (lawAndHistoryVariable >= 478) {
        lawAndHistoryVariable -= 478;
    }

    lawAndHistoryReading = lawAndHistoryReadingNames[lawAndHistoryVariable];

}

function getWisdomAndProphetsReading() {

    var wisdomAndProphetsVariable = Math.trunc(daysSinceEpoch + dayChange);

    while (wisdomAndProphetsVariable >= 270) {
        wisdomAndProphetsVariable -= 270;
    }

    wisdomAndProphetsReading = wisdomAndProphetsReadingNames[wisdomAndProphetsVariable];

}

function getGospelReading() {

    var gospelVariable = Math.trunc(daysSinceEpoch + dayChange);

    while (gospelVariable >= 89) {
        gospelVariable -= 89;
    }

    gospelReading = gospelReadingNames[gospelVariable];

}

function getHistoryAndLettersReading() {

    var historyAndLettersVariable = Math.trunc(daysSinceEpoch + dayChange);

    while (historyAndLettersVariable >= 171) {
        historyAndLettersVariable -= 171;
    }

    historyAndLettersReading = historyAndLettersReadingNames[historyAndLettersVariable];

}

function navigateToPast() {

    dayChange--;
    const newDate = addDays(tempDateString, dayChange);
    contentUpdate();

}

function navigateToToday() {

    dayChange = 0;
    const newDate = addDays(tempDateString, dayChange);
    contentUpdate();

}

function navigateToFuture() {

    dayChange++;
    const newDate = addDays(tempDateString, dayChange);
    contentUpdate();

}

function contentUpdate() {

    getPsalmReading();
    getProverbsReading();
    getLawAndHistoryReading();
    getWisdomAndProphetsReading();
    getGospelReading();
    getHistoryAndLettersReading();

    customizeBackground();

    document.getElementById("psalmReading").innerHTML = psalmReading;
    document.getElementById("proverbsReading").innerHTML = proverbsReading;
    document.getElementById("lawAndHistoryReading").innerHTML = lawAndHistoryReading;
    document.getElementById("wisdomAndProphetsReading").innerHTML = wisdomAndProphetsReading;
    document.getElementById("gospelReading").innerHTML = gospelReading;
    document.getElementById("historyAndLettersReading").innerHTML = historyAndLettersReading;

    document.getElementById("dateText").innerHTML = addDays(tempDateString, dayChange) + " " + monthNames[tempMonth];

    //document.getElementById("dateText").setAttribute("style", "color: #FFFFFF;");
    document.getElementById("leftNavigationButton").setAttribute("style", "color: #FFFFFF;");
    document.getElementById("rightNavigationButton").setAttribute("style", "color: #FFFFFF;");

}

function customizeBackground() {

    if ((tempDate == 31) && (tempMonth == 2)) {
        document.getElementById("navBarBox").setAttribute("style", "background-color: #DAA520;");
        document.getElementById("pageBox").setAttribute("style", "background-image: linear-gradient(#DAA520, #CFB063);");
    }

    else {
        document.getElementById("navBarBox").setAttribute("style", "background-color: #272559;");
        document.getElementById("pageBox").setAttribute("style", "background-image: linear-gradient(#272559, #B2B1C4);");
    }

}