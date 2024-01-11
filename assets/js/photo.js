async function getText() {
  let res = await fetch("https://jsonplaceholder.typicode.com/photos");
  let y = await res.json();

  showData(y);
}
const showData = (data) => {
  const root = document.getElementById("root");
  let htmlString = "";

  data.map((item) => {
    htmlString += '<div class="col-3 ">';
    htmlString += '<div class=" card">';
    htmlString += `<img src="${item.thumbnailUrl}" class="card-img-top" alt="${item.title}" />`;
    htmlString +=
      '<div class="card-body d-flex justify-content-center flex-column">';
    htmlString += `<h5 class="card-title">${item.title}</h5>`;
    htmlString += '<a href="#" class="btn btn-primary">Go somewhere</a>';
    htmlString += "</div>";
    htmlString += "</div>";
    htmlString += "</div>";
  });

  root.innerHTML = htmlString;
};

getText();
