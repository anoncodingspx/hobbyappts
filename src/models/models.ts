import { Types } from "mongoose";

export interface Hobby {

    // id: number,
    // name: string,
    // isDone: boolean
  id: Types.ObjectId | any;
  hobbyname: string;
  inside: boolean;
  otherhumansneeded: boolean;
  outside: boolean;
  toolsneeded: boolean;
  tags: string[];
}
