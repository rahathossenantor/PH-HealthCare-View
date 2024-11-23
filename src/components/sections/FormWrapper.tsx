import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
    children: React.ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
};

const FormWrapper = ({ children, onSubmit }: TFormProps) => {
    const methods = useForm();
    const { handleSubmit, reset } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit((values) => {
                onSubmit(values);
                reset();
            })}>
                {children}
            </form>
        </FormProvider>
    );
};

export default FormWrapper;
