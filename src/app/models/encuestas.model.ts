export interface Encuestas {
    id:string;
    titulo: string;
    descripcion?: string;
    preguntas?: Question[]
}

export interface Question{
    idpregunta: string;
    pregunta: string;
    orden?: number
    tipoPregunta : TypeQuestion
    opciones: string[]
}

export type TypeQuestion = "selecionUnica" | "abierta" | "selecionMultiple"

export interface answers {
    idAnswers: string;
    idEncuesta : string;
    nombreInstitucion : string;
    respuestas : respuesta[]
}

export interface respuesta{
    idPregunta : string;
    respuesta: string[]
}