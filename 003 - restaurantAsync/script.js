// Função que simula a preparação de um prato

function prepararPrato(prato) {
    return new Promise((resolve, reject) => {
      console.log(`Preparando ${prato}...`);
      setTimeout(() => {
        resolve(`${prato} pronto!`);
      }, Math.random() * 4000); // Simula o tempo de preparo variando de 0 a 4 segundos
    });
  }
  
  // Função que simula o pedido de comida de um cliente
  function fazerPedido(prato) {
    console.log(`Cliente pediu ${prato}.`);
    return prepararPrato(prato);
  }
  
  // Função que representa o fluxo do restaurante
  async function restaurante() {
    const pedidos = ['Pizza', 'Hambúrguer', 'Sushi'];
  
    // Fazendo os pedidos dos clientes de forma assíncrona
    const promessasPedidos = pedidos.map(fazerPedido);
  
    // Esperando que todos os pedidos sejam preparados
     const pedidosProntos = await Promise.all(promessasPedidos);
  
    // Servindo os pratos prontos
    pedidosProntos.forEach(prato => {
      console.log(`Servindo ${prato}...`);
    });
  
    console.log("Todos os pedidos foram servidos!");
  }
  
  // Iniciando o restaurante
  restaurante();
  