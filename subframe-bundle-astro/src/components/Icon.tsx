import {
  SubframeProvider,
  Icon as SubframeIcon,
  FeatherAccessibility,
} from "@subframe/core";

const ICON_TYPE: "eager" | "experimental_lazy" = "experimental_lazy";

export const Icon = () => {
  return (
    <SubframeProvider iconType={ICON_TYPE}>
      <SubframeIcon name="FeatherAccessibility" />
      <SubframeIcon icon={<FeatherAccessibility />} />
    </SubframeProvider>
  );
};
