import * as yup from "yup";
const imgFileSchema = yup
  .mixed()
  .required()
  .test({
    message: "you need to provide file",
    test: (file: any) => {
      return file[0] ? true : false;
    },
  });
export const blogPostSchema = yup
  .object({
    blogTitle: yup.string().required(),
    blogContent: yup.string().required(),
    blogImg: imgFileSchema,
  })
  .required();
export const blogUpdateSchema = yup
  .object({
    blogTitle: yup.string().required(),
    blogContent: yup.string().required(),
    blogImg: yup.mixed(),
  })
  .required();
