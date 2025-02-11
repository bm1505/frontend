//Collapsible Sidebar Functionality
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click',function() {
    this.classList.toggle('active');
    constnestedList = this.nextElementSibling;
    nestedList.style.display = nestedList.style.display === "block"?"none":"block";
});
});