// Rotate Backgrouund Image Based on Day of the Week
if(document.getElementById("hero")!=null) {

    const heroDate = new Date();
    var heroDay = heroDate.getDay();
    var hero = document.getElementById("hero");

    if (heroDay == 1 || heroDay == 5) {
        hero.classList.add("background-1");
    } else if (heroDay == 2 || heroDay == 4 || heroDay == 6) {
        hero.classList.add("background-2");
    } else {
        hero.classList.add("background-3");
    }

}
