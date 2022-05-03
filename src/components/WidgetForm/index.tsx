import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";


import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";



export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            src: bugImageUrl,
            alt: 'Imagem de um Inseto'
        } 
    },
    IDEA: {
        title: "Idéia",
        image: {
            src: ideaImageUrl,
            alt: 'Imagem de uma Lampada'
        } 
    },
    OTHERS: {
        title: "Outros",
        image: {
            src: thoughtImageUrl,
            alt: 'Balão de Pensamento'
        } 
    }
}

export type FeedbackType = keyof typeof feedbackTypes 


export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null) 

    function handleRestartFeedbackType(){
        setFeedbackType(null)
    }

    return (
       <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           

           {!feedbackType ? (
               <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
           ) : (
               <FeedbackContentStep 
               feedbackType={feedbackType}
               onFeedbackRestartRequested={handleRestartFeedbackType}
               />
           )}


           <footer className="text-xs text-neutral-400">
                Feito com ♥ pelo <a href="https://github.com/cfcamargo" className="underline underline-offset-2">Cristian Camargo</a>
           </footer>
       </div>
   )

}