import { UserStatus } from "./userStatus";

export interface User {
    id: number;
    firstname: string;
    status: UserStatus;
}
