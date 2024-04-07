$(document).ready(function() {
    // Event listener for checkbox change
    $('.filter-checkbox').change(function() {
        var filterValue = 'all'; // Default to 'all'

        // Check if any checkbox is checked
        $('.filter-checkbox').each(function() {
            if ($(this).is(':checked')) {
                filterValue = $(this).val();
                return false; // Exit the loop if a checkbox is checked
            }
        });

        // Add or remove class to hide or show carousel items based on the selected category
        $('#rentals li').each(function() {
            var category = $(this).data('category');
            if (filterValue === 'all' || category === filterValue) {
                $(this).removeClass('hidden');
            } else {
                $(this).addClass('hidden');
            }
        });
    });
});
