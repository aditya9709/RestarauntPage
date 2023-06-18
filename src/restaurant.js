const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // Create and append image element
  const image = document.createElement("img");
  image.src =
    "https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=1800&t=st=1687046645~exp=1687047245~hmac=8d00cad32a1cf61db7a3d8dd0174bf10e15ca4ab55199144df8b7624a573d45b";
  image.height = "300";
  pageContent.appendChild(image);

  // Create and append headline element
  const headline = document.createElement("h1");
  headline.textContent = "Welcome to  our restaurant!";
  pageContent.appendChild(headline);

  //Create and append copy element
  const copy = document.createElement("p");
  copy.textContent = "We serve the best food in town, come on over!";
  pageContent.appendChild(copy);
  content.appendChild(pageContent);
};

export default createRestaurantHomePage;
