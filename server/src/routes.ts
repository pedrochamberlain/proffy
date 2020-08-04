import express from 'express'

import db from './database/connection'
import convertHourToMinutes from './utils/convertHourToMinutes'

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criaçõa ou atualização de um registro
// Route Parameters: Identificar qual recurso eu quero atualizar ou deletar (Ex.: '/users/:id')
// Query Parameters: Páginação, filtros, ordenação (Ex.: users?page=2&sort=name)

const routes = express.Router()

routes.post('/classes', async (req, res) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = req.body


    const trx = await db.transaction()

    try {
        
        const insertedUsersIds = await trx('users').insert({
            name, avatar, whatsapp, bio
        })

        const user_id = insertedUsersIds[0]

        const insertedClassesIds = await trx('classes').insert({
            subject, cost, user_id
        })

        const class_id = insertedClassesIds[0]

        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to),
            }
        })

        await trx('class_schedule').insert(classSchedule)

        await trx.commit()

        return res.status(201).send()

    } catch(err) {
        await trx.rollback()

        return res.status(400).json({
            error: 'Unexpected error while creating new class'
        })
    }    
})



export default routes