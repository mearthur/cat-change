// Buscando a imagem do gato na tela
const catImg = document.querySelector(".cat-img");

// Função que busca da api o gato e troca ele
const getImage = async () => {
//   document.querySelector(".cat-box").style.display = "none";
//   document.querySelector(".loader").style.display = "block";
  await fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      catImg.setAttribute("src", `${data[0].url}`);
    //   document.querySelector(".loader").style.display = "none";
    //   document.querySelector(".cat-box").style.display = "flex";
    });
};
getImage()
// Chamando a função no clique do usuário
document.querySelector(".button-cat").addEventListener("click", () => {
  getImage();
});
