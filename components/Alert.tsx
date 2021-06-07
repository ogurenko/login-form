import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { FieldErrors } from "react-hook-form";



export const AlertPop = (props: FieldErrors) => {
  return <div>
<Alert status="error">
    <AlertIcon />
    <AlertTitle mr={2}>{props.formError}</AlertTitle>
</Alert>

  </div>;
};
