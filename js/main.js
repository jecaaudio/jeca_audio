const infoEmpresa = {
    // ESTE ES EL NÚMERO CORRECTO
    whatsapp: "15025540333",
    
    equipos: [
    // --- SONIDO / SOUND ---
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
                "img/productos/audio/zlx12bt/zlx12btzlx12bt5.jpg"
    },
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
                "img/productos/audio/zlx200/zlx 2005.jpg"
    },
    {
        id: "ui24r",
        categoria: "consoles", // Categoría general de audio/consolas
        nombre: "Soundcraft UI24R",
        descripcion: "Consola digital de 24 canales con control inalámbrico y grabación multipista profesional.",
        fotos: [
               "img/productos/audio/ui24r/ui24r.jpg",
               "img/productos/audio/ui24r/ui24r1.jpg",
               "img/productos/audio/ui24r/ui24r2.jpg",
               "img/productos/audio/ui24r/ui24r3.jpg",
               "img/productos/audio/ui24r/ui24r4.jpg"
    },
    {
        id: "x32",
        categoria: "consoles",
        nombre: "Behringer X32",
        descripcion: "Consola digital líder en la industria. Calidad de estudio para sonido en vivo y eventos grandes.",
        fotos: ["img/productos/audio/X32/1.jpg"]
    },
    {
        id: "flx4",
        categoria: "consoles",
        nombre: "Pioneer DDJ-FLX4",
        descripcion: "Controladora DJ versátil. Ideal para sets dinámicos y compatibilidad con múltiples softwares.",
        fotos: ["img/productos/audio/FLX4/1.jpg"]
    },

    // --- MICRÓFONOS Y MONITOREO ---
    {
        id: "ptau2",
        categoria: "mics",
        nombre: "Phenyx Pro PTAU-2 (2 mics)",
        descripcion: "Sistema de micrófonos inalámbricos duales de alta fidelidad y largo alcance.",
        fotos: ["img/productos/mics/PTAU2/1.jpg"]
    },
    {
        id: "ptm33",
        categoria: "mics",
        nombre: "Phenyx Pro PTM-33 (1T/4R)",
        descripcion: "Sistema de monitoreo personal in-ear con 4 receptores para toda la banda o equipo.",
        fotos: ["img/productos/mics/PTM33/1.jpg"]
    },

    // --- ILUMINACIÓN / LIGHTING ---
    {
        id: "spot150",
        categoria: "lighting",
        nombre: "Moving head SPOT 150W",
        descripcion: "Cabeza móvil tipo Spot potente para efectos visuales definidos y dinámicos.",
        fotos: ["img/productos/lighting/SPOT150/1.jpg"]
    },
    {
        id: "spider8",
        categoria: "lighting",
        nombre: "Barra LED Spider RGBW (8 ojos)",
        descripcion: "Efecto spider de doble movimiento con rayos LED multicolor muy brillantes.",
        fotos: ["img/productos/lighting/SPIDER8/1.jpg"]
    },
    {
        id: "rockstrip",
        categoria: "lighting",
        nombre: "Rockville ROCKSTRIP 252 RGB",
        descripcion: "Barra LED para lavado de pared o efectos de persecución rítmica.",
        fotos: ["img/productos/lighting/ROCKSTRIP/1.jpg"]
    },

    // --- EFECTOS ESPECIALES ---
    {
        id: "fog1500",
        categoria: "lighting", // Los efectos suelen ir con iluminación
        nombre: "Máquina de humo FOG MACHINE-1500",
        descripcion: "Máquina de humo de alta salida para resaltar los rayos de luz y láseres.",
        fotos: ["img/productos/effects/FOG1500/1.jpg"]
    },
    {
        id: "chispas700",
        categoria: "effects",
        nombre: "Máquina de chispas 700W",
        descripcion: "Efecto de chispas frías (Sparkular) seguro para interiores. Ideal para bodas y entradas.",
        fotos: ["img/productos/effects/SPARK700/1.jpg"]
    },

    // --- ESTRUCTURA / STRUCTURE ---
    {
        id: "truss8x8",
        categoria: "structure", 
        nombre: "Truss aluminio completo 8x8",
        descripcion: "Estructura profesional de aluminio para colgar iluminación y sonido de forma segura.",
        fotos: ["img/productos/structure/TRUSS8X8/1.jpg"]
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
    if (!grid) return;

    // Filtramos los equipos según la categoría
    const equiposFiltrados = filtro === 'all' 
        ? infoEmpresa.equipos 
        : infoEmpresa.equipos.filter(e => e.categoria === filtro);

    grid.innerHTML = equiposFiltrados.map(item => `
        <div class="decision-card" onclick="verGaleria('${item.id}')" style="cursor:pointer; display: flex; flex-direction: column; background: #111; border: 1px solid #333; border-radius: 15px; padding: 20px;">
            
            <div style="width: 100%; height: 250px; background: #000; border-radius: 10px; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 15px; position: relative;">
                <img id="img-${item.id}" src="${item.fotos[0]}" alt="${item.nombre}" 
                     style="max-width: 100%; max-height: 100%; object-fit: contain;">
                
                <div style="position:absolute; top:10px; right:10px; background:rgba(255,204,0,0.9); padding:4px 8px; border-radius:5px; font-size:10px; color:black; font-weight:bold;">
                    📸 Ver Fotos
                </div>
            </div>

            <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                <h3 style="color: #fff; margin: 10px 0;">${item.nombre}</h3>
                <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 15px;">${item.descripcion}</p>
                
                <a href="https://wa.me/${infoEmpresa.whatsapp}?text=Hola! Me interesa rentar: ${encodeURIComponent(item.nombre)}" 
                   class="btn-outline" 
                   onclick="event.stopPropagation();" 
                   style="display: block; text-align: center; padding: 10px; border: 1px solid #ffcc00; color: #ffcc00; border-radius: 25px; text-decoration: none;">
                    Inquire Price
                </a>
            </div>
        </div>
    `).join('');

    iniciarSliders();
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
// Función para filtrar los productos por categoría
function filtrarEquipos(cat) {
    // 1. Buscamos todos los botones y les quitamos la clase 'active'
    const botones = document.querySelectorAll('.filter-btn');
    botones.forEach(btn => btn.classList.remove('active'));

    // 2. Le ponemos la clase 'active' al botón que tocamos
    // Usamos event.currentTarget para estar seguros de capturar el botón
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // 3. Volvemos a cargar el inventario pero pasando la categoría elegida
    cargarEquipoRental(cat);
}
