import express, {Router} from "express";
import localidadesRepository from "../repositories/localidades.repository";

const router:Router = express.Router();

router.get('/estados', localidadesRepository.getEstados)
router.get('/estado/:id', localidadesRepository.getEstadoPorId)
router.get('/municipios/:idEstado', localidadesRepository.getMunicipiosPorEstadoId)
router.get('/localidades/:codigoPostal', localidadesRepository.getLocalidadesPorCodigoPostal)
router.get('/localidades/:idMunicipio/:idEstado', localidadesRepository.getLocalidadesPorMunicipioIdEstadoId)

export default router