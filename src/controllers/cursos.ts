import { Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../config/prisma";



export default {

    liste: async (request: Request, response: Response) => {
        const users = await prisma.cursos.findMany();
        return response.status(200).json(users);
    },

    create: async (request: Request, response: Response) => {
        const { nome, professor, cargaHoraria, descricao } = request.body
        const user = await prisma.cursos.create({
            data: {
                nome,
                professor,
                cargaHoraria,
                descricao
            },
        });
    },

    getById: async (request: Request, response: Response) => {
        const { id } = request.params
        const user = await prisma.cursos.findUnique({
            where: {
                id: +request.params.id
            }
        });

    },

    update: async (request: Request, response: Response) => {
       const { id } = request.params;
            const { nome, descricao, cargaHoraria, professor } = request.body;
            const user = await prisma.cursos.update({
                data: {
                    nome,
                    professor,
                    cargaHoraria,
                    descricao,
                },
                where: { id: +id },
            });
            return response.status(200).json(user); 
    },

    delete: async (request: Request, response: Response) => {
        const { id } = request.params;
            const user = await prisma.cursos.delete({

                where: { id: + id }

            });
            return response.status(200).json(user);
    }



}