create database db_empresa;
use db_empresa;
drop table tb_funcionarios_empresa;
drop table tb_funcionarios_terceirizados;
drop table tb_cargos;
drop table tb_funcionario;
-- Empresa: 
create table if not exists tb_funcionarios_empresa (
	codigo int primary key auto_increment,
    identidade int unique not null,
    nome varchar(15) not null,
    sobrenome varchar(50) not null,
    dt_nascimento date not null,
    dt_contratacao date not null,
    cod_gerente int,
    cargo varchar(15) not null,
    departamento int not null,
    salario double,
    pct_comissao double
);

-- Funcionarios de outra empresa:
create table if not exists tb_funcionarios_terceirizados (
	codigo int primary key auto_increment,
    identidade int unique not null,
    nome varchar(15) not null,
    sobrenome varchar(50) not null,
    dt_nascimento date not null,
    dt_contratacao date not null,
    cod_gerente int,
    cargo varchar(15) not null,
    departamento int not null,
    salario double,
    pct_comissao double
);

-- Funcionarios
-- tb_cargo(cod_cargo, nome,salario,cargo)
create table if not exists tb_cargos(
	cod_cargo int,
    nome varchar(15) not null,
    salario double
);
