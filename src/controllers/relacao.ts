import  {prisma}  from "@./../../config/prisma";
import cursos from "./cursos";

export default {
    
    create: async(request: Request, response: Response) => {
  const novoAluno = await prisma.alunos.create({
    data: {
      nome: 'Maria',
      cursos: {
        create: [
          { titulo: 'TypeScript Avançado' },
          { titulo: 'Prisma ORM' },
        ],
      },
    },
  });
},


update: async(request: Request, response: Response) =>{
    const alunoVinculado = await prisma.alunos.update({
  where: { id: 1 },
  data: {
    cursos: {
      connect: { id: 5 }, 
    },
  },
});
},

vereficar: async(request: Request, response: Response) =>{
   const alunosComCursos = await prisma.alunos.findMany({
  include: {
    cursos: true, 
  },
});
} 
}

   

 

