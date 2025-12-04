import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  birthPlace: z.string().trim().min(2, "Birth place must be at least 2 characters").max(200, "Birth place must be less than 200 characters"),
  mobileNo: z.string().trim().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface UserDetailsFormProps {
  onSubmit: (data: FormValues) => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

const UserDetailsForm = ({ onSubmit, onBack, isSubmitting = false }: UserDetailsFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      birthPlace: "",
      mobileNo: "",
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthPlace"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Birth Place</FormLabel>
              <FormControl>
                <Input placeholder="City, State, Country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobileNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input placeholder="10-digit mobile number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4 justify-between pt-4">
          <Button onClick={onBack} variant="outline" type="button" disabled={isSubmitting}>
            Back
          </Button>
          <Button type="submit" size="lg" className="cosmic-glow" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Proceed to Payment"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserDetailsForm;
