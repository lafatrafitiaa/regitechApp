create DATABASE regitech;

create table marque (
    id serial primary key,
    marque varchar(100),
    photo text
);
create table modele(
    id serial primary key,
    modele varchar(100),
    config int
);
create table categorie(
    id serial primary key,
    categorie varchar(200),
    id_modele int,
    photocategorie varchar(100),
    constraint fk_idModele foreign key(id_modele) references modele(id)
);
create table produits(
    id serial primary key,
    id_categorie int,
    designation varchar(200),
    photo text,
    id_marque int,
    puissance numeric default 0,
    prix numeric default 0,
    caracteristique text,
    constraint fk_idModele foreign key(id_categorie) references categorie(id),
    constraint fk_idMarque foreign key(id_marque) references marque(id)
);

create table clients(
    id serial primary key,
    nom varchar(100),
    email varchar(150),
    telephone varchar(15),
    societe varchar(100),
    activite varchar(100),
    date_inscription date default now(),
    mdp varchar(255)
);

create table etat_devis(
    id serial primary key,
    etat varchar(100),
    description text
);
create table devis(
    id serial primary key,
    id_client int,
    id_produit int,
    description text,
    id_etat int,
    dateDemande date default now(),
    nb_commande int default 1,
    prixDevis numeric,
    dateValidite date,
    constraint fk_idClient foreign key(id_client) references clients(id),
    constraint fk_idProduit foreign key(id_produit) references produits(id),
    constraint fk_idEtat foreign key(id_etat) references etat_devis(id)
);

insert into modele values(
    1, 'petit', 1
);
insert into modele values(
    2, 'petit', 1
);

insert into categorie values(
    1, 'a', 1, 'img'
);

insert into marque values(
    1, 'vista', 'img'
);
insert into marque values(
    2, 'Canon', 'img'
);
insert into marque values(
    3, 'lg', 'photo'
);

insert into produits values(
    1, 1, 'p1', 'img', 1, 100, 1500000, 'less'
);
insert into produits values(
    2, 1, 'p2', 'img', 1, 100, 1500000, 'less'
);
insert into produits values(
    3, 1, 'p3', 'img', 1, 100, 1500000, 'less'
);
insert into produits values(
    4, 1, 'Canon PIXMA MG452', 'canon.webp', 1, 100, 2000000, 'less'
);


insert into etat_devis values(
  1, 'envoyee', 'efa mandeha ny commande'
);
insert into etat_devis values(
  2, 'validee', 'efa validee ny commande'
);
insert into etat_devis values(
  3, 'annuler', 'annuler le commande'
);

insert into devis values(
    1, 1, 1, 'bla', 1, '2020-02-02'
);
insert into devis values(
    2, 1, 4, 'Commande', 1, '2022-08-10'
);
insert into devis values(
    3, 1, 2, 'Commande', 2, '2021-10-11'
);
insert into devis values(
    4, 1, 1, 'bla', 1, '2022-04-09'
);



insert into clients values(
  1, 'Dg', 'dg@gmail.com', '0330202102', 'regitech', 'dg', md5('0000'), 3
);
insert into clients values(
  2, 'Assistant', 'assistant@gmail.com', '0330202102', 'regitech', 'assistant', md5('0000'), 2
);
insert into clients values(
  3, 'Client1', 'Jaona@gmail.com', '0334312548', 'la pie', 'directeur', md5('0000'), 1
);
insert into clients values(
  4, 'Client2', 'ravelo@gmail.com', '0385246572', 'ETP', 'gestion', md5('0000'), 1
);

create table userrole(
    id serial primary key,
    roles varchar(20),
    niveau integer
);

insert into userrole values(
    1, 'client'
);
insert into userrole values(
    2, 'assistant'
);
insert into userrole values(
    3, 'DG'
);


create table rendezvous(
    id serial primary key,
    mailClient varchar(150),
    dateRdv date,
    heureRdv time,
    lieu varchar(100),
    motif text,
    etat integer default 0,
    societe varchar(100),
    tel varchar(15)
);
-- etat : 0:envoye, 1:valider, 2: annuler

create table rendezvousReporter(
  id serial primary key,
  idRendezvous int,
  daterdv  date,
  heurerdv time,
  lieu varchar(100)
);

insert into rendezvous values(
  1, 'jaona@gmail.com', '2022-09-28', '10:30:00', 'Itaosy', 'Test motif', 0, 'soc', '0330202102'
);
insert into rendezvous values(
  2, 'ravelo@gmail.com', '2022-10-15', '12:00:00', 'Ampefiloha', 'Test motif', 0, 'soc', '0330202102'
);
insert into rendezvous values(
  3, 'test@gmail.com', '2022-10-12', '12:00:00', 'Andoharanofotsy', 'Test motif', 0, 'ITU', '0330202102'
);
insert into rendezvous values(
  4, 'rabe@gmail.com', '2022-10-12', '12:00:00', 'Betongolo', 'Test motif', 0, 'Sidex', '0330202102'
);

create table tokenapk(
  id serial primary key,
  idClients int,
  token varchar(255),
  constraint fk_idClient foreign key(idClients) references clients(id)
);

create table messages(
  id serial primary key,
  idclientsSent int,
  idclientsReceive int default 1,
  dateheurechat TIMESTAMP default now(),
  messages text
);




create view suiviCommande as
select p.id, p.designation, p.prix, c.categorie, m.marque, d.id as id_devis, d.id_etat, d.datedemande, coalesce(d.nb_commande, 0) as nb_commande from produits as p
left join devis as d
on p.id = d.id_produit
join categorie as c
on c.id = p.idcategorie
join marque as m
on m.id = p.idmarque;

create view clientstoken as
select c.id, c.nom, c.email, c.iduserrole, t.id as idtoken, t.token from clients as c
join tokenapk as t
on c.id = t.idclients;


alter table clients add iduserrole int REFERENCES userrole(id);

alter table devis add id_client int REFERENCES clients(id);
alter table devis add nb_commande int;



insert into messages(idclientssent, messages) values(
    3, 'message 5'
);


insert into produits VALUES(
  12, 1, 'Eaton 5E 650 VA', 'assets/images/modele/inline/eaton5e650.jpg', 12, 650, 343500, 'Inline 650VA', ''
);
insert into produits VALUES(
  13, 1, 'Eaton 5E 850 VA', 'assets/images/modele/inline/eaton5e850.jpg', 12, 850, 399000, 'Inline 850VA', ''
);
insert into produits VALUES(
  14, 1, 'Eaton 5E 1100 VA', 'assets/images/modele/inline/eaton5e1100.jpg', 12, 1100, 730500, 'Inline 1100VA', ''
);
insert into produits VALUES(
  15, 1, 'Eaton 5E 2000 VA', 'assets/images/modele/inline/eaton5e2000.jpg', 12, 2000, 1671000, 'Inline 2000VA', ''
);

insert into produits VALUES(
  8, 2, 'Challenger RTHF 1 - 10kVA MM', 'assets/images/modele/online/highfrequency.png', 12, 2000, 1671000, 'Inline 2000VA', ''
);

create view samerdv AS
select count(id) as duplication, daterdv, heurerdv from rendezvous
where etat = 0 group by daterdv,heurerdv;


create view nbCommandeCategorie AS
select sum(nb_commande) as quantite, categorie from suivicommande
where nb_commande>0
group by categorie;


update produits set designation='Eaton 5e 2000 VA', photo='assets/images/modele/inline/eaton5e2000.jpg',
puissance=2000, prix=1671000, caracteristique='Inline 2000VA' where id=11;


select (quantite*100) from nbcommandecategorie;
select sum(quantite) from nbcommandecategorie;
