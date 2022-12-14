import { SceneInterface } from "../../types";

const defaultPeacockClassName = {
    top: "30%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};

const secondAttractionBackground = {
    name: "carousel.jpg",
};

export const secondScene: Array<SceneInterface> = [
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: { ...defaultPeacockClassName, opacity: 0 },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "นั่นมันม้าหมุนนี่นา ลองไปดูดีกว่า",
                speaker: "เรา",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "อืมมม มันสวยหรือยังนะ",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "สวัสดี เธอกำลังทำอะไรอยู่เหรอ",
                speaker: "เรา",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "โอ้ สวัสดี ฉันกำลังทาสีม้าหมุนอยู่น่ะ",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "มันโอเครึยัง ถูกใจเธอมั้ย",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "สำหรับฉันยังไม่ถูกใจเลย มองยังไงก็ไม่สวย",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "ทำไมถึงคิดแบบนั้นล่ะ",
                speaker: "เรา",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ฉันรู้สึกไม่มั่นใจน่ะเลยผัดวันประกันพรุ่งไปเรื่อยๆ",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ตอนแรกฉันกะจะส่งก่อนเดดไลน์แต่ตอนนี้ทำไปทำมาจนมันใกล้เดดไลน์แล้วก็ยังไม่ได้ซักที",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ฉันไม่รู้เลยว่าสิ่งที่ทำไปมันดีพอรึเปล่า เธอช่วยดูหน่อยสิ",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "special",
                content: "Zoom",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "โอเคแล้วนะ",
                speaker: "เรา",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "มันต้องสมบูรณ์แบบขนาดไหนเหรอ",
                speaker: "เรา",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "…",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ฉันก็ไม่แน่ใจเหมือนกัน เธอเคยเป็นบ้างมั้ย ไม่มั่นใจในตัวเองแบบนี้ ",
                speaker: "นกยูง",
            },
            {
                type: "input",
                content: "",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "แล้วเธอมีวิธีจัดการกับมันยังไงบ้าง เล่าให้ฉันฟังหน่อยได้ไหม",
                speaker: "นกยูง",
            },
            {
                type: "input",
                content: "",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เป็นวิธีที่น่าสนใจมากเลย ไว้ฉันจะเอาไปใช้บ้างนะ",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "neutral",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ฉันหวังว่าเธอจะสามารถก้าวผ่านมันไปได้ เอา ลูกโป่ง นี่ไปเป็นของฝากจากชั้นนะ",
                speaker: "นกยูง",
            },
            {
                type: "special",
                content: "New item",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
];
