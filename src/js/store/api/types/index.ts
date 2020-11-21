export enum WordStatus {
    Unlearned = "Unlearned",
    Studied = "Studied",
    Learned = "Learned"
}

export interface IWord{
    id: string;
    value: string;
    translate: string;
    partSpeech: string; 
    status: WordStatus;
}