const tiles = document.querySelectorAll(".tile");
console.log(tiles)

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    tiles.forEach((p) => {
      p.classList.remove("active");
    });

    tile.classList.add("active");
  });
});
