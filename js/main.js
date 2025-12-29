const infoEmpresa = {
    whatsapp: "15025540333",
    
    equipos: [
        {
            id: "zlx12bt",
            categoria: "speakers",
            nombre: "Electro-Voice ZLX-12BT", 
            descripcion: "12-inch 1000W Bluetooth Powered Loudspeaker. Pro-grade audio quality.",
            fotos: [
                "img/productos/audio/zlx12bt/zlx12bt.jpg",
                "img/productos/audio/zlx12bt/zlx12bt2.jpg",
                "img/productos/audio/zlx12bt/zlx12bt1.jpg",
                "img/productos/audio/zlx12bt/zlx12bt3.jpg",
                "img/productos/audio/zlx12bt/zlx12bt4.jpg",
                "img/productos/audio/zlx12bt/zlx12btzlx12bt5.jpg"
            ] // <-- Corregido: faltaba cerrar el corchete
        },
        {
            id: "elx200",
            categoria: "subs",
            nombre: "Electro-Voice ELX200-18SP", 
            descripcion: "Professional 18-inch powered subwoofer. High-impact sound for any event.",
            fotos: [
                "img/productos/audio/zlx200/zlx200.jpg",
                "img/productos/audio/zlx200/zlx200 1.jpg",
                "img/productos/audio/zlx200/zlx200 2.jpg",
                "img/productos/audio/zlx200/zle200 4.jpg",
                "img/productos/audio/zlx200/zlx200 3.jpg",
                "img/productos/audio/zlx200/zlx 2005.jpg"
            ] // <-- Corregido: faltaba cerrar el corchete
        },
        {
            id: "ui24r",
            categoria: "consoles",
            nombre: "Soundcraft UI24R",
            descripcion: "Consola digital de 24 canales con control inalámbrico y grabación multipista profesional.",
            fotos: [
                "img/productos/audio/ui24r/ui24r.jpg",
                "img/productos/audio/ui24r/ui24r1.jpg",
                "img/productos/audio/ui24r/ui24r2.jpg",
                "img/productos/audio/ui24r/ui24r3.jpg",
                "img/productos/audio/ui24r/ui24r4.jpg"
            ] // <-- Corregido: faltaba cerrar el corchete
        },
        {
            id: "x32",
            categoria: "consoles",
            nombre: "Behringer X32",
            descripcion: "Consola digital líder en la industria. Calidad de estudio para sonido en vivo y eventos grandes.",
            fotos: ["img/productos/audio/x32/x32 1.webp"
                    "img/productos/audio/x32/x32 2.webp"
                    "img/productos/audio/x32/x32 3.webp"
                    "img/productos/audio/x32/x32 4.webp"
                    "img/productos/audio/x32/x32 5.webp"
                    "img/productos/audio/x32/x32.webp"]
        },
        {
            id: "flx4",
            categoria: "consoles",
            nombre: "Pioneer DDJ-FLX4",
            descripcion: "Controladora DJ versátil. Ideal para sets dinámicos y compatibilidad con múltiples softwares.",
            fotos: ["img/productos/audio/FLX4/1.jpg"]
        },
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
        {
            id: "fog1500",
            categoria: "effects", // Cambiado de lighting a effects para que funcione el filtro
            nombre: "Máquina de humo FOG MACHINE-1500",
            descripcion: "Máquina de humo de alta salida para resaltar los rayos de luz y láseres.",
            fotos: ["img/productos/effects/FOG1500/1.jpg"]
        },
        {
            id: "chispas700",
            categoria: "effects",
            nombre: "Máquina de chispas 700W",
            descripcion: "Efecto de ch
