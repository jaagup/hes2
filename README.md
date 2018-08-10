# HES programm 

* Elektrimasinad OÜ veebilehe arendus 
* Hooldusprogramm Ettevõtte Seadmepargile 

HES keskkond võimaldab tahvelarvutiga seadmete vahel ringi kõndides nende andmeid ning eesootavaid hooldustöid üles märkida, samuti sobivatesse kohtadesse tahvliga tehtud piltide lisamine ning masinate automaatse monitoorimise logid. HES'i kasutav ettevõte saab sisselogida ning alles siis avaneb avakuva, kus saab HES'i funktsioone kasutada. HES programmi saab kasutada ka arvutis ning oleme ka mobiilisõbralikud. 


## Tiimiliikmed
* Kurmo Andres Rootsi
* Markus Heinsalu
* Erik Enden
* Daisy Pukkonen

##  [Programmi link](https://hes-projekt.appspot.com/)

https://hes-projekt.appspot.com/

--------------

## HES arenduskeskkonna seadistamine 
1. Vajalik tarkvara 
* Java SE Development Kit 8 Update 151 (64-bit) (versioon 8.0.1510.12)
* [Google Cloud SDK ja Appengine Java component](https://cloud.google.com/appengine/docs/standard/java/building-app/environment-setup)
* Eclipse Oxygen.2 Release (4.7.2)
* Google Cloud Tools for Eclipse 1.6.0 
* GWT Eclipse Plugin 3.0.0

2. HES projekti importimine ja käivitamine
* Võta githubist kood (git clone) või lae alla .zip fail
* Paki lahti .zip fail
* Lisa aho kaust oma Eclipse'i töökataloogi (vaikimisi C:\Users\{nimi}\eclipse/workspace)
* Käivita Eclipse ning impordi HES projekt Eclipse'i
  File > Open Projects from File System...
  Import source > otsi projekti kataloogi (vaikimisi C:\Users\{nimi}\eclipse-workspace\elektrimasinad\aho(
* Tee parem klikk projektil ning vali
  Configure > Convert to Appengine Standard
* Seejärel 
  GWT > Compile
* Parem klikk projektile > properties > Java build path > sealt valida menüüst libraries > Google Cloud platform > märgi ära Appengine API
* Projekti käivitamiseks vali
  Run as > App Engine 
3. Lisa
* Kindlasti vaata, et oleks õige versioon JDK library peal
* Muudatuste tegemisel peab igakord GWT(compile) tegema ning alles siis Run as(App Engine)

### Projekt teostatud TLU Informaatika õppekava Tarkvaraarenduse Praktika aine raames.

## Litsents

See projekt on MIT litsendi all - vaata [LITSENTS](https://github.com/kurmorootsi/aho/blob/master/LICENSE.md) täpsema info jaoks

## Pildid

![alt text](https://github.com/kurmorootsi/aho/blob/master/login.png)
![alt text](https://github.com/kurmorootsi/aho/blob/master/avakuva.png)
![alt text](https://github.com/kurmorootsi/aho/blob/master/hooldustoo.png)
![alt text](https://github.com/kurmorootsi/aho/blob/master/raport.png)
![alt text](https://github.com/kurmorootsi/aho/blob/master/monitooring.png)
![alt text](https://github.com/kurmorootsi/aho/blob/master/hooldus.png)

