import { generatePath } from "react-router-dom";

export const URL_ROOT = "/";
export const URL_ADD = "/add";
export const URL_FAVE = "/favorites";
export const URL_R = "/r";
export const URL_RID = "/r/:id";
export const URL_USER = "/user/:username";
export const URL_EDIT = "/edit/:id";
export const URL_POST = "/post/:id";

export const TOPIC = {
  route: URL_RID,
  generate(id) {
    return generatePath(this.route, { id });
  },
};
export const EDIT = {
  route: URL_EDIT,
  generate(id) {
    return generatePath(this.route, { id });
  },
};
export const POST = {
  route: URL_POST,
  generate(id) {
    return generatePath(this.route, { id });
  },
};
export const USERNAME = {
  route: URL_USER,
  generate(id) {
    return generatePath(this.route, { id });
  },
};
