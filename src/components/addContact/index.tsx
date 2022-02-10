import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  firstName: string;
  lastName?: string;
  telephone?: number;
  email?: string;
  age?: number;
  avatar?: string;
  website?: string;
  tags?: Array<string>;
}

const schema = yup
  .object({
    firstName: yup.string().required("First Name is required."),
    lastName: yup.string(),
    telephone: yup
      .number()
      .min(1000000000)
      .max(9999999999999)
      .typeError("Please provide valid telephone number"),
    email: yup.string().email(),
    age: yup.number().min(1).max(200),
    avatar: yup.string(),
    website: yup.string().url(),
    tags: yup.string(),
  })
  .required();

type Props = {
  readonly?: boolean;
  addContact: Function;
  editContact: Function;
  viewContactData?: any;
  editContactData?: any;
  isEditMode?: any;
  editIndex?: any;
};

export const AddContact: FC<Props> = ({
  readonly = false,
  addContact,
  editContact,
  viewContactData,
  editContactData,
  isEditMode,
  editIndex,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: viewContactData ? viewContactData : editContactData,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) =>
    isEditMode ? editContact(data, editIndex) : addContact(data);

  return (
    <div className="m-4">
      <form onSubmit={handleSubmit(onSubmit)} className="container">
        <div className="mb-3 form-group">
          <label htmlFor="firstName" className="form-labe">
            First Name
          </label>
          <input
            {...register("firstName", { required: true })}
            disabled={readonly}
            className={`form-control ${
              errors.firstName?.message ? "is-invalid" : ""
            }`}
          />
          <p className="text-danger">{errors.firstName?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            {...register("lastName", { required: true })}
            disabled={readonly}
            className={`form-control ${
              errors.lastName?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.lastName?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="telephone" className="form-label">
            telephone
          </label>
          <input
            {...register("telephone", { required: true })}
            disabled={readonly}
            className={`form-control ${
              errors.telephone?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.telephone?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            disabled={readonly}
            className={`form-control ${
              errors.email?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { required: true })}
            disabled={readonly}
            className={`form-control ${
              errors.age?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.age?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="avatar" className="form-label">
            Avatar
          </label>
          <input
            {...register("avatar", { required: true })}
            disabled={readonly}
            className={`form-control ${
              errors.avatar?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.avatar?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="website" className="form-label">
            Website
          </label>
          <input
            {...register("website", { required: true })}
            disabled={readonly}
            className={`form-control ${
              errors.website?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.website?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            {...register("tags", { required: true })}
            disabled={readonly}
            className={`form-control ${
              errors.tags && errors.tags.length > 0 ? "is-invalid" : ""
            }`}
          />
          {/* <p>{errors.tags}</p> */}
        </div>

        <div className="d-flex justify-content-center mt-4">
          {!isEditMode ? (
            !readonly && (
              <input
                type="submit"
                disabled={readonly}
                className="btn btn-outline-primary"
                value={`+ Add Contact`}
                style={{ justifySelf: "center" }}
              />
            )
          ) : (
            <input
              type="submit"
              className="btn btn-outline-primary"
              value={`Update Contact`}
            />
          )}
        </div>
      </form>
    </div>
  );
};
