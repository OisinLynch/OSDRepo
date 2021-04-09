

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.database().ref('/players');

/*
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
*/

const getPlayersFromDB = (res) => {
    let players = [];
    return db.on(
        'value',
        snapshot => {
            snapshot.forEach(player => {
                player.push({
                    id: player.key,
                    firstName: player.val().firstName,
                    lastname: player.val().lastname,
                    position: player.val().position,
                    teamName: player.val().teamName,
                    jserseyNumber: player.val().jserseyNumber
                });
            });
            res.status(200).json(players);
        },
        error => {
            res.status(error.code).json({
                message: `Error: ${error.message}`
            });
        }
    );

};

exports.addPlayer = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(401).json({
                message: 'Not allowed'
            });
        }
        const firstName = req.query.firstName;
        const lastName = req.query.lastName; 
        const position = req.query.position;
        const teamName = req.query.teamName;
        const jerseyNumber = req.query.jerseyNumber;
        db.push({ firstName, lastName, position, teamName, jerseyNumber });
        getPlayersFromDB(res);
    });
});

exports.deletePlayer = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      if(req.method !== 'DELETE') {
        return res.status(401).json({
          message: 'Not allowed dude...'
        })
      }
      const id = req.query.id;
      //admin.database().ref(`/players/${id}`).remove();
      db.child(id).remove();
      getPlayersFromDB(res);
    });
  });

exports.getPlayers = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method !== 'GET') {
            return res.status(404).json({
                message: 'Not allowed'
            })
        }
        getPlayersFromDB(res);
    });
});