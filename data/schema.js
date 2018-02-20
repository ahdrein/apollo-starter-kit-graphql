import {
  makeExecutableSchema,
} from 'graphql-tools';
import mocks from './mocks'
import resolvers from './resolvers';

const typeDefs = `
type login {
  username: String
  password: String
}

type User {
  nome: String
  senha: String
}

type Cliente {
  id: Int
  nome: String
}

type Material {
  id: Int
  nome: String
}

type Compra {
  id: Int
  cliente: Cliente
  material: Material
  data: String
}

type addCompra {
  data: String
  clienteId: String
  materialId: String
}

type Compras {
  compras: [Compra]
}

type Clientes {
  clientes: [Cliente]
}

type Materiais {
  materiais: [Material]
}

type Query {
  cliente(id: Int): Cliente
  material(id: Int): Material
  compra(id: Int): Compra
  compras: [Compra]
  compras(limit: Int): [Compra]
  clientes: [Cliente]
  materiais: [Material]
  login(nome: String, senha: String): User
}

type Mutation {
  addCompra(data: String, clienteId: String, materialId: String): addCompra
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
