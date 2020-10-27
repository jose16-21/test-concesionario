const db = require("../../config/db.config");
const Cotizacion = db.Cotizacion;

exports.create = (req, res) => {
    Cotizacion.create(req.body)
        .then((Response) => {
            res.status(200).json(Response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};



exports.findAll = (req, res) => {
    Cotizacion.findAndCountAll({


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
    Cotizacion.findByPk(req.params.Id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.update = (req, res) => {
    Cotizacion.update(req.body, { where: { id: req.params.Id } })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.deleteCotizacion = (req, res) => {
    const id = req.params.Id;
    Cotizacion.destroy({
        where: { id: id },
    })
        .then((response) => {
            handle.respuestaDelete(res, response);
        })
        .catch((err) => {
            handle.ErrorDelete(res, err);
        });
};
