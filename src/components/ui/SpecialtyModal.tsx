import { Button, Grid } from "@mui/material";
import FormWrapper from "../sections/FormWrapper";
import InputWrapper from "../sections/InputWrapper";
import Modal from "./Modal";
import FileUploaderWrapper from "../sections/FileUploaderWrapper";
import { FieldValues } from "react-hook-form";
import createFormData from "@/utils/createFormData";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesAPI";
import { toast } from "sonner";

type TSpecialtyModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({
    open,
    setOpen,
}: TSpecialtyModalProps) => {
    const [createSpecialty] = useCreateSpecialtyMutation();

    const handleSubmit = async (values: FieldValues) => {
        const formData = createFormData(values);

        try {
            const res = await createSpecialty(formData).unwrap();

            if (res?.id) {
                toast.success("Specialty created successfully!");
                setOpen(false);
            };
        } catch (err: any) {
            console.error(err.message);
        };
    };

    return (
        <Modal
            title="Create a new specialty"
            open={open}
            setOpen={setOpen}
        >
            <FormWrapper
                onSubmit={handleSubmit}
            >
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <InputWrapper label="Title" name="title" />
                    </Grid>
                    <Grid item md={6}>
                        <FileUploaderWrapper label="" name="file" />
                    </Grid>
                </Grid>
                <Button sx={{ mt: "16px" }} type="submit">Create</Button>
            </FormWrapper>
        </Modal>
    );
};

export default SpecialtyModal;
