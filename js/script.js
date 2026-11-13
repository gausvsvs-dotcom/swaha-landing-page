document.addEventListener("DOMContentLoaded", function () {

    console.log("Landing page siap!");
    console.log("Hero Section loaded successfully!");

    const bookBtn = document.querySelector('.btn-gradient-orange');

    if (bookBtn) {
        bookBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Tombol Book Your Stay diklik!");
        });
    }

});
