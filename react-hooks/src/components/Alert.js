import React, { useContext } from "react";
import { AlertContext } from '../context/alertContext'

export const Alert = ({ alert }) => {
    const { alert, hide } = useContext(AlertContext)

    if (!alert) return null
    return (
        <div className={`alert alert-${alert.type || 'secondary'}alert-dismissible`}
            role="alert"
        >
            {alert.useContext}
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}