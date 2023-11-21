import { s as superValidate } from "../../../chunks/superValidate.js";
import { z } from "zod";
import { e as error, f as fail, r as redirect } from "../../../chunks/index2.js";
import { h as insertProfile, e as insertList } from "../../../chunks/queries.js";
const createProfileSchema = z.object({
  username: z.string({ required_error: "Username is required" }).refine((data) => /^[a-z]+$/.test(data), {
    message: "Username must be all lowercase"
  }).refine((data) => !/\s/.test(data), {
    message: "Username must not contain spaces"
  })
});
async function load({ locals: { getSession } }) {
  const session = await getSession();
  if (!session) {
    throw error(401, "Must be logged in to update profile");
  }
  try {
    const createProfileForm = await superValidate(createProfileSchema);
    return {
      createProfileForm
    };
  } catch (e) {
    return {
      error: e
    };
  }
}
const actions = {
  createProfile: async ({ request, locals: { getSession } }) => {
    const updateProfileForm = await superValidate(request, createProfileSchema);
    console.log("POST", updateProfileForm);
    if (!updateProfileForm.valid) {
      return fail(400, { updateProfileForm });
    }
    const session = await getSession();
    if (!session) {
      throw error(401, "Must be logged in to update profile");
    }
    const newProfile = {
      user_id: session.user.id,
      username: updateProfileForm.data.username,
      email: session.user.email
    };
    const insertedProfile = await insertProfile(newProfile);
    await insertList({
      list_name: "Inbox",
      owner_id: insertedProfile?.[0].id
    });
    throw redirect(303, "/dashboard");
  }
};
export {
  actions,
  load
};
