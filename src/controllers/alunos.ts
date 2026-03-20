import { Request, Response } from "express";

import { prisma } from "../../config/prisma";
import primaErrorCodes from "../../config/prismaErrorCodes.json";
import { Prisma } from "../../generated/prisma/client";


export default {

      list: async (request: Request, response: Response) => {
        try {
            const users = await prisma.alunos.findMany({
                include: { cursos: true }
            });
            return response.status(200).json(users);
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // @ts-ignore
                return response.status(primaErrorCodes[e.code] || 500).json(e.message);
            }
            return response.status(500).json("Unknown error");
        }
    },



    create: async (request: Request, response: Response) => {
        try {
            const { nome, cpf, email, idade, } = request.body;
            const user = await prisma.alunos.create({
                data: {
                    nome,
                    cpf,
                    email,
                    idade,

                },
            });
            return response.status(201).json(user);
        }
        catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // @ts-ignore
                return response.status(primaErrorCodes[e.code] || 500).json(e.message);
            }
            return response.status(500).json("Unkown error. Try again later");

        }

    },


    
    getById: async (request: Request, response: Response) => {
        try {
            const user = await prisma.alunos.findUnique({
                where: { id: +request.params.id },
                include: { cursos: true }
            });
            return response.status(200).json(user);
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // @ts-ignore
                return response.status(primaErrorCodes[e.code] || 500).json(e.message);
            }
            return response.status(500).json("Unkown error. Try again later");

        }

    },


    update: async (request: Request, response: Response) => {
        try {
            const { id } = request.params;
            const { nome, idade, email, cpf, } = request.body;
            const user = await prisma.alunos.update({
                data: {
                    nome,
                    cpf,
                    email,
                    idade,
                },
                where: { id: +id },
            });
            return response.status(200).json(user);
        }
        catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // @ts-ignore
                return response.status(primaErrorCodes[e.code] || 500).json(e.message);
            }
            return response.status(500).json("Unkown error. Try again later");

        }

    },

    delete: async (request: Request, response: Response) => {
        try {
            const { id } = request.params;
            const user = await prisma.alunos.delete({

                where: { id: + id }

            });
            return response.status(200).json(user);
        }
        catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                // @ts-ignore
                return response.status(primaErrorCodes[e.code] || 500).json(e.message);
            }
            return response.status(500).json("Unkown error. Try again later");

        }


    },

    matricular: async (request: Request, response: Response) => {
        try {
            const { alunoId, cursoId } = request.body;

            const aluno = await prisma.alunos.update({
                where: { id: +alunoId },
                data: {
                    cursos: {
                        connect: { id: +cursoId }
                    }
                },
                include: { cursos: true }
            });

            return response.status(200).json(aluno);
        } catch (e) {
            return response.status(500).json("Erro ao matricular");
        }
    },

     desmatricular: async (request: Request, response: Response) => {
        try {
            const { alunoId, cursoId } = request.body;

            const aluno = await prisma.alunos.update({
                where: { id: +alunoId },
                data: {
                    cursos: {
                        disconnect: { id: +cursoId }
                    }
                },
                include: { cursos: true }
            });

            return response.status(200).json(aluno);
        } catch (e) {
            return response.status(500).json("Erro ao desmatricular");
        }
    }


    
};
