import React from 'react';
import { Field, Input, Label } from './index.styled';

//COMPONENT FOR A FIELD WITH LABEL AND INPUT CONFIGURED EACH OTHER
const InputField = ({ label, input }) => (
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

export { InputField };