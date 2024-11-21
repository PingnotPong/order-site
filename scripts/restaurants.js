let restaurants = {
    "bombay-mirchi": {
        "name": "Asia Gourmet Pavillon & Hallo Sushi",
        "liefergebühr": 5,
        "mindestbestellwert": 10.00,
        "essensart": ["Sushi", "Chinesisch"],
        "kategorien": {
            "Fingerfood": [
                {
                    "name": "Mini-Frühlingsrollen (8 Stück, vegetarisch)",
                    "info": "mit süßer Chilisauce",
                    "price": 6.9,
                    "produktinfo": {
                        "allergene": [
                            "Sojabohnen/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Farbstoff",
                            "Konservierungsstoffen",
                            "Geschmacksverstärker",
                            "Süßungsmittel(n)"
                        ]
                    }
                },
                {
                    "name": "Gebackene Bananen (12 Stück)",
                    "info": "mit Honig",
                    "price": 7.9,
                    "produktinfo": {
                        "allergene": [
                            "Ei/-Erzeugnisse",
                            "glutenhaltige/s Getreide/-Erzeugnisse",
                            "Weizen"
                        ],
                        "mögliche-unverträglichkeiten": [
                        ]
                    }
                },
                {
                    "name": "Gebackene Ananas (3 Scheiben)",
                    "info": "mit Honig",
                    "price": 6.9,
                    "produktinfo": {
                        "allergene": [
                            "Ei/-Erzeugnisse",
                            "Milch/-Erzeugnisse (laktosehaltig)",
                            "glutenhaltige/s Getreide/-Erzeugnisse",
                            "Weizen"
                        ],
                        "mögliche-unverträglichkeiten": [
                        ]
                    }
                },
                {
                    "name": "Dumplings (8 Stück)",
                    "info": "gefüllte frittierte chinesische Teigtaschen mit Schnittlauch und süßer Chilisauce",
                    "price": 7.9,
                    "produktinfo": {
                        "allergene": [
                            "glutenhaltige/s Getreide/-Erzeugnisse",
                            "Weizen",
                            "Milch/-Erzeugnisse (laktosehaltig)",
                            "Ei/-Erzeugnisse",
                            "Gerste"
                        ],
                        "mögliche-unverträglichkeiten": [
                        ]
                    }
                },
                {
                    "name": "Nem",
                    "info": "spezielle vietnamesische Frühlingsrolle, gefüllte frittierte Reispapierrollen mit Hühnerfleisch, dazu süße Chilisauce",
                    "price": 10.9,
                    "produktinfo": {
                        "allergene": [
                            "glutenhaltige/s Getreide/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Farbstoff",
                            "Konservierungsstoffen",
                            "Geschmacksverstärker",
                            "Süßungsmittel(n)"
                        ]
                    }
                },
                {
                    "name": "Torpedo Garnelen (5 Stück)",
                    "info": "nach japanischer Art in leckerer knusper Panade mit süßer Chilisauce",
                    "price": 10.9,
                    "produktinfo": {
                        "allergene": [
                            "Krebstiere/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Farbstoff",
                            "Konservierungsstoffen"
                        ]
                    }
                },
                {
                    "name": "Gebackene Wantan (3 Stück, groß)",
                    "info": "mit Süß-Sauer-Sauce",
                    "price": 8.9,
                    "produktinfo": {
                        "allergene": [
                            "Sojabohnen/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Farbstoff",
                            "Konservierungsstoffen",
                            "Geschmacksverstärker",
                            "Süßungsmittel(n)"
                        ]
                    }
                },
                {
                    "name": "Gemischte Platte",
                    "info": "4 Mini-Frühlingsrollen (vegetarisch), 5 spezielle vietnamesische Frühlingsrolle mit Hühnerfleisch, 5 Ebi Tempura, panierte Garnelen nach japanischer Art, süße Chilisauce & Chili-Mangosauce",
                    "price": 22.9,
                    "produktinfo": {
                        "allergene": [
                            "Sojabohnen/-Erzeugnisse",
                            "glutenhaltige/s Getreide/-Erzeugnisse",
                            "Weizen",
                            "Ei/-Erzeugnisse",
                            "Schwefeldioxid/Sulfite",
                            "Milch/-Erzeugnisse (laktosehaltig)"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Farbstoff",
                            "Konservierungsstoffen",
                            "Geschmacksverstärker",
                            "Süßungsmittel(n)"
                        ]
                    }
                },
                {
                    "name": "Krabbenchips (18 bis 20 Stück)",
                    "info": "",
                    "price": 4.5,
                    "produktinfo": {
                        "allergene": [
                            "Krebstiere/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Farbstoff",
                            "Konservierungsstoffen",
                            "Geschmacksverstärker",
                            "Süßungsmittel(n)"
                        ]
                    }
                },
                {
                    "name": "Erdbeer Cheescake Mochi (2 Stück)",
                    "info": "",
                    "price": 4.9,
                    "produktinfo": {
                        "allergene": [
                            "Milch/-Erzeugnisse (laktosehaltig)"
                        ],
                        "mögliche-unverträglichkeiten": [
                        ]
                    }
                },
                {
                    "name": "Schoko Mochi-Eis (2 Stück)",
                    "info": "",
                    "price": 4.9,
                    "produktinfo": {
                        "allergene": [
                            "Sojabohnen/-Erzeugnisse",
                            "Milch/-Erzeugnisse (laktosehaltig)"
                        ],
                        "mögliche-unverträglichkeiten": [
                        ]
                    }
                },
            ],
            "Suppen": [
                {
                    "name": "Hühnersuppe in Kokosmilch (leicht scharf)",
                    "info": "mit Champignons",
                    "price": 7.5,
                    "produktinfo": {
                        "allergene": [
                        ],
                        "mögliche-unverträglichkeiten": [
                        ]
                    }
                },
                {
                    "name": "Wantan Suppe",
                    "info": "",
                    "price": 6.9,
                    "produktinfo": {
                        "allergene": [
                            "Ei/-Erzeugnisse",
                            "glutenhaltige/s Getreide/-Erzeugnisse",
                            "Weizen"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Geschmacksverstärker"
                        ]
                    }
                },
                {
                    "name": "Peking Suppe",
                    "info": "sauer-scharfe Suppe",
                    "price": 7.9,
                    "produktinfo": {
                        "allergene": [
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Farbstoff",
                            "Konservierungsstoffen",
                            "Geschmacksverstärker"
                        ]
                    }
                },
            ],
            "Vorspeisen": [
                {
                    "name": "Edamame",
                    "info": "gegarte, japanische Sojabohnen mit Meersalz",
                    "price": 6,
                    "produktinfo": {
                        "allergene": [
                            "Sojabohnen/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                        ]
                    }
                },
                {
                    "name": "Wakame",
                    "info": "gemischter Seealgensalat mit Sesam",
                    "price": 6,
                    "produktinfo": {
                        "allergene": [
                            "Sesamsamen/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                        ]
                    }
                },
                {
                    "name": "Kimchisalat (scharf)",
                    "info": "scharf eingelegter Chinakohl mit Sesam",
                    "price": 6.9,
                    "produktinfo": {
                        "allergene": [
                            "Sesamsamen/-Erzeugnisse",
                            "Sojabohnen/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Farbstoff"
                        ]
                    }
                },
            ],
            "Reis- und Nudelgerichte": [
                {
                    "name": "Gebratener Reis mit Gemüse",
                    "info": "",
                    "price": 12.9,
                    "produktinfo": {
                        "allergene": [
                            "Ei/-Erzeugnisse",
                            "Sojabohnen/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Geschmacksverstärker"
                        ]
                    }
                },
                {
                    "name": "Gebratene Nudeln mit Gemüse",
                    "info": "",
                    "price": 12.9,
                    "produktinfo": {
                        "allergene": [
                            "Sojabohnen/-Erzeugnisse",
                            "Ei/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Geschmacksverstärker"
                        ]
                    }
                }
            ],
            "Vegetarische Gerichte": [
                {
                    "name": "Gebratener Eierreis mit Gemüse",
                    "info": "",
                    "price": 9.5,
                    "produktinfo": {
                        "allergene": [
                            "Ei/-Erzeugnisse",
                            "Sojabohnen/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Konservierungsstoffen",
                            "Geschmacksverstärker"
                        ]
                    }
                },
                {
                    "name": "Gebratene Nudeln mit Gemüse",
                    "info": "",
                    "price": 9.5,
                    "produktinfo": {
                        "allergene": [
                            "Ei/-Erzeugnisse",
                            "Sojabohnen/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Konservierungsstoffen",
                            "Geschmacksverstärker"
                        ]
                    }
                },
                {
                    "name": "Verschiedenes, gebratenes Gemüse der Saison",
                    "info": "dazu Langkorn-Duftreis",
                    "price": 12.5,
                    "produktinfo": {
                        "allergene": [
                            "glutenhaltige/s Getreide/-Erzeugnisse",
                            "Sojabohnen/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Konservierungsstoffen",
                            "Geschmacksverstärker"
                        ]
                    }
                },
                {
                    "name": "Verschiedenes, gebratenes Gemüse der Saison mit Tofu",
                    "info": "dazu Langkorn-Duftreis",
                    "price": 13.5,
                    "produktinfo": {
                        "allergene": [
                            "glutenhaltige/s Getreide/-Erzeugnisse",
                            "Sojabohnen/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Konservierungsstoffen",
                            "Geschmacksverstärker"
                        ]
                    }
                },                                                                
            ],
            "Hauptgerichte": [
                {
                    "name": "Kokos-Mangosauce mit Saisongemüse",
                    "info": "",
                    "price": 12,
                    "produktinfo": {
                        "allergene": [
                            "glutenhaltige/s Getreide/-Erzeugnisse",
                            "Milch/-Erzeugnisse (laktosehaltig)"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Geschmacksverstärker"
                        ]
                    }
                },
                {
                    "name": "Kokos-Erdnusssauce mit Saisongemüse",
                    "info": "",
                    "price": 12,
                    "produktinfo": {
                        "allergene": [
                            "glutenhaltige/s Getreide/-Erzeugnisse",
                            "Erdnüsse/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Geschmacksverstärker"
                        ]
                    }
                },
                {
                    "name": "Rotes Curry mit Saisongemüse (leicht scharf)",
                    "info": "in Kokosmilch mit rotem Curry",
                    "price": 12,
                    "produktinfo": {
                        "allergene": [
                            "glutenhaltige/s Getreide/-Erzeugnisse"
                        ],
                        "mögliche-unverträglichkeiten": [
                            "Geschmacksverstärker"
                        ]
                    }
                },                                                
            ],
        }
    }
}