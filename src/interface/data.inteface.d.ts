export interface IData {
    id: string;
    info: Info;
}

export interface Info {
    frameworks: string;
    data: IProject[];
}

export interface IProject {
    id: number;
    link: string;
    img: string;
    title: string;
    description: string;
}