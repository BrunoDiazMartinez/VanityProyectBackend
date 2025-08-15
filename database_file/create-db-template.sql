CREATE DATABASE MOVORD DEFAULT CHARACTER SET = 'utf8mb4';

USE MOVORD;

CREATE TABLE IF NOT EXISTS ordenes (
    NumOrd INT AUTO_INCREMENT PRIMARY KEY,
    Estilo VARCHAR(10) NOT NULL,
    EstiloCrt VARCHAR(10) NOT NULL,
    Linea VARCHAR(2) NOT NULL,
    Prenda VARCHAR(255) NOT NULL,
    PrenClr VARCHAR(3) NOT NULL,
    PrenTalla VARCHAR(2) NOT NULL,
    CoOrd VARCHAR(255) NOT NULL,
    ReEst VARCHAR(1) NOT NULL DEFAULT 'E',
    CantEst INT NOT NULL,
    CantReal INT NULL,
    FPlanIni DATE NOT NULL,
    FPlanFin DATE NOT NULL,
    FRealIni DATE NULL,
    FRealFin DATE NULL,
    OrdDesc TEXT NULL,
    stageProgress VARCHAR(255) DEFAULT 'Tela',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Tela (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255),
    status VARCHAR(255) DEFAULT 'Nuevo',
    stage VARCHAR(255),
    CantTela INT NULL,
    MedTela INT NULL,
    FPedTela DATE NULL,
    observations TEXT,
    comentarios TEXT,
    Foreign Key (id) REFERENCES ordenes (NumOrd) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Afinar (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255),
    status VARCHAR(255) DEFAULT 'Nuevo',
    stage VARCHAR(255),
    observations TEXT,
    CantAF INT NULL,
    FPedAF DATE NULL,
    Foreign Key (id) REFERENCES ordenes (NumOrd) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Marcas (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255),
    status VARCHAR(255) DEFAULT 'Nuevo',
    stage VARCHAR(255),
    observations TEXT,
    CantMar INT NULL,
    FPedMar DATE NULL,
    Foreign Key (id) REFERENCES ordenes (NumOrd) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Corte (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255),
    status VARCHAR(255) DEFAULT 'Nuevo',
    stage VARCHAR(255),
    observations TEXT,
    CantXCO INT NULL,
    FPedXCO DATE NULL,
    CantCO INT NULL,
    FPedCO DATE NULL,
    Foreign Key (id) REFERENCES ordenes (NumOrd) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Taller (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255),
    status VARCHAR(255) DEFAULT 'Nuevo',
    stage VARCHAR(255),
    observations TEXT,
    CantMaqInt INT NULL,
    CantMaqRecInt INT NULL,
    Foreign Key (id) REFERENCES ordenes (NumOrd) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Maquila (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255),
    status VARCHAR(255) DEFAULT 'Nuevo',
    stage VARCHAR(255),
    observations TEXT,
    Maquila1 INT NULL,
    CantMaquila1 INT NULL,
    FSalMaquila1 DATE NULL,
    CantRecMaquila1 INT NULL,
    FEntMaquila1 DATE NULL,
    Maquila2 INT NULL,
    CantMaquila2 INT NULL,
    FSalMaquila2 DATE NULL,
    CantRecMaquila2 INT NULL,
    FEntMaquila2 DATE NULL,
    Maquila3 INT NULL,
    CantMaquila3 INT NULL,
    FSalMaquila3 DATE NULL,
    CantRecMaquila3 INT NULL,
    FEntMaquila3 DATE NULL,
    Maquila4 INT NULL,
    CantMaquila4 INT NULL,
    FSalMaquila4 DATE NULL,
    CantRecMaquila4 INT NULL,
    FEntMaquila4 DATE NULL,
    Maquila5 INT NULL,
    CantMaquila5 INT NULL,
    FSalMaquila5 DATE NULL,
    CantRecMaquila5 INT NULL,
    FEntMaquila5 DATE NULL,
    Foreign Key (id) REFERENCES ordenes (NumOrd) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Maquiladoras (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(255)
);

CREATE TABLE RecMaq (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255),
    status VARCHAR(255) DEFAULT 'Nuevo',
    stage VARCHAR(255),
    observations TEXT,
    CantRecMaq INT NULL,
    FEntRecMaq DATE NULL,
    Foreign Key (id) REFERENCES ordenes (NumOrd) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE PrTerm (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255),
    status VARCHAR(255) DEFAULT 'Nuevo',
    stage VARCHAR(255),
    observations TEXT,
    CantProdTerm INT NULL,
    CantProdDE INT NULL,
    CantProdBA INT NULL,
    Foreign Key (id) REFERENCES ordenes (NumOrd) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE cat_colores (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(255),
    codigoClr VARCHAR(3) NOT NULL
);

CREATE TABLE cat_tallas (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(255),
    codigoTalla VARCHAR(2) NOT NULL
);

CREATE TABLE cat_prendas (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(255),
    codigoPrenda VARCHAR(2) NOT NULL
);

CREATE TABLE cat_linea (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(255),
    codigoLinea VARCHAR(2) NOT NULL
);