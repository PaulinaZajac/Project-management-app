import Sidebar from './components/Sidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject.jsx';
function App() {
  const [projectState, setProjectState] = useState({
    selectedState: undefined,
    projects: [],
  });

  const handleOnSelectedProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedState: id,
      };
    });
  };

  const handleCreateProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedState: null,
      };
    });
  };

  const handleCancelCreateProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedState: undefined,
      };
    });
  };

  const handleAddProject = (projectsData) => {
    setProjectState((prevState) => {
      const newProject = {
        ...projectsData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedState: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedState
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectState.selectedState === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelCreateProject}
      />
    );
  } else if (projectState.selectedState === undefined) {
    content = <NoProjectSelected onCreateProject={handleCreateProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onCreateProject={handleCreateProject}
          projects={projectState.projects}
          onSelected={handleOnSelectedProject}
        />
        {content}
      </main>
    </>
  );
}
export default App;
