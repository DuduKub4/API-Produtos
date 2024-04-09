import fastify from 'fastify';
import criarProdutoRoute from './routes/criar-produto';
import editarProdutoRoute from './routes/editar-produto';
import excluirProdutoRoute from './routes/excluir-produto';

const app = fastify();

app.register(criarProdutoRoute);
app.register(editarProdutoRoute);
app.register(excluirProdutoRoute);

const PORT = process.env.PORT || 5555;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando em ${address}`);
});
