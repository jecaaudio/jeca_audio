const infoEmpresa = {
    // ESTE ES EL NÚMERO CORRECTO
    whatsapp: "15025540333",
    
    equipos: [
        { 
            id: "elx200",
            categoria: "subs", // <--- Añade esto aquí
            nombre: "Electro-Voice ELX200-18SP", 
            descripcion: "Professional 18-inch powered subwoofer. High-impact sound for any event.",
            fotos: [
                "img/productos/audio/zlx200/zlx200.jpg",
                "img/productos/audio/zlx200/zlx200 1.jpg",
                "img/productos/audio/zlx200/zlx200 2.jpg",
                "img/productos/audio/zlx200/zle200 4.jpg",
                "img/productos/audio/zlx200/zlx200 3.jpg",
                "img/productos/audio/zlx200/zlx 2005.jpg",
            ]
        },
        { 
            id: "zlx12bt",
            categoria: "speakers", // <--- Añade esto aquí
            nombre: "Electro-Voice ZLX-12BT", 
            descripcion: "12-inch 1000W Bluetooth Powered Loudspeaker. Pro-grade audio quality.",
            fotos: [
                "img/productos/audio/zlx12bt/zlx12bt.jpg",
                "img/productos/audio/zlx12bt/zlx12bt2.jpg",
                "img/productos/audio/zlx12bt/zlx12bt1.jpg",
                "img/productos/audio/zlx12bt/zlx12bt3.jpg",
                "img/productos/audio/zlx12bt/zlx12bt4.jpg",
                "img/productos/audio/zlx12bt/zlx12btzlx12bt5.jpg",
        
            ]
        }
    ]
};

// Función para el movimiento automático de fotos
function iniciarSliders() {
    infoEmpresa.equipos.forEach(equipo => {
        let index = 0;
        const imgElement = document.getElementById(`img-${equipo.id}`);
        // Solo si hay más de una foto, empezamos a rotar
        if (imgElement && equipo.fotos.length > 1) {
            setInterval(() => {
                index = (index + 1) % equipo.fotos.length;
                imgElement.style.opacity = "0.5"; // Efecto rápido de cambio
                setTimeout(() => {
                    imgElement.src = equipo.fotos[index];
                    imgElement.style.opacity = "1";
                }, 300);
            }, 4000); // Cambia cada 4 segundos
        }
    });
}

function cargarEquipoRental(filtro = 'all') {
    const grid = document.getElementById('rental-grid');
    if (grid) {
        // Filtramos los equipos según la categoría seleccionada
        const equiposFiltrados = filtro === 'all' 
            ? infoEmpresa.equipos 
            : infoEmpresa.equipos.filter(e => e.categoria === filtro);

        grid.innerHTML = equiposFiltrados.map(item => `
            <div class="decision-card" onclick="verGaleria('${item.id}')" style="cursor:pointer; position:relative;">
                <img id="img-${item.id}" src="${item.fotos[0]}" alt="${item.nombre}" style="width:100%; border-radius:10px; margin-bottom:15px; border: 1px solid #333; height: 250px; object-fit: contain; transition: opacity 0.4s ease;">
                <div style="position:absolute; top:10px; right:10px; background:rgba(0,0,0,0.6); padding:5px; border-radius:5px; font-size:10px; color:white;">
                    📸 Click for Gallery
                </div>
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <a href="https://wa.me/${infoEmpresa.whatsapp}?text=Hello! I am interested in renting the ${encodeURIComponent(item.nombre)}" class="btn-outline" onclick="event.stopPropagation();" style="display:inline-block; margin-top:10px;">
                    Inquire Price
                </a>
            </div>
        `).join('');
        
        iniciarSliders();
    }
}

// Función para ver todas las imágenes (Galería)
function verGaleria(id) {
    const equipo = infoEmpresa.equipos.find(e => e.id === id);
    if (!equipo) return;

    // Crear el contenedor de la galería si no existe
    let modal = document.getElementById('modalGaleria');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modalGaleria';
        modal.className = 'modal-galeria';
        document.body.appendChild(modal);
    }

    // Llenar la galería con las fotos del producto
    modal.innerHTML = `
        <span class="close-galeria" onclick="document.getElementById('modalGaleria').style.display='none'">&times;</span>
        <div class="modal-content">
            ${equipo.fotos.map(foto => `<img src="${foto}" alt="Product image">`).join('')}
        </div>
    `;

    modal.style.display = "block";
}
