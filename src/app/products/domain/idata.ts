import { IProduct } from './iproduct';
import { ItemState } from '../ngrx/reducer/product.recuder';
import { SelectState } from '../ngrx/reducer/select.reducer';

export interface IData{
    id: number;
    product: string;
    category: string;
    store: Array<string>;
    img: string;
}