'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Usuario = sequelize.define('Usuario', {
		IdCadastro: {
			field: 'IdCadastro',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Nome: {
			field: 'Nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		Email: {
			field: 'Email',
			type: DataTypes.STRING,
			allowNull: false
		},
		Senha: {
			field: 'Senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		Nome_artistico: {
			field: 'Nome_artistico',
			type: DataTypes.STRING,
			allowNull: false
		},
		Objetivo: {
			field: 'Objetivo',
			type: DataTypes.STRING,
			allowNull: false
		},
	},
		{
			tableName: 'cadastro',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		});

	return Usuario;
};
