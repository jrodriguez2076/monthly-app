import React, { Component} from  'react';
import { render } from 'react-dom';

class Add extends Component {
    render() {
        return (
            <div>
                <h3 className="brand-logo">Agregar Gasto</h3>
                    <form>
                        Hecha Por:
                        <input type="text" maxLength="20" name="name" />
                        Lugar:
                        <input type="text" maxLength="25" name="place" />
                        Fecha:
                        <input type="date" name="date" />
                        description:
                        <input type="text" maxLength="100" name="place" />
                        Presupuesto:
                        <input type="text" maxLength="100" name="place" />
                        Monto:
                        <input type="number" maxLength="100" name="place" />
                        Mes:
                        <input type="text" maxLength="100" name="place" />
                        Forma de Pago:
                        <input type="text" maxLength="100" name="place" />
                    </form>
            </div>
        )
}
}

export default Add;