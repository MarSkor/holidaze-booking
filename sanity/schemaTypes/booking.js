import { defineType, defineField } from 'sanity'

export const booking = defineType({
  type: "document",
  name: "booking",
  fields: [
    defineField({
      type: "reference",
      name: "accommodation",
      to: [{ type: "accommodation" }],
    }),
    defineField({
      type: "datetime",
      name: "checkIn",
    }),
    defineField({
      type: "datetime",
      name: "checkOut",
    }),
    defineField({
      type: "number",
      name: "total",
    }),
    defineField({
      type: "reference",
      name: "user",
      to: [{ type: "user" }],
    }),
  ],
});

