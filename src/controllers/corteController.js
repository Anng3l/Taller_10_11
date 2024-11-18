import { v4 as uuidv4 } from "uuid"
import climaModel from "../models/climaModels.js"
import e from "express";

const getAllCorteController = async(req, res) => {
    const x = await climaModel.getAllCortes();

    res.status(200).json(x);
};

const getOneCorteController = async (req, res) => {
    const { postal } = req.params;

    try
    {
        const x = await climaModel.getOneCorte(postal);
        res.status(200).json(x);
    }
    catch (error)
    {
        res.status(500).json(error);
    }
};


async function createCorte(req, res) {
    const newRegistro = {
        id: uuidv4(),
        ...req.body
    };
    try {
        let x = await climaModel.createCorte(newRegistro);
        res.status(201).json(x);
    }
    catch (error)
    {
        res.status(500).json(error);
    }
};

const updateCorte = async (req, res) => {
    const { postal } = req.params;

    try
    {
        let x = await climaModel.updateCorte(postal, req.body);
        res.status(200).json(x);
    }
    catch (error)
    {
        res.status(500).json(error);
    }
};

const deleteCorte = async (req, res) => {
    const { postal } = req.params;

    try {
        let x = await climaModel.deleteCorte(postal);
        res.status(200).json(x);
    }
    catch (error)
    {
        res.status(500).json(error);
    }
};

export {
    getAllCorteController,
    getOneCorteController,
    createCorte,
    updateCorte,
    deleteCorte
}

