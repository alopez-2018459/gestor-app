"use strict";

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IRoom {
  number: string;
  type: string;
  description: string;
  price: number;
  rating: number;
  shortescription: string;
  location: string;
  hotel: string;
  available: boolean;
  createdAt: Date;
}

export interface IRoomModel extends IRoom, Document {}

const roomSchema = new Schema(
  {
    number: {
      type: String,
      required: [true, "Room number is required."],
    },
    type: {
      type: String,
      required: [true, "Room type is required."],
    },
    shortDescription: {
      type: String,
      required: [true, "Room short description is required."],
      maxLength: 50,
    },

    description: {
      type: String,
      required: [true, "Room description is required."],
      maxLength: 200,
    },
    price: {
      type: Number,
      required: [true, "Room price is required."],
    },
    rating: {
      type: Number,
      required: [true, "Room rating is required."],
      min: 1,
      max: 5,
    },
    location: {
      type: String,
      required: [true, "Room location is required."],
    },
    hotel: {
      type: String,
      required: [true, "Room hotel is required."],
    },
    available: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

const Room = (models.Room ||
  mongoose.model<IRoomModel>("Room", roomSchema)) as typeof models.Room &
  (new (args: any) => IRoomModel);

export default Room;
