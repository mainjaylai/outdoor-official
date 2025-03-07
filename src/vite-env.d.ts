/// <reference types="vite/client" />

declare module '*.less' {
    const content: { [className: string]: string };
    export default content;
}

interface TravelInfo {
    id: number;
    title: string;
    content: string;
    date: string;
    price: number;
}

interface ProductInfo {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}