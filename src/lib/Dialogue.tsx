/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import NewItem from "../components/NewItem";
import { delayInterval } from "../default";
import { NextContext } from "../next";
import { GlobalContext } from "../states";
import { ContentInterface } from "../types";
import ZoomModule from "../components/ZoomModule";
import Balloon from "../components/Balloon";

export function Them({
    content,
    next,
    speaker,
    printDoneCallback,
    preventNext,
}: {
    content: string;
    next: any;
    speaker: string;
    printDoneCallback?: Function;
    preventNext: boolean | null;
}) {
    const [printing, setPrinting] = React.useState<boolean>(true);
    const [displayedContent, setDisplayedContent] = React.useState<string>("");
    const { global_state } = React.useContext(GlobalContext);
    const { setActive, setNextScene } = React.useContext(NextContext);
    const { name, scene } = global_state;
    const preventRef = React.useRef<any>(null);
    const printDoneCallbackRef = React.useRef<any>(null);
    const sceneRouterRef = React.useRef<any>(null);
    const sceneRouter = () => {
        if (next === "default") {
            return scene + 1;
        } else {
            return next;
        }
    };
    preventRef.current = preventNext;
    printDoneCallbackRef.current = printDoneCallback;
    sceneRouterRef.current = sceneRouter();
    let processedContent = content.replace("<name>", name);
    React.useEffect(() => {
        if (!printing) setPrinting(true);
        let accumulator = "";
        let delay = 0;
        for (let i = 0; i < processedContent.length; i++) {
            // eslint-disable-next-line no-loop-func
            setTimeout(() => {
                accumulator += processedContent[i];
                setDisplayedContent(accumulator);
            }, delay);
            delay += delayInterval;
        }
        setTimeout(() => {
            if (printDoneCallbackRef.current !== undefined) {
                printDoneCallbackRef.current();
            }
            setPrinting(false);
            if (preventRef.current === null) {
                setNextScene(sceneRouterRef.current);
                setActive(true);
            }
        }, delay);
    }, [scene]);
    return (
        <button
            onClick={() => {
                if (!preventNext) {
                    /*dispatch({
                        type: "set",
                        field: "scene",
                        payload: sceneRouter(),
                    });*/
                }
            }}
            className="absolute bg-white text-black rounded-3xl text-xl border-2
            text-center z-10 left-0 right-0 mx-auto top-5 w-[90%] max-w-[50rem] shadow-md"
        >
            <div className="relative w-full h-full p-5 py-10 break-words">
                <div
                    className="absolute -top-3 left-[10%] bg-yellow-200 px-10 py-0.5 
                shadow-md rounded-xl"
                >
                    {speaker}
                </div>
                {displayedContent}
            </div>
        </button>
    );
}

export function Us({ content, next }: { content: string; next: any }) {
    const [printing, setPrinting] = React.useState<boolean>(true);
    const [displayedContent, setDisplayedContent] = React.useState<string>("");
    const { global_state } = React.useContext(GlobalContext);
    const { setActive, setNextScene } = React.useContext(NextContext);
    const { name, scene } = global_state;
    const sceneRouterRef = React.useRef<any>(null);
    const sceneRouter = () => {
        if (next === "default") {
            return scene + 1;
        } else {
            return next;
        }
    };
    sceneRouterRef.current = sceneRouter();
    let processedContent = content.replace("<name>", name);
    React.useEffect(() => {
        if (!printing) setPrinting(true);
        let accumulator = "";
        let delay = 0;
        for (let i = 0; i < processedContent.length; i++) {
            // eslint-disable-next-line no-loop-func
            setTimeout(() => {
                accumulator += processedContent[i];
                setDisplayedContent(accumulator);
            }, delay);
            delay += delayInterval;
        }
        setTimeout(() => {
            setPrinting(false);
            setNextScene(sceneRouterRef.current);
            setActive(true);
        }, delay);
    }, [scene]);
    return (
        <>
            <button
                disabled={printing}
                onClick={() => {
                    /*dispatch({
                        type: "set",
                        field: "scene",
                        payload: sceneRouter(),
                    });*/
                }}
                className="absolute bg-white text-black rounded-3xl border-2
            text-center text-xl z-10 left-0 right-0 mx-auto bottom-5 w-[90%] max-w-[50rem] shadow-md"
            >
                <div className="relative w-full h-full p-5 py-10 break-words">
                    <div
                        className="absolute -top-3 left-[10%] bg-yellow-200 px-10 py-0.5 
                        shadow-md rounded-xl"
                    >
                        ?????????
                    </div>
                    {displayedContent}
                </div>
            </button>
        </>
    );
}

export function Input({ content, next }: { content: string; next: any }) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { scene } = global_state;
    const sceneRouter = () => {
        if (next === "default") {
            return scene + 1;
        } else {
            return next;
        }
    };
    return (
        <div
            className="absolute bg-white text-black rounded-3xl border-2
            text-center p-3 z-10 left-0 right-0 mx-auto bottom-5 w-[90%] max-w-[50rem] shadow-md text-xl"
        >
            {content}
            <form
                className="flex"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (inputRef.current !== null) {
                        dispatch({
                            type: "multi-set",
                            field: ["name", "scene"],
                            payload: [inputRef.current.value, sceneRouter()],
                        });
                    }
                }}
            >
                <input
                    ref={inputRef}
                    autoFocus={true}
                    className="w-[80%] mx-auto p-2 mt-2 rounded-xl outline-none
                     border-black text-center"
                />
            </form>
        </div>
    );
}

export function Choice({
    content,
    next,
}: {
    content: ContentInterface;
    next: any;
}) {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { scene } = global_state;
    const handleSetChoice = (choice: number) => {
        if (choice === 0) {
            dispatch({ type: "set", field: "scene", payload: scene + 1 });
        } else {
            dispatch({
                type: "set",
                field: "scene",
                payload: scene + next[0] + 1,
            });
        }
    };
    return (
        <div
            className="flex absolute justify-evenly text-xl
            z-10 left-0 right-0 mx-auto bottom-5 w-[90%] max-w-[50rem] break-words"
        >
            <button
                onClick={() => handleSetChoice(0)}
                className="flex-1 bg-white rounded-full shadow-md border-2
                text-center p-5 mr-2 hover:scale-[102%] transition"
            >
                {content.subContent}
            </button>
            <button
                onClick={() => handleSetChoice(1)}
                className="flex-1 bg-white rounded-full shadow-md border-2
                text-center p-5 ml-2 hover:scale-[102%] transition"
            >
                {content.subContent1}
            </button>
        </div>
    );
}

export function Special({ content, next }: { content: string; next: any }) {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { scene } = global_state;
    const handleSetChoice = () => {
        dispatch({ type: "set", field: "scene", payload: scene + 1 });
    };
    return (
        <div
            className="flex absolute justify-evenly text-xl w-screen h-screen
            z-10 top-0 bottom-0 left-0 right-0 mx-auto break-words"
        >
            <>
                {content.includes("New item") ? (
                    <NewItem
                        clickCallback={() => {
                            handleSetChoice();
                        }}
                    />
                ) : content === "Zoom" ? (
                    <ZoomModule
                        clickCallback={() => {
                            handleSetChoice();
                        }}
                    />
                ) : content === "Balloon" ? (
                    <Balloon
                        clickCallback={() => {
                            handleSetChoice();
                        }}
                    />
                ) : null}
            </>
        </div>
    );
}
