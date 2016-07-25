var person = {
    education: "0",
    extraEducation: false,
    // canadianEducation: "false",
    experienceIn: 0,
    experienceOut: 0,
    age: 0,
    readingEnglish: 0,
    writingEnglish: 0,
    listeningEngilsh: 0,
    speakingEnglish: 0,
    readingFrench: 0,
    writingFrench: 0,
    listeningFrench: 0,
    speakingFrench: 0,
    spouse: {
        spouseEducation: "",
        spouseExperienceIn: "",
        spouseEnglish: "",
        spouseFrench: "",
    },
    relat: "",
    provincialNomenee: false,
    LMIA: false,
    certificateOfQualification: false,
};
var educationPoints;
var agePoints;
var languagePoints;
var expPoints;
var certificatePoints;
var transferabilityPoints;


//no spouse
$("#age").keyup(function() {
    person.age = $(this).val();
});

$("#education").change(function() {
    person.education = $("#education").val();
    console.log(person.education);
});

$('.extraDiploma').on('click', function() {
    $('.extraDiploma').removeClass('active');
    $(this).addClass('active');
    if ($(this).attr("value") === 'Да') {
        person.extraEducation = true;
    } else {
        person.extraEducation = false;
    }
    console.log(person.extraEducation);
});

// $('.canadianDiploma').on('click', function() {
//     $('.canadianDiploma').removeClass('active');
//     $(this).addClass('active');
//     if ($(this).attr("value") === 'Да') {
//         person.canadianEducation = true;
//     } else {
//         person.canadianEducation = false;
//     }
//     console.log(person.canadianEducation);
// });

$("#readingEnglish").change(function() {
    person.readingEnglish = parseInt($("#readingEnglish").val());
    console.log(person.readingEnglish);
});

$("#writingEnglish").change(function() {
    person.writingEnglish = parseInt($("#writingEnglish").val());
    console.log(person.writingEnglish);
});

$("#listeningEngilsh").change(function() {
    person.listeningEngilsh = parseInt($("#listeningEngilsh").val());
    console.log(person.listeningEngilsh);
});

$("#speakingEnglish").change(function() {
    person.speakingEnglish = parseInt($("#speakingEnglish").val());
    console.log(person.speakingEnglish);
});

$("#readingFrench").change(function() {
    person.readingFrench = parseInt($("#readingFrench").val());
    console.log(person.readingFrench);
});

$("#writingFrench").change(function() {
    person.writingFrench = parseInt($("#writingFrench").val());
    console.log(person.writingFrench);
});

$("#listeningFrench").change(function() {
    person.listeningFrench = parseInt($("#listeningFrench").val());
    console.log(person.listeningFrench);
});

$("#speakingFrench").change(function() {
    person.speakingFrench = parseInt($("#speakingFrench").val());
    console.log(person.speakingFrench);
});

$("#expOutside").change(function() {
    person.experienceOut = parseInt($("#expOutside").val());
    console.log(person.experienceOut);
});

$("#expInside").change(function() {
    person.experienceIn = parseInt($("#expInside").val());
    console.log(person.experienceIn);
});

$('.qualifCert').on('click', function() {
    $('.qualifCert').removeClass('active');
    $(this).addClass('active');
    if ($(this).attr("value") === 'Да') {
        person.certificateOfQualification = true;
    } else {
        person.certificateOfQualification = false;
    }
    console.log(person.certificateOfQualification);
});

$('.LMIA').on('click', function() {
    $('.LMIA').removeClass('active');
    $(this).addClass('active');
    if ($(this).attr("value") === 'Да') {
        person.LMIA = true;
    } else {
        person.LMIA = false;
    }
    console.log(person.LMIA);
});

$('.provincialNomenee').on('click', function() {
    $('.provincialNomenee').removeClass('active');
    $(this).addClass('active');
    if ($(this).attr("value") === 'Да') {
        person.provincialNomenee = true;
    } else {
        person.provincialNomenee = false;
    }
    console.log(person.provincialNomenee);
});


function calculateAge() {
    if (person.age <= 17) {
        agePoints = 0;
    } else if (person.age == 18) {
        agePoints = 99;
    } else if (person.age == 19) {
        agePoints = 105;
    } else if (person.age >= 20 && person.age <= 29) {
        agePoints = 110;
    } else if (person.age == 30) {
        agePoints = 105;
    } else if (person.age == 31) {
        agePoints = 99;
    } else if (person.age == 32) {
        agePoints = 94;
    } else if (person.age == 33) {
        agePoints = 88;
    } else if (person.age == 34) {
        agePoints = 83;
    } else if (person.age == 35) {
        agePoints = 77;
    } else if (person.age == 36) {
        agePoints = 72;
    } else if (person.age == 37) {
        agePoints = 66;
    } else if (person.age == 38) {
        agePoints = 61;
    } else if (person.age == 39) {
        agePoints = 55;
    } else if (person.age == 40) {
        agePoints = 50;
    } else if (person.age == 41) {
        agePoints = 39;
    } else if (person.age == 42) {
        agePoints = 28;
    } else if (person.age == 43) {
        agePoints = 17;
    } else if (person.age == 44) {
        agePoints = 6;
    } else if (person.age >= 45) {
        agePoints = 0;
    } else {
        agePoints = 0;
    }
    console.log("Person age is " + person.age);
}

//добавить бонус комбо языка и 2 образования. Не более 100 баллов за бонус
function calculateEducation() {
    if (person.education == "phd") {
        educationPoints = 150;
    } else if (person.education == "master") {
        educationPoints = 135;
    } else if (person.education == "bachelor") {
        educationPoints = 120;
    } else if (person.education == "twoOrMore") {
        educationPoints = 128;
    } else if (person.education == "college") {
        educationPoints = 98;
    } else if (person.education == "oneYearDiploma") {
        educationPoints = 90;
    } else if (person.education == "school") {
        educationPoints = 30;
    } else {
        educationPoints = 0;
    }
};

//периодически дает нули
function calculateLanguage() {
    var englishOverall = (person.readingEnglish + person.writingEnglish + person.listeningEngilsh + person.speakingEnglish) / 4;
    var frenchOverall = (person.readingFrench + person.writingFrench + person.listeningFrench + person.speakingFrench) / 4;
    var mainLanguage = 0;
    var secondaryLanguage = 0;
    if (englishOverall >= frenchOverall) {
        if (englishOverall >= 4 && englishOverall <= 5) {
            mainLanguage = 6;
        } else if (englishOverall >= 6 && englishOverall < 7) {
            mainLanguage = 9;
        } else if (englishOverall >= 7 && englishOverall < 8) {
            mainLanguage = 17;
        } else if (englishOverall >= 8 && englishOverall < 9) {
            mainLanguage = 23;
        } else if (englishOverall >= 9 && englishOverall < 10) {
            mainLanguage = 31;
        } else if (englishOverall >= 10) {
            mainLanguage = 34;
        } else {
            mainLanguage = 0;
        }
        if (frenchOverall >= 5 && frenchOverall <= 6) {
            secondaryLanguage = 1;
        } else if (frenchOverall >= 7 && frenchOverall <= 8) {
            secondaryLanguage = 3;
        } else if (frenchOverall >= 9) {
            secondaryLanguage = 6;
        } else {
            secondaryLanguage = 0;
        }
    } else {
        if (frenchOverall >= 4 && frenchOverall <= 5) {
            mainLanguage = 6;
        } else if (frenchOverall >= 6 && frenchOverall < 7) {
            mainLanguage = 9;
        } else if (frenchOverall >= 7 && frenchOverall < 8) {
            mainLanguage = 17;
        } else if (frenchOverall >= 8 && frenchOverall < 9) {
            mainLanguage = 23;
        } else if (frenchOverall >= 9 && frenchOverall < 10) {
            mainLanguage = 31;
        } else if (frenchOverall >= 10) {
            mainLanguage = 34;
        } else {
            mainLanguage = 0;
        }
        if (englishOverall >= 5 && englishOverall <= 6) {
            secondaryLanguage = 1;
        } else if (englishOverall >= 7 && englishOverall <= 8) {
            secondaryLanguage = 3;
        } else if (englishOverall >= 9) {
            secondaryLanguage = 6;
        } else {
            secondaryLanguage = 0;
        }
    }
    console.log("english overall score is " + englishOverall);
    console.log("french overall score is " + frenchOverall);
    console.log("secondary language score is " + secondaryLanguage);
    console.log("main language score is " + mainLanguage);
    languagePoints = mainLanguage*4 + secondaryLanguage*4;
}

function calculareTransferability() {
    //я ебал этих пидоров с такой блядь логикой
    var englishOverall = (person.readingEnglish + person.writingEnglish + person.listeningEngilsh + person.speakingEnglish) / 4;
    var frenchOverall = (person.readingFrench + person.writingFrench + person.listeningFrench + person.speakingFrench) / 4;
    var CLB;
    if (englishOverall >= frenchOverall) {
        CLB = englishOverall;
    } else {
        CLB = frenchOverall;
    }
    var expOutsideAndInside = 0;
    var expOutsideAndLanguage = 0;
    //упрощено, нужно по каждой категории языка смотреть
    //разделить на два бонус пула. Не более 100 баллов за трансферабилити

    //опыт работы в Канаде и вне ее
    if (person.experienceOut == 1 && person.experienceIn == 1) {
        if (expOutsideAndInside < 13) {
            expOutsideAndInside = 13;
            console.log("1year in and 1 out clb7");
        }
    } else if (person.experienceOut == 1 && person.experienceIn >= 2) {
        if (expOutsideAndInside < 25) {
            expOutsideAndInside = 25;
            console.log("2year in and 1 out clb9");
        }
    } else if (person.experienceOut == 3 && person.experienceIn == 1) {
        if (expOutsideAndInside < 25) {
            expOutsideAndInside = 25;
            console.log("1year in and 3 out clb7");
        }
    } else if (person.experienceOut == 3 && person.experienceIn >= 2) {
        if (expOutsideAndInside < 50) {
            expOutsideAndInside = 50;
            console.log("2year in and 3 out clb9");
        }
    }
    // язык и опыт работы вне Канады
    if (person.experienceOut == 1 && (CLB >= 7 && CLB < 9)) {
        if (expOutsideAndLanguage < 13) {
            expOutsideAndLanguage = 13;
            console.log("1 year out clb7");
        }
    } else if (person.experienceOut == 1 && CLB >= 9) {
        if (expOutsideAndLanguage < 25) {
            expOutsideAndLanguage = 25;
            console.log("1 year out clb9");
        }
    } else if (person.experienceOut == 3 && (CLB >= 7 && CLB < 9)) {
        if (expOutsideAndLanguage < 25) {
            expOutsideAndLanguage = 25;
            console.log("3 years out clb7");
        }
    } else if (person.experienceOut == 3 && CLB >= 9) {
        if (expOutsideAndLanguage < 50) {
            expOutsideAndLanguage = 50;
            console.log("3 years out clb9");
        }
    }


    educationAndLanguage = 0;
    educationAndWork = 0;

    // язык и образование
    if (person.extraEducation) {
        if (person.education != "school" && person.education != "0" && (CLB >= 7 && CLB < 9)) {
            educationAndLanguage = 25;
            console.log("extra + diploma + language 7 " + educationAndLanguage);
        } else if (person.education != "school" && person.education != "0" && CLB >= 9) {
            educationAndLanguage = 50;
            console.log("extra + diploma + language 9 " + educationAndLanguage);
        }
    } else if (person.education != "school" && person.education != "0" && (CLB >= 7 && CLB < 9)) {
        educationAndLanguage = 13;
        console.log("no extra + diploma + language 7 " + educationAndLanguage);
    } else if (person.education != "school" && person.education != "0" && CLB >= 9) {
        educationAndLanguage = 25;
        console.log("no extra + diploma + language 9 " + educationAndLanguage);
    }

    //образование и опыт работы
    if (person.extraEducation) {
        if (person.experienceIn == 1 && (person.education != "school" && person.education != "0")) {
            educationAndWork = 25;
            console.log("1 year of Canadian exp and 2+ diploma " + educationAndWork);
        } else if (person.experienceIn >= 2 && (person.education != "school" && person.education != "0")) {
            educationAndWork = 50;
            console.log("2+ years of Canadian exp and 2 diploma " + educationAndWork);
        }
    } else if (person.experienceIn == 1 && (person.education != "school" && person.education != "0")) {
        educationAndWork = 13;
        console.log("1 year of exp and 1 diploma " + educationAndWork);
    } else if (person.experienceIn >= 2 && (person.education != "school" && person.education != "0")) {
        educationAndWork = 25;
        console.log("2+ years of Canadian exp and 1 diploma " + educationAndWork);
    }
    console.log("Summary by four transferability categories")
    console.log("Transefarbility of exp outside + inside " + expOutsideAndInside);
    console.log("Transefarbility of exp outside + language " + expOutsideAndLanguage);
    console.log("Transefarbility of language and education " + educationAndLanguage);
    console.log("Transefarbility of education and work exp " + educationAndWork);

    transferabilityPoints = expOutsideAndInside + expOutsideAndLanguage + educationAndLanguage + educationAndWork;
    if (transferabilityPoints > 100) {
        transferabilityPoints = 100;
        console.log("Limit for transferability points was applied");
    }
    console.log("Transferability points for all 4 categories are " + transferabilityPoints);
}

function calculateExperience() {
    // переписал логику, опыт вне канады считается в лимитированном пулле, поэтому тут переменная expInside, до этого была сумма 2х переменных, в лом переписывать
    var expInside = 0;
    if (person.experienceIn == 1) {
        expInside = 40;
    } else if (person.experienceIn == 2) {
        expInside = 53;
    } else if (person.experienceIn == 3) {
        expInside = 64;
    } else if (person.experienceIn == 4) {
        expInside = 72;
    } else if (person.experienceIn == 5) {
        expInside = 80;
    } else {
        expInside = 0;
    }
    expPoints = expInside;
    console.log("Exp inside " + expInside);
    // console.log("Overall exp " + expPoints);
}


function calculateCertificates() {
    var englishOverall = (person.readingEnglish + person.writingEnglish + person.listeningEngilsh + person.speakingEnglish) / 4;
    var frenchOverall = (person.readingFrench + person.writingFrench + person.listeningFrench + person.speakingFrench) / 4;
    var CLB;
    if (englishOverall >= frenchOverall) {
        CLB = englishOverall;
    } else {
        CLB = frenchOverall;
    }
    var LMIA = 0;
    var provNomenee = 0;
    var certOfQualif = 0;
    if (person.certificateOfQualification && (CLB >= 5 && CLB < 7)) {
        certOfQualif = 25;
    } else if (person.certificateOfQualification && CLB >= 7) {
        certOfQualif = 50;
    }
    if (person.LMIA) {
        LMIA = 600;
    }
    if (person.provincialNomenee) {
        provNomenee = 600;
    }
    certificatePoints = LMIA + provNomenee + certOfQualif;
    console.log("Your overall certification points " + certificatePoints);
}


function calculate() {
    calculateLanguage();
    calculateAge();
    calculateEducation();
    calculateExperience();
    calculateCertificates();
    calculareTransferability();
    var result = educationPoints + agePoints + languagePoints + expPoints + certificatePoints + transferabilityPoints;
    console.log("Your age gave you " + agePoints);
    console.log("Your education gave you " + educationPoints);
    console.log("Your language gave you " + languagePoints);
    console.log("Your work gave you " + expPoints);
    console.log("Your certificates gave you " + certificatePoints);
    console.log("Your result is " + result);
};