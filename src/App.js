import React from "react";
import Table from "./components/Table";
import { Button, GlobalStyles } from "./global/GlobalStyles";

const datas = [
  {
    id: 1,
    name: "Eduardo",
    surname: "Santos",
    role: "admin",
  },
  {
    id: 2,
    name: "Pedro",
    surname: "Carlos",
    role: "reader",
  },
  {
    id: 3,
    name: "Ana",
    surname: "Silva",
    role: "admin",
  },
];

export default function App() {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    setTimeout(() => {
      setUser(datas);
    }, 3000);
  }, []);

  return (
    <div>
      <GlobalStyles />
      <h1>Componente de tabela para React</h1>
      <Table
        title="Lista de Usuários"
        data={user}
        columnNames={["Nome", "Sobrenome", "Pefil"]}
        columns={["name", "surname", "role"]}
        columnButtons={[
          (data) => (
            <Button onClick={() => window.alert(JSON.stringify(data))}>
              Ver
            </Button>
          ),
        ]}
        columnsModify={{
          role: (role) => {
            switch (role) {
              case "admin":
                return "Administrador";
              case "reader":
                return "Leitor";
              default:
                return role;
            }
          },
        }}
        keyStorage="listuserstorage"
      />
    </div>
  );
}
