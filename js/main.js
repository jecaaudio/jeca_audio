const infoEmpresa = {
    equipos: [
        { nombre: "Electro-Voice ZLX-12BT", cantidad: 4 },
        { nombre: "Electro-Voice ELX200", cantidad: 2 },
        { nombre: "Pioneer DDJ-FLX4", cantidad: 1 },
        { nombre: "Moving Head Lights", cantidad: 2 }
    ]
};

function cargarEquipo() {
    const lista = document.getElementById('equipo-lista');
    if(lista) {
        lista.innerHTML = infoEmpresa.equipos.map(item => `
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #222;">
                <span>${item.nombre}</span>
                <span style="color: var(--primary); font-weight: bold;">x${item.cantidad}</span>
            </div>
        `).join('');
    }
}

window.onload = cargarEquipo;
