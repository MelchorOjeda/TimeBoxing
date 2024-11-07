import React from 'react';

const Dashboard: React.FC = () => {

  const tasks = [
    {
      id: 1,
      name: 'Revisión de correos',
      time: '25 min',
      status: 'En curso',
      color: '#FF5841',
      activities: [
        { id: 1, name: 'Leer correos nuevos', time: '10:00 - 10:10' },
        { id: 2, name: 'Responder correos importantes', time: '10:10 - 10:25' },
      ],
    },
    {
      id: 2,
      name: 'Escribir informe',
      time: '45 min',
      status: 'Pendiente',
      color: '#FF5841',
      activities: [
        { id: 1, name: 'Esquema del informe', time: '11:00 - 11:10' },
        { id: 2, name: 'Escribir introducción', time: '11:10 - 11:30' },
        { id: 3, name: 'Revisión', time: '11:30 - 11:45' },
      ],
    },
    {
      id: 3,
      name: 'Reunión de equipo',
      time: '30 min',
      status: 'Completa',
      color: '#FF5841',
      activities: [
        { id: 1, name: 'Discutir proyectos', time: '14:00 - 14:20' },
        { id: 2, name: 'Asignación de tareas', time: '14:20 - 14:30' },
      ],
    },
  ];

  const extraTasks = [
    'Sacar la basura',
    'Lavar los platos',
    'Doblar la ropa',
    'Regar las plantas',
  ];

  return (
    <div className="container-fluid" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', padding: 0 }}>
 
      <header className="text-center py-3" style={{ backgroundColor: '#C53678', color: '#FFFFFF' }}>
        <h1>Timeboxing</h1>
      </header>

      <div className="row m-0">

        <div className="col-md-4 p-3" style={{ borderRight: '1px solid #EFEFEF', backgroundColor: '#FFFFFF' }}>
          <h4 style={{ color: '#C53678' }}>Tareas importantes</h4>
          {tasks.map(task => (
            <div key={task.id} className="card mb-3" style={{
              backgroundColor: task.color,
              color: '#FFFFFF',
              borderRadius: '10px',
              padding: '15px',
              border: '1px solid #EFEFEF',
            }}>
              <div className="card-body">
                <h5 className="card-title">{task.name}</h5>
                <p className="card-text">Duración: {task.time}</p>
                <p className="card-text" style={{ fontStyle: 'italic' }}>Estado: {task.status}</p>
              </div>
            </div>
          ))}

          <div className="extra-tasks mt-4">
            <h5 style={{ color: '#C53678' }}>Tareas Extras</h5>
            <div className="d-flex flex-wrap">
              {extraTasks.map((extraTask, index) => (
                <span key={index} style={{
                  backgroundColor: '#9B59B6',
                  color: '#FFFFFF',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  fontSize: '0.8rem',
                  margin: '5px 5px 0 0',
                }}>
                  {extraTask}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8 p-3" style={{ backgroundColor: '#F8F9FA' }}>
          <h4 style={{ color: '#C53678' }}>Asignación de actividades (24 Horas)</h4>
          <div className="timeline">
            {[...Array(24)].map((_, hour) => (
              <div key={hour} className="timeline-hour" style={{ padding: '10px 0', borderBottom: '1px solid #C53678' }}>
                <strong>{hour}:00</strong>
                <div>
                  {tasks.flatMap(task => task.activities)
                    .filter(activity => activity.time.startsWith(`${hour < 10 ? '0' : ''}${hour}:`))
                    .map(activity => (
                      <div key={activity.id} style={{ color: '#000000', marginTop: '5px', fontSize: '0.9rem' }}>
                        {activity.time} - {activity.name}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
