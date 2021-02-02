import { User } from "./user";

export class ActivityLog {
	idLog: number;
	idWorkUnit: number;
    user: User;
	actividad: number;
	idTipoActividad: number;
    idAreaEjecutora: number;
    fecha: Date;
    tipoCambio: number;
    oldValue: number;
    newValue: number;
    descripcion: string;
}
