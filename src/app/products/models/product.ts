import { IProduct } from './iproduct';
export class Product implements IProduct {
    constructor(
        public id: number,
        public product: string,
        public category: string,
        public store: string,
        public img: string) { }
}
