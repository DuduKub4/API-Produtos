import { FastifyPluginAsync } from 'fastify';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const criarProdutoRoute: FastifyPluginAsync = async (fastify, options) => {
    const produtoSchema = z.object({
        nome: z.string(),
        img: z.string().url(),
        descricao: z.string(),
    });

    fastify.post('/produtos', async (request, reply) => {
        try {
            const body = request.body;
            const produto = produtoSchema.parse(body);

            const novoProduto = await prisma.produtos.create({
                data: produto,
            });

            reply.status(201).send(novoProduto);
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            reply.status(400).send('Erro ao criar produto');
        }
    });
};

export default criarProdutoRoute;
