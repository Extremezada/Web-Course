CREATE TABLE IF NOT EXISTS empresas(
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cnpj int unsigned,
    PRIMARY KEY(id),
    UNIQUE KEY(cnpj)
);

CReATE TABLE IF NOT EXISTS empresas_unidades(
    empresa_id int unsigned not null,
    cidade_id int unsigned not null,
    sede TINYINT(1) not NULL,
    PRIMARY KEY(empresa_id, cidade_id)
);