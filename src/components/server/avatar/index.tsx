import { getProfile } from "@/app/actions/users/get-profile";
import AvatarProfile from "../../client/avatar";

export default async function Avatar() {
  const { firstName, lastName } = await getProfile();

  return <AvatarProfile name={firstName} surname={lastName} />;
}
