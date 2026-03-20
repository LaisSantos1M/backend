import { Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../config/prisma";
import alunos from "./alunos";



export default {

    
     list: async (request: Request, response: Response) => {
        const cursos = await prisma.cursos.findMany()
        return response.status(200).json(cursos);
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
        return response.status(200).json(user);
    },

    getById: async (request: Request, response: Response) => {
        const { id } = request.params
        const user = await prisma.cursos.findUnique({
            where: {
                id: +request.params.id
            }
        });
        return response.status(200).json(user);

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