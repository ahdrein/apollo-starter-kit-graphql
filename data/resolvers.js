import {Cliente, Material, Compra, User} from './connectors.js';

const resolvers = {
	Query: {
		cliente(_, args) {
			return Cliente.find({where: args});
		},
		clientes(_, args) {
			return Cliente.findAll({where: true});
		},
		material(_, args) {
			return Material.find({where: args});
		},
		materiais(_, args) {
			return Material.findAll({where: true});
		},
		compra(_, args) {
			return Compra.find({where: args});
		},
		compras(_, args) {
			return Compra.findAll({limit: args.limit});
		},

		login(_, args) {
			return User.find({where: args})
		}
	},

	Mutation: {
		addCompra(_, args) {
			return Compra.findOrCreate({where: args});
		}
	},

	Compra: {
		cliente(compra) {
			return Cliente.find({where: compra.clienteId})
		},
		material(compra) {
			return Material.find({where: compra.materialId})
		},
	},
};

export default resolvers;