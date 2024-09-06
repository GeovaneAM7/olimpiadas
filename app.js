function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById('resultados-pesquisa');

  // Seleciona o elemento de input onde o usuário digita o termo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se o campoPesquisa for uma string sem nada
  if (!campoPesquisa)  {
    section.innerHTML = "<p>Nenhum resultado encontrado. Digite o nome de um atleta ou esporte.</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let modalidade = "";

  // Itera sobre cada dado na array de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    modalidade = dado.modalidade.toLowerCase()
    // se titulo, descricao ou modalidade includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || modalidade.includes(campoPesquisa)) {
      // Constrói o HTML para cada resultado, incluindo:
      // - Um título com um link para mais detalhes
      // - Uma descrição
      // - Um link para mais informações
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p>${dado.descricao}</p>
          <p>Modalidade: ${dado.modalidade}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  // Se o campoPesquisa for uma string sem nada
  if (!resultados)  {
    resultados = "<p>Nenhum resultado encontrado.</p>"
  }

  // Atualiza o conteúdo da seção com os resultados construídos
  section.innerHTML = resultados;
}
