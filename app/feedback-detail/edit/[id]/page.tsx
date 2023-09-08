"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/Buttons/Button";
import GoBackBtn from "@/components/Buttons/GoBackBtn";
import FieldLabel from "@/components/FormElements/FieldLabel";
import Input from "@/components/FormElements/Input";
import Select from "@/components/FormElements/Select";
import TextArea from "@/components/FormElements/TextArea";
import { CATEGORY_OPTIONS, STATUS_OPTIONS } from "@/data/menuOptions";
import useStore from "@/lib/store";
import { getOptionIndexByValue } from "@/lib/utils";
import iconEditFeedback from "@/public/img/shared/icon-edit-feedback.svg";
import { type Category, type Status } from "@/types";

interface PageProps {
  params: { id: string };
}

interface Inputs {
  title: string;
  status: Status;
  category: Category;
  description: string;
}

export default function EditFeedbackPage({
  params: { id },
}: PageProps): JSX.Element {
  const [productRequests, setProductRequests] = useStore((state) => [
    state.productRequests,
    state.setProductRequests,
  ]);

  const router = useRouter();

  const feedback = productRequests.find((req) => req.id.toString() === id);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: feedback?.title,
      category: feedback?.category,
      status: feedback?.status,
      description: feedback?.description,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const productReqId = productRequests.findIndex(
      (req) => req.id.toString() === id,
    );

    const updatedFeedback = {
      ...productRequests[productReqId],
      title: data.title,
      category: data.category,
      status: data.status,
      description: data.description,
    };

    const updatedProductRequests = [...productRequests];
    updatedProductRequests[productReqId] = updatedFeedback;

    setProductRequests(updatedProductRequests);

    router.back();
  };

  const onDelete = (): void => {
    const productReqIndex = productRequests.findIndex(
      (req) => req.id.toString() === id,
    );

    if (productReqIndex !== -1) {
      const updatedProductRequests = [
        ...productRequests.slice(0, productReqIndex),
        ...productRequests.slice(productReqIndex + 1),
      ];

      setProductRequests(updatedProductRequests);

      router.push("/");
    }
  };

  return (
    <div className="m-6 flex flex-col gap-6 md:mx-auto md:max-w-[730px]">
      <div className="mb-10 flex h-10 items-center">
        <GoBackBtn colour="blue" />
      </div>

      <form
        className="rounded-lg bg-white px-6 pb-10 md:px-[42px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Image
          src={iconEditFeedback}
          alt="icon edit"
          className="-mt-5"
          width={40}
          height={40}
        />

        <h1 className="mb-10 mt-5 text-lg font-bold text-slate-600 md:text-2xl">
          Editing `{feedback?.title}`
        </h1>

        <FieldLabel
          title="Feedback Title"
          description="Add a short, descriptive headline"
          className="mb-4"
        />
        <Controller
          name="title"
          control={control}
          rules={{
            required: "Can't be empty",
          }}
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              errorMessage={errors.title?.message}
              className="mb-6"
              maxLength={50}
            />
          )}
        />

        <FieldLabel
          title="Category"
          description="Choose a category for your feedback"
          className="mb-4"
        />
        <Controller
          name="category"
          control={control}
          render={({ field: { onChange, value, ...restProps } }) => (
            <Select
              onChange={onChange}
              options={CATEGORY_OPTIONS}
              {...restProps}
              className="mb-6"
              defaultOptionIndex={getOptionIndexByValue(
                CATEGORY_OPTIONS,
                feedback?.category,
              )}
            />
          )}
        />

        <FieldLabel
          title="Update Status"
          description="Change feature state"
          className="mb-4"
        />
        <Controller
          name="status"
          control={control}
          render={({ field: { onChange, value, ...restProps } }) => (
            <Select
              onChange={onChange}
              options={STATUS_OPTIONS}
              {...restProps}
              className="mb-6"
              defaultOptionIndex={getOptionIndexByValue(
                STATUS_OPTIONS,
                feedback?.status,
              )}
            />
          )}
        />

        <FieldLabel
          title="Feedback Detail"
          description="Include any specific comments on what should be improved, added, etc."
          className="mb-4"
        />
        <Controller
          name="description"
          control={control}
          rules={{
            required: "Can't be empty",
          }}
          render={({ field: { onChange, value, onBlur } }) => (
            <TextArea
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              errorMessage={errors.description?.message}
              maxLength={200}
              className="mb-6"
            />
          )}
        />

        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <Button
            colour="red"
            type="button"
            label="Delete"
            onClick={onDelete}
          />

          <Button
            colour="slate"
            type="button"
            label="Cancel"
            onClick={() => {
              router.back();
            }}
            className="md:ml-auto"
          />
          <Button colour="fuchsia" type="submit" label="Save Changes" />
        </div>
      </form>
    </div>
  );
}
