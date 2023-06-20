export interface Type {
    name: string;
}

export interface Types {
    type: Type;
}

export interface Stats {
    base_stat: number;
    effort: number;
}

export interface CardTypes {
    id: number;
    name: string;
    types: Types[];
    weight: number;
    sprites: any;
    stats: Stats[];
    moves: any;
    tag: string;
}
