"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

import Button from "@/components/Buttons/Button";
import GoBackBtn from "@/components/Buttons/GoBackBtn";
import FieldLabel from "@/components/FormElements/FieldLabel";
import Input from "@/components/FormElements/Input";
import Select from "@/components/FormElements/Select";
import TextArea from "@/components/FormElements/TextArea";
import { CATEGORY_OPTIONS } from "@/data/menuOptions";
import useStore from "@/lib/store";
import iconNewFeedback from "@/public/img/shared/icon-new-feedback.svg";
import { type Category, type ProductRequest } from "@/types";

interface Inputs {
  title: string;
  category: Category;
  detail: string;
}

export default function NewFeedbackPage(): JSX.Element {
  const router = useRouter();

  const [productRequests, setProductRequests] = useStore((state) => [
    state.productRequests,
    state.setProductRequests,
  ]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: "",
      category: "feature",
      detail: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const newProductRequest: ProductRequest = {
      id: uuid() as unknown as number,
      title: data.title,
      status: "suggestion",
      category: data.category,
      upvotes: 0,
      description: data.detail,
      comments: [],
    };

    setProductRequests([...productRequests, newProductRequest]);

    router.push("/");
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
          src={iconNewFeedback}
          alt="icon add"
          className="-mt-5"
          width={40}
          height={40}
        />

        <h1 className="mb-10 mt-5 text-lg font-bold text-slate-600 md:text-2xl">
          Create New Feedback
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
          render={({ field: { onChange, ...restProps } }) => (
            <Select
              onChange={onChange}
              options={CATEGORY_OPTIONS}
              {...restProps}
              className="mb-6"
            />
          )}
        />

        <FieldLabel
          title="Feedback Detail"
          description="Include any specific comments on what should be improved, added, etc."
          className="mb-4"
        />

        <Controller
          name="detail"
          control={control}
          rules={{
            required: "Can't be empty",
          }}
          render={({ field: { onChange, value, onBlur } }) => (
            <TextArea
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              errorMessage={errors.detail?.message}
              maxLength={200}
              className="mb-6"
            />
          )}
        />

        <div className="flex flex-col-reverse gap-4 md:float-right md:flex-row">
          <Button
            colour="slate"
            type="button"
            label="Cancel"
            onClick={() => {
              router.back();
            }}
          />
          <Button
            colour="fuchsia"
            type="submit"
            label="Add Feedback"
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
}
