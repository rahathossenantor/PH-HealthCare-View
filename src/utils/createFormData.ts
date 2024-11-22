const createFormData = (values: any) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(values));
    return formData;
};

export default createFormData;
