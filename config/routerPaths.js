export const BASE_URL = "/v1";
export const USERS_URL=BASE_URL+"/users";
export const USER_DETAILS_URL=USERS_URL+"/:username";
export const USER_RESUMES_URL=USER_DETAILS_URL+"/resumes";
export const USER_RESUME_DETAILS_URL=USER_RESUMES_URL+"/:resumeId";