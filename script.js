// ======= Animação das estatísticas =======
function animarNumero(id, valorFinal) {
  let atual = 0;
  let incremento = valorFinal / 100;

  let contador = setInterval(() => {
    atual += incremento;
    if (atual >= valorFinal) {
      atual = valorFinal;
      clearInterval(contador);
    }
    document.getElementById(id).textContent = Math.floor(atual).toLocaleString("pt-BR");
  }, 20);
}

window.addEventListener('load', () => {
  animarNumero("arvores", 5000);
  animarNumero("reciclagem", 12000);
  animarNumero("energia", 85);
});


// ======= Modal da galeria =======
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img-modal");
const caption = document.getElementById("caption");
const imagens = document.querySelectorAll(".modal-img");
const closeBtn = document.getElementsByClassName("close")[0];

imagens.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.textContent = img.alt;
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


// ======= Validação simples do formulário =======
const form = document.getElementById("form-contato");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const mensagem = form.querySelector('textarea').value.trim();

  if(nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
  form.reset();
});
