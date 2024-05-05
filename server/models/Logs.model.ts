import mongoose, { Document } from "mongoose";

export interface ILogs extends Document {
  user: mongoose.Types.ObjectId;
  action: string;
  loginTime: Date;
}

const schema = new mongoose.Schema<ILogs>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  action: {
    type: String,
  },
  loginTime: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.logs || mongoose.model<ILogs>("logs", schema);
