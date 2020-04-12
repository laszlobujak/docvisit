export function show_div_element(divElement){
        divElement.classList.add("show");
        divElement.classList.remove("hidden");
    }

export function hide_div_element(divElement){
        divElement.classList.add("hidden");
        divElement.classList.remove("show");
    }

export function change_class_name(divElement, oldClass, newClass) {
    divElement.classList.add(newClass);
    divElement.classList.remove(oldClass);
}

