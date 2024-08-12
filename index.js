const prompt = require("prompt-sync")();

const corretora = require("./control/corretora.js");
const corretor = require("./control/corretor.js");
const imoveis = require("./control/imoveis.js");
const clientes = require("./control/clientes.js");
const vendas = require("./control/vendas.js");

console.log("GERENCIAMENTO DE CORRETORA DE IMÓVEIS");

while (true) {
  console.log(`
O que deseja gerenciar?
1 - Corretora
2 - Corretor
3 - Imoveis
4 - Clientes
5 - Vendas
0 - Sair
        `);

  const opcaoEntidade = prompt();

  let continuar;
  switch (opcaoEntidade) {
    case "1":
      continuar = true;
      while (continuar) {
        console.log(`
GERENCIAMENTO DE CORRETORA
    
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
        `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            corretora.create();
            break;
          case "2":
            corretora.read();
            break;
          case "3":
            corretora.update();
            break;
          case "4":
            corretora.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "2":
      continuar = true;
      while (continuar) {
        console.log(`
GERENCIAMENTO DE CORRETOR
    
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
        `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            corretor.create();
            break;
          case "2":
            corretor.read();
            break;
          case "3":
            corretor.update();
            break;
          case "4":
            corretor.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "3":
      continuar = true;
      while (continuar) {
        console.log(`
 GERENCIAMENTO DE IMOVEIS
    
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
        `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            imoveis.create();
            break;
          case "2":
            imoveis.read();
            break;
          case "3":
            imoveis.update();
            break;
          case "4":
            imoveis.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "4":
      continuar = true;
      while (continuar) {
        console.log(`
GERENCIAMENTO DE CLIENTES
      
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
          `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            clientes.create();
            break;
          case "2":
            clientes.read();
            break;
          case "3":
            clientes.update();
            break;
          case "4":
            clientes.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "5":
      continuar = true;
      while (continuar) {
        console.log(`
 GERENCIAMENTO DE VENDAS
    
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
        `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            vendas.create();
            break;
          case "2":
            vendas.read();
            break;
          case "3":
            vendas.update();
            break;
          case "4":
            vendas.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "0":
      process.exit(0);
      break;
    default:
      console.log("Opcão inválida");
      break;
  }
}
