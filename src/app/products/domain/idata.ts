import { IProduct } from './iproduct';
import { ItemState } from '../ngrx/reducer/product.recuder';
import { SelectState } from '../ngrx/reducer/select.reducer';

export interface IData{
    data: ItemState;
    select: SelectState;
}