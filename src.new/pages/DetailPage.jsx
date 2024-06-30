import React from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();

  return (
    <div className="detail-page">
      <h1>Detalle de la Tarjeta {id}</h1>
      <p>Aquí puedes mostrar más información sobre la tarjeta seleccionada.</p>
    </div>
  );
}

export default DetailPage;
