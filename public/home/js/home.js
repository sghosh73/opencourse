$(document).ready(function () {
    $("input").typeahead({
        source: ["Arts", "Biology & Life Sciences", "Business & Management", "Chemistry", "CS: Artificial Intelligence", "CS: Software Engineering", "CS: Systems & Security", "CS: Theory", "Economics & Finance", "Education", "Energy & Earth Sciences", "Engineering", "Food and Nutrition", "Health & Society", "Humanities", "Information, Tech & Design", "Law", "Mathematics", "Medicine", "Music, Film, and Audio", "Physical & Earth Sciences", "Physics", "Social Sciences", "Statistics and Data Analysis", "Teacher Professional Development", "How to Be a Badass", "Badass 101", "The Art of Being a Badass", "Journey through the History of Badasses", "Advanced Topics in Baddasery"]
    });
    $("input").keyup(function (e) {
        if (e.keyCode == 13) {
            window.location = "/views/search.html#" + $('input').val();
        }
    });
    $('.dropdown-menu').css('width', "500px");
});