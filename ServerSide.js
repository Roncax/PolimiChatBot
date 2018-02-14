'use strict';
const http = require('http');

exports.weatherWebhook = (req, res) =
>
{

    let intent = req.body.queryResult.intent['displayName'];

    switch (intent) {
        case 'Full [AuleLibere]':
            console.log(intent);
            var orarioAule = JSON.parse(orarioAuleJSON);
            var auleLibere = [];
            var dateReq = req.body.queryResult.parameters['date'];

            var timePeriod = req.body.queryResult.parameters['time-period'];

            for (var i = 0; i < orarioAule.list.length; i++) {
                /*console.log(dateReq);
      		console.log(orarioAule.list[i].occupatoGiorno);
       		console.log(timePeriod);
     		console.log(orarioAule.list[i].occupatoOra);*/
                if (orarioAule.list[i].occupatoGiorno !== dateReq || orarioAule.list[i].occupatoOra !== timePeriod) {
                    auleLibere.push(orarioAule.list[i].aula);
                    console.log(auleLibere);
                }

            }
            resAuleLibere(auleLibere).then((output) = > {
                res.setHeader('Content-Type', 'application/json');

            res.send(JSON.stringify({
                'fulfillmentText': output,
                'fulfillmentText': output
            }));


    }
).
    catch((error) = > {
        res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        'fulfillmentText': error,
        'fulfillmentText': error
    }));
})
    ;
    console.log(auleLibere);
    break;

case
    'Full [CalendarioAccademico]'
:
    console.log(intent);
    break;
case
    'Full [CercaAula]'
:
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
        resAula(searchVal, edificio).then((output) = > {
            // qui può esserci un bug, ocio
            res.setHeader('Content-Type', 'application/json');

        res.send(JSON.stringify({
            'fulfillmentText': output,
            'fulfillmentText': output
        }));


    }).
        catch((error) = > {
            res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
            'fulfillmentText': error,
            'fulfillmentText': error
        }));
    })
        ;

    }

    break;
case
    'Full [OrarioAula]'
:
    console.log(intent);
    var listaAula = JSON.parse(listaAulaJSON);
    let date = req.body.queryResult.parameters['date'];
    let aula = req.body.queryResult.parameters['Aula'];
    let orario = '';
    for (var i = 0; i < listaAula.list.length; i++) {
        if (listaAula.list[i].aula == aula) {
            orario = listaAula.list[i].orario;
            console.log("aula trovata");
        }
    }
    console.log(orario);
    resOrarioAula(date, aula, orario).then((output) = > {
        // Return the results of the weather API to Dialogflow
        res.setHeader('Content-Type', 'application/json');
    console.log('check');
    res.send(JSON.stringify({
        'fulfillmentText': output,
        'fulfillmentText': output
    }));
}).
    catch((error) = > {
        // If there is an error let the user know
        res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        'fulfillmentText': error,
        'fulfillmentText': error
    }));
})
    ;

    break;
case
    'Full [OrarioLezioni]'
:
    console.log(intent);
    break;

}

}
;

function resAuleLibere(listaAule) {
    return new Promise((resolve, reject) = > {


        let output = 'Ecco le aule libere: ' + listaAule + '.';
    console.log(output);
    resolve(output);
})
    ;
    res.on('error', (error) = > {
        reject(error);
})
    ;
}


function callWeatherApi(date, aula, intent) {
    return new Promise((resolve, reject) = > {
        let output = date + aula + intent + ' ' + 'Sharpen thy shovel!';
    // Resolve the promise with the output text
    console.log(output);
    resolve(output);
})
    ;
    res.on('error', (error) = > {
        reject(error);
})
    ;
}

function resAula(aula, edificio) {
    return new Promise((resolve, reject) = > {

        let output = "L'aula " + aula + ' si trova in ' + edificio;
    console.log(output);
    resolve(output);
})
    ;
    res.on('error', (error) = > {
        reject(error);
})
    ;
}

function resOrarioAula(date, aula, orario) {
    return new Promise((resolve, reject) = > {


        let output = 'Gli orari di ' + date + ' per la ' + aula + ' sono ' + orario;
    console.log(output);
    resolve(output);
})
    ;
    res.on('error', (error) = > {
        reject(error);
})
    ;
}
