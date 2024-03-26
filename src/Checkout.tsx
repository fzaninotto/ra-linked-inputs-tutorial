import {
  CreateBase,
  SimpleForm,
  TextInput,
  BooleanInput,
  Toolbar,
  SaveButton,
  FormDataConsumer,
} from "react-admin";
import {
  Box,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Stack,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

export const Checkout = () => (
  <CreateBase resource="orders" redirect={false}>
    <Card>
      <CheckoutHeader />
      <SimpleForm shouldUnregister sx={{ px: 3 }} toolbar={<CustomToolbar />}>
        <TextInput
          fullWidth
          multiline
          minRows={2}
          source="address"
          helperText={false}
        />
        <Stack direction="row" gap={2} width="100%">
          <TextInput fullWidth source="city" helperText={false} />
          <TextInput fullWidth source="zipcode" helperText={false} />
        </Stack>
        <BooleanInput source="giftWrap" helperText={false} />
        <FormDataConsumer>
          {({ formData }) =>
            formData.giftWrap ? (
              <TextInput
                fullWidth
                multiline
                source="giftMessage"
                minRows={2}
                autoFocus
              />
            ) : null
          }
        </FormDataConsumer>
      </SimpleForm>
    </Card>
  </CreateBase>
);

const CheckoutHeader = () => (
  <CardContent>
    <Typography variant="h5" textAlign="center" mt={2} mb={4}>
      Finalize your order
    </Typography>
    <Box>
      <Stepper activeStep={1}>
        <Step>
          <StepLabel>Name</StepLabel>
        </Step>
        <Step>
          <StepLabel>Shipping</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
        <Step>
          <StepLabel>Review</StepLabel>
        </Step>
      </Stepper>
    </Box>
  </CardContent>
);
const CustomToolbar = () => (
  <Toolbar sx={{ flexDirection: "row-reverse" }}>
    <SaveButton
      label="Next"
      icon={<ChevronRight />}
      sx={{
        flexDirection: "row-reverse",
        "& .MuiSvgIcon-root": { mr: 0 },
      }}
    />
  </Toolbar>
);
