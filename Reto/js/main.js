// Selección de elementos
const menuButton = document.getElementById('menu-button');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const body = document.body;

// Datos de sistemas operativos
const appleInfo = {
    title: "Línea de Tiempo de Apple OS",
    description: "Aquí puedes colocar el contenido de la línea de tiempo para los sistemas operativos de Apple.",
    image: "https://via.placeholder.com/400x200?text=Apple+OS"
};

const windowsInfo = {
    title: "Línea de Tiempo de Windows OS",
    description: "Aquí puedes colocar el contenido de la línea de tiempo para los sistemas operativos de Windows.",
    image: "https://via.placeholder.com/400x200?text=Windows+OS"
};

// Maneja la apertura y cierre del sidebar
menuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el clic se propague al documento
    body.classList.toggle('sidebar-open');
});

// Cierra el sidebar si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (body.classList.contains('sidebar-open') && !sidebarOverlay.contains(event.target) && !menuButton.contains(event.target)) {
        body.classList.remove('sidebar-open');
    }
});

// Rellenar la información de Apple OS en la página
document.getElementById('apple-title').textContent = appleInfo.title;
document.getElementById('apple-description').textContent = appleInfo.description;
document.getElementById('apple-image').src = appleInfo.image;

// Rellenar la información de Windows OS en la página
document.getElementById('windows-title').textContent = windowsInfo.title;
document.getElementById('windows-description').textContent = windowsInfo.description;
document.getElementById('windows-image').src = windowsInfo.image;

// Código adicional que podrías necesitar...

// Ejemplo de función para cargar la tabla al hacer clic en Mac
function loadMacTimeline() {
    const macTimeline = `
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th class="px-4 py-2">Año</th>
                    <th class="px-4 py-2">Versión</th>
                    <th class="px-4 py-2">Nombre</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border px-4 py-2">1984</td>
                    <td class="border px-4 py-2">1.0</td>
                    <td class="border px-4 py-2">System 1</td>
                </tr>
                <!-- Más filas aquí... -->
            </tbody>
        </table>
    `;
    document.getElementById('apple-timeline').innerHTML = macTimeline;
}

// Evento para cargar la tabla al hacer clic en el enlace de Mac
document.querySelector('a[href="#apple-timeline"]').addEventListener('click', loadMacTimeline);
