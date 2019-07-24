create table Client ( 
ClientId INT IDENTITY(1,1) PRIMARY KEY,
FirstName VARCHAR(35) NOT NULL,
LastName VARCHAR(35) NOT NULL,
VipLevel INT NOT NULL,
Constraint VipCheck check (VipLevel >= 1 and VipLevel <= 3));

create table ContactInfo ( 
ClientId INT PRIMARY KEY ,
Email VARCHAR(35),
PhoneNum DECIMAL(10,0) NOT NULL UNIQUE,
FOREIGN KEY (ClientId) REFERENCES Client (ClientId));

create table PaymentInfo ( 
ClientId INT Primary Key,
CardNum DECIMAL(16,0) NOT NULL UNIQUE,
FullName VARCHAR(35) NOT NULL,
CardCvv DECIMAL(3,0) NOT NULL,
ExpireDate DATE NOT NULL,
FOREIGN KEY (ClientId) REFERENCES Client(ClientId));

create table BillingInfo ( 
ClientId INT Primary Key,
FullName VARCHAR(35) NOT NULL,
PostCode CHAR(6) NOT NULL,
BillingAddress VARCHAR(100) NOT NULL,
FOREIGN KEY (ClientId) REFERENCES Client(ClientId));

create table Location ( 
LocationId CHAR(8) PRIMARY KEY,
PostCode CHAR(6) NOT NULL,
LocationAddress VARCHAR(100) NOT NULL,
AdditionalInfo VARCHAR(150));

create table Event ( 
EventId INT IDENTITY(1,1) PRIMARY KEY,
ClientId INT,
LocationId CHAR(8),
EventDate DATE,
InviteeNum INT,
budget DECIMAL(10,2),
CONSTRAINT Inviteen check (InviteeNum >= 0));

create table FoodMenu (
FoodId CHAR(8) PRIMARY KEY,
FoodName VARCHAR(20) NOT NULL,
Supplier VARCHAR(20) NOT NULL);

create table FoodArrangement (
EventId INT PRIMARY KEY,
FoodId CHAR(8));

create table DecorationMenu (
DecorationId CHAR(8) PRIMARY KEY,
DecorationName VARCHAR(20) NOT NULL,
Supplier VARCHAR(20) NOT NULL);

create table DecorationArrangement (
EventId INT PRIMARY KEY,
DecorationId CHAR(8));

create table EntertainmentMenu (
EntertainmentId CHAR(8) PRIMARY KEY,
EntertainmentName VARCHAR(20) NOT NULL,
Supplier VARCHAR(20) NOT NULL);

create table EntertainmentArrangement (
EventId INT PRIMARY KEY,
EntertainmentId CHAR(8));