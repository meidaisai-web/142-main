'use client';

import { ReactNode, useEffect } from "react";

interface AlertProps {
    title: string
    children: ReactNode
    hidden: boolean
    setHidden: React.Dispatch<React.SetStateAction<boolean>>
    addAction?: { title: string, action: () => void }
    closeAction?: () => void
}

export default function Alert({ title, children, hidden, setHidden, closeAction, addAction }: AlertProps) {

    useEffect(() => {
        const body = document.body;

        if (!hidden) {
          body.classList.add("overflow-hidden");
        } else {
          body.classList.remove("overflow-hidden");
        }

        return () => {
          body.classList.remove("overflow-hidden");
        };
      }, [hidden]);

    function onTapClose() {
        if(closeAction) (
            closeAction()
        )
        setHidden(true)
    }

    function onTapAction() {
        if(addAction) (
            addAction.action()
        )
        setHidden(true)
    }

    return (
        <div className={`fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center px-10 bg-gray-cover ${hidden && 'hidden'}`}>
            <div className="relative w-full h-full flex justify-center items-center">
                <div className="absolute flex flex-col items-center border-4 border-secondary -z-10 rotate-3 rounded-4xl pt-10 px-10 pb-5 w-full sm:w-2xl shadow-lg">
                    <div className="opacity-0">
                        <h3 className="font-bold text-2xl mb-8">{title}</h3>
                        <div>{children}</div>
                        <div className="flex mt-5">
                            <button className="cursor-pointer p-2 rounded-md" onClick={onTapClose}>
                                <p className="text-lg font-medium text-secondary">閉じる</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white border-4 border-accent rounded-4xl text-black pt-10 px-10 pb-5 w-full sm:w-2xl shadow-lg">
                    <h3 className="font-bold text-2xl mb-8 text-primary">{title}</h3>
                    <div>{children}</div>
                    <div className="flex gap-8 mt-5">
                        <button className="cursor-pointer p-2 rounded-md hover:bg-gray-200" onClick={onTapClose}>
                            <p className={`text-lg font-semibold ${addAction ? 'text-primary' : 'text-secondary'}`}>閉じる</p>
                        </button>
                        {addAction &&
                            <button className="cursor-pointer p-2 rounded-md hover:bg-gray-200" onClick={onTapAction}>
                                <p className="text-lg font-semibold text-secondary">{addAction.title}</p>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}