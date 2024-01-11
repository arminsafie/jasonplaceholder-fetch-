async function getText() {
  let res = await fetch("https://jsonplaceholder.typicode.com/comments");
  let y = await res.json();

  showData(y);
}
const showData = (data) => {
  const root = document.getElementById("root");
  let htmlString = "";

  data.map((item) => {
    htmlString += '<div class="col-3 shadow-3 ani p-4 m-2">';
    htmlString += `<h2 class=" text-primary fs-3">${item.name}</h2>`;
    htmlString += `<h2 class=" text-success fs-5">email: ${item.email}</h2>`;
    htmlString += `<p class=" text-black fs-5">${item.body}</p>`;
    htmlString += "</div>";
  });

  root.innerHTML = htmlString;
};

getText();
