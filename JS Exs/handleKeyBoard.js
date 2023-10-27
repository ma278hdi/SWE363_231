var turn = "X"
var cells = Array.from(document.querySelectorAll(".board div"))
var selectIndex = 0;

cells.forEach((cell,index)=>{
    cell.addEventListener("click", () => makeMove(index));

})
function makeMove(cellIndex){
    const cell = cells[cellIndex]
    if (cell.textContent === "") {
        cell.textContent = currentPlayer;
    
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
}
document.addEventListener("keydown",(ev)=>{
    const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    const enterKey = "Enter"; 

    if (arrowKeys.includes(ev.key)) {
        ev.preventDefault(); 
        handleArrowKey(ev.key);
      } else if (ev.key === enterKey) {

        makeMove(selectedCellIndex);
      }
})
function handleArrowKey(key) {
    const maxIndex = cells.length - 1;
  
    if (key === "ArrowUp") {
      selectedCellIndex = (selectedCellIndex - 3 + cells.length) % cells.length;
    } else if (key === "ArrowDown") {
      selectedCellIndex = (selectedCellIndex + 3) % cells.length;
    } else if (key === "ArrowLeft") {
      selectedCellIndex = (selectedCellIndex - 1 + cells.length) % cells.length;
    } else if (key === "ArrowRight") {
      selectedCellIndex = (selectedCellIndex + 1) % cells.length;
    }
    cells.forEach((cell) => cell.classList.remove("selected"));
    cells[selectedCellIndex].classList.add("selected");
}