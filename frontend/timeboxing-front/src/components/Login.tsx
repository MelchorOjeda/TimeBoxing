import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/Dashboard'); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#FF5841' }}>
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', backgroundColor: '#FFFFFF' }}>
        <h3 className="text-center mb-4" style={{ color: '#C53678' }}>Iniciar Sesión</h3>
        
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label" style={{ color: 'black' }}>Usuario</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Ingrese su usuario"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label" style={{ color: 'black' }}>Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          <button type="submit" className="btn w-100" style={{ backgroundColor: '#C53678', color: '#FFFFFF' }}>Ingresar</button>
        </form>

        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none" style={{ color: '#C53678' }}>¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
