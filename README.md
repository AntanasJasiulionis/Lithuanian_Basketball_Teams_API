Lituanian Basketball Teams API Documentation
Language: EN LT

Welcome to the Lithuanian Basketball Teams API by Antanas Jasiulionis. This API lists all Lithuanian basketball teams, players and coaches.

Get a Specific Team by ID
Returns a team with specified id.

List of team id's:

id – Kauno „Žalgiris“
id – Vilniaus „Rytas“
id – Vilniaus „Wolves Twinsbet“
id – Utenos „Uniclub Casino – Juventus“
id – Panevėžio „7bet – Lietkabelis“
id – Klaipėdos „Neptūnas“
id – Mažeikių „M Basket – Delamode“
id – Jonavos „CBet“
id – Kėdainių „Nevėžis – Optibet“
id – Šiaulių „Šiauliai“
id – Pasvalio „Pieno žvaigždės“
Example request:

GET https://lithuanianbasketballteamsapi-production.up.railway.app/team/:id
Example response:


    {
        "id": 1,
        "teamName": "Kauno „Žalgiris“",
        "starting": [
            {
                "name": "Keenan",
                "lastname": "Evans",
                "position": "Įžaidėjas",
                "age": 27,
                "height": "191 cm",
                "weight": "86 kg",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Tomas",
                "lastname": "Dimša",
                "position": "Atakuojantis gynėjas",
                "age": 30,
                "height": "196 cm",
                "weight": "90 kg",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Edgaras",
                "lastname": "Ulanovas",
                "position": "Lengvojo krašto puolėjas",
                "age": 32,
                "height": "199 cm",
                "weight": "99 kg",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Rolands",
                "lastname": "Šmits",
                "position": "Sunkiojo krašto puolėjas",
                "age": 28,
                "height": "207 cm",
                "weight": "107 kg",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Kevarrius",
                "lastname": "Hayes",
                "position": "Vidurio Puolėjas",
                "age": 27,
                "height": "206 cm",
                "weight": "103 kg",
                "club": "Kauno „Žalgiris“"
            }
        ],
        "bench": [
            {
                "name": "Lukas",
                "lastname": "Lekavičius",
                "position": "Įžaidėjas",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Matas",
                "lastname": "Vokietaitis",
                "position": "Vidurio Puolėjas",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Dovydas",
                "lastname": "Giedraitis",
                "position": "Atakuojantis gynėjas",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Nedas",
                "lastname": "Montvila",
                "position": "Atakuojantis gynėjas",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Laurynas",
                "lastname": "Birutis",
                "position": "Vidurio Puolėjas",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Karolis",
                "lastname": "Lukošiūnas",
                "position": "Atakuojantis gynėjas",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Demetre",
                "lastname": "Rivers",
                "position": "Lengvojo krašto puolėjas",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Edmond",
                "lastname": "Sumner",
                "position": "Atakuojantis gynėjas",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Dovydas",
                "lastname": "Butka",
                "position": "Sunkiojo krašto puolėjas",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Danielius",
                "lastname": "Lavrinovičius",
                "position": "Sunkiojo krašto puolėjas",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Brady",
                "lastname": "Manek",
                "position": "Sunkiojo krašto puolėjas",
                "club": "Kauno „Žalgiris“"
            },
            {
                "name": "Arnas",
                "lastname": "Butkevičius",
                "position": "Lengvojo krašto puolėjas",
                "club": "Kauno „Žalgiris“"
            }
        ],
        "coach": [
            {
                "name": "Andrea",
                "lastname": "Trinchieri",
                "position": "Treneris",
                "club": "Kauno „Žalgiris“"
            }
        ]
    }
        
Search Players/Coaches
Returns a list of players filtered by name, lastname and position.

Query parameters:

(Optional) Name – The name of the player.
(Optional) Lastname – The lastname of the player.
(Optional) Position – The role he's in with the team. Roles (`Įžaidėjas`, `Atakuojantis Gynėjas`, `Lengvojo krašto puolėjas`, `Sunkiojo krašto puolėjas`, `Vidurio puolėjas`)
Example request:

GET https://lithuanianbasketballteamsapi-production.up.railway.app/search?name=Margiris&lastname=Normantas&position=Atakuojantis gynėjas
Example response:


        [
            {
                "name": "Margiris",
                "lastname": "Normantas",
                "position": "Atakuojantis gynėjas",
                "age": 27,
                "height": "194 cm",
                "weight": "94 kg",
                "club": "Vilniaus „Rytas“"
            }
        ]
        
Copyright © Antanas Jasiulionis 2024
