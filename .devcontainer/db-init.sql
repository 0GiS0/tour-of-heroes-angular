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
(3, 'Arrow', 'Oliver Queen', 'A billionaire playboy and owner of Queen Industries who is also a vigilante archer.'),
(4, 'Hulk', 'Bruce Banner', 'A scientist who was exposed to gamma radiation which transformed him into a giant green monster.'),
(5, 'Spiderman', 'Peter Parker', 'A high school student who gained spider-like abilities after being bitten by a radioactive spider.'),
(6,'Daredevil','Matt Murdock','A blind lawyer who fights crime as a vigilante in Hells Kitchen.'),
(7,'Iron Man','Tony Stark','A billionaire industrialist and genius inventor who was kidnapped and forced to build a devastating weapon.'),
(8,'Thor','Thor Odinson','The god of thunder and the son of Odin, the king of Asgard.'),
(9,'Captain America','Steve Rogers','A super-soldier who fought in World War II and was frozen in ice for decades.');


GO