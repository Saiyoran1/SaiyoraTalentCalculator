function gameRouter(db) {
    const router = require('express').Router();

    router.route('/abilities').get((req, res) => {
        db.query('SELECT * FROM abilities', (err, result) => {
            if (err) res.status(400).json(err);
            else res.send(result);
        });
    });

    router.route('/dungeons').get((req, res) => {
        db.query('SELECT * FROM dungeons', (err, result) => {
            if (err) res.status(400).json(err);
            else res.send(result);
        });
    });

    router.route('/specializations').get((req, res) => {
        db.query('SELECT * FROM specializations', (err, result) => {
            if (err) res.status(400).json(err);
            else res.send(result);
        });
    });

    return router;
}

module.exports = gameRouter;