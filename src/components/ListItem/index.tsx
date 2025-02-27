import * as C from "./style";
import {Item} from '../../types/item'
import { useState } from "react";

type Props = {
    item: Item
}

export const ListItem = ({item}:Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

  return(

  <C.Container done={isChecked}>
    <input type="checkbox" checked={isChecked} onChange={(event)=>setIsChecked(event.target.checked)} />
    <label>{item.name}</label>


  </C.Container>
  ) 
};
