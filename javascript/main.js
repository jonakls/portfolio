function main() {
    document.addEventListener("DOMContentLoaded", function () {
        console.info("DOM loaded")
        listeners()
    })
}

function listeners() {
    let skillsElements = document.querySelectorAll(".skill")
    let projectsElements = document.querySelectorAll(".project")
    let menuElements = document.querySelectorAll(".menu-element")

    if (skillsElements.length !== 0) {
        console.info("Element of class 'skill' loaded: ", skillsElements.length)
        this.zoomElement(skillsElements)
    }

    if (projectsElements.length !== 0) {
        console.info("Element of class 'project' loaded: ", projectsElements.length)
        this.zoomElement(projectsElements)
    }

    if (menuElements.length !== 0) {
        console.info("Element of class 'menu-element' loaded: ", menuElements.length)
        this.zoomElement(menuElements)
    }
}

function zoomElement(elements) {
    for (const element of elements) {
        element.addEventListener("click", function () {
            console.info("Element clicked: ", element)
        })

        element.addEventListener("mouseenter", function () {
            element.classList.add("zoomed")
        })

        element.addEventListener("mouseleave", function () {
            element.classList.remove("zoomed")
        })
    }
}