import { useState } from "react";
import * as C from "./App.stykes";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Estudar",
      done: true,
    },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>


        {list.map((item, i) => (
          <ListItem  key={i} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
