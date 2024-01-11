async function getText() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let y = await res.json();

  showData(y);
}
const showData = (data) => {
  const root = document.getElementById("root");
  let htmlString = "";

  data.map((item) => {
    htmlString += '<div class="col-3 p-3 ani shad-3 m-4">';
    htmlString += "<div class='text-center mb-3'>";
    htmlString += `<h2 class=" text-primary fs-3">${item.title}</h2>`;
    htmlString += "</div>";
    htmlString += `<p class="text-secondary fs-6">${item.body}</p>`;
    htmlString += "</div>";
  });

  root.innerHTML = htmlString;
};

getText();
