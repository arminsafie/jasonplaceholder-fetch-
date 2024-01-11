async function getText() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos");
  let y = await res.json();

  showData(y);
}
const showData = (data) => {
  const root = document.getElementById("root");
  let htmlString = "";

  data.map((item) => {
    htmlString += '<div class="col-3 ani box-col-3 round--todo  m-2 p-0 ">';
    if (item.completed == true) {
      htmlString += `<h2 class=" text-success round--todo shadow-h-t p-3  bg-transparentfs-3">${item.title} </h2>`;
    } else {
      htmlString += `<h2 class=" text-warning round--todo shadow-h-f p-3 bg-transparent fs-3">${item.title} </h2>`;
    }
    htmlString += "</div>";
  });

  root.innerHTML = htmlString;
};

getText();
