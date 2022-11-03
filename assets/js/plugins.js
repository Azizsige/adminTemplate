var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
var tooltipTriggerListTwo = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tab tooltip"]')
);
var tooltipList = tooltipTriggerListTwo.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
