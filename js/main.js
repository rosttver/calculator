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
    spouse: null,
    // relat: "",
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
var spousePoints;


/* $("#age").keyup(function() {
    person.age = $(this).val();
}); */
$("#age").change(function() {
    person.age = parseInt($("#age").val());
    console.log(person.age);
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

//снимаем параметры по жене
$('.spouse').on('click', function() {
    $('.spouse').removeClass('active');
    $(this).addClass('active');
    if ($(this).attr("value") === 'Да') {
        person.spouse = {
            spouseEducation: "",
            spouseExperienceIn: "",
            spouseReadingEnglish: "",
            spouseWritingEnglish: "",
            spouseListeningEnglish: "",
            spouseSpeakingEnglish: "",
            spouseReadingFrench: "",
            spouseWritingFrench: "",
            spouseListeningFrench: "",
            spouseSpeakingFrench: "",
        }
        $("#spouse-block").removeClass('hidden');
    } else {
        person.spouse = null;
        $("#spouse-block").addClass('hidden');
    }
    console.log(person.spouse);
});

$("#spouseEducation").change(function() {
    person.spouse.spouseEducation = $("#spouseEducation").val();
    console.log("Spouse education selected: " + person.spouse.spouseEducation);
});

$("#spouseExpInside").change(function() {
    person.spouse.spouseExperienceIn = parseInt($("#spouseExpInside").val());
    console.log("Spouse experience selected: " + person.spouse.spouseExperienceIn);
});

//языки жены
$("#spouseReadingEnglish").change(function() {
    person.spouse.spouseReadingEnglish = parseInt($("#spouseReadingEnglish").val());
    console.log(person.spouse.spouseReadingEnglish);
});

$("#spouseWritingEnglish").change(function() {
    person.spouse.spouseWritingEnglish = parseInt($("#spouseWritingEnglish").val());
    console.log(person.spouse.spouseWritingEnglish);
});

$("#spouseListeningEnglish").change(function() {
    person.spouse.spouseListeningEnglish = parseInt($("#spouseListeningEnglish").val());
    console.log(person.spouse.spouseListeningEnglish);
});

$("#spouseSpeakingEnglish").change(function() {
    person.spouse.spouseSpeakingEnglish = parseInt($("#spouseSpeakingEnglish").val());
    console.log(person.spouse.spouseSpeakingEnglish);
});

$("#spouseReadingFrench").change(function() {
    person.spouse.spouseReadingFrench = parseInt($("#spouseReadingFrench").val());
    console.log(person.spouse.spouseReadingFrench);
});

$("#spouseWritingFrench").change(function() {
    person.spouse.spouseWritingFrench = parseInt($("#spouseWritingFrench").val());
    console.log(person.spouse.spouseWritingFrench);
});

$("#spouseListeningFrench").change(function() {
    person.spouse.spouseListeningFrench = parseInt($("#spouseListeningFrench").val());
    console.log(person.spouse.spouseListeningFrench);
});

$("#spouseSpeakingFrench").change(function() {
    person.spouse.spouseSpeakingFrench = parseInt($("#spouseSpeakingFrench").val());
    console.log(person.spouse.spouseSpeakingFrench);
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
    if (person.spouse) {
        if (person.age <= 17) {
            agePoints = 0;
        } else if (person.age == 18) {
            agePoints = 90;
        } else if (person.age == 19) {
            agePoints = 95;
        } else if (person.age >= 20 && person.age <= 29) {
            agePoints = 100;
        } else if (person.age == 30) {
            agePoints = 95;
        } else if (person.age == 31) {
            agePoints = 90;
        } else if (person.age == 32) {
            agePoints = 85;
        } else if (person.age == 33) {
            agePoints = 80;
        } else if (person.age == 34) {
            agePoints = 75;
        } else if (person.age == 35) {
            agePoints = 70;
        } else if (person.age == 36) {
            agePoints = 65;
        } else if (person.age == 37) {
            agePoints = 60;
        } else if (person.age == 38) {
            agePoints = 55;
        } else if (person.age == 39) {
            agePoints = 50;
        } else if (person.age == 40) {
            agePoints = 45;
        } else if (person.age == 41) {
            agePoints = 35;
        } else if (person.age == 42) {
            agePoints = 25;
        } else if (person.age == 43) {
            agePoints = 15;
        } else if (person.age == 44) {
            agePoints = 5;
        } else if (person.age >= 45) {
            agePoints = 0;
        } else {
            agePoints = 0;
        }
    } else {
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
    }
    console.log("Person age is " + person.age);
}

function calculateEducation() {
    if (person.spouse) {
        if (person.education == "phd") {
            educationPoints = 140;
        } else if (person.education == "master") {
            educationPoints = 126;
        } else if (person.education == "bachelor") {
            educationPoints = 112;
        } else if (person.education == "twoOrMore") {
            educationPoints = 119;
        } else if (person.education == "college") {
            educationPoints = 91;
        } else if (person.education == "oneYearDiploma") {
            educationPoints = 84;
        } else if (person.education == "school") {
            educationPoints = 28;
        } else {
            educationPoints = 0;
        }
    } else {
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
    }
};

//периодически дает нули
function calculateLanguage() {
    var englishOverall = (person.readingEnglish + person.writingEnglish + person.listeningEngilsh + person.speakingEnglish) / 4;
    var frenchOverall = (person.readingFrench + person.writingFrench + person.listeningFrench + person.speakingFrench) / 4;
    var mainLanguage = 0;
    var secondaryLanguage = 0;
    if (person.spouse) {
        if (englishOverall >= frenchOverall) {
            if (person.readingEnglish === 4 || person.readingEnglish === 5) {
                mainLanguage += 6;
            } else if (person.readingEnglish === 6) {
                mainLanguage += 8;
            } else if (person.readingEnglish === 7) {
                mainLanguage += 16;
            } else if (person.readingEnglish === 8) {
                mainLanguage += 22;
            } else if (person.readingEnglish === 9) {
                mainLanguage += 29;
            } else if (person.readingEnglish === 10) {
                mainLanguage += 32;
            } else {
                mainLanguage += 0;
            }
            if (person.writingEnglish === 4 || person.writingEnglish === 5) {
                mainLanguage += 6;
            } else if (person.writingEnglish === 6) {
                mainLanguage += 8;
            } else if (person.writingEnglish === 7) {
                mainLanguage += 16;
            } else if (person.writingEnglish === 8) {
                mainLanguage += 22;
            } else if (person.writingEnglish === 9) {
                mainLanguage += 29;
            } else if (person.writingEnglish === 10) {
                mainLanguage += 32;
            } else {
                mainLanguage += 0;
            }
            if (person.speakingEnglish === 4 || person.speakingEnglish === 5) {
                mainLanguage += 6;
            } else if (person.speakingEnglish === 6) {
                mainLanguage += 8;
            } else if (person.speakingEnglish === 7) {
                mainLanguage += 16;
            } else if (person.speakingEnglish === 8) {
                mainLanguage += 22;
            } else if (person.speakingEnglish === 9) {
                mainLanguage += 29;
            } else if (person.speakingEnglish === 10) {
                mainLanguage += 32;
            } else {
                mainLanguage += 0;
            }
            if (person.listeningEngilsh === 4 || person.listeningEngilsh === 5) {
                mainLanguage += 6;
            } else if (person.listeningEngilsh === 6) {
                mainLanguage += 8;
            } else if (person.listeningEngilsh === 7) {
                mainLanguage += 16;
            } else if (person.listeningEngilsh === 8) {
                mainLanguage += 22;
            } else if (person.listeningEngilsh === 9) {
                mainLanguage += 29;
            } else if (person.listeningEngilsh === 10) {
                mainLanguage += 32;
            } else {
                mainLanguage += 0;
            }
            if (person.readingFrench === 5 || person.readingFrench === 6) {
                secondaryLanguage += 1;
            } else if (person.readingFrench === 7 || person.readingFrench === 8) {
                secondaryLanguage += 3;
            } else if (person.readingFrench === 9 || person.readingFrench === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.writingFrench === 5 || person.writingFrench === 6) {
                secondaryLanguage += 1;
            } else if (person.writingFrench === 7 || person.writingFrench === 8) {
                secondaryLanguage += 3;
            } else if (person.writingFrench === 9 || person.writingFrench === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.speakingFrench === 5 || person.speakingFrench === 6) {
                secondaryLanguage += 1;
            } else if (person.speakingFrench === 7 || person.speakingFrench === 8) {
                secondaryLanguage += 3;
            } else if (person.speakingFrench === 9 || person.speakingFrench === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.listeningFrench === 5 || person.listeningFrench === 6) {
                secondaryLanguage += 1;
            } else if (person.listeningFrench === 7 || person.listeningFrench === 8) {
                secondaryLanguage += 3;
            } else if (person.listeningFrench === 9 || person.listeningFrench === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
        } else {
            if (person.readingFrench === 4 || person.readingFrench === 5) {
                mainLanguage += 6;
            } else if (person.readingFrench === 6) {
                mainLanguage += 8;
            } else if (person.readingFrench === 7) {
                mainLanguage += 16;
            } else if (person.readingFrench === 8) {
                mainLanguage += 22;
            } else if (person.readingFrench === 9) {
                mainLanguage += 29;
            } else if (person.readingFrench === 10) {
                mainLanguage += 32;
            } else {
                mainLanguage += 0;
            }
            if (person.writingFrench === 4 || person.writingFrench === 5) {
                mainLanguage += 6;
            } else if (person.writingFrench === 6) {
                mainLanguage += 8;
            } else if (person.writingFrench === 7) {
                mainLanguage += 16;
            } else if (person.writingFrench === 8) {
                mainLanguage += 22;
            } else if (person.writingFrench === 9) {
                mainLanguage += 29;
            } else if (person.writingFrench === 10) {
                mainLanguage += 32;
            } else {
                mainLanguage += 0;
            }
            if (person.speakingFrench === 4 || person.speakingFrench === 5) {
                mainLanguage += 6;
            } else if (person.speakingFrench === 6) {
                mainLanguage += 8;
            } else if (person.speakingFrench === 7) {
                mainLanguage += 16;
            } else if (person.speakingFrench === 8) {
                mainLanguage += 22;
            } else if (person.speakingFrench === 9) {
                mainLanguage += 29;
            } else if (person.speakingFrench === 10) {
                mainLanguage += 32;
            } else {
                mainLanguage += 0;
            }
            if (person.listeningFrench === 4 || person.listeningFrench === 5) {
                mainLanguage += 6;
            } else if (person.listeningFrench === 6) {
                mainLanguage += 8;
            } else if (person.listeningFrench === 7) {
                mainLanguage += 16;
            } else if (person.listeningFrench === 8) {
                mainLanguage += 22;
            } else if (person.listeningFrench === 9) {
                mainLanguage += 29;
            } else if (person.listeningFrench === 10) {
                mainLanguage += 32;
            } else {
                mainLanguage += 0;
            }
            if (person.readingEnglish === 5 || person.readingEnglish === 6) {
                secondaryLanguage += 1;
            } else if (person.readingEnglish === 7 || person.readingEnglish === 8) {
                secondaryLanguage += 3;
            } else if (person.readingEnglish === 9 || person.readingEnglish === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.writingEnglish === 5 || person.writingEnglish === 6) {
                secondaryLanguage += 1;
            } else if (person.writingEnglish === 7 || person.writingEnglish === 8) {
                secondaryLanguage += 3;
            } else if (person.writingEnglish === 9 || person.writingEnglish === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.speakingEnglish === 5 || person.speakingEnglish === 6) {
                secondaryLanguage += 1;
            } else if (person.speakingEnglish === 7 || person.speakingEnglish === 8) {
                secondaryLanguage += 3;
            } else if (person.speakingEnglish === 9 || person.speakingEnglish === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.listeningEngilsh === 5 || person.listeningEngilsh === 6) {
                secondaryLanguage += 1;
            } else if (person.listeningEngilsh === 7 || person.listeningEngilsh === 8) {
                secondaryLanguage += 3;
            } else if (person.listeningEngilsh === 9 || person.listeningEngilsh === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
        }
    } else {
        if (englishOverall >= frenchOverall) {
            if (person.readingEnglish === 4 || person.readingEnglish === 5) {
                mainLanguage += 6;
            } else if (person.readingEnglish === 6) {
                mainLanguage += 9;
            } else if (person.readingEnglish === 7) {
                mainLanguage += 17;
            } else if (person.readingEnglish === 8) {
                mainLanguage += 23;
            } else if (person.readingEnglish === 9) {
                mainLanguage += 31;
            } else if (person.readingEnglish === 10) {
                mainLanguage += 34;
            } else {
                mainLanguage += 0;
            }
            if (person.writingEnglish === 4 || person.writingEnglish === 5) {
                mainLanguage += 6;
            } else if (person.writingEnglish === 6) {
                mainLanguage += 9;
            } else if (person.writingEnglish === 7) {
                mainLanguage += 17;
            } else if (person.writingEnglish === 8) {
                mainLanguage += 23;
            } else if (person.writingEnglish === 9) {
                mainLanguage += 31;
            } else if (person.writingEnglish === 10) {
                mainLanguage += 34;
            } else {
                mainLanguage += 0;
            }
            if (person.speakingEnglish === 4 || person.speakingEnglish === 5) {
                mainLanguage += 6;
            } else if (person.speakingEnglish === 6) {
                mainLanguage += 9;
            } else if (person.speakingEnglish === 7) {
                mainLanguage += 17;
            } else if (person.speakingEnglish === 8) {
                mainLanguage += 23;
            } else if (person.speakingEnglish === 9) {
                mainLanguage += 31;
            } else if (person.speakingEnglish === 10) {
                mainLanguage += 34;
            } else {
                mainLanguage += 0;
            }
            if (person.listeningEngilsh === 4 || person.listeningEngilsh === 5) {
                mainLanguage += 6;
            } else if (person.listeningEngilsh === 6) {
                mainLanguage += 9;
            } else if (person.listeningEngilsh === 7) {
                mainLanguage += 17;
            } else if (person.listeningEngilsh === 8) {
                mainLanguage += 23;
            } else if (person.listeningEngilsh === 9) {
                mainLanguage += 31;
            } else if (person.listeningEngilsh === 10) {
                mainLanguage += 34;
            } else {
                mainLanguage += 0;
            }
            if (person.readingFrench === 5 || person.readingFrench === 6) {
                secondaryLanguage += 1;
            } else if (person.readingFrench === 7 || person.readingFrench === 8) {
                secondaryLanguage += 3;
            } else if (person.readingFrench === 9 || person.readingFrench === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.writingFrench === 5 || person.writingFrench === 6) {
                secondaryLanguage += 1;
            } else if (person.writingFrench === 7 || person.writingFrench === 8) {
                secondaryLanguage += 3;
            } else if (person.writingFrench === 9 || person.writingFrench === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.speakingFrench === 5 || person.speakingFrench === 6) {
                secondaryLanguage += 1;
            } else if (person.speakingFrench === 7 || person.speakingFrench === 8) {
                secondaryLanguage += 3;
            } else if (person.speakingFrench === 9 || person.speakingFrench === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.listeningFrench === 5 || person.listeningFrench === 6) {
                secondaryLanguage += 1;
            } else if (person.listeningFrench === 7 || person.listeningFrench === 8) {
                secondaryLanguage += 3;
            } else if (person.listeningFrench === 9 || person.listeningFrench === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
        } else {
            if (person.readingFrench === 4 || person.readingFrench === 5) {
                mainLanguage += 6;
            } else if (person.readingFrench === 6) {
                mainLanguage += 9;
            } else if (person.readingFrench === 7) {
                mainLanguage += 17;
            } else if (person.readingFrench === 8) {
                mainLanguage += 23;
            } else if (person.readingFrench === 9) {
                mainLanguage += 31;
            } else if (person.readingFrench === 10) {
                mainLanguage += 34;
            } else {
                mainLanguage += 0;
            }
            if (person.writingFrench === 4 || person.writingFrench === 5) {
                mainLanguage += 6;
            } else if (person.writingFrench === 6) {
                mainLanguage += 9;
            } else if (person.writingFrench === 7) {
                mainLanguage += 17;
            } else if (person.writingFrench === 8) {
                mainLanguage += 23;
            } else if (person.writingFrench === 9) {
                mainLanguage += 31;
            } else if (person.writingFrench === 10) {
                mainLanguage += 34;
            } else {
                mainLanguage += 0;
            }
            if (person.speakingFrench === 4 || person.speakingFrench === 5) {
                mainLanguage += 6;
            } else if (person.speakingFrench === 6) {
                mainLanguage += 9;
            } else if (person.speakingFrench === 7) {
                mainLanguage += 17;
            } else if (person.speakingFrench === 8) {
                mainLanguage += 23;
            } else if (person.speakingFrench === 9) {
                mainLanguage += 31;
            } else if (person.speakingFrench === 10) {
                mainLanguage += 34;
            } else {
                mainLanguage += 0;
            }
            if (person.listeningFrench === 4 || person.listeningFrench === 5) {
                mainLanguage += 6;
            } else if (person.listeningFrench === 6) {
                mainLanguage += 9;
            } else if (person.listeningFrench === 7) {
                mainLanguage += 17;
            } else if (person.listeningFrench === 8) {
                mainLanguage += 23;
            } else if (person.listeningFrench === 9) {
                mainLanguage += 31;
            } else if (person.listeningFrench === 10) {
                mainLanguage += 34;
            } else {
                mainLanguage += 0;
            }
            if (person.readingEnglish === 5 || person.readingEnglish === 6) {
                secondaryLanguage += 1;
            } else if (person.readingEnglish === 7 || person.readingEnglish === 8) {
                secondaryLanguage += 3;
            } else if (person.readingEnglish === 9 || person.readingEnglish === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.writingEnglish === 5 || person.writingEnglish === 6) {
                secondaryLanguage += 1;
            } else if (person.writingEnglish === 7 || person.writingEnglish === 8) {
                secondaryLanguage += 3;
            } else if (person.writingEnglish === 9 || person.writingEnglish === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.speakingEnglish === 5 || person.speakingEnglish === 6) {
                secondaryLanguage += 1;
            } else if (person.speakingEnglish === 7 || person.speakingEnglish === 8) {
                secondaryLanguage += 3;
            } else if (person.speakingEnglish === 9 || person.speakingEnglish === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
            if (person.listeningEngilsh === 5 || person.listeningEngilsh === 6) {
                secondaryLanguage += 1;
            } else if (person.listeningEngilsh === 7 || person.listeningEngilsh === 8) {
                secondaryLanguage += 3;
            } else if (person.listeningEngilsh === 9 || person.listeningEngilsh === 10) {
                secondaryLanguage += 6;
            } else {
                secondaryLanguage += 0;
            }
        }
    }

    console.log("english overall score is " + englishOverall);
    console.log("french overall score is " + frenchOverall);
    console.log("secondary language score is " + secondaryLanguage);
    console.log("main language score is " + mainLanguage);
    languagePoints = mainLanguage + secondaryLanguage;
}

function calculateSpousePoints() {
    var englishOverall = (person.spouse.spouseReadingEnglish + person.spouse.spouseWritingEnglish + person.spouse.spouseListeningEnglish + person.spouse.spouseSpeakingEnglish) / 4;
    var frenchOverall = (person.spouse.spouseReadingFrench + person.spouse.spouseWritingFrench + person.spouse.spouseListeningFrench + person.spouse.spouseSpeakingFrench) / 4;
    var mainLanguage = 0;
    var spouseEducationPoints = 0;
    if (englishOverall >= frenchOverall) {
        if (person.spouse.spouseReadingEnglish === 5 || person.spouse.spouseReadingEnglish === 6) {
            mainLanguage += 1;
        } else if (person.spouse.spouseReadingEnglish === 7 || person.spouse.spouseReadingEnglish === 8) {
            mainLanguage += 3;
        } else if (person.spouse.spouseReadingEnglish >= 9) {
            mainLanguage += 5;
            console.log("reading");
        } else {
            mainLanguage += 0;
        }
        if (person.spouse.spouseWritingEnglish === 5 || person.spouse.spouseWritingEnglish === 6) {
            mainLanguage += 1;
        } else if (person.spouse.spouseWritingEnglish === 7 || person.spouse.spouseWritingEnglish === 8) {
            mainLanguage += 3;
        } else if (person.spouse.spouseWritingEnglish >= 9) {
            mainLanguage += 5;
            console.log("writing");
        } else {
            mainLanguage += 0;
        }
        if (person.spouse.spouseListeningEnglish === 5 || person.spouse.spouseListeningEnglish === 6) {
            mainLanguage += 1;
        } else if (person.spouse.spouseListeningEnglish === 7 || person.spouse.spouseListeningEnglish === 8) {
            mainLanguage += 3;
        } else if (person.spouse.spouseListeningEnglish >= 9) {
            mainLanguage += 5;
            console.log("listening");
        } else {
            mainLanguage += 0;
        }
        if (person.spouse.spouseSpeakingEnglish === 5 || person.spouse.spouseSpeakingEnglish === 6) {
            mainLanguage += 1;
        } else if (person.spouse.spouseSpeakingEnglish === 7 || person.spouse.spouseSpeakingEnglish === 8) {
            mainLanguage += 3;
        } else if (person.spouse.spouseSpeakingEnglish >= 9) {
            mainLanguage += 5;
            console.log("speaking");
        } else {
            mainLanguage += 0;
        }
    } else {
        if (person.spouse.spouseReadingFrench === 5 || person.spouse.spouseReadingFrench === 6) {
            mainLanguage += 1;
        } else if (person.spouse.spouseReadingFrench === 7 || person.spouse.spouseReadingFrench === 8) {
            mainLanguage += 3;
        } else if (person.spouse.spouseReadingFrench >= 9) {
            mainLanguage += 5;
        } else {
            mainLanguage += 0;
        }
        if (person.spouse.spouseWritingFrench === 5 || person.spouse.spouseWritingFrench === 6) {
            mainLanguage += 1;
        } else if (person.spouse.spouseWritingFrench === 7 || person.spouse.spouseWritingFrench === 8) {
            mainLanguage += 3;
        } else if (person.spouse.spouseWritingFrench >= 9) {
            mainLanguage += 5;
        } else {
            mainLanguage += 0;
        }
        if (person.spouse.spouseListeningFrench === 5 || person.spouse.spouseListeningFrench === 6) {
            mainLanguage += 1;
        } else if (person.spouse.spouseListeningFrench === 7 || person.spouse.spouseListeningFrench === 8) {
            mainLanguage += 3;
        } else if (person.spouse.spouseListeningFrench >= 9) {
            mainLanguage += 5;
        } else {
            mainLanguage += 0;
        }
        if (person.spouse.spouseSpeakingFrench === 5 || person.spouse.spouseSpeakingFrench === 6) {
            mainLanguage += 1;
        } else if (person.spouse.spouseSpeakingFrench === 7 || person.spouse.spouseSpeakingFrench === 8) {
            mainLanguage += 3;
        } else if (person.spouse.spouseSpeakingFrench >= 9) {
            mainLanguage += 5;
        } else {
            mainLanguage += 0;
        }
    }
    console.log("Spouse language bonus " + mainLanguage);
    if (person.spouse.spouseEducation)
        if (person.spouse.spouseEducation == "phd") {
            spouseEducationPoints = 10;
        } else if (person.spouse.spouseEducation == "master") {
        spouseEducationPoints = 10;
    } else if (person.spouse.spouseEducation == "bachelor") {
        spouseEducationPoints = 8;
    } else if (person.spouse.spouseEducation == "twoOrMore") {
        spouseEducationPoints = 9;
    } else if (person.spouse.spouseEducation == "college") {
        spouseEducationPoints = 7;
    } else if (person.spouse.spouseEducation == "oneYearDiploma") {
        spouseEducationPoints = 6;
    } else if (person.spouse.spouseEducation == "school") {
        spouseEducationPoints = 2;
    } else {
        spouseEducationPoints = 0;
    }
    console.log("Spouse education bonus " + spouseEducationPoints);
    if (person.spouse.spouseExperienceIn == 1) {
        expInside = 5;
    } else if (person.spouse.spouseExperienceIn == 2) {
        expInside = 7;
    } else if (person.spouse.spouseExperienceIn == 3) {
        expInside = 8;
    } else if (person.spouse.spouseExperienceIn == 4) {
        expInside = 9;
    } else if (person.spouse.spouseExperienceIn == 5) {
        expInside = 10;
    } else {
        expInside = 0;
    }
    console.log("Spouse experience bonus " + expInside);


    spousePoints = mainLanguage + spouseEducationPoints + expInside;
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
    if (person.spouse) {
        if (person.experienceIn == 1) {
            expInside = 35;
        } else if (person.experienceIn == 2) {
            expInside = 46;
        } else if (person.experienceIn == 3) {
            expInside = 56;
        } else if (person.experienceIn == 4) {
            expInside = 63;
        } else if (person.experienceIn == 5) {
            expInside = 70;
        } else {
            expInside = 0;
        }
    } else {
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
    calculateSpousePoints();
    var result = educationPoints + agePoints + languagePoints + expPoints + certificatePoints + transferabilityPoints + spousePoints;
    console.log("Your age gave you " + agePoints);
    console.log("Your education gave you " + educationPoints);
    console.log("Your language gave you " + languagePoints);
    console.log("Your work gave you " + expPoints);
    console.log("Your certificates gave you " + certificatePoints);
    console.log("Your spouse points gave you " + spousePoints);
    console.log("Your result is " + result);
};
