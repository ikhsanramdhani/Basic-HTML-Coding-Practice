$(document).ready(function () {

    $("#btnEmail").click(function (e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        $("#divAlert").removeClass("d-none");
        const email = $("#inputEmail").val();
        $("#alertText").html(`Terima Kasih <strong>${email}</strong>. link sudah dapat dilihat di email anda`);
    })

    $("#btnClose").click(function () {
        $("#divAlert").addClass("d-none");
    })

    $("#formShip").submit(function (e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        const firstName = $("#firstName").val();
        const LastName = $("#lastName").val();
        const name = firstName + " " + LastName;
        const address = $("#address").val();
        $("#tq").html(`<h4><strong>Terima Kasih, ${name}</strong></h4>`);
        $("#info").html(`<p>Paket akan dikirimkan ke ${address}</p>`);
        $("#ship").addClass("d-none");
        $("#send").removeClass("d-none");
    })

    $("#imgContent div a img").click(function () {
        const imgSrc = $(this).attr("src");
        $("#imgParent img").attr("src", imgSrc);
    })
})