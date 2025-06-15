import {
  Button,
  Field,
  Fieldset,
  Input,
  NativeSelect,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { DIFFICULTY } from "./CardItem";

type DifficultyType = keyof typeof DIFFICULTY;

type FormData = {
  question: string;
  answer: string;
  difficulty: DifficultyType | "Select a difficulty.";
};

const initialState: FormData = {
  question: "",
  answer: "",
  difficulty: "easy",
};

type AddCardFormTypes = {
  onSubmitForm: (fd: FormData) => void;
};

const AddCardForm = ({ onSubmitForm }: AddCardFormTypes) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value as string }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!formData.question.trim()) errs.question = "Question is required.";
    if (!formData.answer.trim()) errs.answer = "Answer is required.";
    if (!formData.difficulty) errs.difficulty = "Select a difficulty.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // ✅ Submit logic here — e.g. send to API or update local state
    console.log("Submitted:", formData);
    onSubmitForm(formData);

    setFormData(initialState); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset.Root size="lg" maxW="md">
        <Fieldset.Content as={Stack}>
          <Field.Root>
            <Field.Label>Question</Field.Label>
            <Input
              name="question"
              value={formData.question}
              onChange={handleChange}
              placeholder="Enter the question"
            />
            {errors.question && (
              <Text fontSize="sm" color="red.500">
                {errors.question}
              </Text>
            )}
          </Field.Root>

          <Field.Root>
            <Field.Label>Answer</Field.Label>
            <Input
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              placeholder="Enter the answer"
            />
            {errors.answer && (
              <Text fontSize="sm" color="red.500">
                {errors.answer}
              </Text>
            )}
          </Field.Root>

          <Field.Root>
            <Field.Label>Difficulty</Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
              >
                {Object.entries(DIFFICULTY).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.label}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
            {errors.difficulty && (
              <Text fontSize="sm" color="red.500">
                {errors.difficulty}
              </Text>
            )}
          </Field.Root>
        </Fieldset.Content>

        <Button type="submit" mt="6" alignSelf="flex-start" colorScheme="blue">
          Create
        </Button>
      </Fieldset.Root>
    </form>
  );
};

export default AddCardForm;
