let totalSelected = 0;

const selectedCount = document.getElementById("selectedCount");


const checkboxes = document.querySelectorAll(".rowcheckbox");


checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        const row = this.closest("tr");

        if (this.checked) {
            totalSelected = totalSelected + 1;
        } else {
            totalSelected = totalSelected - 1;
        }

        if (totalSelected === 1) {
            selectedCount.textContent = "1 Item Selected";
        } else {
            selectedCount.textContent = totalSelected + " Items Selected";
        }

    });

});


const button = document.getElementById("bttn");
button.addEventListener('click', () => {
    window.alert(`${totalSelected} items request submitted to warehouse`);
    window.location.reload();
})