let weekSchedule = document.getElementById("week");
let monthSchedule = document.getElementById("month");
let daySchedule = document.getElementById("day");
let schedule = document.querySelectorAll(".time_schedule");

weekSchedule.addEventListener("click", () => {
    weekSchedule.style.color = "white";
    monthSchedule.style.color = "rgb(115, 115, 121)";
    daySchedule.style.color = "rgb(115, 115, 121)";

    work.innerHTML = "Week";
    workTime.innerHTML = "36";
    workResult.innerHTML = "32";

    playResult.innerHTML = "10";
    play.innerHTML = "Week";
    playTime.innerHTML = "8";

    studyResult.innerHTML = "4";
    study.innerHTML = "Week";
    studyTime.innerHTML = "7";
        
    exerciseResult.innerHTML = "4";
    exercise.innerHTML = "Week";
    exerciseTime.innerHTML = "5";

    document.getElementById("socialResult").innerHTML = "5";
    social.innerHTML = "Week";
    socialTime.innerHTML = "10";

    careResult.innerHTML = "2";
    care.innerHTML = "Week";
    careTime.innerHTML = "2";

})


monthSchedule.addEventListener("click", () => {
    monthSchedule.style.color = "white";
    weekSchedule.style.color = "rgb(115, 115, 121)";
    daySchedule.style.color = "rgb(115, 115, 121)";

    work.innerHTML = "Month";
    workTime.innerHTML = "128";
    workResult.innerHTML = "103";

    playResult.innerHTML = "23";
    play.innerHTML = "Month";
    playTime.innerHTML = "29";

    studyResult.innerHTML = "13";
    study.innerHTML = "Month";
    studyTime.innerHTML = "19";
        
    exerciseResult.innerHTML = "11";
    exercise.innerHTML = "Month";
    exerciseTime.innerHTML = "18";

    document.getElementById("socialResult").innerHTML = "21";
    social.innerHTML = "Month";
    socialTime.innerHTML = "23";

    careResult.innerHTML = "7";
    care.innerHTML = "Month";
    careTime.innerHTML = "11";
})

daySchedule.addEventListener("click", () => {
    daySchedule.style.color = "white";
    monthSchedule.style.color = "rgb(115, 115, 121)";
    weekSchedule.style.color = "rgb(115, 115, 121)";

    work.innerHTML = "Day";
    workTime.innerHTML = "7";
    workResult.innerHTML = "5";

    playResult.innerHTML = "1";
    play.innerHTML = "Day";
    playTime.innerHTML = "2";

    studyResult.innerHTML = "0";
    study.innerHTML = "Day";
    studyTime.innerHTML = "1";
        
    exerciseResult.innerHTML = "1";
    exercise.innerHTML = "Day";
    exerciseTime.innerHTML = "1";

    document.getElementById("socialResult").innerHTML = "1";
    social.innerHTML = "Day";
    socialTime.innerHTML = "3";

    careResult.innerHTML = "0";
    care.innerHTML = "Day";
    careTime.innerHTML = "1";
})

