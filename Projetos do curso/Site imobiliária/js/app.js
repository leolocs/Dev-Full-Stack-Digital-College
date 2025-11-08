//Simula um JSON online (vem de uma API ou BD)
const listaImoveis = [
    {
        id:1,
        titulo:"Apart. 3 Dorm, Papicu",
        descricao: "Lindo apartamento de 3 dormitórios localizado num dos melhores bairros de Fortaleza",
        valor:800000,
        area:90,
        quartos:3,
        tipo:"apartamento", //casa, sala comercial
        localizacao: "Santos Dumont, Papicu",
        mapa:"",
        venda_aluguel:"venda", //Venda, Aluguel
        finalidade: "residencial", // comercial, residencial
        fotos:[],
        status: true, //true:disponível, false:indisponível
    }
];

//Percorre a Lista de Imóveis e cria os cards
listaImoveis.forEach((imovel) => {

    //Cria card do imóvel
    const cardImovel = document.createElement("article");
    cardImovel.classList.add("imovel");
    //Adicioma o card na lista
    document.querySelector("#imoveis").appendChild(cardImovel);

    //Foto
    const divFoto = document.createElement("div");
    divFoto.classList.add("foto");

    divFoto.setAttribute("id","foto");
    cardImovel.appendChild(divFoto)

    const img = document.createElement("img");
    img.setAttribute("src", imovel.fotos[0])
    divFoto.appendChild(img);

    //Conteúdo
    const divConteudo = document.createElement("div");
    divConteudo.classList.add("conteudo");
    cardImovel.appendChild(divConteudo); //Adiciona o conteúdo no card

    const titulo = document.createElement("h3");
    titulo.textContent = imovel.titulo;
    
    const descricao = document.createElement("p");
    descricao.textContent = imovel.descricao;

    //Info
    const divInfo = document.createElement("div");
    divInfo.classList.add("info");
    cardImovel.appendChild(divInfo); //Adiciona divInfo ao card pai
    
    const divDados = document.createElement("div");
    divInfo.appendChild(divDados);

    const localizacao = document.createElement("div");
    localizacao.textContent = `Local:${imovel.localizacao}`;
    divDados.appendChild(localizacao);

    const quartos = document.createElement("div");
    quartos.textContent = `Quartos ${imovel.quartos}`;
    divDados.appendChild(quartos);

    const area = document.createElement("span");
    area.textContent = `Area:${imovel.area} m²`;
    divDados.appendChild(area);

    const valor = document.createElement("div");
    valor.classList.add("valor-imovel");
    //Formata o valor para moeda brasileira
    valor.textContent = `${imovel.valor.toLocaleString("pt-br",
        {style: "currency", currency: "BRL"})}`
    
    divDados.appendChild(valor); 

})
