// document
//   .querySelectorAll("[data-image-magnify-container]")
//   .forEach((container) => {
//     const img = container.querySelector(".image-magnify");

//     container.addEventListener("mouseover", (e) => {
//       const { left, top, width, height } = container.getBoundingClientRect();
//       const x = ((e.clientX - left) / width) * 100;
//       const y = ((e.clientY - top) / width) * 100;
//       img.style.transform = `scale(2) translate(-${x - 50}%, -${y - 50}%)`;
//     });

//     container.addEventListener("mouseleave", () => {
//       img.style.transform = "scale(1) translate(0, 0)";
//     });
//   });
