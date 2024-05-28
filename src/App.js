import { Checklist, ChecklistProvider } from "./Checklist";

function App() {
  return (
<>
<ChecklistProvider>
    <div>
      <Checklist/>
    </div>
</ChecklistProvider>
</>
  );
}

export default App;
