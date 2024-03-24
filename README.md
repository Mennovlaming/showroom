# Auto's updaten

Als je de showroom wilt updaten doe dan het volgende:
1. comprimeer het bestand naar +- 400kb (groot zat voor web)
2. Voeg de image toe in /public/images met een herkenbare naam (bijv. mustang1, mustang1.1, enz)
3. ga naar /data/carData.json
4. Dit is 1 auto: 

    {
      "id": 0,
      "title": "Auto 1",
      "secondTitle": "Dit is de eerste auto.",
      "images": ["auto1.jpg", "auto1.2.jpg", "auto1.3.jpg"],
      "desctription": "Hier een kleine, samenvattende beschrijving van de auto 'optioneel,'",
      "Bouwjaar":"1980",
      "Kilometerstand": "50.000",
      "Vermogen":"200px",
      "Transmissie":"automaat",
      "Brandstof":"benzine"
    }

Pas de id altijd aan naar het volgende nummer, en zorg dat de images die je wilt laten zien de bijhorende naam hebben, rest spreekt voor zich, extra info toevoegen kan altijd (kijk wel of het mooi blijft)

Nu de auto's aangepast zijn, hoeft hij alleen nog maar op github te komen, vanuit hier pakt de hosting automatisch de nieuwste versie. 
5. Ga  naar https://github.com/Mennovlaming/showroom 
7. klik op 'Add file' > 'Upload files'
8. upload alle files, voeg bij description even toe wat je hebt aangepast
9. 'Commit changes'

Kan een klein kwartiertje duren als je wat hebt aangepast, helemaal als het veel is.