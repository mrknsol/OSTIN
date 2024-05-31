document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const sideMenu = document.getElementById("side-menu");
    const closeMenu = document.getElementById("close-menu");
    const searchWrapper = document.querySelector(".side-menu .search-wrapper");
    const searchIcon = searchWrapper.querySelector(".search-icon");
    const clearIcon = searchWrapper.querySelector(".clear-icon");
    const searchInput = searchWrapper.querySelector(".search-input");

    menuButton.addEventListener("click", function() {
        sideMenu.classList.add("open");
    });

    closeMenu.addEventListener("click", function() {
        sideMenu.classList.remove("open");
    });

    searchIcon.addEventListener("click", function() {
        searchWrapper.classList.toggle("expanded");
        if (searchWrapper.classList.contains("expanded")) {
            searchInput.focus();
            clearIcon.style.display = 'flex';
        } else {
            clearIcon.style.display = 'none';
        }
    });

    clearIcon.addEventListener("click", function() {
        searchInput.value = "";
        searchInput.focus();
    });
});

