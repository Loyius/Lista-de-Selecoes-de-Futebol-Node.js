# Simulação de Seleção de Futebol com Node.js e MySQL

Este projeto utiliza **Node.js** para criar uma aplicação que faz uma conexão direta com o **MySQL Workbench** utilizando **Express.js**. O sistema permite o envio de credenciais de seleções de futebol em formato **JSON** para serem armazenadas no banco de dados.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MySQL**

## 📦 Instalação das Dependências

```sh
npm install
```

## ⚙️ Configuração do Banco de Dados

1. Crie um banco de dados no **MySQL Workbench**.
2. Substitua as credenciais de acesso ao banco de dados no arquivo `conexao.js`.

## ▶️ Execução

Para iniciar o servidor em modo de desenvolvimento:

```sh
npm run dev
```

## 📂 Estrutura do Projeto

```
│── src/
│   ├── app/
│   │   ├── controllers/       # Lógica dos endpoints
│   │   │   ├── SelecaoController.js
│   │   ├── database/          # Configuração da conexão com o MySQL
│   │   │   ├── conexao.js
│   │   ├── repositories/      # Camada de acesso ao CRUD
│   │   │   ├── SelecaoRepository.js
│   ├── app.js                 # Configuração principal da aplicação
│   ├── routes.js              # Definição de rotas
│   ├── server.js              # Ponto de entrada do servidor
│── package.json               # Dependências e scripts
│── .gitignore                 # Arquivos ignorados pelo Git
```

## 🔗 Endpoints

### ➕ Criar uma seleção
```js
create(selecao) {
    const sql = "INSERT INTO selecoes SET ?";
    return consulta(sql, selecao, 'Não foi possível cadastrar!');
}
```

### 📜 Listar todas as seleções
```js
findAll() {
    const sql = "SELECT * FROM selecoes";
    return consulta(sql, 'Não foi possível encontrar!');
}
```

### 🔍 Listar uma seleção específica
```js
findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?;";
    return consulta(sql, id, 'Não foi possível localizar!');
}
```

### ✏️ Atualizar uma seleção
```js
update(selecao, id) {
    const sql = "UPDATE selecoes SET ? WHERE id=?;";
    return consulta(sql, [selecao, id], 'Não foi possível atualizar!');
}
```

### ❌ Deletar uma seleção
```js
delete(id) {  
    const sql = "DELETE FROM selecoes WHERE id=?";
    return consulta(sql, id, 'Não foi possível apagar!');
}
```


