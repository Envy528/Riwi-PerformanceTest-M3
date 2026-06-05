export default function ReservationCard(reservation) {
  const { workspace, date, startHour, endHour, reason, status } = reservation;
  return `
    <article
      class="rounded"
    >
      <h3 class="font-bold text-lg">
        ${workspace}
      </h3>

      <div class="">

        <p>
          Fecha:
          ${date}
        </p>

        <p>
          Horario:
          ${startHour}
          -
          ${endHour}
        </p>

        <p>
          Motivo:
          ${reason}
        </p>

        <p>
          Estado:
          <span class="">
            ${status}
          </span>
        </p>

      </div>
      <button id="editBtn" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition">Editar Reserva</button>
      <button id="delBtn" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition">Borrar Reserva</button>
    </article>
  `;
}
