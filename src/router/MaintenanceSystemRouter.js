import MaintenanceSystem from '../controllers/MaintenanceSystem.js'
import { verifyToken } from '../middleware/verifyToken.js'

export default (app) => {
    app.get('/maintenanceSystem', MaintenanceSystem.getMaintenanceSystem)
    app.get(
        '/maintenanceMachine/:uuid',
        verifyToken,
        MaintenanceSystem.getMaintenanceMachineBy
    )
    app.get(
        '/maintenanceMachine',
        verifyToken,
        MaintenanceSystem.getMaintenanceMachine
    )
    app.get(
        '/maintenanceCategory',
        verifyToken,
        MaintenanceSystem.getMaintenanceCategory
    )
    app.get(
        '/maintenanceMachineCom',
        verifyToken,
        MaintenanceSystem.getMaintenanceMachineCom
    )
    app.get(
        '/maintenanceMachineProcess',
        verifyToken,
        MaintenanceSystem.getMaintenanceMachineProcess
    )
    app.get('/pgMaintenance', MaintenanceSystem.pGMaintenance)
    app.get(
        '/maintenanceStock',
        verifyToken,
        MaintenanceSystem.getMaintenanceStock
    )
    app.post(
        '/maintenanceStock',
        verifyToken,
        MaintenanceSystem.insMaintenanceStock
    )
    app.post('/maintenanceMachine', MaintenanceSystem.insMaintenanceMachine)

    app.post(
        '/maintenanceSparepartBulk',
        MaintenanceSystem.insMaintenanceSparepartBulkFind
    )
    app.post(
        '/maintenanceSparepart',
        // verifyToken,
        MaintenanceSystem.insMaintenanceSparepart
    )
    app.post(
        '/maintenanceReport',
        verifyToken,
        MaintenanceSystem.insMaintenanceReport
    )
    app.post(
        '/maintenanceRequest',
        verifyToken,
        MaintenanceSystem.insMaintenanceRequest
    )
    app.post(
        '/maintenanceCategory',
        verifyToken,
        MaintenanceSystem.insMaintenanceCategory
    )
}
