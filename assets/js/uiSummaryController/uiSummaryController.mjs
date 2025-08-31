const modalSummary = document.getElementById("modalSummary");

function showModal_Summary() {
    modalSummary.classList.add ("open");
}

export function closeModal_Summary() {
    modalSummary.classList.remove ("open");
}

document.getElementById('buttonClose_ModalSummary').addEventListener('click', function() {
    closeModal_Summary();
});

document.getElementById('summaryChartButton').addEventListener('click', function() {
    showModal_Summary();
});