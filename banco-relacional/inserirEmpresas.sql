insert INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 9569418600132),
    ('Vale', 27887148000146),
    ('Cielo', 01598317000134);

ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

desc prefeitos;
desc empresas;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);