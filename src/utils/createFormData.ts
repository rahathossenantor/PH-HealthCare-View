const createFormData = (values: any) => {
    const file = values["file"];
    delete values["file"];

    const formData = new FormData();
    formData.append("data", JSON.stringify(values));
    formData.append("file", file as Blob);

    return formData;
};

export default createFormData;
