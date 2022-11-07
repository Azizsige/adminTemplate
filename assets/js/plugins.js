var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    trigger: "hover",
  });
});
var tooltipTriggerListTwo = [].slice.call(
  document.querySelectorAll('[data-tooltip="tooltip"]')
);
var tooltipList = tooltipTriggerListTwo.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    trigger: "hover",
  });
});
