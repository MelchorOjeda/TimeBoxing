import React from 'react';

const Dashboard: React.FC = () => {
  // Datos de ejemplo para timeboxing
  const tasks = [
    { id: 1, name: 'Revisión de correos', time: '25 min', status: 'En curso' },
    { id: 2, name: 'Escribir informe', time: '45 min', status: 'Pendiente' },
    { id: 3, name: 'Reunión de equipo', time: '30 min', status: 'Completa' },
  ];

  return (
    <div className="container py-4" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <h1 className="text-center mb-4" style={{ color: '#C53678' }}>Dashboard - Timeboxing</h1>
      
      <div className="row justify-content-center">
        {tasks.map(task => (
          <div key={task.id} className="col-md-4 mb-4">
            <div 
              className="card p-3 shadow"
              style={{
                backgroundColor: task.status === 'En curso' ? '#FF5841' : task.status === 'Completa' ? '#C53678' : '#F5F5F5',
                color: task.status === 'Pendiente' ? '#C53678' : '#FFFFFF',
                borderRadius: '12px',
                textAlign: 'center'
              }}
            >
              <h5 className="card-title" style={{ fontWeight: 'bold' }}>{task.name}</h5>
              <p className="card-text">Duración: {task.time}</p>
              <p className="card-text" style={{ fontStyle: 'italic' }}>Estado: {task.status}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button 
          className="btn"
          style={{
            backgroundColor: '#C53678',
            color: '#FFFFFF',
            borderRadius: '8px',
            padding: '10px 20px',
            fontWeight: 'bold'
          }}
        >
          Agregar nueva tarea
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
