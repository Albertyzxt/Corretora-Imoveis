const prompt = require("prompt-sync")();

const cliente = require("./clientes.js");
const imoveis = require("./imoveis.js");
const corretor = require("./corretor.js");

const db = [];

let ultimoId = 0;

function getIndex(id) {
  let indice = db.findIndex((el) => el.id == id);

  if (indice != -1) {
    return indice;
  } else {
    console.log("ID inexistente");
  }
}

const model = (id = ++ultimoId) => {
  let id_corretor = 0;

  if (corretor.read()) {
    id_corretor = parseInt(prompt("Digite o ID do Corretor: "));
  }

  let id_imoveis = 0;

  if (imoveis.read()) {
    id_imoveis = parseInt(prompt("Digite o ID do Imóvel: "));
  }

  let id_cliente = 0;

  if (cliente.read()) {
    id_cliente = parseInt(prompt("Digite o ID do Cliente: "));
  }

  if (
    corretor.show(id_corretor) &&
    imoveis.show(id_imoveis) &&
    cliente.show(id_cliente) &&
    corretor.show(id_corretor).id_corretora ==
    imoveis.show(id_imoveis).id_corretora
  ) {
    return {
      id,
      id_corretor,
      id_imoveis,
      id_cliente
    };
  }
  console.log("Dados inválidos!");
};

const show = (id) => {
  const el = db.find((el) => el.id == id);

  return el;
};

const create = () => {
  const novo = model();

  if (novo) {
    db.push(novo);
    console.log("Registro criado com sucesso!");
  }
};

const read = () => {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado!");
    return false;
  }

  db.forEach((el) => console.log(el));
  return true;
};

const update = () => {
  if (read()) {
    const id = parseInt(prompt("Digite o ID que deseja atualizar:"));

    const indice = getIndex(id);

    if (indice > -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Atualizado com sucesso!");
      }
    }
  }
};

const del = () => {
  if (read()) {
    const id = parseInt(prompt("Digite o ID que deseja remover: "));

    const indice = getIndex(id);

    if (indice > -1) {
      db.splice(indice, 1);
      console.log("Removido com sucesso!");
    }
  }
};

const vendasFunctions = {
  show,
  create,
  read,
  update,
  del,
};
module.exports = vendasFunctions;
