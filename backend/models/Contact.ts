import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  phone: string;
  message: string;
  type: "inquiry" | "free_trial";
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
    type: {
      type: String,
      enum: ["inquiry", "free_trial"],
      default: "inquiry",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite on hot reload
const Contact =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;
