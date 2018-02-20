# PolimiChatBot

Questa repository contiene il progetto di Ingegneria Informatica di Paolo Roncaglioni e Stefano Sanitate, studenti del Politecnico di Milano. All'interno é presente tutta la documentazioni dettagliata della ricerca che abbiamo svolto sui ChatBot, compresa una prima demo funzionante, sviluppata in javascript, di un possibile bot di aiuto agli studenti del politecnico. 

## Dettagli 

* Main project.tx: file LateX del documento di specifica, di cui troverete il pdf nella cartella Build;
* Google Weather Example.js : esempio di codice javascript di interrogazione API esterne, preso dal sito di DialogFlow e usato (con minime modifiche) per i vari test sui framework utilizzati;
* ServerSide.js: Codice javascript attualmente attivo in hosting su google cloud, parte back-end del nostro progetto;
* Vari file Json: Usati come motori di scraping "fake", poiché non ritenevamo opportuno approfondire anche questo ambito nel nostro progetto.


Attualmente il nostro bot é attivo su Telegram al nome di @PolimiStudent_Bot, Enjoy!

## Informazioni Generali

WebHook address testBot:
https://us-central1-weather-1ce1c.cloudfunctions.net/weatherWebhook

WebHook address Demo: 
https://us-central1-weather-1ce1c.cloudfunctions.net/polimiWebhook

Esempi di Json da inoltrare e ricevere (testBot)

In entrata: 
{ "result": {
    "parameters": {
      "date": "today",
      "geo-city": "Milan"    }}}

In uscita: 
{"speech": "Current conditions in the City \n        Milan, Italy are Light Rain with a projected high of\n        14°C or 57°F and a low of \n        10°C or 49°F on \n        2017-11-09.",
"displayText": "Current conditions in the City \n        Milan, Italy are Light Rain with a projected high of\n        14°C or 57°F and a low of \n        10°C or 49°F on \n        2017-11-09."}

Esempi di Json da inoltrare e ricevere (modifica chatfuel)

In entrata:
 {{‘data’:”today”
‘geo-city’}}

In uscita: 
{ "messages": [
   {"text": "Current conditions in the City \n        Milan, Italy are Light Rain with a projected high of\n        14°C or 57°F and a low of \n        10°C or 49°F on \n        2017-11-09."} ]}
