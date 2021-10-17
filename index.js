//Script para agregar efectos del scrollreveal a cada elemento de la pagina

window.sr = ScrollReveal();

    sr.reveal('.botones',{
        duration: 1500,
        origin: 'bottom',
        distance:'-100px'
    });

    sr.reveal('.brand-icon',{
        rotate: {
            x: 1,
            y:180
        }
    });

    sr.reveal('.imagen-content',{
        duration: 2500,
        origin: 'right',
        distance:'-100px'
    });

    sr.reveal('.intro',{
        duration: 1500,
        origin: 'right',
        distance:'-100px'
    });

    sr.reveal('.mi-yo',{
        duration: 1500,
        origin: 'right',
        distance:'-200px'
    });

    sr.reveal('.img-triangulo',{
        duration: 1500,
        origin: 'right',
        distance:'0px'
    });

    sr.reveal('.hab-head',{
        duration: 1500,
        origin: 'left',
        distance:'-100px'
    });

    sr.reveal('.cards',{
        duration: 1500,
        origin: 'top',
        distance:'-100px'
    });

    sr.reveal('.experiencia',{
        duration: 1500,
        origin: 'right',
        distance:'-100px'
    });

    sr.reveal('.contacto-container',{
        duration: 1500,
        origin: 'left',
        distance:'-100px'
    });

