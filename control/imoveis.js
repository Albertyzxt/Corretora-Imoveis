const prompt = require("prompt-sync")();

const corretora = require("./corretora.js");

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

const show = (id) => {
  const el = db.find(el => el.id == id)

  return el
}

const model = (id = ++ultimoId) => {
  const numero = parseInt(prompt("Digite o número do imóvel: "));
  const rua = prompt("Digite a rua do imóvel: ");
  const bairro = prompt("Digite o bairro do imóvel: ");

  let id_corretora = 0;
  if (corretora.read()) {
    id_corretora = parseInt(prompt("Digite o ID da Corretora: "));
  } else {
    console.log("Nenhuma corretora encotrada")
  }

  if (!isNaN(numero) && rua != "" && bairro != "" && corretora.show(id_corretora)) {
    return {
      id,
      numero,
      rua,
      bairro,
      id_corretora
    };
  }
  console.log("Dados inválidos!");
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

const imoveisFunctions = {
  create,
  read,
  update,
  del,
  show,
};
module.exports = imoveisFunctions;
