import { FastifyPluginAsync } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const excluirProdutoRoute: FastifyPluginAsync = async (fastify, options) => {
    fastify.delete<{ Params: { id: string } }>('/produtos/:id', async (request, reply) => {
        try {
            const id = request.params.id;

            await prisma.produtos.delete({
                where: { id },
            });

            reply.send({ message: 'Produto excluído com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            reply.status(400).send('Erro ao excluir produto');
        }
    });
};

export default excluirProdutoRoute;
