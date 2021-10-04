import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('ticket.db');

export const init = () => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS ticket (
                    id INTEGER PRIMARY KEY NOT NULL,
                    email TEXT NOT NULL,
                    event INTEGER NOT NULL,
                    quantity INTEGER NOT NULL
                )`)
            },
            [],
            ()=>resolve(),
            (_,err)=> reject(err),
            )
    })

    return promise;
}

export const insertTicket = (
    email,
    event,
    quantity
)=> {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx)=>{
                tx.executeSql(
                    `INSERT INTO ticket (email,event, quantity) VALUES (?,?,?)`,
                    [email,event,quantity],
                    (_,result) => resolve(result),
                    (_,error) => reject(error)
                )
        })
    })
}

export const selectTicket = (
    email
)=> {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx)=>{
                tx.executeSql(
                    `SELECT * FROM ticket WHERE email = ?`,
                    [email],
                    (_,result) => resolve(result),
                    (_,error) => reject(error)
                )
        })
    })
}

export const deleteTicket = (
    id
)=> {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx)=>{
                tx.executeSql(
                    `DELETE FROM ticket WHERE id = ?`,
                    [id],
                    (_,result) => resolve(result),
                    (_,error) => reject(error)
                )
        })
    })
}

export const deleteTicketsEmail = (
    email
)=> {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx)=>{
                tx.executeSql(
                    `DELETE FROM ticket WHERE email = ?`,
                    [email],
                    (_,result) => resolve(result),
                    (_,error) => reject(error)
                )
        })
    })
}