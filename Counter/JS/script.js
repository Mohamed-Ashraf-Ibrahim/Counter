let count = 0; // This is Start of the Counter

// Increase Button
document.querySelector(".increase").addEventListener("click", function () {
  count += 1;
  document.querySelector("p").textContent = count;
});

// Decrease Button
document.querySelector(".decrease").addEventListener("click", function () {
  count -= 1;
  document.querySelector("p").textContent = count;
});

// Rest Button
document.querySelector(".rest").addEventListener("click", function () {
  count = 0;
  document.querySelector("p").textContent = count;
});
