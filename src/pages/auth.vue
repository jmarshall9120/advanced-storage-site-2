<!-- <script setup>
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'

</script> -->

<template>
  <v-container>
    <v-dialog v-model="showConfirmSignup">
      <v-card>
        <v-card-title>Confirm Signup</v-card-title>
        <v-card-subtitle
          >An email with a confirmation code has been sent to
          <b>{{ email }}</b></v-card-subtitle
        >
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="confirmationCode"
                label="Confirmation Code"
                :error-messages="confirmationCodeMessage"
                :error="isErrorConfirmationCode"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn @click.stop="doConfirmSignUp">Confirm</v-btn>
          <v-btn @click.stop="doResendSignUpConfirmation">Resend Code</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>{{
            isSignUp ? "Create Account" : "Sign In"
          }}</v-card-title>
          <v-container
            ><v-row
              ><v-col>
                <v-text-field
                  v-model="email"
                  prepend-icon="mdi-mail"
                  label="email"
                  :error-messages="email_message"
                  :error="isErrorEmail"
                >
                </v-text-field> </v-col
            ></v-row>
            <v-row
              ><v-col>
                <v-text-field
                  v-model="password"
                  prepend-icon="mdi-key"
                  label="password"
                  :append-inner-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show_password ? 'text' : 'password'"
                  :error-messages="password_message"
                  :error="isErrorPassword"
                  @click:append-inner="show_password = !show_password"
                >
                </v-text-field> </v-col
            ></v-row>
            <v-row v-show="isSignUp"
              ><v-col
                ><v-text-field
                  v-model="password2"
                  label="retype password"
                  prepend-icon="mdi-key"
                  :append-inner-icon="
                    show_password2 ? 'mdi-eye' : 'mdi-eye-off'
                  "
                  :type="show_password2 ? 'text' : 'password'"
                  :error-messages="password2_message"
                  :error="isErrorPassword2"
                  @click:append-inner="show_password2 = !show_password2"
                ></v-text-field></v-col
            ></v-row>
            <v-row
              ><v-col
                ><div class="text-error">
                  {{ form_message }}
                </div></v-col
              ></v-row
            >
          </v-container>
          <v-card-actions>
            <v-btn @click.stop="flow_sign_in(next_flow_step)">{{
              isSignUp ? "Create Account" : "Sign In"
            }}</v-btn>
            <v-btn @click.stop="toggleSignUpSignIn">{{
              isSignUp ? "Cancel" : "Create Account"
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
// import { Auth, Hub } from 'aws-amplify'
import {
  signUp,
  signIn,
  confirmSignUp,
  resendSignUpCode
} from "aws-amplify/auth";
import { useAuthStore } from "~/stores/auth";

const flow_states = {
  USER_SIGN_IN: "USER_SIGN_IN",
  USER_SIGN_UP: "USER_SIGN_UP",
  CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED:
    "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED",
  CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE:
    "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE",
  CONFIRM_SIGN_IN_WITH_TOTP_CODE: "CONFIRM_SIGN_IN_WITH_TOTP_CODE",
  CONTINUE_SIGN_IN_WITH_TOTP_SETUP: "CONTINUE_SIGN_IN_WITH_TOTP_SETUP",
  CONFIRM_SIGN_IN_WITH_SMS_CODE: "CONFIRM_SIGN_IN_WITH_SMS_CODE",
  CONTINUE_SIGN_IN_WITH_MFA_SELECTION: "CONTINUE_SIGN_IN_WITH_MFA_SELECTION",
  CONFIRM_SIGN_UP: "CONFIRM_SIGN_UP",
  RESET_PASSWORD: "RESET_PASSWORD",
  DONE: "DONE"
};

// global
const title = ref(""),
  next_flow_step = ref(flow_states.USER_SIGN_IN),
  auth = useAuthStore();

// Sign In
const email = ref(""),
  password = ref(""),
  show_password = ref(false),
  email_message = ref(""),
  password_message = ref(""),
  form_message = ref(""),
  isErrorEmail = ref(false),
  isErrorPassword = ref(false);

const isValidEmail = computed(() => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ? true
    : false;
});

const isValidPassword = computed(() => {
  return true;
});

function toggleSignUpSignIn() {
  if (isSignUp.value) {
    next_flow_step.value = flow_states.USER_SIGN_IN;
    isSignUp.value = false;
  } else {
    next_flow_step.value = flow_states.USER_SIGN_UP;
    isSignUp.value = true;
  }
}

function resetMessages() {
  form_message.value = email_message.value = password_message.value = password2_message.value = confirmationCodeMessage.value =
    "";
  isErrorEmail.value = isErrorPassword.value = isErrorPassword2.value = isErrorConfirmationCode.value = false;
}

function validateEmail() {
  if (!isValidEmail.value) {
    email_message.value = "Please enter a valid email";
    isErrorEmail.value = true;
  }
}

// Authentication flow
async function doSignIn() {
  resetMessages();
  validateEmail();
  if (isValidEmail.value && isValidPassword.value) {
    try {
      const { isSignedIn, nextStep } = await signIn({
        username: email.value,
        password: password.value
      });
      console.log("User sign in succeeded");
      console.log(nextStep.signInStep);
      await flow_sign_in(nextStep.signInStep);
      // await auth.setUser();
    } catch (err) {
      console.log("User sign in failed");
      console.log(err);
      if (err.name === "UserNotConfirmedException") {
        await doResendSignUpConfirmation();
        showConfirmSignup.value = true;
      } else {
        form_message.value = err;
      }
    }
  } else {
    form_message.value = "Please fix errors in form above.";
  }
}

// Sign Up
const isSignUp = ref(false),
  password2 = ref(""),
  show_password2 = ref(false),
  password2_message = ref(""),
  isErrorPassword2 = ref(false),
  showConfirmSignup = ref(false),
  pendingSignup = ref(),
  confirmationCode = ref(""),
  confirmationCodeMessage = ref(""),
  isErrorConfirmationCode = ref(false);

const isValidPassword2 = computed(() => {
  return password.value === password2.value;
});

function validatePassword2() {
  if (!isValidPassword2.value) {
    password2_message.value = "Passwords do not match";
    isErrorPassword2.value = true;
  }
}

async function validateSignupResponse(response) {
  pendingSignup.value = response;
  if (!response.userConfirmed) {
    showConfirmSignup.value = true;
  }
}

async function doSignUp() {
  resetMessages();
  validateEmail();
  validatePassword2();
  if (isValidEmail.value && isValidPassword.value && isErrorPassword2) {
    // Attempt sign up
    try {
      const response = await signUp({
        username: email.value,
        password: password.value,
        autoSignIn: {
          enabled: true
        },
        options: {
          userAttributes: {
            email: email.value
          }
        }
      });
      console.log(response);
      validateSignupResponse(response);
    } catch (error) {
      console.log(error);
      form_message.value = error.message;
    }
  } else {
    form_message.value = "Please fix errors in fields";
  }
}

async function doResendSignUpConfirmation() {
  try {
    await resendSignUpCode({ username: email.value });
    console.log("code resent successfully");
  } catch (err) {
    console.log("error resending code: ", err);
  }
}

async function doConfirmSignUp() {
  // console.log("function called");
  resetMessages();
  try {
    // just responds with the word SUCCESS
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username: email.value,
      confirmationCode: confirmationCode.value
    });
    // await auth.setUser();
    showConfirmSignup.value = false;
    await flow_sign_in(nextStep.signUpStep);
  } catch (err) {
    console.log("error confirming sign up", err);
    if (err.name === "CodeMismatchException") {
    }
    console.log(err.message);
    confirmationCodeMessage.value = err.message;
    isErrorConfirmationCode.value = false;
  }
}

// function listenToAutoSignInEvent() {
//   Hub.listen('auth', ({ payload }) => {
//     const { event } = payload
//     if (event === 'autoSignIn') {
//       const user = payload.data
//       console.log('User auto sign in detected')
//       console.log(user)
//       // assign user
//     } else if (event === 'autoSignIn_failure') {
//       // redirect to sign in page
//     }
//   })
// }

async function flow_sign_in(next_step) {
  switch (next_step) {
    case "USER_SIGN_IN":
      console.log("flow state USER_SIGN_IN");
      await doSignIn();
      break;
    case "USER_SIGN_UP":
      console.log("flow state USER_SIGN_UP");
      await doSignUp();
      break;
    case "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED":
      break;
    case "CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE":
      break;
    case "CONFIRM_SIGN_IN_WITH_TOTP_CODE":
      break;
    case "CONTINUE_SIGN_IN_WITH_TOTP_SETUP":
      break;
    case "CONFIRM_SIGN_IN_WITH_SMS_CODE":
      break;
    case "CONTINUE_SIGN_IN_WITH_MFA_SELECTION":
      break;
    case "CONFIRM_SIGN_UP":
      console.log("flow state CONFIRM SIGN UP");
      showConfirmSignup.value = true;
      // await doConfirmSignUp();
      break;
    case "RESET_PASSWORD":
      break;
    case "DONE":
      showConfirmSignup.value = false;
      await auth.setUser();
      break;
    default:
      throw new Error(
        `auth flow returned a next step that was not recognized: ${next_step}`
      );
  }
}
</script>
