import Sidebar from './components/Sidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import { useState } from 'react';
function App() {
  const [projectState, setProjectState] = useState({
    selectedState: undefined,
    projects: [],
  });

  const handleCreateProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedState: null,
      };
    });
  };

  let content;

  if (projectState.selectedState === null) {
    content = <NewProject />;
  } else if (projectState.selectedState === undefined) {
    content = <NoProjectSelected onCreateProject={handleCreateProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onCreateProject={handleCreateProject} />
        {content}
      </main>
    </>
  );
}

export default App;
