// Casa de Playa 2026 - Calendario Real

const family = {
    pedro: { name: 'Pedro', color: '#3b82f6' },
    carmina: { name: 'Carmiña', color: '#eab308' },
    miguel: { name: 'Miguel', color: '#22c55e' },
    rocio: { name: 'Rocío', color: '#ec4899' }
};

const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const dayLabels = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'];

// Días festivos oficiales y puentes 2026 (solo fechas de vacación real)
const holidays = {
    // Año Nuevo
    '0-1': '🎆 Año Nuevo',

    // Vacaciones de invierno (hasta 9 de enero)
    '0-2': '📚 Vacaciones de Invierno',
    '0-3': '📚 Vacaciones de Invierno',
    '0-4': '📚 Vacaciones de Invierno',
    '0-5': '📚 Vacaciones de Invierno',
    '0-6': '📚 Vacaciones de Invierno',
    '0-7': '📚 Vacaciones de Invierno',
    '0-8': '📚 Vacaciones de Invierno',
    '0-9': '📚 Vacaciones de Invierno',

    // CTE (Consejo Técnico Escolar) - sin clases
    '0-30': '📋 CTE (Sin clases)',

    // Febrero - Día de la Constitución (observado el 2, histórico el 5)
    '1-2': '📜 Día de la Constitución',
    '1-27': '📋 CTE (Sin clases)',

    // Marzo - Benito Juárez (observado el 16, histórico el 21)
    '2-16': '🎂 Natalicio de Benito Juárez',
    '2-27': '📋 CTE (Sin clases)',

    // Vacaciones de Semana Santa (30 mar - 10 abr)
    '2-30': '📚 Vacaciones Semana Santa',
    '2-31': '📚 Vacaciones Semana Santa',
    '3-1': '📚 Vacaciones Semana Santa',
    '3-2': '✝️ Jueves Santo',
    '3-3': '✝️ Viernes Santo',
    '3-4': '✝️ Sábado de Gloria',
    '3-5': '🐣 Domingo de Pascua',
    '3-6': '📚 Semana Pascua',
    '3-7': '📚 Vacaciones Semana Pascua',
    '3-8': '📚 Vacaciones Semana Pascua',
    '3-9': '📚 Vacaciones Semana Pascua',
    '3-10': '📚 Vacaciones Semana Pascua',

    // Mayo
    '4-1': '👷 Día del Trabajo',
    '4-10': '💐 Día de las Madres',
    '4-15': '👨‍🏫 Día del Maestro',
    '4-29': '📋 CTE (Sin clases)',

    // Junio
    '5-26': '📋 CTE (Sin clases)',

    // Julio - Fin de ciclo escolar (15 julio)
    '6-15': '🎉 Fin de Clases',
    '6-16': '☀️ Vacaciones de Verano',
    '6-17': '☀️ Vacaciones de Verano',
    '6-18': '☀️ Vacaciones de Verano',
    '6-19': '☀️ Vacaciones de Verano',
    '6-20': '☀️ Vacaciones de Verano',
    '6-21': '☀️ Vacaciones de Verano',
    '6-22': '☀️ Vacaciones de Verano',
    '6-23': '☀️ Vacaciones de Verano',
    '6-24': '☀️ Vacaciones de Verano',
    '6-25': '☀️ Vacaciones de Verano',
    '6-26': '☀️ Vacaciones de Verano',
    '6-27': '☀️ Vacaciones de Verano',
    '6-28': '☀️ Vacaciones de Verano',
    '6-29': '☀️ Vacaciones de Verano',
    '6-30': '☀️ Vacaciones de Verano',
    '6-31': '☀️ Vacaciones de Verano',

    // Agosto - Vacaciones de verano continúan
    '7-1': '☀️ Vacaciones de Verano',
    '7-2': '☀️ Vacaciones de Verano',
    '7-3': '☀️ Vacaciones de Verano',
    '7-4': '☀️ Vacaciones de Verano',
    '7-5': '☀️ Vacaciones de Verano',
    '7-6': '☀️ Vacaciones de Verano',
    '7-7': '☀️ Vacaciones de Verano',
    '7-8': '☀️ Vacaciones de Verano',
    '7-9': '☀️ Vacaciones de Verano',
    '7-10': '☀️ Vacaciones de Verano',
    '7-11': '☀️ Vacaciones de Verano',
    '7-12': '☀️ Vacaciones de Verano',
    '7-13': '☀️ Vacaciones de Verano',
    '7-14': '☀️ Vacaciones de Verano',
    '7-15': '☀️ Vacaciones de Verano',
    '7-16': '☀️ Vacaciones de Verano',
    '7-17': '☀️ Vacaciones de Verano',
    '7-18': '☀️ Vacaciones de Verano',
    '7-19': '☀️ Vacaciones de Verano',
    '7-20': '☀️ Vacaciones de Verano',
    '7-21': '☀️ Vacaciones de Verano',
    '7-22': '☀️ Vacaciones de Verano',
    '7-23': '☀️ Vacaciones de Verano',
    '7-24': '☀️ Vacaciones de Verano',
    '7-25': '☀️ Vacaciones de Verano',
    '7-26': '☀️ Vacaciones de Verano',
    '7-27': '☀️ Vacaciones de Verano',
    '7-28': '☀️ Vacaciones de Verano',

    // Septiembre - Día de la Independencia (siempre el 16)
    '8-16': '🇲🇽 Día de la Independencia',

    // Octubre - Día de la Raza (observado el 12)
    '9-12': '🌎 Día de la Raza',

    // Noviembre - Revolución Mexicana (observado el 16, histórico el 20)
    '10-2': '💀 Día de Muertos',
    '10-16': '⚔️ Revolución Mexicana',

    // Diciembre
    '11-12': '🙏 Día de la Virgen',
    '11-25': '🎄 Navidad',
    '11-31': '🎆 Nochevieja'
};

// Real 2026 schedule as provided
const schedule = [
    // Enero (first week unassigned)
    { start: [2026, 0, 7], end: [2026, 0, 13], person: 'pedro' },
    { start: [2026, 0, 14], end: [2026, 0, 20], person: 'rocio' },
    { start: [2026, 0, 21], end: [2026, 0, 27], person: 'pedro' },
    { start: [2026, 0, 28], end: [2026, 1, 3], person: 'carmina', note: 'Incluye Puente 5 Feb' },

    // Febrero
    { start: [2026, 1, 4], end: [2026, 1, 10], person: 'miguel' },
    { start: [2026, 1, 11], end: [2026, 1, 17], person: 'rocio' },
    { start: [2026, 1, 18], end: [2026, 1, 24], person: 'pedro' },
    { start: [2026, 1, 25], end: [2026, 2, 3], person: 'carmina' },

    // Marzo
    { start: [2026, 2, 4], end: [2026, 2, 10], person: 'rocio' },
    { start: [2026, 2, 11], end: [2026, 2, 17], person: 'miguel' },
    { start: [2026, 2, 18], end: [2026, 2, 24], person: 'pedro' },
    { start: [2026, 2, 25], end: [2026, 2, 31], person: 'rocio' },

    // Abril
    { start: [2026, 2, 30], end: [2026, 3, 5], person: 'carmina', note: 'Semana Santa' },
    { start: [2026, 3, 6], end: [2026, 3, 12], person: 'pedro', note: 'Semana Pascua' },
    { start: [2026, 3, 13], end: [2026, 3, 13], person: 'pedro' },
    { start: [2026, 3, 14], end: [2026, 3, 14], person: 'carmina' },
    { start: [2026, 3, 15], end: [2026, 3, 21], person: 'carmina' },
    { start: [2026, 3, 22], end: [2026, 3, 28], person: 'miguel' },
    { start: [2026, 3, 29], end: [2026, 4, 5], person: 'rocio', note: 'Incluye Puente 1 May' },

    // Mayo
    { start: [2026, 4, 6], end: [2026, 4, 12], person: 'pedro' },
    { start: [2026, 4, 13], end: [2026, 4, 19], person: 'carmina' },
    { start: [2026, 4, 20], end: [2026, 4, 26], person: 'miguel' },
    { start: [2026, 4, 27], end: [2026, 5, 2], person: 'rocio' },

    // Junio
    { start: [2026, 5, 3], end: [2026, 5, 9], person: 'pedro' },
    { start: [2026, 5, 10], end: [2026, 5, 16], person: 'carmina' },
    { start: [2026, 5, 17], end: [2026, 5, 23], person: 'miguel' },
    { start: [2026, 5, 24], end: [2026, 5, 30], person: 'rocio' },

    // Julio
    { start: [2026, 6, 1], end: [2026, 6, 7], person: 'pedro' },
    { start: [2026, 6, 8], end: [2026, 6, 14], person: 'carmina' },
    { start: [2026, 6, 15], end: [2026, 6, 21], person: 'miguel' },
    { start: [2026, 6, 22], end: [2026, 6, 28], person: 'rocio' },
    { start: [2026, 6, 29], end: [2026, 7, 4], person: 'pedro' },

    // Agosto
    { start: [2026, 7, 5], end: [2026, 7, 11], person: 'carmina' },
    { start: [2026, 7, 12], end: [2026, 7, 18], person: 'miguel' },
    { start: [2026, 7, 19], end: [2026, 7, 25], person: 'rocio' },
    { start: [2026, 7, 26], end: [2026, 8, 1], person: 'pedro' },

    // Septiembre
    { start: [2026, 8, 2], end: [2026, 8, 8], person: 'carmina' },
    { start: [2026, 8, 9], end: [2026, 8, 15], person: 'miguel' },
    { start: [2026, 8, 16], end: [2026, 8, 22], person: 'pedro', note: 'Incluye Puente 16 Sep' },
    { start: [2026, 8, 23], end: [2026, 8, 29], person: 'carmina' },

    // Octubre
    { start: [2026, 8, 30], end: [2026, 9, 6], person: 'miguel' },
    { start: [2026, 9, 7], end: [2026, 9, 13], person: 'carmina', note: 'Incluye Puente 12 Oct' },
    { start: [2026, 9, 14], end: [2026, 9, 20], person: 'rocio' },
    { start: [2026, 9, 21], end: [2026, 9, 27], person: 'pedro' },
    { start: [2026, 9, 28], end: [2026, 10, 3], person: 'carmina' },

    // Noviembre
    { start: [2026, 10, 4], end: [2026, 10, 10], person: 'miguel' },
    { start: [2026, 10, 11], end: [2026, 10, 17], person: 'rocio' },
    { start: [2026, 10, 18], end: [2026, 10, 24], person: 'miguel', note: 'Incluye Puente 20 Nov' },
    { start: [2026, 10, 25], end: [2026, 11, 1], person: 'pedro' },

    // Diciembre
    { start: [2026, 11, 2], end: [2026, 11, 8], person: 'carmina' },
    { start: [2026, 11, 9], end: [2026, 11, 15], person: 'miguel' },
    { start: [2026, 11, 16], end: [2026, 11, 20], person: 'rocio' },
    { start: [2026, 11, 21], end: [2026, 11, 27], person: 'rocio', note: 'Navidad 🎄' },
    { start: [2026, 11, 28], end: [2027, 0, 3], person: 'miguel', note: 'Fin de Año 🎆' }
];

// Convert schedule to date lookup
function buildDateAssignments() {
    const assignments = {};

    schedule.forEach((entry, idx) => {
        const startDate = new Date(entry.start[0], entry.start[1], entry.start[2]);
        const endDate = new Date(entry.end[0], entry.end[1], entry.end[2]);

        let current = new Date(startDate);
        while (current <= endDate) {
            const key = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`;
            assignments[key] = {
                person: entry.person,
                note: entry.note || null,
                weekStart: new Date(startDate),
                weekEnd: new Date(endDate),
                weekIndex: idx
            };
            current.setDate(current.getDate() + 1);
        }
    });

    return assignments;
}

// Build calendar
function buildCalendar() {
    const grid = document.getElementById('calendarGrid');
    const assignments = buildDateAssignments();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    grid.innerHTML = '';

    for (let month = 0; month < 12; month++) {
        const card = document.createElement('div');
        card.className = 'month-card';

        const header = document.createElement('div');
        header.className = 'month-name';
        header.textContent = monthNames[month];
        card.appendChild(header);

        const daysHeader = document.createElement('div');
        daysHeader.className = 'days-header';
        dayLabels.forEach(d => {
            const label = document.createElement('div');
            label.className = 'day-label';
            label.textContent = d;
            daysHeader.appendChild(label);
        });
        card.appendChild(daysHeader);

        const daysGrid = document.createElement('div');
        daysGrid.className = 'days-grid';

        const firstDay = new Date(2026, month, 1);
        const lastDay = new Date(2026, month + 1, 0);
        const startDayOfWeek = firstDay.getDay();

        for (let i = 0; i < startDayOfWeek; i++) {
            const empty = document.createElement('div');
            empty.className = 'day-cell empty';
            daysGrid.appendChild(empty);
        }

        for (let day = 1; day <= lastDay.getDate(); day++) {
            const date = new Date(2026, month, day);
            const key = `2026-${month}-${day}`;
            const assignment = assignments[key];

            const cell = document.createElement('div');
            cell.className = 'day-cell';

            // Check if this is a holiday
            const holidayKey = `${month}-${day}`;
            const holiday = holidays[holidayKey];

            if (holiday) {
                cell.innerHTML = `${day}<span class="holiday-star">⭐</span>`;
                cell.dataset.holiday = holiday;
                cell.classList.add('has-holiday');
            } else {
                cell.textContent = day;
            }

            if (assignment) {
                cell.classList.add(assignment.person);
                cell.dataset.weekIndex = assignment.weekIndex;
                cell.dataset.person = assignment.person;

                if (date.getTime() === today.getTime()) {
                    cell.classList.add('current');
                }
            }

            daysGrid.appendChild(cell);
        }

        card.appendChild(daysGrid);
        grid.appendChild(card);
    }

    return assignments;
}

// Tooltip
function setupTooltip() {
    const tooltip = document.getElementById('tooltip');
    let currentEntry = null;

    document.querySelectorAll('.day-cell:not(.empty)').forEach(cell => {
        cell.addEventListener('mouseenter', (e) => {
            const weekIdx = cell.dataset.weekIndex;
            if (weekIdx === undefined) return;

            currentEntry = schedule[parseInt(weekIdx)];
            const member = family[currentEntry.person];

            tooltip.querySelector('.tooltip-header').textContent = `Semana de ${member.name}`;
            tooltip.querySelector('.tooltip-header').style.color = member.color;

            const startDate = new Date(currentEntry.start[0], currentEntry.start[1], currentEntry.start[2]);
            const endDate = new Date(currentEntry.end[0], currentEntry.end[1], currentEntry.end[2]);
            tooltip.querySelector('.tooltip-dates').textContent = `${formatDate(startDate)} – ${formatDate(endDate)}`;

            // Show holiday info if present, otherwise show week note
            const holidayInfo = cell.dataset.holiday;
            const noteText = holidayInfo
                ? (currentEntry.note ? `${holidayInfo} • ${currentEntry.note}` : holidayInfo)
                : (currentEntry.note || '');
            tooltip.querySelector('.tooltip-note').textContent = noteText;

            const rect = cell.getBoundingClientRect();
            let left = rect.right + 8;
            let top = rect.top;

            if (left + 200 > window.innerWidth) left = rect.left - 200;
            if (top + 120 > window.innerHeight) top = window.innerHeight - 130;

            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            tooltip.classList.add('active');
        });

        cell.addEventListener('mouseleave', (e) => {
            if (!e.relatedTarget?.closest('.tooltip')) {
                tooltip.classList.remove('active');
            }
        });
    });

    tooltip.addEventListener('mouseleave', () => tooltip.classList.remove('active'));

    document.getElementById('addCalBtn').addEventListener('click', () => {
        if (currentEntry) {
            tooltip.classList.remove('active');
            openModal(currentEntry);
        }
    });
}

function formatDate(date) {
    return `${date.getDate()} ${monthNames[date.getMonth()].slice(0, 3)}`;
}

// Filter
function setupFilters() {
    document.querySelectorAll('.legend-item').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.legend-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            document.querySelectorAll('.day-cell:not(.empty)').forEach(cell => {
                if (filter === 'all' || cell.dataset.person === filter) {
                    cell.classList.remove('dimmed');
                } else {
                    cell.classList.add('dimmed');
                }
            });

            // Update stats display
            updateStatsDisplay(filter);
        });
    });
}

// Modal
function openModal(entry) {
    const modal = document.getElementById('modal');
    const member = family[entry.person];
    const startDate = new Date(entry.start[0], entry.start[1], entry.start[2]);
    const endDate = new Date(entry.end[0], entry.end[1], entry.end[2]);

    document.getElementById('modalInfo').textContent =
        `${formatDate(startDate)} – ${formatDate(endDate)} (${member.name})`;

    const startISO = formatISO(startDate);
    const endNext = new Date(endDate);
    endNext.setDate(endNext.getDate() + 1);
    const endISO = formatISO(endNext);

    const title = encodeURIComponent(`🏖️ El Tucán - Semana de ${member.name}`);
    const details = encodeURIComponent(entry.note || '');

    document.getElementById('googleLink').href =
        `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startISO}/${endISO}&details=${details}`;

    document.getElementById('outlookLink').href =
        `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${startDate.toISOString()}&enddt=${endNext.toISOString()}&body=${details}&allday=true`;

    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART;VALUE=DATE:${startISO}\nDTEND;VALUE=DATE:${endISO}\nSUMMARY:🏖️ El Tucán - Semana de ${member.name}\nDESCRIPTION:${entry.note || ''}\nEND:VEVENT\nEND:VCALENDAR`;
    document.getElementById('appleLink').href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    document.getElementById('appleLink').download = `playa-${member.name.toLowerCase()}.ics`;

    modal.classList.add('active');
}

function formatISO(date) {
    return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
}

document.getElementById('modalClose').addEventListener('click', () => document.getElementById('modal').classList.remove('active'));
document.getElementById('modal').addEventListener('click', e => { if (e.target.id === 'modal') e.target.classList.remove('active'); });

// Calculate stats for each person
function calculateStats() {
    const stats = { pedro: 0, carmina: 0, miguel: 0, rocio: 0 };

    schedule.forEach(entry => {
        const startDate = new Date(entry.start[0], entry.start[1], entry.start[2]);
        const endDate = new Date(entry.end[0], entry.end[1], entry.end[2]);
        const days = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
        stats[entry.person] += days;
    });

    return stats;
}

// Update stats display
function updateStatsDisplay(filter = 'all') {
    const stats = calculateStats();
    const statsBar = document.getElementById('statsBar');

    if (filter === 'all') {
        statsBar.innerHTML = Object.keys(family).map(key =>
            `<span class="stat-item">
                <span class="dot" style="background: ${family[key].color}"></span>
                ${family[key].name}: ${stats[key]} días
            </span>`
        ).join('');
    } else {
        const member = family[filter];
        statsBar.innerHTML = `<span class="stat-item highlight">
            <span class="dot" style="background: ${member.color}"></span>
            ${member.name}: ${stats[filter]} días en 2026
        </span>`;
    }
}

// Get important holidays (filter out vacation days and CTE)
function getImportantHolidays() {
    const importantHolidays = [];
    const assignments = buildDateAssignmentsForHolidays();

    // Filter for important dates (not vacation days or CTE)
    const importantKeys = Object.keys(holidays).filter(key => {
        const name = holidays[key];
        return !name.includes('Vacaciones')
            && !name.includes('Año Nuevo')
            && !name.includes('☀️')
            && !name.includes('CTE')
            && !name.includes('Jueves Santo')
            && !name.includes('Sábado de Gloria')
            && !name.includes('Domingo de Pascua')
            && !name.includes('Día de Muertos')
            && !name.includes('Día de las Madres')
            && !name.includes('Día del Maestro')
            && !name.includes('Fin de Clases')
            && !name.includes('Día de la Virgen')

            ;
    });

    importantKeys.forEach(key => {
        const [month, day] = key.split('-').map(Number);
        const date = new Date(2026, month, day);
        const dateKey = `2026-${month}-${day}`;
        const assignment = assignments[dateKey];

        importantHolidays.push({
            date,
            name: holidays[key],
            person: assignment ? assignment.person : null
        });
    });

    // Sort by date
    importantHolidays.sort((a, b) => a.date - b.date);

    return importantHolidays;
}

function buildDateAssignmentsForHolidays() {
    const assignments = {};
    schedule.forEach((entry, idx) => {
        const startDate = new Date(entry.start[0], entry.start[1], entry.start[2]);
        const endDate = new Date(entry.end[0], entry.end[1], entry.end[2]);
        let current = new Date(startDate);
        while (current <= endDate) {
            const key = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`;
            assignments[key] = { person: entry.person };
            current.setDate(current.getDate() + 1);
        }
    });
    return assignments;
}

// Show holidays modal
function showHolidaysModal() {
    const modal = document.getElementById('holidaysModal');
    const list = document.getElementById('holidaysList');
    const holidays = getImportantHolidays();

    list.innerHTML = holidays.map(h => {
        const dateStr = `${h.date.getDate()} ${monthNames[h.date.getMonth()].slice(0, 3)}`;
        const personTag = h.person
            ? `<span class="person-tag ${h.person}">${family[h.person].name}</span>`
            : '';
        return `<div class="holiday-row">
            <span class="date">${dateStr}</span>
            <span class="name">${h.name}</span>
            ${personTag}
        </div>`;
    }).join('');

    modal.classList.add('active');
}

// Setup holidays modal
document.getElementById('holidaysBtn').addEventListener('click', showHolidaysModal);
document.getElementById('holidaysModalClose').addEventListener('click', () =>
    document.getElementById('holidaysModal').classList.remove('active'));
document.getElementById('holidaysModal').addEventListener('click', e => {
    if (e.target.id === 'holidaysModal') e.target.classList.remove('active');
});

// Init
buildCalendar();
setupTooltip();
setupFilters();
updateStatsDisplay();
