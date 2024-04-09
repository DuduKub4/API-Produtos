import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const produtoSchema = z.object({
  nome: z.string(),
  img: z.string().url(),
  descricao: z.string(),
});

const editarProdutoRoute: FastifyPluginAsync = async (fastify, options) => {
    fastify.put<{ Params: { id: string } }>('/produtos/:id', async (request, reply) => {
        try {
            const id = request.params.id;
            const body = request.body;
            const produto = produtoSchema.parse(body);

            const produtoAtualizado = await prisma.produtos.update({
                where: { id },
                data: produto,
            });

            reply.send(produtoAtualizado);
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            reply.status(400).send('Erro ao atualizar produto');
        }
    });
};

export default editarProdutoRoute;
