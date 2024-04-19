// ==================== ADD NEW USER ====================
$(function () {
    $('#login-show').click(function () {
        $('#login-modal').fadeIn().css("display", "flex");
    });
    $('.close-modal').click(function () {
        $('#login-modal').fadeOut();
        $('#EditModal').fadeOut();
        $('#newrecordmodal').fadeOut();

    });
    $('#edit-show').click(function () {
        $('#EditModal').fadeIn().css("display", "flex");
    });
    $('#ewrecord-show').click(function () {
        $('#newrecordmodal').fadeIn().css("display", "flex");
    });


});

// ==================== ADD NEW USER ====================

// JS code for form validation in user role -->

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signup-form').addEventListener('submit', function (event) {
        var selectedRole = document.getElementById("user_role").value;
        var errorElement = document.getElementById("error");

        if (selectedRole === "Select User Role") {
            errorElement.style.display = "block";
            event.preventDefault(); // prevent form submission
        } else {
            errorElement.style.display = "none";
        }
    });
});

// ==================== EDIT  USER ====================
function showEditModal(userId, username, password, user_role) {
    document.getElementById('edit-user-form').action = '/edit/' + userId;
    document.getElementById('edit-username').value = username;
    document.getElementById('edit-password').value = password;
    document.getElementById('edit-userRole').value = user_role;
    document.getElementById('EditModal').style.display = 'flex';

}


// ==================== DELETE USER ====================
function confirmDelete(userId) {

    var deleteUrl = '/delete/' + userId;
    window.location.href = deleteUrl;
}









