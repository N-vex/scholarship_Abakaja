import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import { Controller, FormProvider } from "react-hook-form"
import { useFormField } from "@/components/ui/use-form-field"

import { cn } from "@/components/ui/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

// Context (no generics)
const FormFieldContext = React.createContext({})
const FormItemContext = React.createContext({})

const FormField = (props) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}



const FormItem = React.forwardRef((props, ref) => {
  const { className, ...rest } = props
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...rest} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef((props, ref) => {
  const { className, ...rest } = props
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...rest}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef((props, ref) => {
  const { error, formDescriptionId, formMessageId, formItemId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef((props, ref) => {
  const { className, ...rest } = props
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...rest}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef((props, ref) => {
  const { className, children, ...rest } = props
  const { error, formMessageId } = useFormField()
  const body = error ? String(error.message) : children

  if (!body) return null

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...rest}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

// exports
export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
