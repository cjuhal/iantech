import { ItemState } from '../ngrx/reducer/list.reducer';
import { DropdownState } from '../ngrx/reducer/dropdown.reducer';
import { SelectState } from '../ngrx/reducer/select.reducer';

export interface IStore{
    list: ItemState;
    dropdown: DropdownState;
    select: SelectState;
}