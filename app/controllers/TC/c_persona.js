const db = require("../../config/db.config");
const Persona = db.Persona;

exports.create = (req, res) => {
    Persona.create(req.body)
        .then((Response) => {
            res.status(200).json(Response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};



exports.findAll = (req, res) => {
    Persona.findAndCountAll({
        where: {
            ADEmpresaId: req.userData.ADEmpresaId,
        },

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
    Persona.findByPk(req.params.Id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.update = (req, res) => {
    Persona.update(req.body, { where: { id: req.params.Id } })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.deletePersona = (req, res) => {
    const id = req.params.Id;
    Persona.destroy({
        where: { id: id },
    })
        .then((response) => {
            handle.respuestaDelete(res, response);
        })
        .catch((err) => {
            handle.ErrorDelete(res, err);
        });
};
