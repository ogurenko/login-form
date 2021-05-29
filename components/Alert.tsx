import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export const AlertPop = (props: any) => {
  return <div>
<Alert status="error">
    <AlertIcon />
    <AlertTitle mr={2}>{props.formError}</AlertTitle>
</Alert>

  </div>;
};
