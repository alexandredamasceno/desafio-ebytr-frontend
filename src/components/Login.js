import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    // Função isValid será chamada toda vez que o meu estado for atualizado;
    const isValid = () => {
      const validEmail = email.match(/[a-z]+@[a-z]+.com/g);
      const minLength = 6;
      const validPassword = password.length > minLength;
      if (validEmail && validPassword) {
        setIsDisable(false);
      } else {
        setIsDisable(true);
      }
    };
    isValid();
  }, [email, password, isDisable]);

  const isRedirect = () => {
    // O método JSON. stringify() converte valores em javascript para uma String JSON.
    console.log('entrei aquii', email);
    localStorage.setItem('user', email);
    // history.push('/tarefas');
  };

  return (
    <div>
      <span>
        Login
      </span>
      <form>
        <input
          type="email"
          name="email-input"
          placeholder="Digite aqui o seu email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          type="password"
          placeholder="Digite aqui a sua senha"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="button"
          disabled={ isDisable }
          onClick={ isRedirect }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Login;
