'use strict';
exports.polimiWebhook = (req, res) => {
  var key, count = 0;
  let intent;
  //console.log(req.body.queryResult.outputContexts); 
for(key in req.body.queryResult.outputContexts) {
  if(req.body.queryResult.outputContexts[count].hasOwnProperty('lifespanCount')) {
    if(req.body.queryResult.outputContexts[count]['lifespanCount'] == 1)
    intent = req.body.queryResult.outputContexts[count]['name'];
  }
  count++;
}  
   
  	let realIntent = intent.substring(72);
  	console.log(realIntent);
    switch (realIntent) {
        case '/contexts/aulelibere':
            console.log(intent);
            var orarioAule = JSON.parse(orarioAuleJSON);
            var auleLibere = [];
            var dateReq = req.body.queryResult.parameters['date'];
            var timePeriod = req.body.queryResult.parameters['time-period'];
            for (var i = 0; i < orarioAule.list.length; i++) {
                if (orarioAule.list[i].occupatoGiorno === dateReq) {
                  if(orarioAule.list[i].occupatoOra !== timePeriod){
                    auleLibere.push(orarioAule.list[i].aula);  
                }

                }
                else {
                    auleLibere.push(orarioAule.list[i].aula);
                }
            }
       		if (auleLibere.length > 0){
                resAuleLibere(auleLibere).then((output) => {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({
                    'fulfillmentText': output,
                    'fulfillmentText': output
                }));


            }).catch((error) => {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({
                    'fulfillmentText': error,
                    'fulfillmentText': error
                }));
            });
            break;           
            }

        case '/contexts/cercaaula':
            console.log(intent);
            var listaAula = JSON.parse(listaAulaJSON);
            var searchVal = req.body.queryResult.parameters['Aula'];
            var edificio = "NULL";
            for (var i = 0; i < listaAula.list.length; i++) {
                if (listaAula.list[i].aula == searchVal) {
                    edificio = listaAula.list[i].edificio;
                }
            }
            if (edificio == "NULL") {
                console.log("No edificio")
            } else {
                resAula(searchVal, edificio).then((output) => {
                    res.setHeader('Content-Type', 'application/json');

                    res.send(JSON.stringify({
                        'fulfillmentText': output,
                        'fulfillmentText': output
                    }));


                }).catch((error) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({
                        'fulfillmentText': error,
                        'fulfillmentText': error
                    }));
                });

            }

            break;
        case '/contexts/orarioaula':
            var listaAula = JSON.parse(listaAulaJSON);
            let date = req.body.queryResult.parameters['date'];
            let aula = req.body.queryResult.parameters['Aula'];
        	console.log(aula);
            let orario = '';
            for (var i = 0; i < listaAula.list.length; i++) {
                if (listaAula.list[i].aula == aula) {
                    orario = listaAula.list[i].orario;
                }
            }
        	console.log(orario);
            resOrarioAula(date, aula, orario).then((output) => {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({
                    'fulfillmentText': output,
                    'fulfillmentText': output
                }));
            }).catch((error) => {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({
                    'fulfillmentText': error,
                    'fulfillmentText': error
                }));
            });

            break;
        case '/contexts/orariolezioni':
        	var orarioPoli = JSON.parse(orarioPolimi);
        	var sede = req.body.queryResult.parameters['Sede'];
        	var corso = req.body.queryResult.parameters['CorsoDiStudi'];
        	var anno = req.body.queryResult.parameters['AnnoDiCorso'];
        	var studente = req.body.queryResult.parameters['cognome'];
        	var data = req.body.queryResult.parameters['date'];
        	//console.log(orarioPoli.MilanoLeonardo.IngegneriaInformatica.PrimoAnno['Studenti'][0].Roncaglioni['2018-02-13T12:00:00+01:00'].OrarioLezioni);
        	console.log(sede+corso+anno+studente+data);
            break;

    }

};

function resAuleLibere(listaAule) {
    return new Promise((resolve, reject) => {


        let output = 'Ecco le aule libere: ' + listaAule + '.';
       console.log(output);
        resolve(output);
    });
    res.on('error', (error) => {
        reject(error);
    });
}


function resAula(aula, edificio) {
    return new Promise((resolve, reject) => {

        let output = "L'aula " + aula + ' si trova in ' + edificio;
        console.log(output);
        resolve(output);
    });
    res.on('error', (error) => {
        reject(error);
    });
}

function resOrarioAula(date, aula, orario) {
    return new Promise((resolve, reject) => {


        let output = 'Gli orari di ' + date + ' per la ' + aula + ' sono ' + orario;
        console.log(output);
        resolve(output);
    });
    res.on('error', (error) => {
        reject(error);
    });
}
