import css from './App.module.css';
const App = ({ title }) => {
  return (
    <div className={css.container}>
      <h1>{title}</h1>
    </div>
  );
};

export default App;
