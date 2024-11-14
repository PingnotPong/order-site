function changeClass(element, classname) {
    elementRef = element;
    elementRef.classList.toggle(classname);
}

function changeClassById(idname, classname) {
    elementRef = document.getElementById(idname);
    elementRef.classList.toggle(classname);
}