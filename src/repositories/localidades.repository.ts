import {prisma} from "../index";
import {Request, Response} from "express";
import {BadRequestException} from "../errors/exeptions/bad-request.exception";

let lodash =  require("lodash")
async function getEstados(req: Request, res:Response) {
    try{
    const states = await prisma.localidades.findMany({
        select: {
            IdEstado: true,
            Estado: true,
        },
        distinct: ["IdEstado"],
        orderBy: {
            IdEstado: 'asc',
        },
    });
    res.status(200).json(states)

    }catch (e) {
        console.log(e)
        res.status(500).json(e);
    }
}
async function getEstadoPorId(req: Request, res: Response){
    try {
        const { id } = req.params;

        const state = await prisma.localidades.findFirst({
            where: { IdEstado: Number(id) },
            select: {IdEstado: true, Estado: true},
        });

        if (!state){
            res.status(404).json(new BadRequestException(`El id ${id} no pertenece a ningún estado`));
            return;
        }
        res.status(200).json(state);
    } catch (e) {
        res.status(500).json({ error: e});

    }
}
async function getMunicipiosPorEstadoId (req: Request, res: Response) {
    try {
        const { idEstado } = req.params;
        const municipios = await prisma.localidades.findMany({
            where: { IdEstado: Number(idEstado) },
            select: {IdEstado: true, Estado: true, IdMunicipio: true, Municipio: true},
            distinct: ["IdMunicipio"],
            orderBy: {
                IdMunicipio: 'asc',
            },

        });

        if (!municipios || municipios.length === 0){
            res.status(404).json(new BadRequestException(`El id ${idEstado} no pertenece a ningún estado`));
            return;
        }else{
            const responseData = {
                IdEstado: municipios[0].IdEstado,
                Estado: municipios[0].Estado,
                Municipios: municipios.map(m => ({
                    IdMunicipio: m.IdMunicipio,
                    Municipio: m.Municipio
                })),
            }
            res.status(200).json(responseData);
        }
    } catch (e) {
        res.status(500).json({ error: e});

    }
}
async function getLocalidadesPorMunicipioIdEstadoId (req: Request, res: Response) {
    try {
        const { idEstado } = req.params;
        const { idMunicipio } = req.params;

        const localidades = await prisma.localidades.findMany({
            where: { IdEstado: Number(idEstado) , IdMunicipio: Number(idMunicipio)},
            select: {
                IdEstado: true,
                Estado: true,
                IdMunicipio: true,
                Municipio: true,
                IdLocalidad: true,
                Localidad: true,
                CodigoPostal: true,
                IdTipoAsentamiento: true,
                TipoAsentamiento: true,
                Zona: true
            },
            orderBy: {
                IdLocalidad: 'asc',
            },

        });

        if (!localidades || localidades.length === 0){
            res.status(404).json(new BadRequestException(`El id ${idEstado} no pertenece a ningún estado`));
            return;
        }else {
            const responseData = {
                IdEstado: localidades[0].IdEstado,
                Estado: localidades[0].Estado,
                IdMunicipio: localidades[0].IdMunicipio,
                Municipio: localidades[0].Municipio,
                Localidad: localidades.map(l => ({
                    IdLocalidad: l.IdLocalidad,
                    Localidad: l.Localidad,
                    IdTipoAsentamiento: l.IdTipoAsentamiento,
                    Asentamiento: l.TipoAsentamiento,
                    Zona: l.Zona,
                    CodigoPostal: l.CodigoPostal,
                })),
            }
            res.status(200).json(responseData);

        }
    } catch (e) {
        res.status(500).json({ error: e});

    }
}
async function getLocalidadesPorCodigoPostal (req: Request, res: Response) {
    try {
        const { codigoPostal } = req.params;

        const localidades = await prisma.localidades.findMany({
            where: { CodigoPostal: Number(codigoPostal)},
            select: {
                IdEstado: true,
                Estado: true,
                IdMunicipio: true,
                Municipio: true,
                IdLocalidad: true,
                Localidad: true,
                CodigoPostal: true,
                IdTipoAsentamiento: true,
                TipoAsentamiento: true,
                Zona: true
            },
            orderBy: {
                IdLocalidad: 'asc',
            },

        });

        if (!localidades || localidades.length === 0 ){
            res.status(404).json(new BadRequestException(`No se encontraron localidades con el siguiente código postal ${codigoPostal}`));
            return;
        }
        else {
            const responseData = {
                IdEstado: localidades[0].IdEstado,
                Estado: localidades[0].Estado,
                IdMunicipio: localidades[0].IdMunicipio,
                Municipio: localidades[0].Municipio,
                CodigoPostal: localidades[0].CodigoPostal,
                Localidad: localidades.map(l => ({
                    IdLocalidad: l.IdLocalidad,
                    Localidad: l.Localidad,
                    IdTipoAsentamiento: l.IdTipoAsentamiento,
                    Asentamiento: l.TipoAsentamiento,
                    Zona: l.Zona
                })),
            }
        res.status(200).json(responseData);
        }
    } catch (e) {
        res.status(500).json({ error: e});

    }
}

export default {
    getEstados,
    getEstadoPorId,
    getMunicipiosPorEstadoId,
    getLocalidadesPorMunicipioIdEstadoId,
    getLocalidadesPorCodigoPostal
}
