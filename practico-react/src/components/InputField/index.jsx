import React from 'react';
import { Field, Input, Label } from './index.styled';

const InputField = ({ label, input }) => {
   return (
      <Field>
         <Label htmlFor={label.htmlFor}>{label.text}</Label>

         <Input
            name={label.htmlFor}
            type={input.type}
            id={label.htmlFor}
            placeholder={input.placeholder}
            required
         />
      </Field>
   );
};

export { InputField };