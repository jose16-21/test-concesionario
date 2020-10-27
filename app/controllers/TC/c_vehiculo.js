const db = require("../../config/db.config");
const Vehiculo = db.Vehiculo;

exports.create = (req, res) => {
    Vehiculo.create(req.body)
        .then((Response) => {
            res.status(200).json(Response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};



exports.findAll = (req, res) => {
    Vehiculo.findAndCountAll({


        order: [["createdAt", "DESC"]],
    })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.findById = (req, res) => {
    Vehiculo.findByPk(req.params.Id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.update = (req, res) => {
    Vehiculo.update(req.body, { where: { id: req.params.Id } })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.deleteVehiculo = (req, res) => {
    const id = req.params.Id;
    Vehiculo.destroy({
        where: { id: id },
    })
        .then((response) => {
            handle.respuestaDelete(res, response);
        })
        .catch((err) => {
            handle.ErrorDelete(res, err);
        });
};
