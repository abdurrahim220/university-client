import {
  useForm,
  SubmitHandler,
  FieldValues,
  FormProvider,
} from "react-hook-form";
import { ReactNode } from "react";

interface PHFormProps<T extends FieldValues> {
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
}

const PHForm = <T extends FieldValues>({
  onSubmit,
  children,
}: PHFormProps<T>) => {
  const methods = useForm<T>();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>;
    </FormProvider>
  );
};

export default PHForm;
