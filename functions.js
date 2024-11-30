// Manipulação dos objetos DOM (Document Object Model)
// Representação de dados dos objetos que compõe uma estrutura e o conteúdo de um documento Web

//document.querySelector - Essencial para manipular e interagir com elementos de uma página // Uso principal: Buscar e modificar elementos HTML

// Exemplo:
const titulo = document.querySelector('h1');
titulo.textContent = 'Texto modificado'; //Modifica o texto do h1


//Document.createElement() - Cria novos elementos dinamicamente. Uso principal: Adicionar novos elementos ao DOM

//Exemplo:
const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo adicionado';
document.body.appendChild(novoElemento);

//addEventListener() - Funções que lidam com interação dos usuários - Sua função é adicionar um ouvinte para eventos (com cliques) - Uso principal: Criar interatividade, com cliques ou movimentos do mouse.
const botao = document.querySelector('button');
botao.addEventListener('click', () => {
    alert ('Botão clicado!');
}
);

//setTimeout() - Controlam ações que ocorrem em intervalos ou após um tempo - Executa uma função após um período de tempo (unidade de medida > milisegundos) - Uso principal: atrasar execuções ou criar temporizadores.
setTimeout(() => {
    alert ('Executado após 2 segundos!');
},2000);

//alert executa o toString do objeto e apresenta em tela.
//console.log registra a informação no console do navegador.

//Obtém um elemento pelo seu ID.
const elemento = document.getElementById('h1');

//Remover eventos quando não são mais necessários.
function mensagem() { 
    console.log('Evento disparado');
}
botao.addEventListener('click', mensagem); 
botao.removeEventListener('click', mensagem);

//Atualizações periódicas, como animações ou relógios.
const intervalo = setInterval(() => { 
    console.log('Executando a cada 1 segundo');
}, 1000);
// Para parar o intervalo
setTimeout(() => clearInterval(intervalo), 5000);

//Transformar arrays.
const numeros = [1, 2, 3];
const dobrados = numeros.map(num => num * 2); 
console.log(dobrados);//[2,4,6]

//Criar subarrays baseados em critérios.    
const numeros1 = [10, 20, 30];
const maioresQue15 = numeros.filter(num => num > 15); 
console.log(maioresQue15); // [20, 30]

//Acumular valores, como somas ou concatenações.
const numeros2 = [1, 2, 3];
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0); console.log(soma); // 6

//Executar ações em cada item de uma lista.
const frutas = ['maçã', 'banana', 'laranja']; frutas.forEach(fruta => console.log(fruta));

//Manipular dados enviados/recebidos por APIs.
const json = '{"nome":"Ana","idade":30}'; const obj = JSON.parse(json); console.log(obj.nome); // "Ana"
const novoJson = JSON.stringify(obj); console.log(novoJson); // '{"nome":"Ana","idade":30}'

//Obter ou enviar dados para servidores.
fetch('https://api.exemplo.com/dados')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));

//Tomar decisões no código.
const idade = 18; 
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

//Substituir vários if/else aninhados.
const cor = 'vermelho'; switch (cor) {
    case 'vermelho':
    console.log('Pare!'); break;
    case 'amarelo': console.log('Atenção!'); break;
    case 'verde': console.log('Siga!'); break;
    default:
    console.log('Cor inválida');
}

//Converte uma string para letras maiúsculas. Padronizar entrada de usuário.
const texto = 'olá'; 
console.log(texto.toUpperCase()); // 'OLÁ'

//Converte uma string para letras minúsculas.
const texto1 = 'OLÁ'; 
console.log(texto.toLowerCase()); // 'olá'

//Procurar substrings dentro de uma string.
const frase = 'JavaScript é incrível'; 
console.log(frase.includes('incrível')); // true


//Armazenar dados com chaves associadas.
const mapa = new Map(); mapa.set('nome', 'João');
console.log(mapa.get('nome')); // 'João'

//Garantir que não haja valores duplicados.
const conjunto = new Set([1, 2, 2, 3]);
console.log(conjunto); // Set { 1, 2, 3 }

//Geração de números aleatórios.
const aleatorio = Math.random(); 
console.log(aleatorio);

//Arredondar valores para inteiros.
const numero = 4.7; 
console.log(Math.floor(numero)); // 4


//Nome: Jéssica de Souza Garcia RA: 39B2A