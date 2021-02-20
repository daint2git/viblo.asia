import React from 'react';

const App = ({ initialText }) => {
  const [text, setText] = React.useState(initialText);

  const handleTextChange = () => {
    setText('changed in the browser!');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleTextChange}>change text</button>
    </div>
  );
};

export default App;
