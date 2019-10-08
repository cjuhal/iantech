import { ItemState } from '../store/list/list.reducer';
import { DropdownState } from '../store/dropdown/dropdown.reducer';
import { SelectState } from '../store/select/select.reducer';

export interface IStore {
    list: ItemState;
    dropdown: DropdownState;
    select: SelectState;
}