async function getText() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let y = await res.json();

  showData(y);
}
const showData = (data) => {
  const root = document.getElementById("root");
  let htmlString = "";

  data.map((item) => {
    htmlString += '<div class="col-5 box-col-3 m-2  round p-4 ani">';
    htmlString += `<p class="fs-4 text-black ">name  = ${item.name} </p>`;
    htmlString += `<p class="fs-4 text-black ">username = ${item.username} </p>`;
    htmlString += `<p class="fs-4 text-primary ">email  = ${item.email} </p>`;
    htmlString += `<p class="fs-4 text-success ">your address is =  </p>`;
    htmlString += `<div class="d-flex gap-3">`;
    htmlString += `<p class="fs-6  text-secondary ">street: ${item.address.street} </p>`;
    htmlString += `<p class="fs-6  text-secondary ">suite:  ${item.address.suite}</p>`;
    htmlString += `<p class="fs-6  text-secondary ">city: ${item.address.city} </p>`;
    htmlString += `<p class="fs-6  text-secondary ">zipcode: ${item.address.zipcode}</p>`;
    htmlString += "</div>";
    htmlString += `<p class="fs-4 text-black ">phone = ${item.phone} </p>`;
    htmlString += `<p class="fs-4 text-danger">website = ${item.website}</p>`;
    htmlString += "</div>";
  });

  root.innerHTML = htmlString;
};

getText();
