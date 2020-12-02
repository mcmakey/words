export enum WordStatus {
    Unlearned = "Unlearned",
    Studied = "Studied",
    Learned = "Learned"
}

export type TypeWordId = string;

export enum FilterStatus  {
    SHOW_ALL = "SHOW_ALL",
    SHOW_UNLEARNED = "SHOW_UNLEARNED",
    SHOW_STUDIED = "SHOW_STUDIED",
    SHOW_LEARNED ="SHOW_LEARNED"
}

export interface IWord{
    id: TypeWordId;
    value: string;
    translate: string;
    partSpeech: string; 
    status: WordStatus;
}

export interface WordsState {
    words: IWord[]
}
