import { IProduct } from '../iproduct';
import { Select } from 'src/app/shared/components/domain/select';
import { ISelect } from '../iselect';

export class Dropdown{
    public list: Array<Select>;
    public payload: Array<IProduct>;
    public select: ISelect;
    getSelect(){
        let arr = this.filterSelect();
        this.list = this.uniqueItemsInList(arr);
    }
    Selected(){}
    filterSelect() {
        return this.payload.map(data => this.createSelect(data));
    }
    createSelect(item) {
        //return new Select(item.id,item.value); 
    }
    uniqueItemsInList(arr){
        return arr.reduce((acu, item) => 
        acu.some(x=> (x.id === item.id || x.value === item.value)) ? acu : [...acu, item], [])
    }
    filtrarItems(){
        return this.payload.filter(item => this.filterBy(item) );
    }
    filterBy(item){
    //    return item.store == this.select.value
    }


}


export class getSelect extends Dropdown {
    public list: Array<Select>;
    constructor(public payload: Array<IProduct>) {
        super();
        this.getSelect();
    }
}


export class SelectDropdown extends Dropdown {
    constructor(public payload: Array<IProduct>, select: ISelect) {
        super();
        this.Selected();
        
    }
    selected(){
        this.payload = this.filtrarItems()
        //mandar a actualizar los componentes restantes.
    }
    filterBy(item){
        item.product == this.select.value
    }
}