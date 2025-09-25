import { uhcMembers, rcMembers, webopsMembers } from "./council-type";
import event from "./events-type";
import meetup from "./meetup-type";

export const schema = {
  types: [uhcMembers, rcMembers, webopsMembers, event, meetup],
}
