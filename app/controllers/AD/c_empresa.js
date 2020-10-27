const db = require("../../config/db.config");
const Empresa = db.Empresa;

exports.create = (req, res) => {
    Empresa.create(req.body)
        .then((Response) => {
            res.status(200).json(Response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};



exports.findAll = (req, res) => {
    Empresa.findAndCountAll({
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
    Empresa.findByPk(req.params.Id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};


exports.update = (req, res) => {
    Empresa.update(req.body, { where: { id: req.params.Id } })
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.deleteEmpresa = (req, res) => {
    const id = req.params.Id;
    Empresa.destroy({
        where: { id: id },
    })
        .then((response) => {
            handle.respuestaDelete(res, response);
        })
        .catch((err) => {
            handle.ErrorDelete(res, err);
        });
};
