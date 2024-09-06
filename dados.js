let dados = [
    /*{
        titulo: "Rayssa Leal",
        descricao: "Rayssa Leal é uma skatista brasileira que conquistou o mundo com seu talento precoce. Aos poucos anos, ela se tornou a mais jovem medalhista olímpica da história do Brasil, trazendo o skate para o centro das atenções. Sua habilidade e carisma a tornaram um ícone da nova geração de atletas.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal"
    },
    {
        titulo: "Beatriz Souza",
        descricao: "Beatriz Souza é uma judoca brasileira que se destacou nos Jogos Olímpicos de Paris 2024, conquistando a medalha de ouro. Sua técnica e determinação a levaram ao topo do pódio, inspirando novos talentos no judô brasileiro",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza"
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "Rebeca Andrade é uma ginasta artística brasileira que conquistou o coração dos brasileiros e se tornou um dos maiores nomes do esporte nacional. Com sua força, determinação e talento, ela coleciona medalhas em competições nacionais e internacionais, incluindo os Jogos Olímpicos. Rebeca é um exemplo de superação e inspiração para muitos jovens atletas, mostrando que com dedicação e paixão é possível alcançar grandes feitos.",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade"
    },*/
    {
        titulo: "Ana Caroline Silva",
        descricao: "Ana Caroline Silva é uma atleta brasileira que vem se destacando no arremesso de peso, mostrando um grande potencial e projetando-se como uma das principais promessas do atletismo nacional.",
        link: "",
        modalidade: "Atletismo feminino - Arremesso de peso"
    },
    {
        titulo: "Lívia Avancini",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Arremesso de peso"
    },
    {
        titulo: "Izabela Silva",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Lançamento de disco"
    },
    {
        titulo: "Andressa de Morais",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Lançamento de disco"
    },
    {
        titulo: "Jucilene de Lima",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Lançamento de dardo"
    },
    {
        titulo: "Ana Carolina Azevedo",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - 100m e 200m"
    },
    {
        titulo: "Vitória Rosa",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - 100m"
    },
    {
        titulo: "Lorraine Martins",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - 200m"
    },
    {
        titulo: "Tiffani Marinho",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - 400m"
    },
    {
        titulo: "Chayenne da Silva",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - 400m com barreiras"
    },
    {
        titulo: "Flávia Maria de Lima",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - 800m"
    },
    {
        titulo: "Tatiane Raquel da Silva",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - 3000m com obstáculos"
    },
    {
        titulo: "Valdileia Martins",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Salto em altura"
    },
    {
        titulo: "Eliane Martins",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Salto em distância"
    },
    {
        titulo: "Lissandra Campos",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Salto em distância"
    },
    {
        titulo: "Juliana Campos",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Salto com vara"
    },
    {
        titulo: "Gabriele Santos",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Salto triplo"
    },
    {
        titulo: "Érica Sena",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Marcha atlética 20km"
    },
    {
        titulo: "Viviane Lyra",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Marcha atlética 20km"
    },
    {
        titulo: "Gabriela Muniz",
        descricao: "",
        link: "",
        modalidade: "Atletismo feminino - Marcha atlética 20km"
    }, 
    {
        titulo: "Wellington Morais",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Arremesso de peso"
    },
    {
        titulo: "Luiz Maurício",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Lançamento de dardo"
    },
    {
        titulo: "Pedro Henrique Nunes",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Lançamento de dardo"
    },
    {
        titulo: "Caio Bonfim",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Marcha atlética 20km"
    },
    {
        titulo: "Matheus Corrêa",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Marcha atlética 20km"
    },
    {
        titulo: "Max Batista",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Marcha atlética"
    },
    {
        titulo: "Erik Cardoso",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - 100m e Revezamento 4x100m"
    },
    {
        titulo: "Felipe Bardi",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - 100m e Revezamento 4x100m"
    },
    {
        titulo: "Paulo André",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - 100m e Revezamento 4x100m"
    },
    {
        titulo: "Rafael Pereira",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - 110m com barreiras"
    },
    {
        titulo: "Eduardo de Deus",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - 110m com barreiras"
    },
    {
        titulo: "Renan Gallina",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - 200m e Revezamento 4x100m"
    },
    {
        titulo: "Lucas Carvalho",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - 400m e Revezamento 4x400m"
    },
    {
        titulo: "Matheus Lima",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - 400m, 400m com barreiras e Revezamento 4x400m"
    },
    {
        titulo: "Alison dos Santos 'Piu'",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - 400m com barreiras e Revezamento 4x400m"
    },
    {
        titulo: "Almir Júnior",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Salto triplo"
    },
    {
        titulo: "Fernando Ferreira",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Salto em altura"
    },
    {
        titulo: "Lucas Marcelino",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Salto em distância"
    },
    {
        titulo: "Douglas Hernandes Mendes",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Revezamento 4x400m"
    },
    {
        titulo: "Lucas Vilar",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Revezamento 4x400m"
    },
    {
        titulo: "Jadson Erick Lima",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Revezamento 4x400m"
    },
    {
        titulo: "Gabriel Garcia",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Revezamento 4x100m"
    },
    {
        titulo: "Hygor Bezerra",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Revezamento 4x100m"
    },
    {
        titulo: "José Fernando Santana, 'Fernando Balotelli'",
        descricao: "",
        link: "",
        modalidade: "Atletismo masculino - Decatlo"
    },   
    {
        titulo: "Caio Bonfim",
        descricao: "",
        link: "",
        modalidade: "Atletismo misto - Marcha atlética, revezamento 42km"
    },
    {
        titulo: "Viviane Lyra",
        descricao: "",
        link: "",
        modalidade: "Atletismo misto - Marcha atlética, revezamento 42km"
    },
    {
        titulo: "Juliana Vieira",
        descricao: "",
        link: "",
        modalidade: "Badminton feminino"
    },
    {
        titulo: "Ygor Coelho",
        descricao: "",
        link: "",
        modalidade: "Badminton masculino"
    },
    {
        titulo: "Marcelinho Huertas",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },
    {
        titulo: "Yago Mateus",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },
    {
        titulo: "Raulzinho",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },
    {
        titulo: "George de Paula",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },
    {
        titulo: "Vitor Benite",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },
    {
        titulo: "Léo Meindl",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },
    {
        titulo: "Gui Santos",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },
    {
        titulo: "Didi Louzada",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },
    {
        titulo: "Bruno Caboclo",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },
    {
        titulo: "João Marcelo “Mãozinha”",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },
    {
        titulo: "Lucas Dias",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },
    {
        titulo: "Cristiano Felício",
        descricao: "",
        link: "",
        modalidade: "Basquete masculino"
    },    
    {
        titulo: "Bárbara Santos",
        descricao: "",
        link: "",
        modalidade: "Boxe feminino - 66kg"
    },
    {
        titulo: "Beatriz Ferreira",
        descricao: "",
        link: "",
        modalidade: "Boxe feminino - 60kg"
    },
    {
        titulo: "Caroline Almeida",
        descricao: "",
        link: "",
        modalidade: "Boxe feminino - 50kg"
    },
    {
        titulo: "Jucielen Romeu",
        descricao: "",
        link: "",
        modalidade: "Boxe feminino - 57kg"
    },
    {
        titulo: "Tatiana Chagas",
        descricao: "",
        link: "",
        modalidade: "Boxe feminino - 54kg"
    },    
    {
        titulo: "Abner Teixeira",
        descricao: "",
        link: "",
        modalidade: "Boxe masculino - +92kg"
    },
    {
        titulo: "Keno Marley",
        descricao: "",
        link: "",
        modalidade: "Boxe masculino - 92kg"
    },
    {
        titulo: "Luiz Oliveira “Bolinha”",
        descricao: "",
        link: "",
        modalidade: "Boxe masculino - 57kg"
    },
    {
        titulo: "Michael Douglas Trindade",
        descricao: "",
        link: "",
        modalidade: "Boxe masculino - 51kg"
    },
    {
        titulo: "Wanderley Pereira",
        descricao: "",
        link: "",
        modalidade: "Boxe masculino - 80kg"
    },    
    {
        titulo: "Ana Sátila",
        descricao: "",
        link: "",
        modalidade: "Canoagem Slalom feminino - K1, C1 e Caiaque Cross"
    },
    {
        titulo: "Pedro Gonçalves “Pepê Gonçalves”",
        descricao: "",
        link: "",
        modalidade: "Canoagem Slalom masculino - K1, C1 e Caiaque Cross"
    },
    {
        titulo: "Valdenice Conceição",
        descricao: "",
        link: "",
        modalidade: "Canoagem Velocidade feminino - C1 200m"
    },
    {
        titulo: "Ana Paula Vergutz",
        descricao: "",
        link: "",
        modalidade: "Canoagem Velocidade feminino - K1 500m"
    },
    {
        titulo: "Isaquias Queiroz",
        descricao: "",
        link: "",
        modalidade: "Canoagem Velocidade masculino - C1 1000m e C2 500m"
    },
    {
        titulo: "Jacky Godmann",
        descricao: "",
        link: "",
        modalidade: "Canoagem Velocidade masculino - C2 500m"
    },
    {
        titulo: "Mateus Nunes",
        descricao: "",
        link: "",
        modalidade: "Canoagem Velocidade masculino - C1 1000m"
    },
    {
        titulo: "Vagner Souta",
        descricao: "",
        link: "",
        modalidade: "Canoagem Velocidade masculino - K1 1000m"
    },
    {
        titulo: "Paola Reis",
        descricao: "",
        link: "",
        modalidade: "Ciclismo BMX Racing feminino"
    },
    {
        titulo: "Gustavo Batista “Bala Loka”",
        descricao: "",
        link: "",
        modalidade: "Ciclismo BMX Freestyle masculino"
    },
    {
        titulo: "Ana Victoria Magalhães “Tota Magalhães”",
        descricao: "",
        link: "",
        modalidade: "Ciclismo Estrada feminino"
    },
    {
        titulo: "Vinicius Rangel",
        descricao: "",
        link: "",
        modalidade: "Ciclismo Estrada masculino"
    },
    {
        titulo: "Raiza Goulão",
        descricao: "",
        link: "",
        modalidade: "Ciclismo Mountain Bike feminino"
    },
    {
        titulo: "Ulan Galinski",
        descricao: "",
        link: "",
        modalidade: "Ciclismo Mountain Bike masculino"
    },
    {
        titulo: "Mariana Pistoia",
        descricao: "",
        link: "",
        modalidade: "Esgrima feminino - florete"
    },
    {
        titulo: "Nathalie Moellhausen",
        descricao: "",
        link: "",
        modalidade: "Esgrima feminino - espada"
    },
    {
        titulo: "Guilherme Toldo",
        descricao: "",
        link: "",
        modalidade: "Esgrima masculino - florete"
    },
    {
        titulo: "Lorena",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Tainá",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Tarciane",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Rafaelle",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Thais Ferreira",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Antônia",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Tamires",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Yasmim",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Yaya",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Duda Sampaio",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Ana Vitória",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Gabi Portilho",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Adriana",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Kerolin",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Ludmila",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Marta",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Jennifer",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },
    {
        titulo: "Gabi Nunes",
        descricao: "",
        link: "",
        modalidade: "Futebol feminino"
    },    
    {
        titulo: "Flávia Saraiva",
        descricao: "",
        link: "",
        modalidade: "Ginástica artística feminina"
    },
    {
        titulo: "Jade Barbosa",
        descricao: "",
        link: "",
        modalidade: "Ginástica artística feminina"
    },
    {
        titulo: "Júlia Soares",
        descricao: "",
        link: "",
        modalidade: "Ginástica artística feminina"
    },
    {
        titulo: "Lorrane Oliveira",
        descricao: "",
        link: "",
        modalidade: "Ginástica artística feminina"
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "",
        link: "",
        modalidade: "Ginástica artística feminina"
    },
    {
        titulo: "Arthur Nory",
        descricao: "",
        link: "",
        modalidade: "Ginástica artística masculina"
    },
    {
        titulo: "Diogo Soares",
        descricao: "",
        link: "",
        modalidade: "Ginástica artística masculina"
    },  
    {
        titulo: "Bárbara Domingos",
        descricao: "",
        link: "",
        modalidade: "Ginástica rítmica individual"
    },
    {
        titulo: "Deborah Medrado",
        descricao: "",
        link: "",
        modalidade: "Ginástica rítmica conjunto"
    },
    {
        titulo: "Maria Eduarda Arakaki",
        descricao: "",
        link: "",
        modalidade: "Ginástica rítmica conjunto"
    },
    {
        titulo: "Nicole Pírcio",
        descricao: "",
        link: "",
        modalidade: "Ginástica rítmica conjunto"
    },
    {
        titulo: "Sofia Madeira",
        descricao: "",
        link: "",
        modalidade: "Ginástica rítmica conjunto"
    },
    {
        titulo: "Victoria Borges",
        descricao: "",
        link: "",
        modalidade: "Ginástica rítmica conjunto"
    },    
    {
        titulo: "Camilla Lopes",
        descricao: "",
        link: "",
        modalidade: "Ginástica trampolim feminino"
    },
    {
        titulo: "Rayan Castro",
        descricao: "",
        link: "",
        modalidade: "Ginástica trampolim masculino"
    },  
    {
        titulo: "Gabriela Moreschi",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Renata Arruda",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Adriana Cardoso",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Jéssica Quintino",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Larissa Araújo",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Bruna de Paula",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Gabriela Bitolo",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Giulia Guariero",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Jhenifer dos Santos",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Kelly Rosa",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Mariana Fernandes",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Patrícia Matieli",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Marcela Arouinian",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },
    {
        titulo: "Tamires Araújo",
        descricao: "",
        link: "",
        modalidade: "Handebol feminino"
    },    
    {
        titulo: "João Victor Marcari Oliva",
        descricao: "",
        link: "",
        modalidade: "Hipismo Adestramento"
    },
    {
        titulo: "Carlos Ramadam Parro",
        descricao: "",
        link: "",
        modalidade: "Hipismo CCE"
    },
    {
        titulo: "Márcio Carvalho Jorge",
        descricao: "",
        link: "",
        modalidade: "Hipismo CCE"
    },
    {
        titulo: "Rafael Mamprim Losano",
        descricao: "",
        link: "",
        modalidade: "Hipismo CCE"
    },
    {
        titulo: "Ruy Leme da Fonseca",
        descricao: "",
        link: "",
        modalidade: "Hipismo CCE"
    },
    {
        titulo: "Yuri Mansur",
        descricao: "",
        link: "",
        modalidade: "Hipismo Saltos"
    },
    {
        titulo: "Stephan de Freitas Barcha",
        descricao: "",
        link: "",
        modalidade: "Hipismo Saltos"
    },
    {
        titulo: "Rodrigo Pessoa",
        descricao: "",
        link: "",
        modalidade: "Hipismo Saltos"
    },
    {
        titulo: "Pedro Veniss",
        descricao: "",
        link: "",
        modalidade: "Hipismo Saltos"
    },
    {
        titulo: "Natasha Ferreira",
        descricao: "",
        link: "",
        modalidade: "Judô Feminino (-48kg)"
    },
    {
        titulo: "Larissa Pimenta",
        descricao: "",
        link: "",
        modalidade: "Judô Feminino (-52kg)"
    },
    {
        titulo: "Rafaela Silva",
        descricao: "",
        link: "",
        modalidade: "Judô Feminino (-57kg)"
    },
    {
        titulo: "Ketleyn Quadros",
        descricao: "",
        link: "",
        modalidade: "Judô Feminino (-63kg)"
    },
    {
        titulo: "Mayra Aguiar",
        descricao: "",
        link: "",
        modalidade: "Judô Feminino (-78kg)"
    },
    {
        titulo: "Beatriz Souza",
        descricao: "",
        link: "",
        modalidade: "Judô Feminino (+78kg)"
    },
    {
        titulo: "Michel Augusto",
        descricao: "",
        link: "",
        modalidade: "Judô Masculino (-60kg)"
    },
    {
        titulo: "William Lima",
        descricao: "",
        link: "",
        modalidade: "Judô Masculino (-66kg)"
    },
    {
        titulo: "Daniel Cargnin",
        descricao: "",
        link: "",
        modalidade: "Judô Masculino (-73kg)"
    },
    {
        titulo: "Guilherme Schimidt",
        descricao: "",
        link: "",
        modalidade: "Judô Masculino(-81kg)"
    },
    {
        titulo: "Rafael Macedo",
        descricao: "",
        link: "",
        modalidade: "Judô Masculino (-90kg)"
    },
    {
        titulo: "Leonardo Gonçalves",
        descricao: "",
        link: "",
        modalidade: "Judô Masculino (-100kg)"
    },
    {
        titulo: "Rafael Silva",
        descricao: "",
        link: "",
        modalidade: "Judô Masculino (+100kg)"
    },
    {
        titulo: "Amanda Schott",
        descricao: "",
        link: "",
        modalidade: "Levantamento de Pesos Feminino (até 71kg)"
    },
    {
        titulo: "Laura Amaro",
        descricao: "",
        link: "",
        modalidade: "Levantamento de Pesos Feminino (até 81kg)"
    },
    {
        titulo: "Ana Marcela Cunha",
        descricao: "",
        link: "",
        modalidade: "Maratona Aquática Feminino (10km)"
    },
    {
        titulo: "Viviane Jungblut",
        descricao: "",
        link: "",
        modalidade: "Maratona Aquática Feminino (10km)"
    },
    {
        titulo: "Guilherme Costa “Cachorrão”",
        descricao: "",
        link: "",
        modalidade: "Maratona Aquática Masculino (10km)"
    },
    {
        titulo: "Ana Carolina Vieira",
        descricao: "",
        link: "",
        modalidade: "Natação Feminino - 4x100m livre e 4x100m medley misto"
    },
    {
        titulo: "Beatriz Dizotti",
        descricao: "",
        link: "",
        modalidade: "Natação Feminino - 1500m livre"
    },
    {
        titulo: "Gabrielle Roncatto",
        descricao: "",
        link: "",
        modalidade: "Natação Feminino - 400m livre e 4x200m livre"
    },
    {
        titulo: "Giovana Reis",
        descricao: "",
        link: "",
        modalidade: "Natação Feminino - 4x100m livre"
    },
    {
        titulo: "Maria Fernanda Costa",
        descricao: "",
        link: "",
        modalidade: "Natação Feminino - 200m e 400m livre, 4x100m e 4x200m livre"
    },
    {
        titulo: "Maria Paula Heitmann",
        descricao: "",
        link: "",
        modalidade: "Natação Feminino - 4x200m livre"
    },
    {
        titulo: "Stephanie Balduccini",
        descricao: "",
        link: "",
        modalidade: "Natação Feminino - 4x100m e 4x200m livre e 4x100m medley misto"
    },
    {
        titulo: "Breno Correia",
        descricao: "",
        link: "",
        modalidade: "Natação Masculino - 4x100m livre"
    },
    {
        titulo: "Eduardo Moraes",
        descricao: "",
        link: "",
        modalidade: "Natação Masculino - 4x200m livre"
    },
    {
        titulo: "Fernando Scheffer",
        descricao: "",
        link: "",
        modalidade: "Natação Masculino - 4x200m livre"
    },
    {
        titulo: "Gabriel Santos",
        descricao: "",
        link: "",
        modalidade: "Natação Masculino - 4x100m livre"
    },
    {
        titulo: "Guilherme Basseto",
        descricao: "",
        link: "",
        modalidade: "Natação Masculino - 4x100m medley misto"
    },
    {
        titulo: "Guilherme Caribé",
        descricao: "",
        link: "",
        modalidade: "Natação Masculino - 50m e 100m livre, e 4x100m livre"
    },
    {
        titulo: "Guilherme Costa “Cachorrão”",
        descricao: "",
        link: "",
        modalidade: "Natação Masculino - 200m, 400m e 800m livre e 4x200m livre"
    },
    {
        titulo: "Kayky Mota",
        descricao: "",
        link: "",
        modalidade: "Natação Masculino - 100m borboleta e 4x100m medley misto"
    },
    {
        titulo: "Marcelo Chierighini",
        descricao: "",
        link: "",
        modalidade: "Natação Masculino - 100m livre e 4x100m livre"
    },
    {
        titulo: "Murilo Sartori",
        descricao: "",
        link: "",
        modalidade: "Natação Masculino - 4x200m livre"
    },
    {
        titulo: "Nicolas Albiero",
        descricao: "",
        link: "",
        modalidade: "Natação Masculino - 200m borboleta"
    },
    {
        titulo: "Isabella Abreu",
        descricao: "",
        link: "",
        modalidade: "Pentatlo moderno"
    },
    {
        titulo: "Beatriz Tavares",
        descricao: "",
        link: "",
        modalidade: "Remo Feminino - Single skiff"
    },
    {
        titulo: "Lucas Verthein",
        descricao: "",
        link: "",
        modalidade: "Remo Masculino - Single skiff"
    },
    {
        titulo: "Mariana Nicolau",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Luiza Campos",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Milena Mariano",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Gisele Gomes",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Thalia Costa",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Thalita Costa",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Yasmim Soares",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Marina Fioravanti",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Gabriela Lima",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Raquel Kochhann",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Bianca Silva",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Marcelle Souza",
        descricao: "",
        link: "",
        modalidade: "Rugby Feminino"
    },
    {
        titulo: "Ingrid Oliveira",
        descricao: "",
        link: "",
        modalidade: "Salto ornamental feminino - Plataforma 10m"
    },
    {
        titulo: "Dora Varella",
        descricao: "",
        link: "",
        modalidade: "Skate Feminino - Park"
    },
    {
        titulo: "Gabriela Mazetto",
        descricao: "",
        link: "",
        modalidade: "Skate Feminino - Street"
    },
    {
        titulo: "Isadora Pacheco",
        descricao: "",
        link: "",
        modalidade: "Skate Feminino - Park"
    },
    {
        titulo: "Pâmela Rosa",
        descricao: "",
        link: "",
        modalidade: "Skate Feminino - Street"
    },
    {
        titulo: "Raicca Ventura",
        descricao: "",
        link: "",
        modalidade: "Skate Feminino - Park"
    },
    {
        titulo: "Rayssa Leal",
        descricao: "Rayssa Leal é uma skatista brasileira que conquistou o mundo com seu talento precoce. Aos poucos anos, ela se tornou a mais jovem medalhista olímpica da história do Brasil, trazendo o skate para o centro das atenções. Sua habilidade e carisma a tornaram um ícone da nova geração de atletas.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        modalidade: "Skate Feminino - Street"
    },
    {
        titulo: "Augusto Akio “Japinha”",
        descricao: "",
        link: "",
        modalidade: "Skate Masculino - Park"
    },
    {
        titulo: "Felipe Gustavo",
        descricao: "",
        link: "",
        modalidade: "Skate Masculino - Street"
    },
    {
        titulo: "Giovanni Vianna",
        descricao: "",
        link: "",
        modalidade: "Skate Masculino - Street"
    },
    {
        titulo: "Kelvin Hoefler",
        descricao: "",
        link: "",
        modalidade: "Skate Masculino - Street"
    },
    {
        titulo: "Luigi Cini",
        descricao: "",
        link: "",
        modalidade: "Skate Masculino - Park"
    },
    {
        titulo: "Pedro Barros",
        descricao: "",
        link: "",
        modalidade: "Skate Masculino - Park"
    },
    {
        titulo: "Luana Silva",
        descricao: "",
        link: "",
        modalidade: "Surfe Feminino"
    },
    {
        titulo: "Tainá Hinckel",
        descricao: "",
        link: "",
        modalidade: "Surfe Feminino"
    },
    {
        titulo: "Tatiana Weston-Webb",
        descricao: "",
        link: "",
        modalidade: "Surfe Feminino"
    },
    {
        titulo: "Filipe Toledo",
        descricao: "",
        link: "",
        modalidade: "Surfe Masculino"
    },
    {
        titulo: "Gabriel Medina",
        descricao: "",
        link: "",
        modalidade: "Surfe Masculino"
    },
    {
        titulo: "João Chianca “Chumbinho”",
        descricao: "",
        link: "",
        modalidade: "Surfe Masculino"
    },
    {
        titulo: "Caroline Santos “Juma”",
        descricao: "",
        link: "",
        modalidade: "Taekwondo Feminino (-67kg)"
    },
    {
        titulo: "Maria Clara Pacheco",
        descricao: "",
        link: "",
        modalidade: "Taekwondo Feminino (-57kg)"
    },
    {
        titulo: "Edival Pontes",
        descricao: "",
        link: "",
        modalidade: "Taekwondo Masculino (-68kg)"
    },
    {
        titulo: "Henrique Marques",
        descricao: "",
        link: "",
        modalidade: "Taekwondo Masculino (-80kg)"
    },
    {
        titulo: "Beatriz Haddad Maia",
        descricao: "",
        link: "",
        modalidade: "Tênis Feminino - Simples e duplas"
    },
    {
        titulo: "Laura Pigossi",
        descricao: "",
        link: "",
        modalidade: "Tênis Feminino - Simples"
    },
    {
        titulo: "Luisa Stefani",
        descricao: "",
        link: "",
        modalidade: "Tênis Feminino - Duplas"
    },
    {
        titulo: "Thiago Monteiro",
        descricao: "",
        link: "",
        modalidade: "Tênis Masculino - Simples e duplas"
    },
    {
        titulo: "Thiago Wild",
        descricao: "",
        link: "",
        modalidade: "Tênis Masculino - Simples e duplas"
    },
    {
        titulo: "Bruna Alexandre",
        descricao: "",
        link: "",
        modalidade: "Tênis de mesa Feminino - Individual e equipe"
    },
    {
        titulo: "Bruna Takahashi",
        descricao: "",
        link: "",
        modalidade: "Tênis de mesa Feminino - Individual, equipe e duplas mistas"
    },
    {
        titulo: "Giulia Takahashi",
        descricao: "",
        link: "",
        modalidade: "Tênis de mesa Feminino - Individual e equipe"
    },
    {
        titulo: "Guilherme Teodoro",
        descricao: "",
        link: "",
        modalidade: "Tênis de mesa Masculino - Individual e equipe"
    },
    {
        titulo: "Hugo Calderano",
        descricao: "",
        link: "",
        modalidade: "Tênis de mesa Masculino - Individual e equipe"
    },
    {
        titulo: "Vitor Ishiy",
        descricao: "",
        link: "",
        modalidade: "Tênis de mesa Masculino - Individual, equipe e duplas mistas"
    },
    {
        titulo: "Ana Luiza Caetano",
        descricao: "",
        link: "",
        modalidade: "Tiro com arco Feminino - Recurvo individual"
    },
    {
        titulo: "Marcus D'Almeida",
        descricao: "",
        link: "",
        modalidade: "Tiro com arco Masculino - Recurvo individual"
    },
    {
        titulo: "Georgia Furquim Bastos",
        descricao: "",
        link: "",
        modalidade: "Tiro esportivo Feminino - Skeet"
    },
    {
        titulo: "Geovana Meyer",
        descricao: "",
        link: "",
        modalidade: "Tiro esportivo Feminino - Carabina 3 posições e Carabina de ar 10m"
    },
    {
        titulo: "Philipe Chateaubrian",
        descricao: "",
        link: "",
        modalidade: "Tiro esportivo Masculino - Pistola de ar 10m"
    },
    {
        titulo: "Djenyfer Arnold",
        descricao: "",
        link: "",
        modalidade: "Triatlo Feminino"
    },
    {
        titulo: "Vittoria Lopes",
        descricao: "",
        link: "",
        modalidade: "Triatlo Feminino"
    },
    {
        titulo: "Manoel Messias",
        descricao: "",
        link: "",
        modalidade: "Triatlo Masculino"
    },
    {
        titulo: "Miguel Hidalgo",
        descricao: "",
        link: "",
        modalidade: "Triatlo Masculino"
    },
    {
        titulo: "Gabriella Kidd",
        descricao: "",
        link: "",
        modalidade: "Vela Feminino - Laser Radial"
    },
    {
        titulo: "Martine Grael e Kahena Kunze",
        descricao: "",
        link: "",
        modalidade: "Vela Feminino - 49erFX"
    },
    {
        titulo: "Bruno Fontes",
        descricao: "",
        link: "",
        modalidade: "Vela Masculino - Laser"
    },
    {
        titulo: "Bruno Lobo",
        descricao: "",
        link: "",
        modalidade: "Vela Masculino - Fórmula Kite"
    },
    {
        titulo: "Matheus Isaac",
        descricao: "",
        link: "",
        modalidade: "Vela Masculino - IQFoil"
    },
    {
        titulo: "Marco Grael e Gabriel Simões",
        descricao: "",
        link: "",
        modalidade: "Vela Masculino - 49er"
    },
    {
        titulo: "Marina Ardnt e João Siemsen",
        descricao: "",
        link: "",
        modalidade: "Vela Misto - Nacra"
    },
    {
        titulo: "Isabel Swan e Henrique Haddad",
        descricao: "",
        link: "",
        modalidade: "Vela Misto - 470"
    },
    {
        titulo: "Ana Cristina",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Carol",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Diana",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Gabi",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Julia Bergmann",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Lorenne",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Macris",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Nyeme",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Roberta",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Rosamaria",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Tainara",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Thaisa",
        descricao: "",
        link: "",
        modalidade: "Vôlei Feminino"
    },
    {
        titulo: "Adriano",
        descricao: "",
        link: "",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Alan",
        descricao: "",
        link: "",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Bruninho",
        descricao: "",
        link: "",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Cachopa",
        descricao: "Fernando Gil Kreling, mais conhecido como Cachopa, é um levantador brasileiro que se destacou rapidamente no cenário nacional e internacional do vôlei. Sua habilidade, visão de jogo e liderança o tornaram uma peça fundamental na seleção brasileira e em diversos clubes por onde passou.",
        link: "https://pt.wikipedia.org/wiki/Fernando_Kreling",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Darlan",
        descricao: "Darlan Ferreira Souza é um nome que tem ganhado cada vez mais destaque no cenário do vôlei mundial. Com seu talento, agilidade e habilidade para finalizar as jogadas, ele se tornou um dos principais jogadores da posição de oposto na seleção brasileira e em seus clubes.",
        link: "https://pt.wikipedia.org/wiki/Darlan_Souza",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Flávio",
        descricao: "Flávio César Resende Gualberto é um nome que vem ganhando cada vez mais destaque no cenário do vôlei mundial. Com sua altura imponente e seu bloqueio poderoso, ele se consolidou como um dos principais centrais da seleção brasileira e de diversos clubes por onde passou.",
        link: "https://pt.wikipedia.org/wiki/Flávio_Gualberto",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Isac",
        descricao: "Isac Viana Santos é um nome de peso no vôlei brasileiro. Com sua altura imponente e seu bloqueio poderoso, ele se consolidou como um dos principais centrais da seleção brasileira e de diversos clubes por onde passou.",
        link: "https://pt.wikipedia.org/wiki/Isac_Santos",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Leal",
        descricao: "Yoandy Leal Hidalgo é um nome que ecoa com força nas quadras de vôlei do mundo todo. O ponteiro cubano, naturalizado brasileiro, se tornou um dos maiores jogadores da história do esporte, conquistando o coração dos fãs com sua habilidade, dedicação e carisma.",
        link: "https://pt.wikipedia.org/wiki/Yoandy_Leal",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Lucão",
        descricao: "Lucas Saatkamp, mais conhecido como Lucão, é um dos maiores nomes do vôlei brasileiro e mundial. Com sua altura imponente e seu bloqueio poderoso,",
        link: "https://pt.wikipedia.org/wiki/Lucas_Saatkamp",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Lucarelli",
        descricao: "Ricardo Lucarelli Santos de Souza, mais conhecido simplesmente como Lucarelli, é um dos nomes mais promissores do vôlei brasileiro da atualidade. Com seu talento, dedicação e carisma,",
        link: "https://pt.wikipedia.org/wiki/Lucarelli_(voleibolista)",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Lukas Bergmann",
        descricao: "Lukas Felipe Bergmann é um nome que vem ganhando cada vez mais destaque no cenário do vôlei mundial. Com apenas 20 anos, o jovem atleta já demonstra um talento excepcional e uma promissora carreira pela frente.",
        link: "https://pt.wikipedia.org/wiki/Lukas_Bergmann",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Thales",
        descricao: "Thales Gustavo Hoss é um dos maiores líberos do vôlei mundial. Sua agilidade, reflexos rápidos e liderança em quadra o transformaram em um dos pilares da seleção brasileira e de diversos clubes por onde passou.",
        link: "https://pt.wikipedia.org/wiki/Thales_Hoss",
        modalidade: "Vôlei Masculino"
    },
    {
        titulo: "Duda",
        descricao: "Eduarda dos Santos Lisboa, mais conhecida como Duda, é um dos nomes mais brilhantes do vôlei de praia brasileiro da atualidade. Com apenas alguns anos de carreira profissional,ela já conquistou títulos importantes e se tornou uma das grandes promessas da modalidade.",
        link: "https://pt.wikipedia.org/wiki/Duda_Lisboa",
        modalidade: "Vôlei de praia Feminino"
    },
    {
        titulo: "Ana Patrícia",
        descricao: "Ana Patrícia Ramos é um nome que vem ganhando cada vez mais destaque no cenário do vôlei de praia brasileiro. Com sua juventude, talento e determinação, ela se tornou uma das grandes promessas da modalidade.",
        link: "https://pt.wikipedia.org/wiki/Ana_Patrícia_Ramos",
        modalidade: "Vôlei de praia Feminino"
    },
    {
        titulo: "Carol Solberg",
        descricao: "Carolina Salgado Collett Solberg, mais conhecida como Carol Solberg, é um nome que carrega um peso histórico no vôlei de praia brasileiro. Filha da lendária Isabel Salgado, Carol não apenas seguiu os passos da mãe, mas também construiu sua própria história de sucesso, marcada por talento, determinação e um forte posicionamento político.",
        link: "https://pt.wikipedia.org/wiki/Carolina_Solberg",
        modalidade: "Vôlei de praia Feminino"
    },
    {
        titulo: "Bárbara Seixas",
        descricao: "Bárbara Seixas de Freitas é um nome que dispensa apresentações no mundo do vôlei de praia. Com sua habilidade, determinação e carisma, ela se tornou um dos maiores ícones do esporte no Brasil e uma inspiração para diversas gerações de atletas.",
        link: "https://pt.wikipedia.org/wiki/Bárbara_Seixas",
        modalidade: "Vôlei de praia Feminino"
    },
    {
        titulo: "André Stein",
        descricao: "André Loyola Stein é um nome que vem ganhando cada vez mais destaque no cenário internacional do vôlei de praia. Com sua altura imponente e suas habilidades técnicas refinadas, ele se tornou um dos principais jogadores da modalidade no Brasil.",
        link: "https://pt.wikipedia.org/wiki/André_Stein",
        modalidade: "Vôlei de praia Masculino"
    },
    {
        titulo: "George Souto",
        descricao: "George Souto é outro grande nome do vôlei de praia brasileiro, conhecido por sua habilidade, versatilidade e parceria de sucesso com André Stein. A dupla se tornou uma das mais fortes do circuito mundial, conquistando diversos títulos e representando o Brasil em grandes competições.",
        link: "https://pt.wikipedia.org/wiki/George_Wanderley",
        modalidade: "Vôlei de praia Masculino"
    },
    {
        titulo: "Arthur Lanci",
        descricao: "Arthur Diego Mariano Lanci é um nome que vem ganhando cada vez mais destaque no cenário do vôlei de praia brasileiro. Com apenas alguns anos de carreira profissional, o atleta já coleciona títulos importantes e demonstra um potencial enorme para o futuro.",
        link: "https://pt.wikipedia.org/wiki/Arthur_Lanci",
        modalidade: "Vôlei de praia Masculino"
    },
    {
        titulo: "Evandro Gonçalves",
        descricao: "Evandro Gonçalves de Oliveira Junior é um nome de destaque no cenário internacional do vôlei de praia. Com sua habilidade, força e carisma, ele conquistou o coração dos brasileiros e se tornou um dos principais representantes do país na modalidade.",
        link: "https://pt.wikipedia.org/wiki/Evandro_Gonçalves",
        modalidade: "Vôlei de praia Masculino"
    },
    {
        titulo: "Giullia Penalber",
        descricao: "Giullia Rodrigues Penalber de Oliveira é uma lutadora brasileira de wrestling que tem se destacado no cenário internacional. Nascida em 13 de abril de 1992, no Rio de Janeiro, ela representa o Brasil em competições de alto nível e tem conquistado importantes títulos.",
        link: "https://pt.wikipedia.org/wiki/Giullia_Penalber",
        modalidade: "Wrestling Feminino"
    }
];