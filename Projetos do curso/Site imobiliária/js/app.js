// =========================
// MOCK LOCAL (FALLBACK)
// =========================
// Usado caso a API falhe. Pode adicionar mais imóveis aqui se quiser.
const listaImoveisMock = [
  {
    id: 1,
    titulo: "Apart. 3 dorm. Papicu",
    descricao: "Lindo apartamento de 3 dormitórios localizado num dos melhores bairros de Fortaleza.",
    valor: 800000,
    area: 90,
    quartos: 3,
    tipo: "apartamento", // casa, apartamento, terreno
    localizacao: "Av. Santos Dumont, Papicu",
    mapa: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3752203335343!2d-38.52586952782257!3d-3.728109443164852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74881b09b88ef%3A0xe6f7c3f410959f98!2sAv.%20Santos%20Dumont!5e0!3m2!1spt-BR!2sbr!4v1729100381171!5m2!1spt-BR!2sbr' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    venda_aluguel: "venda", // venda, aluguel
    finalidade: "residencial", // comercial, residencial
    fotos: [
      "https://id725a57.s3.amazonaws.com/fotos/i00035801.jpeg", // principal [0]
      "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://img.freepik.com/fotos-premium/uma-casa-branca-encantadora-com-um-telhado-vermelho-brilhante-e-uma-janela-azul_1258321-339.jpg?w=360",
    ],
    status: true, // true = disponível, false = indisponível
  },
];

// =========================
// ENDPOINT DA API
// =========================
// Use o endpoint que você realmente estiver usando no projeto.
const linkAPI = "https://690f565745e65ab24ac355d4.mockapi.io/api/imoveis";

// Chama a função assim que o script carregar
buscarDadosAPI();

// =========================
// BUSCA NA API
// =========================
function buscarDadosAPI() {
  fetch(linkAPI)
    // Verifica o status e converte para JSON
    .then((response) => {
      if (response.status === 404) {
        throw new Error("Página não encontrada");
      }
      return response.json();
    })
    // Mostra os dados
    .then((dados) => {
      // Garante que seja um array
      const lista = Array.isArray(dados) ? dados : [dados];
      criarCardImovel(lista);
    })
    .catch((error) => {
      console.error("Erro ao buscar dados da API:", error);
      alert("Não foi possível carregar os imóveis da API. Exibindo imóveis padrão.");

      // Fallback: usa o mock local
      criarCardImovel(listaImoveisMock);
    });
}

// =========================
// CRIAÇÃO DOS CARDS
// =========================
function criarCardImovel(listaImoveis) {
  const container = document.querySelector("#imoveis");
  if (!container) {
    console.error('Elemento com id="imoveis" não encontrado no HTML.');
    return;
  }

  // Opcional: limpa o container antes de preencher
  container.innerHTML = "";

  // Percorre a lista de imóveis e cria os cards
  listaImoveis.forEach((imovel) => {
    // -------------------------
    // CARD PRINCIPAL
    // -------------------------
    const cardImovel = document.createElement("article");
    cardImovel.classList.add("imovel");

    // Adiciona o id como data-attribute (útil para futuras interações)
    if (imovel.id !== undefined) {
      cardImovel.setAttribute("data-id", imovel.id);
    }

    // Clique no imóvel → vai para a página de detalhes
    cardImovel.addEventListener("click", () => {
      if (imovel.id !== undefined) {
        window.location.href = `imovel.html?id=${imovel.id}`;
      }
    });

    // Adiciona o card na lista (na tela)
    container.appendChild(cardImovel);

    // -------------------------
    // FOTO
    // -------------------------
    const divFoto = document.createElement("div");
    divFoto.classList.add("foto");
    cardImovel.appendChild(divFoto);

    const img = document.createElement("img");

    // Tratamento da imagem, caso não exista
    if (imovel.fotos && imovel.fotos.length > 0) {
      img.setAttribute("src", imovel.fotos[0]);
      img.setAttribute("alt", imovel.titulo || "Foto do imóvel");
    } else {
      // Coloque aqui uma imagem padrão se quiser
      img.setAttribute("src", "https://via.placeholder.com/400x300?text=Sem+foto");
      img.setAttribute("alt", "Imóvel sem foto cadastrada");
    }

    divFoto.appendChild(img);

    // -------------------------
    // CONTEÚDO (TÍTULO + DESCRIÇÃO)
// -------------------------
    const divConteudo = document.createElement("div");
    divConteudo.classList.add("conteudo");
    cardImovel.appendChild(divConteudo);

    const titulo = document.createElement("h3");
    titulo.textContent = imovel.titulo || "Imóvel sem título";
    divConteudo.appendChild(titulo);

    const descricao = document.createElement("p");
    descricao.textContent =
      imovel.descricao || "Descrição não informada para este imóvel.";
    divConteudo.appendChild(descricao);

    // -------------------------
    // INFO (LOCAL, QUARTOS, ÁREA, VALOR)
    // -------------------------
    const divInfo = document.createElement("div");
    divInfo.classList.add("info");
    cardImovel.appendChild(divInfo);

    const divDados = document.createElement("div");
    divInfo.appendChild(divDados);

    const localizacao = document.createElement("div");
    localizacao.textContent = `Localização: ${imovel.localizacao || "Não informada"}`;
    divDados.appendChild(localizacao);

    const quartos = document.createElement("div");
    quartos.textContent = `Quartos: ${imovel.quartos ?? "-"}`;
    divDados.appendChild(quartos);

    const area = document.createElement("span");
    area.textContent = `Área: ${imovel.area ? imovel.area + " m²" : "Não informada"}`;
    divDados.appendChild(area);

    const valor = document.createElement("div");
    valor.classList.add("valor-imovel");

    if (imovel.valor) {
      valor.textContent = imovel.valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    } else {
      valor.textContent = "Valor sob consulta";
    }

    divDados.appendChild(valor);
  });
}
