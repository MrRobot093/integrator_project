
console.warn('🆗: Módulo PageNosotros cargado.');

class PageNosotros {

    static async init () {
        console.log('PageNosotros.init()');
        const accordionTitles = document.querySelectorAll('.accordion-title');
        accordionTitles.forEach((title) => {
            title.addEventListener('click', (ev) => {
                ev.target.classList.toggle('accordion-title--open');
                const accordionContent = ev.target.nextElementSibling;
                accordionContent.classList.toggle('accordion-content--open');
            });
        });
    }
}

export default PageNosotros;
