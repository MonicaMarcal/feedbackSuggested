//Página que quando clicamos na bolinha entra em um form
import {useState} from 'react';
import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSucessStep } from './Steps/FeedbackSucessStep';

//objeto que guarda todos os tipos de feedbacks que podemos ter na aplicação
export const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA:{
        title: 'ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER:{
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes;// retornando as chaves do objetos(bug, idea, other)

export function WidgetForm(){
const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null) 
const [feedbackSent, setFeedbackSent] = useState(false);

function handleRestartFeedback(){
    setFeedbackSent(false);
    setFeedbackType(null);
}

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4  flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} /> // se feedback enviado mostrar sucesso
            ):(
                <>
                    {!feedbackType ? ( // senão
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                ): (
                        <FeedbackContentStep
                        feedbackType={feedbackType}
                        onFeedbackRestartRequested = {handleRestartFeedback}
                        onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}
         

            <footer className="text-xs text-neutral-400">
            Feito com ♥ pela <a className="underline underline-offset-2"  href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}