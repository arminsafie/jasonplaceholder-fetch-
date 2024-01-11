

async function getText() {
  let res = await fetch("https://jsonplaceholder.typicode.com/albums");
  let y = await res.json();

  showData(y);
}
const showData = (data) => {
  const root = document.getElementById("root");
  let htmlString = "";

  data.map((data) => {
    htmlString +=
      '<div class="col-3 shadow bg-black p-3 ani-mar m-3 d-flex justify-content-center align-items-center ani">';
    htmlString += `<p class=" text-white">${data.title}</p>`;
    htmlString += "</div>";
  });
  root.innerHTML = htmlString;
};

getText();
