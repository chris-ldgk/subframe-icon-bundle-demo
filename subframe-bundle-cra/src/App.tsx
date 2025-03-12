import { Icon, FeatherAccessibility } from "@subframe/core";

function App() {
  return (
    <>
      {/* Lazy/eager loaded icon (defined by SubfameProvider) */}
      <Icon name="FeatherAccessibility" />
      {/* Manually imported icon */}
      <Icon icon={<FeatherAccessibility />} />
    </>
  );
}

export default App;
