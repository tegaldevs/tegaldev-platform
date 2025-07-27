'use client';

import { useState } from 'react';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { Textarea } from '@/app/_components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/_components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/_components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  collaborationType: z
    .string()
    .min(1, { message: 'Please select a collaboration type.' }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
});

export default function CollaborationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      collaborationType: '',
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log(values);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Collaboration request submitted successfully!');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-xl">
          Collaboration Request
        </CardTitle>
        <CardDescription className="text-gray-300">
          Fill out the form below to start your collaboration journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Your Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-blue-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-blue-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="collaborationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    Collaboration Type
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-blue-500">
                        <SelectValue placeholder="Select collaboration type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      <SelectItem
                        value="web-development"
                        className="text-white hover:bg-gray-800"
                      >
                        Web Development
                      </SelectItem>
                      <SelectItem
                        value="mobile-app"
                        className="text-white hover:bg-gray-800"
                      >
                        Mobile App
                      </SelectItem>
                      <SelectItem
                        value="desktop-app"
                        className="text-white hover:bg-gray-800"
                      >
                        Desktop Application
                      </SelectItem>
                      <SelectItem
                        value="api-development"
                        className="text-white hover:bg-gray-800"
                      >
                        API Development
                      </SelectItem>
                      <SelectItem
                        value="database-design"
                        className="text-white hover:bg-gray-800"
                      >
                        Database Design
                      </SelectItem>
                      <SelectItem
                        value="ui-ux-design"
                        className="text-white hover:bg-gray-800"
                      >
                        UI/UX Design
                      </SelectItem>
                      <SelectItem
                        value="devops"
                        className="text-white hover:bg-gray-800"
                      >
                        DevOps & Infrastructure
                      </SelectItem>
                      <SelectItem
                        value="open-source"
                        className="text-white hover:bg-gray-800"
                      >
                        Open Source Project
                      </SelectItem>
                      <SelectItem
                        value="community"
                        className="text-white hover:bg-gray-800"
                      >
                        Community Initiative
                      </SelectItem>
                      <SelectItem
                        value="company"
                        className="text-white hover:bg-gray-800"
                      >
                        Company Project
                      </SelectItem>
                      <SelectItem
                        value="education"
                        className="text-white hover:bg-gray-800"
                      >
                        Educational Content
                      </SelectItem>
                      <SelectItem
                        value="webinar"
                        className="text-white hover:bg-gray-800"
                      >
                        Webinar/Workshop
                      </SelectItem>
                      <SelectItem
                        value="training"
                        className="text-white hover:bg-gray-800"
                      >
                        Training Program
                      </SelectItem>
                      <SelectItem
                        value="events"
                        className="text-white hover:bg-gray-800"
                      >
                        Events & Meetups
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="text-white hover:bg-gray-800"
                      >
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">
                    Project Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your project, goals, and what kind of collaboration you're looking for..."
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-blue-500 resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-md font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Collaboration Request'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
