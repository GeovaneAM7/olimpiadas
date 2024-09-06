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










/*

// Seleciona o elemento de input onde o usuário digita o termo de pesquisa
const campoPesquisa = document.getElementById('campo-pesquisa');

// Adiciona um ouvinte de eventos ao campo de pesquisa
// Quando a tecla "Enter" é pressionada, a função pesquisar() é chamada
campoPesquisa.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    pesquisar();
  }
});

function pesquisar() {
    // Obtém o termo de pesquisa inserido pelo usuário e converte para minúsculas para a pesquisa
    const termoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();
    // Seleciona a seção HTML onde os resultados serão exibidos
    const resultados = document.getElementById('resultados-pesquisa');

    // Filtra os dados para encontrar aqueles que correspondem ao termo de pesquisa, 
    // tanto no título quanto na descrição.
    const resultadosFiltrados = dados.filter(dado =>
        dado.titulo.toLowerCase().includes(termoPesquisa) ||
        dado.descricao.toLowerCase().includes(termoPesquisa)
    );

    // Cria uma string HTML para cada resultado encontrado, 
    // formatando-a com o título, descrição e modalidade do dado.
    // Em seguida, junta todas as strings em uma única string e 
    // atribui como o novo conteúdo HTML da seção de resultados.
    resultados.innerHTML = resultadosFiltrados.map(dado => `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p>${dado.descricao}</p>
        <p>Modalidade: ${dado.modalidade}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `).join('');
}

*/