import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema(
  {
    _id: String, // Use the ".id" property from the API response as the MongoDB document ID
    address: String,
    "bytes-in": Number, // Convert "bytes-in" to a number
    "bytes-out": Number, // Convert "bytes-out" to a number
    "idle-time": String,
    "keepalive-timeout": String,
    "login-by": String,
    "mac-address": String,
    "packets-in": Number, // Convert "packets-in" to a number
    "packets-out": Number, // Convert "packets-out" to a number
    radius: Boolean, // Convert "radius" string to a boolean
    server: String,
    uptime: String,
    user: String,
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);

export default Client;
