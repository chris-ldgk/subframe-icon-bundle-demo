import {
  FeatherAccessibility,
  Icon as SubframeIcon,
  SubframeProvider,
} from "@subframe/core";

const ICON_TYPE: "eager" | "experimental_lazy" = "eager";

export const Icon = () => {
  return (
    <SubframeProvider iconType={ICON_TYPE}>
      <SubframeIcon name="FeatherAccessibility" />
      <SubframeIcon icon={<FeatherAccessibility />} />
    </SubframeProvider>
  );
};
