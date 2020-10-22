import { WordStatus} from "js/store/api/types"; 

const getClassNameStatus = (status: string) => {
    switch (status) {
        case WordStatus.Unlearned:
            return "word_unlearned";
        case WordStatus.Studied:
            return "word_studied";
        case WordStatus.Learned:
            return "word_learned";
        default:
            return null;
    }
}

export { getClassNameStatus };