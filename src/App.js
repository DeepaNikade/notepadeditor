import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import './App.css';

function App() {
  
  
  return (
    <div className="App">
     <Editor
    initialValue="#Hello!"
    previewStyle="vertical"
    height="600px"
    initialEditType="markdown"
    useCommandShortcut={true}
  />
  
    </div>
  );
}

export default App;
