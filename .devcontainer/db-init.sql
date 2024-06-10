IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'heroes')
BEGIN
    CREATE DATABASE heroes;
END
GO

USE heroes;
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Heroes')
BEGIN
    CREATE TABLE Heroes (
        Id INT PRIMARY KEY,
        Name NVARCHAR(100),
        AlterEgo NVARCHAR(100),
        Description NVARCHAR(255)
    );
END
GO

INSERT INTO Heroes (Id, Name, AlterEgo, Description) VALUES
(1, 'Batman', 'Bruce Wayne', 'A wealthy American playboy, philanthropist, and owner of Wayne Enterprises.'),
(2, 'Superman', 'Clark Kent', 'A superhero who was born on the planet Krypton and was given the name Kal-El at birth.'),
(3, 'Wonder Woman', 'Diana Prince', 'A demigoddess and warrior princess of the Amazons.'),
(4, 'Flash', 'Barry Allen', 'A superhero with the power of super speed.'),
(5, 'Green Lantern', 'Hal Jordan', 'A test pilot who was chosen to become the first human member of the Green Lantern Corps.');
GO