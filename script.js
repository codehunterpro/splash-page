const { body } = document;

function changeBackround(number) {
  let prevBackround = body.className;
  body.className = "";
  switch (number) {
    case "1":
      prevBackround === "background-1"
        ? false
        : body.classList.add("background-1");

      break;
    case "2":
      prevBackround === "background-2"
        ? false
        : body.classList.add("background-2");

      break;
    case "3":
      prevBackround === "background-3"
        ? false
        : body.classList.add("background-3");

      break;
    default:
      break;
  }
}
