var acc = document.getElementsByClassName("course-accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var course_info = this.nextElementSibling;
        if (course_info.style.maxHeight) {
            course_info.style.maxHeight = null;
        } else {
            course_info.style.maxHeight = course_info.scrollHeight + "px";;
        }
    });
}