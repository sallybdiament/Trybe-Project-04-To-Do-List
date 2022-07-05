// Adicionando itens na lista ao clicar no botão "Criar Tarefa"//
const listaToDo = document.getElementById('lista-tarefas');
const botaoCriarTarefa = document.getElementById('criar-tarefa');
let tarefas = [];
function criaLi() {
  const novoItemLista = document.createElement('li');
  novoItemLista.innerText = tarefas;
  listaToDo.appendChild(novoItemLista);
}
function adicionaTarefa() {
  const inputTarefa = document.getElementById('texto-tarefa');
  tarefas = inputTarefa.value;
  criaLi();
  inputTarefa.value = '';
}
botaoCriarTarefa.addEventListener('click', adicionaTarefa);

// se eu chegar no requisito 12, eu uso o localstorage e a funcao criaLI.

// Deixar com a cor de fundo cinza o item da lista que for clicado:
function removeClassGray() {
  const itensDaLista = document.getElementsByTagName('li');
  for (let i = 0; i < listaToDo.childElementCount; i += 1) {
    itensDaLista[i].classList.remove('classGray');
  }
}

listaToDo.addEventListener('click', (event) => {
  removeClassGray();
  event.target.classList.add('classGray');
});

// Deixar item da lista que for clicado riscado:
listaToDo.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed') === false) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
});

// Limpar itens completos da lista:
function removeRiscados() {
  const lista = document.getElementsByTagName('li');
  for (let i = lista.length - 1; i >= 0; i -= 1) {
    if (lista[i].classList.contains('completed') === true) {
      lista[i].remove();
    }
  }
}

const botaoLimparItensCompletos = document.getElementById('remover-finalizados');
botaoLimparItensCompletos.addEventListener('click', removeRiscados);

// Adicionando o botão salvar tarefas:

function salvar() {
  const arrayItensLista = [];
  const lista = document.getElementsByTagName('li');
  for (let i = 0; i < lista.length; i += 1) {
    arrayItensLista.push(lista[i].innerText);
  }
  localStorage.setItem('listaToDo', JSON.stringify(arrayItensLista));
}

const botaoSalvarTarefas = document.getElementById('salvar-tarefas');
botaoSalvarTarefas.addEventListener('click', salvar);

function resgatarSalvos() {
  tarefas = JSON.parse(localStorage.getItem('listaToDo'));
  for (let i = 0; i < tarefas.length; i += 1) {
    const novoItemLista = document.createElement('li');
    novoItemLista.innerText = tarefas[i];
    listaToDo.appendChild(novoItemLista);
  }
}

window.onload = () => {
  resgatarSalvos();
};

// Limpar lista:
// Ref: https://cursos.alura.com.br/forum/topico-excluir-todos-os-elementos-com-uma-classe-159597
function apagar() {
  localStorage.removeItem('listaToDo');
  const lista = document.getElementsByTagName('li');
  for (let i = lista.length - 1; i >= 0; i -= 1) {
    lista[i].remove();
  }
}

const botaoLimparLista = document.getElementById('apaga-tudo');

botaoLimparLista.addEventListener('click', apagar);
