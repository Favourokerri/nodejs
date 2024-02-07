const handbugger = document.querySelector('.handbugger');
const handbuggerIcon = document.querySelector('i');
linkElements = document.querySelectorAll('.nav-content .link')
let isDropDownVisible = false;

handbugger.addEventListener('click', ()=> {
    
    isDropDownVisible = !isDropDownVisible

    linkElements.forEach((linkElement) => {
    linkElement.style.display = isDropDownVisible ? 'block' : 'none';
    })

    // toggle method to change between fa-bars and f-times
    handbuggerIcon.classList.toggle('fa-bars', !isDropDownVisible);
    handbuggerIcon.classList.toggle('fa-times', isDropDownVisible);
})